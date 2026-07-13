export default function PageHeader({
  title,
  subtitle,
}) {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-24 text-white">

      <div className="container mx-auto text-center px-6">

        <h1 className="text-5xl font-bold">
          {title}
        </h1>

        <p className="mt-6 text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>

      </div>

    </section>
  );
}