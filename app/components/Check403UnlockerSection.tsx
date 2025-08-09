import ArrowTopLeft from "@/shared/icons/ArrowTopLeft";
import Image from "next/image";
import Link from "next/link";
import Check403Desk from "@/public/assets/imgs/Check403Desk.png";

export default function Check403UnlockerSection() {
  return (
    <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <Link
                href="https://github.com/403unlocker/check403unlocker-ext"
                target="_blank"
                className="inline-flex items-center gap-2 text-black hover:text-gray-800 transition-colors">
                <h3 className="text-4xl md:text-5xl font-black">
                  check403unlocker
                </h3>
                <ArrowTopLeft className="size-8" />
              </Link>

              <p className="text-xl text-gray-800 leading-relaxed">
                فقط کافیه extension و سایت تحریمی مورد نظرت رو باز کنی تا بهت
                بگه کدوم DNS میتونه تحریم این سایت رو دور بزنه
              </p>

              <p className="text-lg text-gray-800">
                برای دانلود روی{" "}
                <Link
                  href="https://chromewebstore.google.com/detail/check403unlocker/elmlgegphdbjnofpobhkinmjnofkdmne"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-700 underline font-medium">
                  لینک
                </Link>{" "}
                کلیک کن
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://chromewebstore.google.com/detail/check403unlocker/elmlgegphdbjnofpobhkinmjnofkdmne"
                target="_blank"
                className="bg-black/20 backdrop-blur-sm border border-black/30 hover:border-black/50 text-black px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 text-center">
                دانلود Extension
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-black/20 rounded-3xl blur-3xl"></div>
              <Image
                src={Check403Desk}
                alt="check403unlocker"
                className="relative z-10 rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
