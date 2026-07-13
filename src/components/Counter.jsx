import { Users, BookOpen, Award, Briefcase } from "lucide-react";

export default function Counter() {

const stats = [

{
icon:<Users size={40}/>,
number:"1500+",
title:"Students"
},

{
icon:<BookOpen size={40}/>,
number:"50+",
title:"Faculty"
},

{
icon:<Award size={40}/>,
number:"100+",
title:"Research Papers"
},

{
icon:<Briefcase size={40}/>,
number:"250+",
title:"Recruiters"
}

];

return(

<section className="bg-blue-900 py-20">

<div className="container mx-auto px-6">

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

{stats.map((item,index)=>(

<div
key={index}
className="text-center text-white">

<div className="flex justify-center mb-5">

{item.icon}

</div>

<h2 className="text-5xl font-bold">

{item.number}

</h2>

<p className="mt-4 text-blue-100">

{item.title}

</p>

</div>

))}

</div>

</div>

</section>

)

}