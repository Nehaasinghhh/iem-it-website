import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import hero1 from "../assets/images/bg_1.jpg";
import hero2 from "../assets/images/bg_2.jpeg";
import hero3 from "../assets/images/bg_3.jpeg";
import hero4 from "../assets/images/bg_4.jpeg";

const slides = [
  {
    image: hero1,
    title: "Industrial Visit to Ericsson",
    desc: "Students visiting Ericsson Innovation Centre."
  },
  {
    image: hero2,
    title: "Industrial Visit to Webel",
    desc: "Learning industry practices from experts."
  },
  {
    image: hero3,
    title: "Technical Workshop",
    desc: "Hands-on learning with latest technologies."
  },
  {
    image: hero4,
    title: "Innovation & Research",
    desc: "Building the future through innovation."
  }
];

export default function Hero() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrent((prev) => (prev + 1) % slides.length);

    }, 4000);

    return () => clearInterval(timer);

  }, []);

  return (

<section className="relative overflow-hidden bg-gradient-to-r from-[#04184f] via-[#0A2F8F] to-[#145CE3]">

{/* Background Blur */}

<div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-blue-400/10 blur-[130px]" />

<div className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-cyan-300/10 blur-[160px]" />

<div className="container mx-auto max-w-[1320px] px-8 py-16">

<div className="grid lg:grid-cols-2 items-center gap-14">

{/* LEFT CARD */}

<div

className="

max-w-[610px]

rounded-[26px]

bg-white/10

backdrop-blur-xl

border

border-white/15

px-10

py-9

shadow-[0_25px_60px_rgba(0,0,0,.35)]

transition-all

duration-500

hover:-translate-y-2

hover:shadow-[0_35px_70px_rgba(0,0,0,.45)]

"

>

<p className="uppercase tracking-[5px] text-[18px] font-medium text-blue-100">

Explore, Learn, Innovate

</p>

<h1

className="

mt-5

text-white

font-extrabold

leading-tight

text-[58px]

"

>

Empowering

<br />

Future IT

<br />

Leaders

</h1>

<p

className="

mt-8

max-w-[500px]

text-[18px]

leading-9

text-blue-100

"

>

Dive into a world of cutting-edge technology where innovation

meets knowledge. The Department of Information Technology

welcomes students into an immersive learning environment that

encourages creativity, practical knowledge and industry-ready

skills.

</p>

<div className="mt-10 flex gap-5">

    <button
  className="
    group
    flex
    items-center
    gap-2
    rounded-xl
    bg-gradient-to-r
    from-blue-500
    to-blue-700
    px-8
    py-4
    font-semibold
    text-white
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-105
    hover:shadow-blue-500/40
  "
>
  Student Corner

  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</button>

<button
  className="
    group
    flex
    items-center
    gap-2
    rounded-xl
    border-2
    border-white/70
    px-8
    py-4
    font-semibold
    text-white
    transition-all
    duration-300
    hover:bg-white
    hover:text-blue-900
    hover:-translate-y-1
  "
>
  Know More

  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</button>

</div>

</div>

{/* RIGHT IMAGE CARD */}

<div
  className="
    relative
    rounded-[30px]
    border
    border-white/30
    bg-white/10
    backdrop-blur-xl
    p-4
    shadow-[0_25px_60px_rgba(0,0,0,.35)]
    transition-all
    duration-500
    hover:-translate-y-2
  "
>

<div className="overflow-hidden rounded-[22px]">

<img
  src={slides[current].image}
  alt={slides[current].title}
  className="
    h-[470px]
    w-full
    rounded-[22px]
    object-cover
    transition-transform
    duration-700
    hover:scale-110
  "
/>

<div className="absolute inset-x-4 bottom-4 rounded-b-[22px] bg-gradient-to-t from-[#02103d]/95 via-[#02103d]/60 to-transparent p-6">

<div className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-lg">

Featured Event

</div>

<h2 className="mt-4 text-3xl font-bold text-white">

{slides[current].title}

</h2>

<p className="mt-2 max-w-md text-blue-100">

{slides[current].desc}

</p>

</div>

</div>

<div className="mt-6 flex justify-center gap-3">

{slides.map((_, index) => (

<button
key={index}
onClick={() => setCurrent(index)}
className={`transition-all duration-500 rounded-full ${
current === index
? "h-3 w-10 bg-white"
: "h-3 w-3 bg-blue-300 hover:bg-white"
}`}
/>

))}

</div>

{/* Floating Information Card */}

<div
  className="
    absolute
    -bottom-8
    -left-8
    hidden
    lg:flex
    items-center
    gap-4
    rounded-2xl
    bg-white
    p-5
    shadow-[0_20px_45px_rgba(0,0,0,.25)]
    transition-all
    duration-300
    hover:-translate-y-2
  "
>

 
</div>

{/* Floating Circle */}

<div className="absolute -top-5 -right-5 h-16 w-16 rounded-full border border-white/30 bg-white/10 backdrop-blur-xl"></div>

<div className="absolute -bottom-4 right-16 h-8 w-8 rounded-full bg-blue-300/30 blur-md"></div>

</div>

{/* END RIGHT CARD */}

</div>

{/* Decorative Elements */}

<div className="absolute top-20 left-20 h-5 w-5 rounded-full bg-white/40 animate-pulse"></div>

<div className="absolute top-44 right-36 h-4 w-4 rounded-full bg-blue-200/40 animate-pulse"></div>

<div className="absolute bottom-24 left-1/3 h-3 w-3 rounded-full bg-white/40"></div>

<div className="absolute bottom-20 right-1/4 h-6 w-6 rounded-full bg-cyan-300/30 blur-sm"></div>

{/* Bottom Glow */}

<div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[300px] w-[900px] rounded-full bg-blue-500/20 blur-[140px]"></div>
      </div>

    </section>
  );
}
