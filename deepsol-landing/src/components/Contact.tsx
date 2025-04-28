'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
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
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-32 px-4 bg-gradient-to-br from-blue-50/70 via-white to-blue-100/60">
      <div className="mx-auto max-w-4xl lg:text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-base font-semibold leading-7 text-[#0054FF]"
        >
          B2B 문의
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-6"
        >
          딥솔과 함께 교육 혁신을 시작하세요
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-600 text-center mb-12"
        >
          교육 혁신을 위한 파트너십을 제안합니다.
        </motion.p>
      </div>

      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 gap-8">
            <div>
              <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
                이름
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base p-3"
                placeholder="담당자 이름을 입력해주세요"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-base font-medium text-gray-700 mb-2">
                회사명
              </label>
              <input
                type="text"
                name="company"
                id="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base p-3"
                placeholder="회사명을 입력해주세요"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                이메일
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base p-3"
                placeholder="이메일을 입력해주세요"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-base font-medium text-gray-700 mb-2">
                연락처
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base p-3"
                placeholder="연락처를 입력해주세요"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">
                문의 내용
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base p-3"
                placeholder="협업하고 싶은 내용을 자세히 입력해주세요"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex justify-center rounded-lg bg-[#0054FF] py-4 px-8 text-lg font-semibold text-white shadow-sm hover:bg-[#0044cc] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isSubmitting ? '전송 중...' : 'B2B 문의하기'}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="text-center text-green-600 text-lg">
              문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="text-center text-red-600 text-lg">
              문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.
            </div>
          )}
        </form>
      </div>
    </section>
  );
} 