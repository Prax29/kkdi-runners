"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import CountUp from "react-countup";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, scale } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { ref: countRef1, inView: countInView1 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [isCountVisible1, setIsCountVisible1] = useState(false);

  const { ref: countRef2, inView: countInView2 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [isCountVisible2, setIsCountVisible2] = useState(false);

  const { ref: countRef3, inView: countInView3 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [isCountVisible3, setIsCountVisible3] = useState(false);

  const { ref: countRef4, inView: countInView4 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [isCountVisible4, setIsCountVisible4] = useState(false);

  const { ref: globeRef, inView: globeInView } = useInView({
    triggerOnce: true,
  });
  const [isGlobeVisible, setIsGlobeVisible] = useState(false);

  useEffect(() => {
    if (countInView1) {
      setIsCountVisible1(true);
    }
  }, [countInView1]);

  useEffect(() => {
    if (countInView2) {
      setIsCountVisible2(true);
    }
  }, [countInView2]);

  useEffect(() => {
    if (countInView3) {
      setIsCountVisible3(true);
    }
  }, [countInView3]);

  useEffect(() => {
    if (countInView4) {
      setIsCountVisible4(true);
    }
  }, [countInView4]);

  useEffect(() => {
    if (globeInView) {
      setIsGlobeVisible(true);
    }
  }, [globeInView]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  useEffect(() => {
    let timeout;

    const autoplay = () => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
      timeout = setTimeout(autoplay, 5000);
    };

    autoplay();

    return () => clearTimeout(timeout);
  }, [instanceRef]);

  const images = [
    "/run1.jpg",
    "/run2.jpg",
    "/run3.jpg",
    "/run4.jpg",
    "/run5.jpg",
  ];

  return (
    //Container for the entire page
    <div>
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col lg:flex-row justify-center bg-orange-50">
        <div className="hidden lg:block lg:relative lg:w-1/2">
          <Image
            src="/runner.png"
            alt="Runner finishing line"
            fill
            className="object-cover w-full h-full"
            priority
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-10" /> */}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full min-h-screen bg-[url('/runner.png')] bg-cover bg-center flex flex-col items-center justify-center lg:p-8 lg:w-1/2 lg:bg-none"
        >
          <div className="absolute inset-0 bg-orange-50/30 lg:hidden"></div>

          <h1 className="z-10 text-3xl font-bold text-orange-600 lg:text-orange-600 lg:text-5xl lg:mb-4">
            Karaikudi Runners Club
          </h1>
          <h2 className="z-10 text-bold text-xl lg:text-2xl text-gray-700 lg:text-gray-500 mb-4">
            Where passion meets every step.
          </h2>
          <button
            onClick={scrollToAbout}
            className="z-10 bg-orange-500 lg:bg-orange-500 hover:bg-orange-600 transition text-white lg:text-white px-3 py-2 rounded-md lg:px-6 lg:py-3 lg:rounded-lg"
          >
            Explore More!
          </button>
        </motion.div>
      </div>
      {/* About Section */}
      <div
        ref={aboutRef}
        className="flex flex-col lg:flex-row bg-orange-50 p-7 lg:p-10"
      >
        <div className="flex flex-col items-center justify-center lg:w-1/2 lg:p-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-bold text-orange-600 mb-4 lg:mb-8"
          >
            Who We Are
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-gray-600 text-md lg:w-[85%] lg:text-xl lg:p-4"
          >
            <p>
              KKDI Runners Club is a group of inspiring individuals pursuing
              their passion for running, cycling, walking, trekking, and more.
              {/* ultimately maintaining a fit and active lifestyle. */}
            </p>
            <br />
            <p>
              Our goal is to bring together like-minded people and create a
              thriving environment towards Greatness.
              {/* that motivates and empowers them to achieve
              greatness. */}
            </p>
            <br />
            <p>
              We strive to improve lives by helping individuals embrace a
              healthier lifestyle — not through pressure, but by making fitness
              fun, consistent, and community-driven.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-row text-gray-600 text-md lg:text-xl p-2 m-2 lg:p-4 lg:m-4 justify-center items-center gap-6"
          >
            <p>
              President Name.
              <br />A small desc about the president
            </p>
            <Image
              src="/president.jpeg"
              alt="Club President"
              width={120}
              height={120}
              className="rounded-full border-2 border-orange-300"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-row text-gray-600 text-md lg:text-xl p-2 m-2 lg:p-4 lg:m-4 justify-center items-center gap-6"
          >
            <Image
              src="/president.jpeg"
              alt="Club President"
              width={120}
              height={120}
              className="rounded-full border-2 border-orange-300"
            />
            <p>
              Vice-President Name.
              <br />A small desc about the vice-president
            </p>
          </motion.div>
        </div>
      </div>
      {/* Gallery Section */}
      <div className="flex flex-col items-center bg-orange-50 p-5 lg:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h1 className="text-2xl lg:text-4xl font-bold text-orange-600 lg:mb-3">
            Captured Moments
          </h1>
          <h2 className="text-lg lg:text-2xl text-gray-500 mb-4 lg:mb-8">
            From the trails
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="relative w-full max-w-4xl"
        >
          {/* Arrows */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 rounded-full p-2 shadow"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 rounded-full p-2 shadow"
          >
            <ChevronRight />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="keen-slider rounded-xl overflow-hidden"
          >
            {images.map((src, index) => (
              <div
                className="keen-slider__slide flex justify-center"
                key={index}
              >
                <img
                  src={src}
                  alt={`Run ${index + 1}`}
                  className="w-11/12 h-[40vh] lg:w-3/4 lg:h-[60vh] object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 w-2 rounded-full ${
                  currentSlide === idx ? "bg-orange-600" : "bg-orange-300"
                } transition-all duration-300`}
              />
            ))}
          </div>
        </motion.div>
      </div>
      {/* Achievements Section */}
      <div className="lg:min-h-[65vh] flex flex-col lg:items-center justify-center bg-white pb-15 pt-8 lg:p-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-2 lg:mb-7"
        >
          <h1 className="text-2xl lg:text-4xl font-bold text-orange-600 lg:mb-2">
            Our Journey So Far
          </h1>
          <h2 className="text-lg lg:text-2xl text-gray-500">Step by step</h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto gap-5 lg:gap-10 lg:p-6 bg-white">
          <motion.div
            ref={countRef1}
            className="flex flex-col items-center justify-center rounded-2xl p-2 h-40 w-40 lg:h-50 lg:w-50 text-md lg:text-lg text-yellow-200 bg-gray-700 hover:shadow-xl hover:shadow-gray-400 hover:scale-105 transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row text-bold text-3xl lg:text-5xl lg:p-2">
              {isCountVisible1 && (
                <CountUp end={30} duration={3} separator="," />
              )}
              <p>+</p>
            </div>
            <p className="text-center">Active Members</p>
          </motion.div>
          <motion.div
            ref={countRef2}
            className="flex flex-col items-center justify-center rounded-2xl p-2 h-40 w-40 lg:h-50 lg:w-50 text-md lg:text-lg text-yellow-200 bg-gray-700 hover:shadow-xl hover:shadow-gray-400 hover:scale-105 transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row text-bold text-3xl lg:text-5xl lg:p-2">
              {isCountVisible2 && (
                <CountUp end={2000} duration={2} separator="," />
              )}
              <p>+</p>
            </div>
            <p className="text-center">Kilometers Covered</p>
          </motion.div>
          <motion.div
            ref={countRef3}
            className="flex flex-col items-center justify-center rounded-2xl p-2 h-40 w-40 lg:h-50 lg:w-50 text-md lg:text-lg text-yellow-200 bg-gray-700 hover:shadow-xl hover:shadow-gray-400 hover:scale-105 transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row text-bold text-3xl lg:text-5xl lg:p-2">
              {isCountVisible3 && (
                <CountUp end={50} duration={3} separator="," />
              )}
              <p>+</p>
            </div>
            <p className="text-center">Events Participated</p>
          </motion.div>
          <motion.div
            ref={countRef4}
            className="flex flex-col items-center justify-center rounded-2xl p-2 h-40 w-40 lg:h-50 lg:w-50 text-md lg:text-lg text-yellow-200 bg-gray-700 hover:shadow-xl hover:shadow-gray-400 hover:scale-105 transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row text-bold text-3xl lg:text-5xl lg:p-2">
              {isCountVisible4 && (
                <CountUp end={10} duration={4} separator="," />
              )}
              <p>+</p>
            </div>
            <p className="text-center">Monthly Activities</p>
          </motion.div>
        </div>
      </div>
      {/* Upcoming Events Section */}
      <div className="flex flex-col justify-center items-center lg:flex-row min-h-[60vh] lg:min-h-[80vh] bg-orange-50 p-5 lg:p-10">
        <div className="flex flex-col justify-center items-center lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-bold text-orange-600 lg:mb-4"
          >
            Upcoming Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-[85%] text-gray-600 text-md lg:text-xl lg:mb-8 p-2 lg:p-4"
          >
            Each event we host is a chance to push limits, connect with others,
            and celebrate movement. Join us for what’s ahead — one step at a
            time.
          </motion.p>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex flex-col text-gray-600 text-lg lg:text-xl p-4 m-4 justify-center gap-4"
          >
            <div className="border-l-4 border-orange-500 pl-6 pb-2 relative">
              <div className="absolute -left-[14px] top-1 w-6 h-6 bg-orange-500 rounded-full"></div>
              <h1 className="text-sm lg:text-md text-gray-500">
                August 17, 2025{" "}
              </h1>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-800">
                Karaikudi Runners Club Marathon - 1st Edition
              </h3>
              <p className="text-gray-600 mb-3">
                5K/7k/10K run, starting at Bhavnagar Stadium, Karaikudi.
              </p>
              <a
                href="https://www.novarace.in/events/karaikudi-runners-club-marathon-1st-edition"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm p-3 rounded-lg transition"
              >
                View Details & Register
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row h-[80vh] lg:min-h-screen bg-white p-10">
        <div className="flex flex-col justify-center items-center lg:w-1/2 py-5">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-bold text-orange-600 mb-4"
          >
            Connect with Us
          </motion.h1>
          <div className="flex flex-col gap-3">
            <motion.a
              href="https://www.instagram.com/karaikudi_.runners_club?igsh=MW93djFtZHZxZHhhYw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-3 bg-gray-700 text-md lg:text-lg text-yellow-200 p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: "0.5deg" }}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white w-6 h-6 lg:w-8 lg:h-8"
              >
                <title>Instagram</title>
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
              </svg>
              <p>Visit our Instagram page!</p>
            </motion.a>
            <motion.a
              href="https://wa.me/9940911858?text=Hello!%20I%27d%20like%20to%20join%20the%20WhatsApp%20group%20of%20Karaikudi%20Runners%20Club."
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-3 bg-gray-700 text-md lg:text-lg text-yellow-200 p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: "0.5deg" }}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white w-6 h-6 lg:w-8 lg:h-8"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <p>Ping Us on WhatsApp!</p>
            </motion.a>
            <motion.a
              href="https://strava.app.link/Fi87wjcgTUb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-3 bg-gray-700 text-md lg:text-lg text-yellow-200 p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, rotate: "0.5deg" }}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white w-6 h-6 lg:w-8 lg:h-8"
              >
                <title>Strava</title>
                <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
              </svg>
              <p>Checkout our Strava profile!</p>
            </motion.a>
          </div>
        </div>
        <motion.div
          ref={globeRef}
          className="flex justify-center items-center lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          {globeInView && (
            <img
              src="/illustrations/connected-world-animate-2.svg"
              alt="Animated runner illustration"
              className="w-full max-w-md mx-auto p-4"
            />
          )}
        </motion.div>
      </div>
      {/* Footer Section */}
      <footer className="h-[20vh] bg-gray-800">
        <div className="flex flex-col lg:flex-row justify-center items-center h-full p-5 lg:p-10">
          <div className="flex flex-col justify-center text-yellow-200 text-xs lg:text-sm lg:w-1/2 h-full p-5 lg:p-10">
            <p className="text-md lg:text-lg">
              © {new Date().getFullYear()}, Karaikudi Runners Club
            </p>
            <a
              href="https://storyset.com/people"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs lg:text-sm"
            >
              People illustrations by Storyset
            </a>
            <p className="font-mono">
              Crafted-by:{" "}
              <a
                href="https://pranavrams.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prax29
              </a>
            </p>
          </div>
          <div className="flex justify-end items-center lg:w-1/2 h-full gap-6 lg:gap-10">
            <a
              href="https://www.instagram.com/karaikudi_.runners_club?igsh=MW93djFtZHZxZHhhYw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-3 bg-gray-900 text-lg text-yellow-200 p-3 lg:p-4 rounded-xl shadow-lg hover:scale-110 transition"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white w-5 h-5 lg:w-6 lg:h-6"
              >
                <title>Instagram</title>
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
              </svg>
            </a>
            <a
              href="https://wa.me/9940911858?text=Hello!%20I%27d%20like%20to%20join%20the%20WhatsApp%20group%20of%20Karaikudi%20Runners%20Club."
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-3 bg-gray-900 text-lg text-yellow-200 p-3 lg:p-4 rounded-xl shadow-lg hover:scale-110 transition"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white w-5 h-5 lg:w-6 lg:h-6"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
            <a
              href="https://strava.app.link/Fi87wjcgTUb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-3 bg-gray-900 text-lg text-yellow-200 p-3 lg:p-4 rounded-xl shadow-lg hover:scale-110 transition"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white w-5 h-5 lg:w-6 lg:h-6"
              >
                <title>Strava</title>
                <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
