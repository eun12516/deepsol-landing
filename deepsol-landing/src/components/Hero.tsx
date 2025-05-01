'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative isolate min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8">
      {/* Background Gradients - Simplified */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0054FF] to-[#00A3FF] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Animated Circles - Optimized */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute -left-4 top-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-[#0054FF] to-[#00A3FF] rounded-full opacity-20 blur-2xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-0 top-1/3 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-[#00A3FF] to-[#0054FF] rounded-full opacity-20 blur-2xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/3 bottom-1/4 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-r from-[#0054FF] to-[#00A3FF] rounded-full opacity-10 blur-2xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Content - Optimized */}
      <div className="mx-auto max-w-6xl text-center w-full relative z-10 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4 sm:px-6 lg:px-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#60a5fa] bg-clip-text text-transparent max-w-6xl mx-auto"
          >
            NO.1 AI 에듀테크 Studio
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-6 sm:leading-8 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            수능 전국수석 출신 대표와 서울대 석사 출신 개발팀이
            <br className="hidden sm:block" />
            <span className="block sm:inline">AI로 교육 업계의 디지털 전환을 선도합니다.</span>
          </motion.p>
          <motion.div
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-auto min-w-[120px] sm:min-w-[160px] rounded-xl bg-gradient-to-r from-[#0054FF] to-[#00A3FF] px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0054FF] transition-all duration-200"
            >
              B2B 문의
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient - Simplified */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0054FF] to-[#00A3FF] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
} 