import AboutPage from "./about/page";
import ContactPage from "./contact/page";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center my-[4em]">
      <h1 className="text-4xl font-bold text-pink-400">{"👋 Hi, I'm Samra Waseem"}</h1>
      <p className="mt-4 text-lg text-gray-300 max-w-lg">
        A <span className="text-pink-300 font-semibold">Pharmacist</span>, 
        <span className="text-pink-300 font-semibold"> Front-End Developer</span>, and  
        <span className="text-pink-300 font-semibold"> Lecturer</span> blending healthcare, technology, and education.
      </p>
      <AboutPage />
      <ContactPage />
    </section>
  );
}
