'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const tasks = [
  '수학 해설지 작성',
  '문제 Q&A 답변',
  '오류 및 오타 검수',
  '문제 양식 통일화',
  '학습 자료 제작',
  '오답노트 제작',
  '한글 파일 자동화',
  '문제 및 해설 OCR',
];

const stats = [
  { value: '300%', label: '업무 효율 향상' },
  { value: '50%', label: '업무 시간 단축' },
  { value: '80%', label: '비용 효율화' },
];

export default function Solution() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#0054FF] text-base sm:text-lg font-medium mb-3 sm:mb-4"
            >
              AI 솔루션
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900"
            >
              반복·단순 업무만 줄여도 업무 효율성은{' '}
              <span className="bg-gradient-to-r from-[#0077FF] via-[#00A3FF] to-[#00D4FF] bg-clip-text text-transparent">
                300%
              </span>
              {' '}증가합니다.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600"
            >
              반복되고 귀찮은 일은 AI에게 맡기고, 중요한 일에만 집중하세요.
            </motion.p>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative p-4 sm:p-6 lg:p-8"
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#0077FF] via-[#00A3FF] to-[#00D4FF] bg-clip-text text-transparent">
                AI가 자동화하는 업무
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {tasks.map((task, index) => (
                  <motion.li
                    key={task}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-x-3 group"
                  >
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0054FF]/5 flex items-center justify-center group-hover:bg-[#0054FF]/10 transition-colors">
                      <CheckIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#0054FF]/60" aria-hidden="true" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-900 group-hover:text-[#0054FF] transition-colors">{task}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-white/40 backdrop-blur-xl p-4 sm:p-6 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-shadow"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-[#0077FF] via-[#00A3FF] to-[#00D4FF] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 