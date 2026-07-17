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
      w-full
      max-w-[290px]
      bg-white
      rounded-3xl
      border
      border-blue-200
      shadow-lg
      overflow-hidden
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      hover:border-blue-600
    "
    >
      {/* Top Blue Strip */}

     

      {/* Image */}

      <div className="pt-8">

        <img
          src={image}
          alt={name}
          className="
          w-32
          h-32
          rounded-full
          object-cover
          border-[5px]
          border-blue-600
          mx-auto
          shadow-lg
        "
        />

      </div>

      {/* Content */}

      <div className="px-6 py-8 text-center">

        <h3 className="text-xl font-bold text-blue-900 leading-8">

          {name}

        </h3>

        {subtitle && (

          <p className="mt-3 text-blue-700 font-semibold">

            {subtitle}

          </p>

        )}

        <p className="mt-4 text-gray-600 leading-7">

          {designation}

        </p>

      </div>

    </div>
  );
}