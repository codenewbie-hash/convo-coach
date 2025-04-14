import { useState, useEffect } from 'react';
import { scenarios } from '../data/scenarios';

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scenario = scenarios[current];

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleNext = () => {
    setSelectedIndex(null);
    setCurrent((prev) => (prev + 1 < scenarios.length ? prev + 1 : prev));
  };

  const handleBack = () => {
    setSelectedIndex(null);
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    isClient && (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center font-[Inter]">
        {/* App Header */}
        <header className="w-full bg-blue-100 border-b px-4 py-4 shadow-sm rounded-b-xl flex flex-col items-center gap-1">
          <img src="/icon-180.png" alt="App Icon" className="w-10 h-10 mb-1" />
          <h1 className="text-lg font-bold text-blue-900 tracking-tight">Convo Coach</h1>
        </header>

        {/* Main Container */}
        <div className="p-4 w-full flex justify-center">
          <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-6 space-y-4">

            {/* Progress Info */}
            <p className="text-sm text-gray-500 text-right">
              Scenario {current + 1} of {scenarios.length}
            </p>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${((current + 1) / scenarios.length) * 100}%` }}
              />
            </div>

            {/* Scenario Prompt */}
            <h2 className="text-lg font-semibold text-gray-800 whitespace-pre-line">
              {scenario.message}
            </h2>

            {/* Answer Options */}
            <div className="space-y-2">
              {scenario.options.map((option, index) => {
                const isSelected = selectedIndex === index;
                const isCorrect = option.correct;

                return (
                  <button
                    key={index}
                    onClick={() => handleSelect(index)}
                    className={`w-full text-left border rounded-xl p-4 shadow-sm transition ${
                      isSelected
                        ? isCorrect
                          ? "bg-green-100"
                          : "bg-red-100"
                        : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <span className="block font-medium text-gray-800">{option.text}</span>
                    {isSelected && (
                      <>
                        <p className="text-sm mt-2 text-gray-700">{option.feedback}</p>
                        {!isCorrect && option.recommended && (
                          <p className="text-sm mt-2 italic text-blue-800">
                            <strong>Recommended response:</strong> {option.recommended}
                          </p>
                        )}
                      </>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4 mt-4">
              <button
                onClick={handleBack}
                disabled={current === 0}
                className={`w-1/2 py-2 px-4 rounded-md transition ${
                  current === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                }`}
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="w-1/2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
