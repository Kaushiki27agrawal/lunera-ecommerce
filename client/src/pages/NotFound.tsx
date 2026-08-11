import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-6xl font-bold text-pink-600">
        404
      </h1>

      <p className="text-xl text-gray-600">
        Page Not Found
      </p>

      <Link
        to="/"
        className="rounded-lg bg-pink-600 px-6 py-3 text-white hover:bg-pink-700"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;