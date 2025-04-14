import { useState } from 'react';
import { scenarios } from '../data/scenarios';

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const scenario = scenarios[current];

  // Handle selecting an answer
  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  // Move to the next scenario
  const handleNext = () => {
    setSelectedIndex(null);
    setCurrent((prev) => (prev + 1 < scenarios.length ? prev + 1 : prev));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header like a mobile app */}
      <header className="w-full bg-white border-b px-4 py-3 shadow-sm">
        <h1 className="text-lg font-bold text-center">🧠 Convo Coach</h1>
      </header>

      {/* Main content area */}
      <div className="p-4 flex flex-col justify-center items-center">
        <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-6 space-y-4">

          {/* Scenario Number / Progress */}
          <p className="text-sm text-gray-500 text-right">
            Scenario {current + 1} of {scenarios.length}
          </p>

          {/* Scenario Message */}
          <h2 className="text-xl font-semibold text-gray-800">
            {scenario.message}
          </h2>

          {/* Answer Options */}
          <div className="space-y-2">
            {scenario.options.map((option, index) => {
              const isSelected = selectedIndex === index;
              const isCorrect = option.correct;

              // Instantly apply background color to selected option
              let bgColor = "bg-white";
              if (isSelected) {
                bgColor = isCorrect ? "bg-green-100" : "bg-red-100";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className={`w-full text-left border rounded-lg p-3 ${bgColor}`}
                >
                  <span className="block font-medium">{option.text}</span>
                  {isSelected && (
                    <p className="text-sm mt-1 text-gray-600">
                      {option.feedback}
                    </p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Navigation Buttons */}
<div className="flex justify-between gap-4 mt-4">
  {/* Back Button */}
  <button
    onClick={() => {
      setSelectedIndex(null);
      setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
    }}
    disabled={current === 0}
    className={`w-1/2 py-2 px-4 rounded-md ${
      current === 0
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-gray-200 hover:bg-gray-300 text-gray-800"
    }`}
  >
    Back
  </button>

  {/* Next Button */}
  <button
    onClick={handleNext}
    className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
  >
    Next
  </button>
</div>
        </div>
      </div>
    </div>
  );
}
