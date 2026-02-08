import Instagram from "../assets/icons/instagram.svg";
import TikTok from "../assets/icons/tiktok.svg";
import Twitter from "../assets/icons/twitter.svg";

// Replace # with your profile URLs
const socialLinks = [
  { href: "https://www.instagram.com/kaito_xux/",icon: Instagram,label: "Instagram" },
  { href: "#",icon: Twitter,label: "Twitter" },
  { href: "https://www.tiktok.com/@kaitoxux",icon: TikTok,label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="bg-white py-4 mt-auto [overflow-anchor:none]" style={{ overflowAnchor: 'none' }}>
      <div className="flex justify-center items-center gap-8">
        {socialLinks.map(({ href,icon,label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightgray hover:text-darkgray transition-colors duration-300"
            aria-label={label}
          >
            <img src={icon} alt="" className="w-6 h-6 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" />

          </a>
        ))}
      </div>
    </footer>
  );
}
