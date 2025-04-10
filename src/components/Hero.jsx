import React, { useEffect, useRef, useState } from 'react';
import { useCar } from '../context/CarContext';
import { useOrder } from '../context/OrderContext';

const Hero = () => {
  const { currentCar, setSelectedCar, allVariants } = useCar();
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const priceRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayCar, setDisplayCar] = useState(currentCar);
  const [direction, setDirection] = useState(null);
  const [textAnimating, setTextAnimating] = useState(false);

  useEffect(() => {
    animateTextIn();
  }, []);

  const animateTextIn = () => {
    if (titleRef.current) {
      titleRef.current.style.opacity = '0';
      titleRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        titleRef.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        titleRef.current.style.opacity = '1';
        titleRef.current.style.transform = 'translateY(0)';
      }, 100);
    }

    if (taglineRef.current) {
      taglineRef.current.style.opacity = '0';
      taglineRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        taglineRef.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        taglineRef.current.style.opacity = '1';
        taglineRef.current.style.transform = 'translateY(0)';
      }, 300);
    }

    if (priceRef.current) {
      priceRef.current.style.opacity = '0';
      priceRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        priceRef.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        priceRef.current.style.opacity = '1';
        priceRef.current.style.transform = 'translateY(0)';
      }, 500);
    }
  };

  const animateTextOut = (callback) => {
    setTextAnimating(true);
    if (titleRef.current) {
      titleRef.current.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      titleRef.current.style.opacity = '0';
      titleRef.current.style.transform = direction === 'next' ? 'translateX(-40px)' : 'translateX(40px)';
    }

    if (taglineRef.current) {
      taglineRef.current.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      taglineRef.current.style.opacity = '0';
      taglineRef.current.style.transform = direction === 'next' ? 'translateX(-40px)' : 'translateX(40px)';
    }

    if (priceRef.current) {
      priceRef.current.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      priceRef.current.style.opacity = '0';
      priceRef.current.style.transform = direction === 'next' ? 'translateX(-40px)' : 'translateX(40px)';
    }

    setTimeout(() => {
      callback();

      if (titleRef.current) {
        titleRef.current.style.transform = direction === 'next' ? 'translateX(40px)' : 'translateX(-40px)';
      }
      if (taglineRef.current) {
        taglineRef.current.style.transform = direction === 'next' ? 'translateX(40px)' : 'translateX(-40px)';
      }
      if (priceRef.current) {
        priceRef.current.style.transform = direction === 'next' ? 'translateX(40px)' : 'translateX(-40px)';
      }

      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          titleRef.current.style.opacity = '1';
          titleRef.current.style.transform = 'translateX(0)';
        }
        if (taglineRef.current) {
          taglineRef.current.style.transition = 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s';
          taglineRef.current.style.opacity = '1';
          taglineRef.current.style.transform = 'translateX(0)';
        }
        if (priceRef.current) {
          priceRef.current.style.transition = 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s';
          priceRef.current.style.opacity = '1';
          priceRef.current.style.transform = 'translateX(0)';
        }
        setTimeout(() => {
          setTextAnimating(false);
        }, 700);
      }, 50);
    }, 400);
  };

  useEffect(() => {
    if (!isAnimating) {
      setDisplayCar(currentCar);
    }
  }, [currentCar, isAnimating]);

  const navigateCar = (dir) => {
    if (isAnimating || textAnimating) return;
    setIsAnimating(true);
    setDirection(dir);

    const currentIndex = allVariants.indexOf(currentCar.name.split(' ')[1]);
    const newIndex = dir === 'next'
      ? (currentIndex + 1) % allVariants.length
      : (currentIndex - 1 + allVariants.length) % allVariants.length;

    animateTextOut(() => {
      setSelectedCar(allVariants[newIndex]);
    });

    setTimeout(() => setIsAnimating(false), 600);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/car-interior.jpg')",
          filter: "brightness(0.5) blur(2px)"
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="z-10 max-w-xl mb-12 md:mb-0 overflow-hidden">
            <div className="inline-block bg-blue-500/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
              <p className="text-blue-300 text-sm font-medium">Pengalaman Berkendara Premium</p>
            </div>

            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
              style={{ willChange: 'transform, opacity' }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200">
                {displayCar.name}
              </span>
            </h1>

            <p
              ref={taglineRef}
              className="text-lg md:text-xl text-gray-300 mb-8"
              style={{ willChange: 'transform, opacity' }}
            >
              {displayCar.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 transition duration-300"
              >
                Jelajahi Sekarang
              </button>

              <button
                onClick={() => scrollToSection('order')}
                className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition duration-300"
              >
                Pesan Sekarang
              </button>
            </div>

            <div
              ref={priceRef}
              className="mt-8 inline-block bg-black/40 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10"
              style={{ willChange: 'transform, opacity' }}
            >
              <p className="text-sm text-gray-400">Mulai dari</p>
              <p className="text-xl font-semibold text-white">{displayCar.price}</p>
            </div>
          </div>

          <div className="relative z-10 w-full md:w-1/2 h-96 flex items-center justify-center">
            <div className="car-slide-container w-full h-full">
              <div className={`car-slide ${isAnimating ? (direction === 'next' ? 'slide-out-left' : 'slide-out-right') : ''}`}>
                <img
                  src={displayCar.image}
                  alt={displayCar.name}
                  className="w-auto h-auto max-w-full max-h-96 object-contain"
                  style={{ animation: isAnimating ? '' : 'scale 6s ease-in-out infinite' }}
                />
              </div>

              {isAnimating && (
                <div className={`car-slide ${direction === 'next' ? 'slide-in-right' : 'slide-in-left'}`}>
                  <img
                    src={`/assets/images/cars/gondo-${allVariants[(allVariants.indexOf(displayCar.name.split(' ')[1]) + (direction === 'next' ? 1 : -1) + allVariants.length) % allVariants.length].toLowerCase()}.png`}
                    alt="Next car"
                    className="w-auto h-auto max-w-full max-h-96 object-contain"
                  />
                </div>
              )}

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-blue-500/30 blur-xl rounded-full animate-pulse"></div>
            </div>

            <button
              onClick={() => navigateCar('prev')}
              className="absolute left-0 z-20 bg-white/10 backdrop-blur-md h-12 w-12 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition duration-300"
              aria-label="Previous car"
              disabled={isAnimating || textAnimating}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => navigateCar('next')}
              className="absolute right-0 z-20 bg-white/10 backdrop-blur-md h-12 w-12 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition duration-300"
              aria-label="Next car"
              disabled={isAnimating || textAnimating}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border border-white/10 opacity-30" style={{ animation: 'float 8s ease-in-out infinite' }}></div>
      <div className="absolute top-20 right-20 w-16 h-16 rounded-full border border-white/10 opacity-20" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;
