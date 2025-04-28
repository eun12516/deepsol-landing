import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">딥솔(DeepSOL)</h3>
            <div className="space-y-2 text-sm">
              <p>사업자등록번호: 123-45-67890</p>
              <p>대표: 홍길동</p>
              <p>주소: 서울특별시 강남구 테헤란로</p>
              <p>이메일: contact@deepsol.kr</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  서비스
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">서비스 바로가기</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://deepsol.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  수학 Q&A 자동화 서비스
                </a>
              </li>
              <li>
                <a
                  href="https://www.leetchat.co.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  국어지문 채팅 서비스
                </a>
              </li>
              <li>
                <a
                  href="https://www.myquark.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  수학 문항 관리 서비스
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-xs">
            © {new Date().getFullYear()} DeepSOL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 