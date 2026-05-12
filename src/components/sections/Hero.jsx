"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create floating gold particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -Math.random() * 0.4 - 0.1,
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += 0.02;

        const currentOpacity = p.opacity * (0.5 + Math.sin(p.pulse) * 0.5);

        // Gold glow
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.size * 4
        );
        gradient.addColorStop(0, `rgba(200, 165, 78, ${currentOpacity})`);
        gradient.addColorStop(1, "rgba(200, 165, 78, 0)");

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 181, 99, ${currentOpacity * 1.5})`;
        ctx.fill();

        // Reset when off screen
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Background */}
      <div className={styles.bgWrapper}>
        <Image
          src="/images/hero-dubai.png"
          alt="Dubai skyline at golden hour"
          fill
          priority
          quality={95}
          className={styles.bgImage}
        />
        <div className={styles.overlayGradient} />
        <div className={styles.overlayVignette} />
        <canvas ref={particlesRef} className={styles.particles} />
      </div>

      {/* Content */}
      <div className={`${styles.content} container`}>
        <div className={styles.textBlock}>

          {/* Heading */}
          <h1 className={styles.title}>
            <span className={styles.titleLine}>
              <span className={styles.titleReveal}>Architectural</span>
            </span>
            <span className={styles.titleLine}>
              <span className={styles.titleReveal}>
                <span className={styles.titleGold}>Excellence</span> in
              </span>
            </span>
            <span className={styles.titleLine}>
              <span className={styles.titleReveal}>Every Detail</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Discover the most exclusive properties across Dubai, Abu Dhabi, and
            beyond. Curated for the discerning investor and connoisseur of
            luxury living.
          </p>

          {/* CTAs */}
          <div className={styles.ctas}>
            <a href="#properties" className={styles.btnPrimary}>
              <span className={styles.btnContent}>
                Explore Properties
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.btnArrow}>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className={styles.btnGlow} />
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              <span className={styles.btnContent}>Book Consultation</span>
            </a>
          </div>

          {/* Trust Indicator */}
          <div className={styles.trust}>
            <div className={styles.trustAvatars}>
              <span className={styles.avatar} style={{ background: "linear-gradient(135deg, #c8a54e, #a8893e)" }}>A</span>
              <span className={styles.avatar} style={{ background: "linear-gradient(135deg, #8B7355, #6B5B45)" }}>S</span>
              <span className={styles.avatar} style={{ background: "linear-gradient(135deg, #B8860B, #8B6914)" }}>M</span>
            </div>
            <div className={styles.trustText}>
              <span className={styles.trustValue}>2,500+</span>
              <span className={styles.trustLabel}>investors trust LuxEstate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot} />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className={styles.bottomFade} />
    </section>
  );
}
