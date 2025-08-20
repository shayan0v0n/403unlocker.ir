import GithubIcon from "@/shared/icons/GithubIcon";

export default function FixedGithubIcon() {
  return (
    <div className="fixed top-3 left-0 z-50">
      <a
        href="https://github.com/403unlocker"
        target="_blank"
        className="bg-black/20 backdrop-blur-md rounded-full p-3 hover:bg-black/40 transition-all duration-300 hover:scale-110">
        <GithubIcon />
      </a>
    </div>
  );
}
