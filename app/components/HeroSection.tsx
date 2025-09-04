import Image from "next/image";
import Link from "next/link";
import SimpleLogo from "@/public/assets/imgs/logo.png";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50"></div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            <div className="space-y-8 text-center lg:text-right">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    403Unlocker
                  </span>
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-lg md:text-xl text-gray-300">
                  <div className="w-8 h-px bg-teal-400"></div>
                  <span>
                    وقت تو با ارزشه، دور زدن تحریم رو بسپار به ابزارها
                  </span>
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                با ابزار های 403Unlocker پرسرعت ترین راه حل برای دور زدن تحریم
                های اینترنتی پیدا کن
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#tools"
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  شروع کنید
                </Link>
                <Link
                  href="https://github.com/403unlocker"
                  target="_blank"
                  className="border border-gray-600 hover:border-teal-400 text-gray-300 hover:text-teal-400 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105">
                  مشاهده در GitHub
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
                <Image
                  priority
                  src={SimpleLogo}
                  alt="403Unlocker Logo"
                  className="relative z-10 w-full max-w-md rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
