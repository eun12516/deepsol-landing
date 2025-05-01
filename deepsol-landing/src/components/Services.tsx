'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import {
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  BookOpenIcon,
  MagnifyingGlassIcon,
  DocumentCheckIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: '수학 Q&A 자동화 서비스',
    description: 'AI가 수학 문제를 자동으로 해석하고 답변하는 서비스입니다.',
    icon: ChatBubbleLeftRightIcon,
    link: 'https://deepsol.kr',
  },
  {
    name: '국어지문 채팅 서비스',
    description: '국어 지문에 대한 질문에 AI가 답변하는 서비스입니다.',
    icon: BookOpenIcon,
    link: 'https://www.leetchat.co.kr/',
  },
  {
    name: '수학 문항 관리 서비스',
    description: '특허 보유 기술로 수학 문항을 효율적으로 관리하는 서비스입니다.',
    icon: DocumentCheckIcon,
    link: 'https://www.myquark.app/',
  },
  {
    name: '수학 해설지 초안 생성 서비스',
    description: '수학 문제의 해설지를 AI가 자동으로 생성하는 서비스입니다.',
    icon: DocumentTextIcon,
  },
  {
    name: '수학 오류 오타 검출 서비스',
    description: '수학 문제의 오류와 오타를 AI가 자동으로 검출하는 서비스입니다.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: '해설지 양식 통일 서비스',
    description: '해설지의 양식을 자동으로 통일하는 서비스입니다.',
    icon: DocumentDuplicateIcon,
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <div id="services" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-base font-semibold leading-7 text-[#0054FF]"
          >
            주요 서비스
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
          >
            딥솔의 AI 교육 솔루션
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 text-gray-600"
          >
            AI 기반 교육 솔루션으로 교육 업계의 디지털 전환을 선도합니다.
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.article
              key={service.name}
              variants={itemVariants}
              className="flex flex-col items-start bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out h-full"
            >
              <div className="p-4 sm:p-6 lg:p-8 w-full flex flex-col h-full">
                <div className="flex items-center gap-x-3 sm:gap-x-4 mb-3 sm:mb-4 group">
                  <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-[#0054FF] group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {service.name}
                  </h3>
                </div>
                <p className="text-sm sm:text-base leading-6 text-gray-600 mb-4 sm:mb-6 flex-1">
                  {service.description}
                </p>
                {service.link && (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0054FF] font-semibold hover:text-[#0044CC] hover:translate-x-1 transform transition-all duration-200 mt-auto text-sm inline-flex items-center"
                  >
                    더 알아보기
                    <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
