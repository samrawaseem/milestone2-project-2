export default function AboutPage() {
  return (
    <section className="container mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold text-pink-400">About Me</h1>
      <p className="mt-4 text-gray-300">
        Dynamic professional with expertise in Pharmacy, Front-End Development, and Digital Marketing.
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-white">🎯 Skills</h2>
      <ul className="grid grid-cols-2 gap-4 mt-4 text-gray-900 bg-gray-800 p-4 rounded-lg">
        <li className="bg-pink-400 p-2 rounded">HTML, CSS, JavaScript, TypeScript</li>
        <li className="bg-pink-400 p-2 rounded">Next.js, Bootstrap</li>
        <li className="bg-pink-400 p-2 rounded">Digital Marketing, SEO</li>
        <li className="bg-pink-400 p-2 rounded">Content Writing, Research</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold text-white">📚 Education</h2>
      <ul className="text-gray-300">
        <li className="mt-2">Doctor of Pharmacy - Ziauddin University (2019)</li>
        <li className="mt-2">B.Ed - Karachi University (2024)</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold text-white">💼 Experience</h2>
      <ul className="text-gray-300">
        <li className="mt-2">Pharmacist - Nigheban Compounding Pharmacy</li>
        <li className="mt-2">Hospital Pharmacist - Ibn-e-Seena Hospital Complex</li>
        <li className="mt-2">Lecturer - Superior Grammar School</li>
      </ul>
    </section>
  );
}
