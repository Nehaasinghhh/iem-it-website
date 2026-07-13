import event1 from "../assets/images/bg_2.jpeg";
import event2 from "../assets/images/bg_1.jpg";

export default function Events() {

const events=[

{
title:"Technical Workshop",
image:event1,
date:"August 2026",
desc:"Hands-on workshop on Artificial Intelligence and Machine Learning."
},

{
title:"Hackathon",
image:event2,
date:"September 2026",
desc:"24-hour coding competition encouraging innovation and teamwork."
},

{
title:"Industrial Visit",
image:event1,
date:"October 2026",
desc:"Industry exposure through visits to leading IT companies."
},

{
title:"Research Seminar",
image:event2,
date:"November 2026",
desc:"Seminar by eminent researchers and industry professionals."
}

]

return(

<section className="py-24 bg-white">

<div className="container mx-auto px-6">

<div className="text-center">

<span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
EVENTS
</span>

<h2 className="text-5xl font-bold mt-5">
Department Activities
</h2>

<p className="mt-6 text-gray-600 max-w-3xl mx-auto">
The department regularly organizes technical events, workshops,
seminars, coding competitions and industrial visits.
</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

{events.map((event,index)=>(

<div
key={index}
className="rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300 bg-white">

<img
src={event.image}
alt={event.title}
className="h-56 w-full object-cover"
/>

<div className="p-6">

<p className="text-blue-900 font-semibold">
{event.date}
</p>

<h3 className="text-2xl font-bold mt-3">
{event.title}
</h3>

<p className="text-gray-600 mt-4">
{event.desc}
</p>

<button className="mt-6 bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
Read More
</button>

</div>

</div>

))}

</div>

</div>

</section>

)

}