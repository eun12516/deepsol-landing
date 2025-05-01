'use client';

import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  UserGroupIcon,
  TrophyIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: '수능 전국수석 출신 대표',
    description: '수능 전국수석 출신 대표가 직접 운영하는 교육 전문 팀입니다.',
    icon: TrophyIcon,
  },
  {
    name: '서울대 석사 출신 개발팀',
    description: '서울대 석사 출신 개발팀이 최신 AI 기술을 활용한 솔루션을 개발합니다.',
    icon: AcademicCapIcon,
  },
  {
    name: '교육 전문가 팀',
    description: '시대인재, 대성, 메가스터디 출제진 및 조교 출신 팀원들이 참여합니다.',
    icon: UserGroupIcon,
  },
  {
    name: '특허 보유 기술',
    description: '수학 문항 관리 시스템 등 특허 보유 기술을 활용한 차별화된 서비스를 제공합니다.',
    icon: ShieldCheckIcon,
  },
];

export default function Features() {
  return (
    <div id="features" className="bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Faint background image */}
      <img
        src="/snu_ui_download.png"
        alt="서울대 엠블럼"
        className="pointer-events-none select-none absolute left-1/2 top-1/2 w-[40vw] max-w-xl -translate-x-1/2 -translate-y-1/2 opacity-[0.03] z-0"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-semibold leading-7 text-[#0054FF]"
          >
            딥솔의 차별화된 경쟁력
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
          >
            교육 전문가와 AI 전문가의 만남
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 text-gray-600"
          >
            교육 현장의 경험과 최신 AI 기술이 만나
            교육 업계의 혁신을 이끌어갑니다.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-white/40 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-lg border border-white/20"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-[#0054FF]" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 