import ArrowTopLeft from "@/shared/icons/ArrowTopLeft";
import Image from "next/image";
import Link from "next/link";
import FastDocker403 from "@/public/assets/imgs/FastDocker403.jpg";

export default function FastDockerSection() {
  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500/20 rounded-3xl blur-3xl"></div>
              <Image
                src={FastDocker403}
                alt="fastDocker403unlocker"
                className="relative z-10 rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <Link
                href="https://github.com/403unlocker/fastDocker403unlocker"
                target="_blank"
                className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
                <h3 className="text-4xl md:text-5xl font-black">
                  fastDocker403unlocker
                </h3>
                <ArrowTopLeft className="size-8" />
              </Link>

              <p className="text-xl text-gray-300 leading-relaxed">
                یه ابزار بدرد بخور برای کسایی که با داکر یا کوبرنتیز سر و کله
                میزنن و به خاطر تحریم های انلاین دانلود ایمیج های داکر براشون
                عذابه...
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://github.com/403unlocker/fastDocker403unlocker"
                target="_blank"
                className="bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 hover:border-teal-500/50 text-teal-300 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 text-center">
                مشاهده پروژه
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
