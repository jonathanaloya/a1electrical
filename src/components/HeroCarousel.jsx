import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HERO_SLIDES } from "../data/heroSlides.js";

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);

  function restartTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % HERO_SLIDES.length;
        setFading(true);
        setTimeout(() => setFading(false), 300);
        return next;
      });
    }, 5000);
  }

  useEffect(() => {
    restartTimer();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDotClick(i) {
    setFading(true);
    setTimeout(() => {
      setIndex(i);
      setFading(false);
    }, 300);
    restartTimer();
  }

  const slide = HERO_SLIDES[index];

  return (
    <section className="hero">
      <div className={`hero-media${slide.full ? " full" : slide.left ? " left" : ""}`}>
        <img
          className="heroshot"
          style={{ opacity: fading ? 0 : 1 }}
          src={slide.img}
          alt="A1 Electricals"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-diagonal" />
        <div className="hero-content">
          <div className="eyebrow" style={{ opacity: fading ? 0 : 1 }}>
            {slide.eyebrow}
          </div>
          <h1 style={{ opacity: fading ? 0 : 1 }}>{slide.heading}</h1>
          <p className="lead" style={{ opacity: fading ? 0 : 1 }}>
            {slide.lead}
          </p>
          <Link
            to={slide.btnHref}
            className="btn-hero"
            style={{ opacity: fading ? 0 : 1 }}
          >
            {slide.btnText}
          </Link>
          <div className="hero-dots">
            {HERO_SLIDES.map((_, i) => (
              <span
                key={i}
                className={i === index ? "active" : ""}
                onClick={() => handleDotClick(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
