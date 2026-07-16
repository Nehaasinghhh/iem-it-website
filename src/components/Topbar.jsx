import { Mail, Phone, MapPin } from "lucide-react";

const topLinks = [
  {
    label: "Students",
    href: "https://www.iemcrp.com/",
    external: true,
  },
  {
    label: "Alumni",
    href: "https://alumni.iem.edu.in/",
    external: true,
  },
  {
    label: "Careers",
    href: "https://recruitment.iem.edu.in/",
    external: true,
  },
  
];

export default function TopBar() {
  return (
    <div className="hidden md:block bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto flex h-10 items-center justify-between px-6 text-sm">

        {/* Left Side */}
        <div className="flex items-center gap-5">

          <a
            href="mailto:uemk.cseds.71025@gmail.com"
            className="flex items-center gap-2 text-white/90 hover:text-yellow-300 transition"
          >
            <Mail size={14} className="text-yellow-400" />
           moutushi.singh@iem.edu.in
          </a>

          <span className="h-4 w-px bg-white/30"></span>

          <a
            href="tel:+913323572995"
            className="flex items-center gap-2 text-white/90 hover:text-yellow-300 transition"
          >
            <Phone size={14} className="text-yellow-400" />
             8069795500
          </a>

          <span className="hidden lg:block h-4 w-px bg-white/30"></span>

          <div className="hidden lg:flex items-center gap-2 text-white/80">
            <MapPin size={14} className="text-yellow-400" />
            Salt Lake, Kolkata, West Bengal 700160
          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {topLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              className="group relative text-white/90 transition hover:text-yellow-300"
            >
              {item.label}

              <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}

        </div>

      </div>
    </div>
  );
}