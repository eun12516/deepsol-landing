'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbyzwZIow1-3NCy7bkZVbJpbhrZRAAEscJ-YDPMrsSHTBzPB4MZELOla1gDYmblppBdG/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      // no-cors 모드에서는 response를 확인할 수 없으므로 항상 성공으로 처리
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-24 sm:py-32 px-4 bg-gradient-to-br from-blue-50/70 via-white to-blue-100/60">
      <div className="mx-auto max-w-4xl lg:text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-base font-semibold leading-7 text-[#0054FF]"
        >
          B2B 문의
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6"
        >
          딥솔과 함께 교육 혁신을 시작하세요
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12"
        >
          교육 혁신을 위한 파트너십을 제안합니다.
        </motion.p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        onSubmit={handleSubmit}
        className="w-full max-w-2xl mx-auto space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              이름
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0054FF] focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              이메일
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0054FF] focus:border-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            회사명
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0054FF] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            문의 내용
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0054FF] focus:border-transparent"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-[#0054FF] to-[#00A3FF] px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0054FF] focus:ring-offset-2 transition-all duration-200"
        >
          문의하기
        </motion.button>
      </motion.form>

      {submitStatus === 'success' && (
        <div className="text-center text-green-600 text-lg mt-4">
          문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="text-center text-red-600 text-lg mt-4">
          문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.
        </div>
      )}
    </section>
  );
} 