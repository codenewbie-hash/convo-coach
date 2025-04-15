import { useState, useEffect } from 'react';
import { scenarios } from '../data/scenarios';
import Head from 'next/head';

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
    if (navigator.vibrate) navigator.vibrate(10);
  };

  const handleNext = () => {
    setSelectedIndex(null);
    setCurrent((prev) => (prev + 1 < scenarios.length ? prev + 1 : prev));
    if (navigator.vibrate) navigator.vibrate(5);
  };

  const handleBack = () => {
    setSelectedIndex(null);
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
    if (navigator.vibrate) navigator.vibrate(5);
  };

  return (
    isClient && (
      <div className="min-h-screen bg-[#F0E5D8] flex flex-col items-center font-[Inter]">
        <Head>
          <title>Convo Coach</title>
        </Head>

        {/* Thin top branding banner */}
        <div className="w-full flex justify-center bg-white border-b border-[#B0B0B0] py-1 shadow-sm">
          <div className="flex items-center gap-2 text-sm text-[#4A90E2]">
            <img src="/icon-180.png" alt="App Icon" className="w-5 h-5" />
            <span className="font-medium">Convo Coach</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4 w-full flex justify-center pb-16">
          <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-6 space-y-4">

            {/* Progress Bar */}
            <p className="text-sm text-[#B0B0B0] text-right">
              Scenario {current + 1} of {scenarios.length}
            </p>
            <div className="h-2 w-full bg-[#B0B0B0] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#4A90E2] transition-all duration-300"
                style={{ width: `${((current + 1) / scenarios.length) * 100}%` }}
              />
            </div>

            {/* Scenario */}
            <div className="space-y-2">
              <p className="text-sm text-[#4A90E2] font-medium">💬 Partner says:</p>
              <p className="italic text-lg text-[#2F3A48] leading-snug">
                “{scenario.message.split('\n')[0]}”
              </p>
              <p className="text-sm text-[#2F3A48] mt-1">How do you typically respond?</p>
            </div>

            {/* Options */}
            <div className="space-y-2">
              {scenario.options.map((option, index) => {
                const isSelected = selectedIndex === index;
                const isCorrect = option.correct;

                const bgColor =
                  isSelected && isCorrect ? 'bg-[#D1FADF]' :
                  isSelected && !isCorrect ? 'bg-[#FFE3E3]' :
                  'bg-white hover:bg-[#f9f9f9]';

                return (
                  <button
                    key={index}
                    onClick={() => handleSelect(index)}
                    className={`w-full text-left border border-[#B0B0B0] rounded-xl p-4 shadow-sm transition ${bgColor}`}
                    aria-pressed={isSelected}
                  >
                    <span className="block font-medium text-[#2F3A48]">{option.text}</span>
                    {isSelected && (
                      <p
                        className="text-sm mt-2 text-[#2F3A48]"
                        dangerouslySetInnerHTML={{ __html: option.feedback }}
                      ></p>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex justify-between gap-4 mt-4">
              <button
                onClick={handleBack}
                disabled={current === 0}
                className={`w-1/2 py-2 px-4 rounded-md transition font-medium ${
                  current === 0
                    ? 'bg-[#B0B0B0] text-white cursor-not-allowed'
                    : 'bg-white border border-[#B0B0B0] hover:bg-[#F0E5D8] text-[#2F3A48]'
                }`}
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="w-1/2 bg-[#4A90E2] text-white py-2 px-4 rounded-md hover:bg-[#3C7BCC] transition font-medium"
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
