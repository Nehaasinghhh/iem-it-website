import React from "react";

export default function FacultyCard({
  image,
  name,
  designation,
  subtitle = "",
}) {
  return (
    <div
      className="
        w-[250px]
        min-h-[360px]
        bg-white
        border
        border-blue-200
        rounded-2xl
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        p-8
        text-center
      "
    >
      <img
        src={image}
        alt={name}
        className="
          w-36
          h-36
          rounded-full
          object-cover
          mx-auto
          border-4
          border-blue-600
          shadow-md
        "
      />

      <h3 className="text-2xl font-bold text-slate-800 mt-6">
        {name}
      </h3>

      {subtitle && (
        <p className="text-blue-700 font-semibold mt-3 text-lg">
          {subtitle}
        </p>
      )}

      <p className="text-gray-600 mt-3 leading-7">
        {designation}
      </p>
    </div>
  );
}