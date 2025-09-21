// src/pages/Training.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { EXERCISES } from "../data/exercises";
import { courses } from "../data/courses";

export default function Training() {
  const { courseId, topicIndex } = useParams();
  const topicKey = `${courseId}-${topicIndex}`;
  const questions = EXERCISES[topicKey];

  const course = courses.find((c) => c.id === parseInt(courseId));
  const topicName = course ? course.topics[topicIndex]?.name : "Topik";

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState({ correct: 0, wrong: 0, notAnswered: 0 });

  if (!questions) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 font-semibold">
          Soal untuk topik <b>{topicName}</b> belum tersedia.
        </p>
      </div>
    );
  }

  const handleOptionChange = (qId, optionIndex) => {
    setAnswers({
      ...answers,
      [qId]: optionIndex,
    });
  };

  const handleSubmit = () => {
    let correct = 0;
    let wrong = 0;
    let notAnswered = 0;

    questions.forEach((q) => {
      if (answers[q.id] === undefined) {
        notAnswered++;
      } else if (answers[q.id] === q.correct) {
        correct++;
      } else {
        wrong++;
      }
    });

    const finalScore = Math.round((correct / questions.length) * 100);
    setScore(finalScore);
    setResult({ correct, wrong, notAnswered });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center w-full bg-gray-50 p-6">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
          <h1 className="text-2xl font-bold mb-6">Hasil Kuis</h1>
          <p className="text-lg mb-4">Topik: {topicName}</p>

          {/* Ringkasan */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <p className="text-blue-600 font-bold text-xl">{score}%</p>
              <p className="text-gray-600">Nilai</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <p className="text-green-600 font-bold text-xl">{result.correct}</p>
              <p className="text-gray-600">Benar</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg text-center">
              <p className="text-gray-800 font-bold text-xl">{result.notAnswered}</p>
              <p className="text-gray-600">Tidak Menjawab</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg text-center">
              <p className="text-red-600 font-bold text-xl">{result.wrong}</p>
              <p className="text-gray-600">Salah</p>
            </div>
          </div>

          {/* Tombol aksi */}
          <div className="flex gap-4 mb-8 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              🔄 Coba Lagi
            </button>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
            >
              ⬅️ Kembali
            </button>
          </div>

          {/* Ulasan Jawaban */}
          <h2 className="text-xl font-bold mb-4">Ulasan Jawaban</h2>
          <div className="space-y-4">
            {questions.map((q) => {
              const userAnswer = answers[q.id];
              const correctAnswer = q.correct;
              const isCorrect = userAnswer === correctAnswer;

              return (
                <div
                  key={q.id}
                  className={`border rounded-lg p-4 ${
                    isCorrect
                      ? "border-green-300 bg-green-50"
                      : userAnswer === undefined
                      ? "border-gray-300 bg-gray-50"
                      : "border-red-300 bg-red-50"
                  }`}
                >
                  <p className="font-medium mb-2">
                    {q.id}. {q.question}
                  </p>

                  {userAnswer !== undefined && (
                    <p
                      className={`mb-1 ${
                        isCorrect ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {isCorrect ? "✔ Jawaban Anda: " : "❌ Jawaban Anda: "}
                      {q.options[userAnswer]}
                    </p>
                  )}

                  {!isCorrect && (
                    <p className="text-green-700">
                      ✔ Jawaban Benar: {q.options[correctAnswer]}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="flex flex-col items-center w-full bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Evaluasi: {topicName}</h1>

        {/* Box Soal */}
        <div className="border border-gray-200 rounded-lg p-4 mb-6">
          <h2 className="font-semibold text-lg mb-4">
            Pertanyaan {current + 1}
          </h2>
          <p className="text-gray-700 mb-4">{q.question}</p>

          <div className="grid grid-cols-2 gap-4">
            {q.options.map((opt, idx) => (
              <label
                key={idx}
                className={`flex items-center border rounded-lg px-3 py-2 cursor-pointer transition ${
                  answers[q.id] === idx
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  checked={answers[q.id] === idx}
                  onChange={() => handleOptionChange(q.id, idx)}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* Navigasi soal */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
            disabled={current === 0}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          >
            Previous Page
          </button>
          {current < questions.length - 1 ? (
            <button
              onClick={() =>
                setCurrent((prev) => Math.min(prev + 1, questions.length - 1))
              }
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Next Page
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Submit
            </button>
          )}
        </div>

        {/* Quiz Navigation */}
        <div className="flex gap-2 justify-center">
          {questions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-10 h-10 flex items-center justify-center border rounded ${
                current === idx
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-blue-500 border-blue-300"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
