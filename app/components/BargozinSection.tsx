import Link from "next/link";

export default function BargozinSection() {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                ابزار جدید
              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Bargozin (برگُزین)
                </span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                ابزار قدرتمند تست DNS و شبکه برای انتخاب بهترین تنظیمات شبکه
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">🌐</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    تست DNS Server
                  </h3>
                  <p className="text-gray-400">
                    تست دسترسی URL در 26+ DNS server مختلف
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">📊</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    تحلیل سرعت دانلود
                  </h3>
                  <p className="text-gray-400">
                    اندازه‌گیری عملکرد دانلود با تنظیمات DNS مختلف
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">🐳</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    تست Docker Registry
                  </h3>
                  <p className="text-gray-400">
                    ارزیابی سرعت رجیستری‌های داکر برای بهینه‌سازی workflow
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://github.com/Vesal-J/bargozin-desktop"
                target="_blank"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center">
                دانلود Bargozin
              </Link>
              <Link
                href="https://github.com/Vesal-J/bargozin-desktop"
                target="_blank"
                className="border border-purple-500/30 hover:border-purple-400 text-purple-300 hover:text-purple-200 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 text-center">
                مشاهده در GitHub
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">
                    ویژگی‌های کلیدی
                  </h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">
                      Cross-platform (Windows, macOS, Linux)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">
                      رابط کاربری فارسی با پشتیبانی RTL
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">
                      نتایج real-time با تست همزمان
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">
                      مدیریت session و لغو تست
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
