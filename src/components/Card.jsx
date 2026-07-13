export default function Card({
  title,
  description,
  icon,
  children,
  className = "",
}) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 ${className}`}
    >
      {icon && (
        <div className="mb-5 text-blue-900">
          {icon}
        </div>
      )}

      {title && (
        <h3 className="text-2xl font-bold mb-4 text-slate-900">
          {title}
        </h3>
      )}

      {description && (
        <p className="text-gray-600 leading-7">
          {description}
        </p>
      )}

      {children}
    </div>
  );
}