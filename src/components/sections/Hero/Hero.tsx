
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-3xl px-6">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I’m <span className="text-blue-600">John Calimoso</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          I’m a Web Developer passionate about building modern, dynamic web applications.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}