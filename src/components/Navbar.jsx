import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

import logo1 from "../assets/images/IEM.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "About",
      dropdown: [
        { name: "About Us", path: "/about" },
        { name: "Vision & Mission", path: "/vision-mission" },
        { name: "PO, PEO & PSO", path: "/po-peo-pso" },
      ],
    },

    {
      name: "Academics",
      dropdown: [
        { name: "Routine", path: "/routine" },
        { name: "Curriculum", path: "/curriculum" },
        { name: "Infrastructure", path: "/infrastructure" },
      ],
    },

    {
      name: "Students",
      dropdown: [
        { name: "Placement", path: "/placement" },
        { name: "IEM IEPC", path: "/iem-iepc" },
        { name: "Hack", path: "/hack" },
        { name: "Assignments", path: "/assignments" },
        { name: "Student Achievement", path: "/student-achievement" },
        { name: "Department Events", path: "/department-events" },
      ],
    },

    {
      name: "Faculty",
      dropdown: [
        { name: "Faculty Publication", path: "/faculty-publication" },
        { name: "Annual Report", path: "/annual-report" },
      ],
    },

    {
      name: "Innovation & Initiatives",
      dropdown: [
        { name: "Innovation", path: "/innovation" },
        { name: "Student Publication", path: "/student-publication" },
        { name: "Alumni Report", path: "/alumni-report" },
      ],
    },
  ];

  return (
    <>
      <nav
        className={`
          bg-white
          border-b
          border-gray-200
          transition-all
          duration-300
          ${
            sticky
              ? "fixed top-0 left-0 w-full z-50 shadow-lg"
              : "relative"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={logo1}
              alt="IEM"
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-gray-700">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative group"
              >
                {item.dropdown ? (
                  <>
                    <button
                      className="
                        flex
                        items-center
                        gap-1
                        font-medium
                        hover:text-[#0B3D91]
                        transition-all
                        duration-300
                      "
                    >
                      {item.name}
                      <ChevronDown size={16} />
                    </button>

                    <div
                      className="
                        absolute
                        top-full
                        left-0
                        mt-2
                        min-w-[260px]
                        bg-white
                        rounded-xl
                        shadow-xl
                        border
                        border-gray-100
                        opacity-0
                        invisible
                        group-hover:opacity-100
                        group-hover:visible
                        transition-all
                        duration-300
                        z-50
                        overflow-hidden
                      "
                    >
                      {item.dropdown.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.path}
                          className="
                            block
                            px-5
                            py-3
                            text-sm
                            text-gray-700
                            hover:bg-blue-50
                            hover:text-[#0B3D91]
                            transition-all
                            duration-300
                          "
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `
                        font-medium
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "text-[#0B3D91] font-semibold"
                            : "hover:text-[#0B3D91]"
                        }
                      `
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#0B3D91]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
            {navItems.map((item, index) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === index ? null : index
                        )
                      }
                      className="
                        w-full
                        flex
                        items-center
                        justify-between
                        px-6
                        py-4
                        border-b
                        border-gray-100
                        text-gray-700
                        hover:bg-blue-50
                      "
                    >
                      <span>{item.name}</span>

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          mobileDropdown === index
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {mobileDropdown === index && (
                      <div className="bg-gray-50">
                        {item.dropdown.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => {
                              setOpen(false);
                              setMobileDropdown(null);
                            }}
                            className="
                              block
                              pl-10
                              pr-6
                              py-3
                              text-sm
                              text-gray-600
                              border-b
                              border-gray-100
                              hover:bg-blue-50
                              hover:text-[#0B3D91]
                            "
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `
                        block
                        px-6
                        py-4
                        border-b
                        border-gray-100
                        ${
                          isActive
                            ? "bg-blue-50 text-[#0B3D91] font-semibold"
                            : "text-gray-700 hover:bg-blue-50"
                        }
                      `
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      {sticky && <div className="h-20"></div>}
    </>
  );
}