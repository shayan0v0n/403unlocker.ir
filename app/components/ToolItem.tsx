import ArrowTopLeft from "@/shared/icons/ArrowTopLeft";
import Link from "next/link";

export default function ToolItem(props: {
  href: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  isSpecial?: boolean;
}) {
  return (
    <Link
      href={props.href}
      target="_blank"
      className={`group relative bg-gradient-to-br backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
        props.isSpecial
          ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20"
          : "bg-gradient-to-br from-cyan-500/10 to-cyan-500/10 border-cyan-500/20"
      }`}>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowTopLeft className="text-purple-400 size-6" />
      </div>

      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
          {props.icon}
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
            {props.title}
          </h3>
          <p className="text-gray-400 leading-relaxed">{props.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {props.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
