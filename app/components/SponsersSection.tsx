export default function SponsersSection() {
  return (
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
              className="group block">
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
  );
}
