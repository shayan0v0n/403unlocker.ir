import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/shared/icons/GithubIcon";
import Best403 from "@/public/assets/imgs/Best403.jpg";
import Check403Desk from "@/public/assets/imgs/Check403Desk.png";
import SimpleLogo from "@/public/assets/imgs/logo.jpg";
import FastDocker403 from "@/public/assets/imgs/FastDocker403.jpg";
import RocketIcon from "@/public/assets/imgs/RocketIcon.png";
import checkIcon from "@/public/assets/imgs/Check403.png";
import FirstIcon from "@/public/assets/imgs/FirstIcon.png";
import Cli403Icon from "@/public/assets/imgs/cli403.png";
import py403Icon from "@/public/assets/imgs/py403.png";
import rs403Icon from "@/public/assets/imgs/rs403.png";
import ArrowTopLeft from "@/shared/icons/ArrowTopLeft";

import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      {/* Floating GitHub Link */}
      <div className="fixed top-6 right-6 z-50">
        <a 
          href="https://github.com/403unlocker" 
          target="_blank"
          className="bg-black/20 backdrop-blur-md rounded-full p-3 hover:bg-black/40 transition-all duration-300 hover:scale-110"
        >
          <GithubIcon />
        </a>
      </div>

      <div className="relative overflow-hidden">
        {/* Hero Section */}
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
                      <span>وقت تو با ارزشه، دور زدن تحریم رو بسپار به ابزارها</span>
                    </div>
                  </div>
                  
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    با ابزار های 403Unlocker پرسرعت ترین راه حل برای دور زدن
                    تحریم های اینترنتی پیدا کن
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link 
                      href="#tools"
                      className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                      شروع کنید
                    </Link>
                    <Link 
                      href="https://github.com/403unlocker"
                      target="_blank"
                      className="border border-gray-600 hover:border-teal-400 text-gray-300 hover:text-teal-400 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
                    >
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

        {/* Tools Section */}
        <div id="tools" className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  ابزار های ما
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                مجموعه‌ای از ابزارهای قدرتمند برای دور زدن تحریم‌ها و بهینه‌سازی شبکه
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Bargozin - New Tool */}
              <Link
                href="https://github.com/Vesal-J/bargozin-desktop"
                target="_blank"
                className="group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowTopLeft className="text-purple-400 size-6" />
                </div>
                
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">ب</span>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      Bargozin (برگُزین)
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      ابزار قدرتمند تست DNS و شبکه برای انتخاب بهترین تنظیمات شبکه. تست سرعت دانلود و رجیستری‌های داکر.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">DNS Testing</span>
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Speed Test</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Docker</span>
                  </div>
                </div>
              </Link>

              {/* Existing Tools */}
              <Link
                href="https://github.com/403unlocker/check403unlocker-ext"
                target="_blank"
                className="group relative bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8 hover:border-teal-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowTopLeft className="text-teal-400 size-6" />
                </div>
                
                <div className="text-center space-y-6">
                  <Image
                    src={checkIcon}
                    alt="check403unlocker"
                    className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      check403unlocker
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      اگه نمیدونی وبسایتی که تو مرورگرت بازه رو با چه DNS میتونی بازش کنی کافیه این extension رو توی مرورگرت داشته باشی.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="https://github.com/403unlocker/best403unlocker"
                target="_blank"
                className="group relative bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8 hover:border-teal-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowTopLeft className="text-teal-400 size-6" />
                </div>
                
                <div className="text-center space-y-6">
                  <Image
                    src={FirstIcon}
                    alt="best403unlocker"
                    className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      best403unlocker
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      اگر شما هم برای دانلود و نصب یه سری از پکیج‌ها در سرورهاتون با تحریم روبرو شدید، می‌تونید با تغییر DNS بخشی از این تحریم‌ها رو دور بزنید.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="https://github.com/403unlocker/fastDocker403unlocker"
                target="_blank"
                className="group relative bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8 hover:border-teal-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowTopLeft className="text-teal-400 size-6" />
                </div>
                
                <div className="text-center space-y-6">
                  <Image
                    src={RocketIcon}
                    alt="fastDocker403unlocker"
                    className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      fastDocker403unlocker
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      اگر نیاز داشتید که پر سرعت‌ترین میرور رجیستری داکر رو برای دانلود ایمج‌های تحریمی به راحتی و سرعت پیدا کنید می‌تونید از این اسکریپت استفاده کنید.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="https://github.com/403unlocker/best403unlocker-rs"
                target="_blank"
                className="group relative bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8 hover:border-teal-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowTopLeft className="text-teal-400 size-6" />
                </div>
                
                <div className="text-center space-y-6">
                  <Image
                    src={rs403Icon}
                    alt="best403unlocker-rs"
                    className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      best403unlocker-rs
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      اگر هنگام دانلود پکیج‌ها با تحریم مواجه شدید، می‌توانید با تغییر DNS بخشی از این محدودیت‌ها را دور بزنید. این ابزار برای ویندوز در دسترس است.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="https://github.com/403unlocker/403unlocker-cli"
                target="_blank"
                className="group relative bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8 hover:border-teal-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowTopLeft className="text-teal-400 size-6" />
                </div>
                
                <div className="text-center space-y-6">
                  <Image
                    src={Cli403Icon}
                    alt="403unlocker-cli"
                    className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      403unlocker-cli
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      یک ابزار CLI همه‌کاره برای 403Unlocker شامل قابلیت‌های BestDNS، FastDocker و Check که به صورت یک پکیج کاربردی ارائه شده است.
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="https://github.com/403unlocker/best403unlocker-py"
                target="_blank"
                className="group relative bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-8 hover:border-teal-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowTopLeft className="text-teal-400 size-6" />
                </div>
                
                <div className="text-center space-y-6">
                  <Image
                    src={py403Icon}
                    alt="best403unlocker-py"
                    className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">
                      best403unlocker-py
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      اگه برای دانلود پکیج‌ها تحریم شدید، می‌تونید با تغییر DNS این مشکل رو حل کنید. این ابزار با پایتون ساخته شده و در PyPI موجوده.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bargozin Feature Section */}
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
                      <h3 className="text-lg font-bold text-white mb-2">تست DNS Server</h3>
                      <p className="text-gray-400">تست دسترسی URL در 26+ DNS server مختلف</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">📊</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">تحلیل سرعت دانلود</h3>
                      <p className="text-gray-400">اندازه‌گیری عملکرد دانلود با تنظیمات DNS مختلف</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">🐳</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">تست Docker Registry</h3>
                      <p className="text-gray-400">ارزیابی سرعت رجیستری‌های داکر برای بهینه‌سازی workflow</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="https://github.com/Vesal-J/bargozin-desktop"
                    target="_blank"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center"
                  >
                    دانلود Bargozin
                  </Link>
                  <Link 
                    href="https://github.com/Vesal-J/bargozin-desktop"
                    target="_blank"
                    className="border border-purple-500/30 hover:border-purple-400 text-purple-300 hover:text-purple-200 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 text-center"
                  >
                    مشاهده در GitHub
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">ویژگی‌های کلیدی</h3>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">Cross-platform (Windows, macOS, Linux)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">رابط کاربری فارسی با پشتیبانی RTL</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">نتایج real-time با تست همزمان</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">مدیریت session و لغو تست</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best403Unlocker Section */}
        <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <Link
                    href="https://github.com/403unlocker/best403unlocker"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-black hover:text-gray-800 transition-colors"
                  >
                    <h3 className="text-4xl md:text-5xl font-black">
                      best403Unlocker
                    </h3>
                    <ArrowTopLeft className="size-8" />
                  </Link>
                  
                  <p className="text-xl text-gray-800 leading-relaxed">
                    یه ابزار مینیمال و خیلی کاربردی برای زمانی که میخوای پر
                    سرعت ترین dns آنتی تحریم رو برای نتورکی که داری پیدا کنی
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="https://github.com/403unlocker/best403unlocker"
                    target="_blank"
                    className="bg-black/20 backdrop-blur-sm border border-black/30 hover:border-black/50 text-black px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 text-center"
                  >
                    مشاهده پروژه
                  </Link>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-black/20 rounded-3xl blur-3xl"></div>
                  <Image
                    src={Best403}
                    alt="best403unlocker"
                    className="relative z-10 rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FastDocker Section */}
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
                    className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <h3 className="text-4xl md:text-5xl font-black">
                      fastDocker403unlocker
                    </h3>
                    <ArrowTopLeft className="size-8" />
                  </Link>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    یه ابزار بدرد بخور برای کسایی که با داکر یا کوبرنتیز سر و
                    کله میزنن و به خاطر تحریم های انلاین دانلود ایمیج های داکر
                    براشون عذابه...
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="https://github.com/403unlocker/fastDocker403unlocker"
                    target="_blank"
                    className="bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 hover:border-teal-500/50 text-teal-300 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 text-center"
                  >
                    مشاهده پروژه
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Check403Unlocker Section */}
        <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <Link
                    href="https://github.com/403unlocker/check403unlocker-ext"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-black hover:text-gray-800 transition-colors"
                  >
                    <h3 className="text-4xl md:text-5xl font-black">
                      check403unlocker
                    </h3>
                    <ArrowTopLeft className="size-8" />
                  </Link>
                  
                  <p className="text-xl text-gray-800 leading-relaxed">
                    فقط کافیه extension و سایت تحریمی مورد نظرت رو باز کنی تا
                    بهت بگه کدوم DNS میتونه تحریم این سایت رو دور بزنه
                  </p>
                  
                  <p className="text-lg text-gray-800">
                    برای دانلود روی{" "}
                    <Link
                      href="https://chromewebstore.google.com/detail/check403unlocker/elmlgegphdbjnofpobhkinmjnofkdmne"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-700 underline font-medium"
                    >
                      لینک
                    </Link>{" "}
                    کلیک کن
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="https://chromewebstore.google.com/detail/check403unlocker/elmlgegphdbjnofpobhkinmjnofkdmne"
                    target="_blank"
                    className="bg-black/20 backdrop-blur-sm border border-black/30 hover:border-black/50 text-black px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 text-center"
                  >
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

        {/* Sponsors Section */}
        <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black">
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Our Sponsors
                </span>
              </h2>
              
              <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm border border-teal-500/20 rounded-3xl p-8">
                <a
                  href="https://github.com/SinaAboutalebi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <p className="text-2xl text-gray-300 group-hover:text-white transition-colors">
                    Proudly supported by{" "}
                    <span className="font-bold text-teal-400 group-hover:text-teal-300 underline">
                      Sina Aboutalebi
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
