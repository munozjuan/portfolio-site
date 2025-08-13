import React from "react";
import "../App.css";

const QuoteMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-10">
      <div className="marquee-wrapper">
        <div className="marquee-track text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFA629] to-pink-500">
          <span className="mx-24">
            “Styles come and go. Good design is a language, not a style.” — Massimo Vignelli
          </span>
          <span className="mx-24">
            “Styles come and go. Good design is a language, not a style.” — Massimo Vignelli
          </span>
          <span className="mx-24">
            “Styles come and go. Good design is a language, not a style.” — Massimo Vignelli
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuoteMarquee;
