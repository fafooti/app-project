import React from 'react'

function Faq({  question, answer, isOpen, toggleFAQ }) {
  return (
    <div>
      <div className="py-4 px-12 border text-left rounded border-secondaryWhite bg-secondaryBlack">
        <div
          className="text-secondaryGray flex justify-between"
          onClick={toggleFAQ}
        >
          {question}
          <span className="text-white">{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && (
          <div className={` w-full pt-3 `}>
            <p className="text-white border-t pt-4">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Faq
