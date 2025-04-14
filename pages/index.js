<div className="space-y-2">
  {scenario.options.map((option, index) => {
    const isSelected = selectedIndex === index;
    const isCorrect = option.correct;

    const bgColor = isSelected
      ? isCorrect
        ? 'bg-green-100'
        : 'bg-red-100'
      : 'bg-white hover:bg-[#f9f9f9]';

    return (
      <button
        key={index}
        onClick={() => handleSelect(index)}
        className={`w-full text-left border border-[#B0B0B0] rounded-xl p-4 shadow-sm transition ${bgColor}`}
      >
        <span className="block font-medium text-[#2F3A48]">{option.text}</span>
        {isSelected && (
          <>
            <p className="text-sm mt-2 text-[#2F3A48]">{option.feedback}</p>
            {!isCorrect && option.recommended && (
              <p className="text-sm mt-2 italic text-[#4A90E2]">
                <strong>Recommended response:</strong> {option.recommended}
              </p>
            )}
          </>
        )}
      </button>
    );
  })}
</div>
