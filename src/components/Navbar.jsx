import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

import logo from "../assets/images/IEM.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    {name:"Students",path:"/students"},
    { name: "Faculty", path: "/faculty" },
    { name: "Innovation & Initiatives", path: "innovation & Initiatives" }
    
  ];

  return (
    <>
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center py-8">

            {/* Logo + Title */}
            <div className="flex items-center gap-5">

              <img
  src={logo}
  alt="IEM Logo"
  className="w-40 h-40 object-contain"
/>

              <div>
                <h1 className="
                text-2xl 
                md:text-5xl 
                font-bold 
                leading-tight
                ">
                  Department of Information Technology
                </h1>

                <p className="text-blue-100 mt-2 text-sm md:text-base">
                  Institute of Engineering & Management
                </p>
              </div>

            </div>


            {/* Social Icons */}
            <div className="hidden lg:flex gap-6 text-xl">

              <FaFacebookF
                className="
                cursor-pointer
                hover:text-blue-300
                transition
                "
              />

              <FaInstagram
                className="
                cursor-pointer
                hover:text-blue-300
                transition
                "
              />

              <FaYoutube
                className="
                cursor-pointer
                hover:text-blue-300
                transition
                "
              />

            </div>


            {/* Mobile Menu */}
            <button
              className="lg:hidden"
              onClick={() => setOpen(!open)}
            >
              {
                open 
                ? <X size={32}/>
                : <Menu size={32}/>
              }
            </button>


          </div>
        </div>
      </header>



      {/* Navbar */}
      <nav
        className={`
        bg-white
        shadow-md
        transition-all
        duration-300

        ${
          sticky
          ? "fixed top-0 left-0 w-full z-50"
          : "relative"
        }
        `}
      >

        <div className="container mx-auto px-5">


          {/* Desktop Menu */}
          <ul className="
          hidden 
          lg:flex 
          justify-center 
          items-center 
          gap-12 
          py-5
          text-lg
          ">

            {
              navItems.map((item)=>(
                <li key={item.name}>

                  <NavLink
                    to={item.path}
                    className={({isActive})=>
                      `
                      transition
                      duration-300

                      ${
                        isActive
                        ? "text-blue-700 font-bold"
                        :
                        "text-gray-700 hover:text-blue-700 font-semibold"
                      }
                      `
                    }
                  >

                    {item.name}

                  </NavLink>

                </li>
              ))
            }

          </ul>



          {/* Mobile Menu */}
          {
            open && (

              <div className="
              lg:hidden
              bg-white
              shadow-md
              ">

                {
                  navItems.map((item)=>(

                    <NavLink
                      key={item.name}
                      to={item.path}
                      onClick={()=>setOpen(false)}

                      className="
                      block
                      px-6
                      py-4
                      border-b
                      text-gray-700
                      hover:bg-blue-50
                      "
                    >

                      {item.name}

                    </NavLink>

                  ))
                }

              </div>

            )
          }


        </div>

      </nav>


      {/* Space when navbar becomes fixed */}
      {
        sticky && (
          <div className="h-[90px]"></div>
        )
      }

    </>
  );
}