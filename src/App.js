import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-blue-400">Inderjeet Singh</h1>
        <p className="text-xl text-gray-300 mt-2">Video Editor & Graphic Designer</p>
        <a href="#portfolio">
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-medium">
            View My Work
          </button>
        </a>
      </section>

      {/* About Me */}
      <section className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-blue-400 mb-4">About Me</h2>
        <p className="text-gray-300">
          I’m a final-year B.Tech Computer Science student with a passion for video editing and graphic design. I’ve done freelance work creating promotional content, social media edits, and visuals for clients. I'm proficient in Photoshop, Premiere Pro, and have a knack for clean, professional designs.
        </p>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-gray-800 py-10 px-4">
        <h2 className="text-3xl text-center text-blue-400 mb-8">Portfolio</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            "https://youtu.be/xbYNoWKBuiI",
            "https://youtu.be/ZUVxPRwFBE4",
            "https://youtu.be/v4JlI0DZphA",
            "https://www.youtube.com/watch?v=K9FuqFE886g",
            "https://youtu.be/Wax5CdIHwIc"
          ].map((link, idx) => (
            <div key={idx} className="bg-gray-700 rounded shadow p-2">
              <iframe
                width="100%"
                height="250"
                src={link.replace("watch?v=", "embed/")}
                title={`Project ${idx + 1}`}
                allowFullScreen
                className="rounded"
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl text-blue-400 mb-4">Skills</h2>
        <ul className="text-gray-300 grid md:grid-cols-2 gap-2">
          <li>Video Editing (Adobe Premiere Pro)</li>
          <li>Graphic Design (Photoshop)</li>
          <li>C Programming</li>
          <li>Microsoft Office Suite</li>
          <li>Multilingual: Hindi, English, Punjabi</li>
        </ul>
      </section>

      {/* Resume Download */}
      <section className="text-center py-10">
        <a href="/Inderjeet's Resume.pdf" download>
          <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white font-medium">
            Download Resume
          </button>
        </a>
      </section>

      {/* Contact */}
      <section className="bg-gray-800 py-8 px-4 text-center">
        <h2 className="text-2xl text-blue-400 mb-4">Contact Me</h2>
        <div className="flex flex-col md:flex-row justify-center gap-4 text-gray-300">
          <div className="flex items-center gap-2">
            <Phone size={18} /> +91 9811398700
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} /> iaminderjeetgill@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <Linkedin size={18} />
            <a
              href="https://www.linkedin.com/in/inderjeet-singh-gill-5b2722333/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
