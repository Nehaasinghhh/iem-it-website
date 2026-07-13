import { useEffect, useState } from "react";
import { Clock, CalendarDays } from "lucide-react";

import event1 from "../assets/images/fdp (2).jpeg";
import event2 from "../assets/images/icdc_call_for_paper.jpeg";

export default function NewsHub() {

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {

    const updateClock = () => {

      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );


      setDate(
        now.toLocaleDateString("en-IN", {
          weekday:"long",
          day:"numeric",
          month:"long",
          year:"numeric",
        })
      );

    };


    updateClock();

    const interval=setInterval(updateClock,1000);

    return()=>clearInterval(interval);

  },[]);



  const news=[

    {
      image:event2,
      title:"IEM-ICDC",
      desc:
      "IEM-ICDC 2026: International Conference on Computational Intelligence, Data Science and Cloud Computing is an endeavour in enticing interest for Computational Intelligence and Data Science applications in diverse domains. As the world is moving towards Industry 4.0, Computational Intelligence, Data Science and Cloud Computing are becoming more and more relevant in our society.",
      link:"https://iemicdc.org/"
    },


    {
      image:event1,
      title:"Faculty Development Program",
      desc:
      "The Faculty Development Program (FDP) on IoT Security is designed to equip faculty members, researchers, and industry professionals with necessary knowledge and skills to understand, analyze, and address critical security challenges in the rapidly evolving Internet of Things ecosystem.",
      link:"#"
    }

  ];



return (

<section className="bg-[#344064] py-20 min-h-screen">

<div className="container mx-auto max-w-6xl px-6">


{/* Heading */}

<div className="text-center">

<h2 className="
text-3xl 
md:text-4xl 
font-bold 
uppercase 
tracking-wide 
text-white
">

THE WHAT'S-HAPPENING-HERE HUB

</h2>


<div className="
mx-auto
mt-4
h-[3px]
w-72
bg-white
">
</div>


</div>



{/* Date Time Bar */}


<div className="
mt-12
flex
justify-between
items-center
rounded-xl
bg-white/30
px-5
py-4
shadow-lg
backdrop-blur-md
text-white
font-semibold
">


<div className="flex items-center gap-3">

<Clock size={18}/>

<span>{time}</span>

</div>



<div className="flex items-center gap-3">

<CalendarDays size={18}/>

<span>{date}</span>

</div>


</div>





{/* Cards */}


<div className="
mt-10
grid
gap-6
md:grid-cols-2
max-w-4xl
mx-auto
">


{
news.map((item,index)=>(


<div
key={index}
className="
rounded-xl
bg-[#404c70]
overflow-hidden
shadow-xl
transition
duration-300
hover:-translate-y-2
"
>


{/* Image */}


<img
src={item.image}
alt={item.title}
className="
w-full
h-52
object-cover
"
/>



{/* Content */}


<div className="p-5">


<h3
className="
text-xl
font-semibold
text-white
"
>

{item.title}

</h3>



<p
className="
mt-3
text-sm
leading-6
text-gray-200
line-clamp-6
"
>

{item.desc}

</p>



{
item.link !== "#" &&

<a
href={item.link}
className="
block
mt-5
text-orange-400
text-sm
hover:underline
"
>

{item.link}

</a>

}



</div>



</div>


))

}



</div>



</div>


{/* Scroll Top Button */}

<button
onClick={()=>window.scrollTo({
top:0,
behavior:"smooth"
})}

className="
fixed
bottom-8
right-8
h-14
w-14
rounded-full
bg-blue-600
text-white
text-3xl
shadow-lg
hover:bg-blue-700
"
>

↑

</button>



</section>

)

}