'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardDocumentListIcon,
  ArrowPathIcon,
  CurrencyDollarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import type { ElementType, SVGProps } from 'react';

type ProblemCard = {
  icon: ElementType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  highlight: string;
};

const problems: ProblemCard[] = [
  {
    icon: ClipboardDocumentListIcon,
    title: '수작업 관리',
    desc: '문서, 데이터, 기록 등 모든 것이 수작업으로 관리됩니다.',
    highlight: '자동화율 10% 미만',
  },
  {
    icon: ArrowPathIcon,
    title: '단순 반복 노동',
    desc: '반복되는 업무가 많아 중요한 업무에 집중하기 어렵습니다.',
    highlight: '반복 업무 비중 60% +',
  },
  {
    icon: CurrencyDollarIcon,
    title: '높은 인건비 수준',
    desc: '고학력 인력들의 인건비는 불필요하게 높은 수준입니다.',
    highlight: '업무 효율성 - 50%',
  },
  {
    icon: ClockIcon,
    title: '느린 업무 처리 속도',
    desc: '수작업과 반복 업무로 처리 속도가 느립니다.',
    highlight: '평균 처리시간 2배',
  },
];

export default function Problem() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-br from-blue-50/70 via-white to-blue-100/60">
      <div className="mx-auto max-w-2xl lg:text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-base font-semibold leading-7 text-[#0054FF]"
        >
          문제
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-left sm:text-center mb-4"
        >
          왜 교육 업계는 아직도 이렇게 비효율적일까요?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-600 text-left sm:text-center mb-6 sm:mb-10"
        >
          교육 현장의 비효율, 수십 년 동안 변하지 않았습니다.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full max-w-4xl mx-auto">
        {problems.map((problem, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col items-start bg-white/60 border border-white/40 rounded-2xl p-4 sm:p-6 gap-2 sm:gap-4 h-full justify-between shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-blue-200/70 hover:ring-2 hover:ring-blue-200/60"
          >
            <problem.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#3182f6] mb-2" aria-hidden="true" />
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{problem.title}</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">{problem.desc}</p>
            <div className="mt-auto text-[#3182f6] font-semibold text-sm sm:text-base bg-[#f0f6fe] rounded-lg px-3 sm:px-4 py-2">
              {problem.highlight}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
} 