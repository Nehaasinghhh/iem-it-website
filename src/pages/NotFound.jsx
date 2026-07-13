import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-8xl font-bold text-blue-900">
        404
      </h1>

      <h2 className="text-3xl mt-5">
        Page Not Found
      </h2>

      <Link
        to="/"
        className="mt-8 bg-blue-900 text-white px-8 py-4 rounded-lg"
      >
        Back Home
      </Link>

    </div>
  );
}