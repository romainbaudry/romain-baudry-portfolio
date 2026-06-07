"use client";

import React, { useState } from "react";

const sections = [
  {
    number: "01",
    title: "DIRECTOR",
    subtitle: "documentary, artist content, events",
    bg: "bg-[#E8D934]",
    text: "text-black",
    accent: "text-black",
  },
  {
    number: "02",
    title: "EDITOR",
    subtitle: "Editing, rhythm and post-production",
    bg: "bg-[#1D32D8]",
    text: "text-white",
    accent: "text-white",
  },
  {
    number: "03",
    title: "SOCIAL",
    subtitle: "YouTube, social media, photography and thumbnails",
    bg: "bg-[#E6C1D6]",
    text: "text-black",
    accent: "text-black",
  },
  {
    number: "04",
    title: "MUSIC",
    subtitle: "DJ sets, events and musical projects",
    bg: "bg-[#1E2418]",
    text: "text-[#E8D934]",
    accent: "text-[#E8D934]",
  },
];

const directorVideos = [
  {
    title: "Une Ferme sur Sol Vivant",
    youtubeUrl: "https://youtu.be/T6cFPxLRkTs",
    thumbnail: "https://img.youtube.com/vi/T6cFPxLRkTs/maxresdefault.jpg",
  },
  {
    title: "Blacksmith",
    youtubeUrl: "https://youtu.be/26FzZbTLQoY",
    thumbnail: "https://img.youtube.com/vi/26FzZbTLQoY/maxresdefault.jpg",
  },
  {
    title: "Equilibrivm",
    youtubeUrl: "https://youtu.be/TDGUyRcKDQY",
    thumbnail: "https://img.youtube.com/vi/TDGUyRcKDQY/maxresdefault.jpg",
  },
  {
    title: "La Bonne Aventure",
    youtubeUrl: "https://youtu.be/sdHxbXPZtUA",
    thumbnail: "https://img.youtube.com/vi/sdHxbXPZtUA/maxresdefault.jpg",
  },
];

const editorVideos = [
  {
    title: "Editor Project 1",
    youtubeUrl: "https://youtu.be/bO7QcNrlU-s",
    thumbnail: "https://img.youtube.com/vi/bO7QcNrlU-s/maxresdefault.jpg",
  },
  {
    title: "Editor Project 2",
    youtubeUrl: "https://youtu.be/t0vYfXplAZ4",
    thumbnail: "https://img.youtube.com/vi/t0vYfXplAZ4/maxresdefault.jpg",
  },
  {
    title: "Editor Project 3",
    youtubeUrl: "https://youtu.be/hzexEBHNh_E",
    thumbnail: "https://img.youtube.com/vi/hzexEBHNh_E/maxresdefault.jpg",
  },
  {
    title: "Editor Project 4",
    youtubeUrl: "https://youtu.be/j571JNrDRwE",
    thumbnail: "https://img.youtube.com/vi/j571JNrDRwE/maxresdefault.jpg",
  },
  {
    title: "Editor Project 5",
    youtubeUrl: "https://youtu.be/1nictnMek7I",
    thumbnail: "https://img.youtube.com/vi/1nictnMek7I/maxresdefault.jpg",
  },
  {
    title: "Editor Project 6",
    youtubeUrl: "https://youtu.be/xa9F1JSC4g4",
    thumbnail: "https://img.youtube.com/vi/xa9F1JSC4g4/maxresdefault.jpg",
  },
];

const contentVideos = [
  {
    title: "Content Project 1",
    youtubeUrl: "https://youtu.be/_eQmH7eqT64",
    thumbnail: "https://img.youtube.com/vi/_eQmH7eqT64/maxresdefault.jpg",
  },
  {
    title: "Content Project 2",
    youtubeUrl: "https://youtu.be/yrq1ZbJswf0",
    thumbnail: "https://img.youtube.com/vi/yrq1ZbJswf0/maxresdefault.jpg",
  },
  {
    title: "Content Project 3",
    youtubeUrl: "https://youtu.be/wVMMacnBDew",
    thumbnail: "https://img.youtube.com/vi/wVMMacnBDew/maxresdefault.jpg",
  },
  {
    title: "Content Project 4",
    youtubeUrl: "https://youtu.be/7BjZW6LsAh4",
    thumbnail: "https://img.youtube.com/vi/7BjZW6LsAh4/maxresdefault.jpg",
  },
  {
    title: "Content Project 5",
    youtubeUrl: "https://youtu.be/z_eIaAURudk",
    thumbnail: "https://img.youtube.com/vi/z_eIaAURudk/maxresdefault.jpg",
  },
  {
    title: "Content Project 6",
    youtubeUrl: "https://youtu.be/iQ7s5rSHeEI",
    thumbnail: "https://img.youtube.com/vi/iQ7s5rSHeEI/maxresdefault.jpg",
  },
];

const musicVideos = [
  {
    title: "Music Project 1",
    youtubeUrl: "https://youtu.be/AFpiS1whDRU",
    thumbnail: "https://img.youtube.com/vi/AFpiS1whDRU/maxresdefault.jpg",
  },
  {
    title: "Music Project 2",
    youtubeUrl: "https://youtu.be/2aSPt0Ysw18",
    thumbnail: "https://img.youtube.com/vi/2aSPt0Ysw18/maxresdefault.jpg",
  },
];

export default function Home() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const activeSection = sections.find(
    (section) => section.number === openSection
  );

  return (
    <main className="bg-[#F7F4EE] text-black min-h-screen">
      <section className="px-6 md:px-10 pt-8 pb-8 border-b border-black">
        <div className="grid md:grid-cols-[1fr_320px] gap-10 items-end">
          <div>
            <h1 className="text-[15vw] md:text-[7.5vw] leading-[0.82] font-black uppercase">
              <span className="text-black">
                Romain
              </span>
              <br />
              <span className="text-black">
                Baudry
              </span>
            </h1>
          </div>

          <div className="md:justify-self-end flex gap-3">
            <button
              onClick={() => setIsContactOpen(true)}
              className="text-sm uppercase tracking-[0.25em] font-semibold border border-black px-6 py-3 bg-white hover:-translate-y-1 hover:shadow-[4px_4px_0px_black] transition-all duration-300"
            >
              Contact
            </button>

            <button
              onClick={() => setIsAboutOpen(true)}
              className="text-sm uppercase tracking-[0.25em] font-semibold border border-black px-6 py-3 bg-[#E8D934] hover:-translate-y-1 hover:shadow-[4px_4px_0px_black] transition-all duration-300"
            >
              About
            </button>
          </div>
        </div>
      </section>

      <section>
        {sections.map((section) => (
          <div key={section.number}>
            <div
              onClick={() =>
                setOpenSection(
                  openSection === section.number ? null : section.number
                )
              }
              className={`${section.bg} ${section.text} border-b border-black px-6 md:px-10 py-6 md:py-8 cursor-pointer transition-all duration-500 hover:brightness-110 hover:scale-y-[1.12] hover:z-10 hover:relative group`}
            >
              <div className="grid grid-cols-[40px_120px_1fr_220px_100px] items-center gap-4 md:gap-8 transition-all duration-500 group-hover:py-3">
                <div className="w-4 h-4 rounded-full border border-current" />

                <div className={`text-[10vw] md:text-[5vw] font-black leading-none ${section.accent}`}>
                  {section.number}
                </div>

                <h2 className="text-[12vw] md:text-[6vw] leading-none font-black uppercase transition-all duration-500 group-hover:translate-x-3 group-hover:scale-y-110 origin-center">
                  {section.title}
                </h2>

                <p className="hidden md:block text-lg leading-snug font-medium">
                  {section.subtitle}
                </p>

                <div className="flex justify-end">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-current flex items-center justify-center text-3xl font-light transition-transform duration-300 group-hover:rotate-12">
                    {openSection === section.number ? "↓" : "→"}
                  </div>
                </div>
              </div>
            </div>

            {section.number === "01" && openSection === "01" && (
              <div className="bg-black text-white px-6 md:px-10 py-10 border-b border-black animate-in fade-in duration-500">
                <div className="grid md:grid-cols-2 gap-6">
                  {directorVideos.map((video) => (
                    <a
                      key={video.youtubeUrl}
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block overflow-hidden bg-black"
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full aspect-video object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                      />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-14 rounded-xl bg-red-600 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                          <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-white ml-1" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {section.number === "02" && openSection === "02" && (
              <div className="bg-black text-white px-6 md:px-10 py-10 border-b border-black animate-in fade-in duration-500">
                <div className="grid md:grid-cols-2 gap-6">
                  {editorVideos.map((video) => (
                    <a
                      key={video.youtubeUrl}
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block overflow-hidden bg-black"
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full aspect-video object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                      />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-14 rounded-xl bg-red-600 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                          <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-white ml-1" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {section.number === "03" && openSection === "03" && (
              <div className="bg-black text-white px-6 md:px-10 py-10 border-b border-black animate-in fade-in duration-500">
                <div className="grid md:grid-cols-2 gap-6">
                  {contentVideos.map((video) => (
                    <a
                      key={video.youtubeUrl}
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block overflow-hidden bg-black"
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full aspect-video object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                      />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-14 rounded-xl bg-red-600 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                          <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-white ml-1" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {section.number === "04" && openSection === "04" && (
              <div className="bg-black text-white px-6 md:px-10 py-10 border-b border-black animate-in fade-in duration-500">
                <div className="grid md:grid-cols-2 gap-6">
                  {musicVideos.map((video) => (
                    <a
                      key={video.youtubeUrl}
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block overflow-hidden bg-black"
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full aspect-video object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                      />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-14 rounded-xl bg-red-600 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                          <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-white ml-1" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
          <div className="bg-[#FF6B57] border-2 border-black max-w-2xl w-full p-8 md:p-10 shadow-[12px_12px_0px_black] relative rotate-2">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 text-2xl leading-none"
            >
              ×
            </button>

            <div>
              <div>
                <h3 className="text-4xl md:text-6xl leading-[0.85] font-black uppercase mb-6">
                  Let's
                  <br />
                  Talk
                </h3>

                <p className="text-xl md:text-2xl leading-tight font-medium mb-8 max-w-lg">
                  Available for directing, editing, content creation and creative collaborations.
                </p>

                <div className="space-y-5 text-lg">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] mb-2">Phone</p>
                    <a href="tel:0699425230" className="hover:underline font-medium">
                      06 99 42 52 30
                    </a>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] mb-2">Email</p>
                    <a href="mailto:romainbaudrycontact@gmail.com" className="hover:underline font-medium break-all">
                      romainbaudrycontact@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isAboutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
          <div className="bg-[#FFF200] border-2 border-black max-w-5xl w-full p-8 md:p-12 shadow-[12px_12px_0px_black] relative -rotate-2">
            <button
              onClick={() => setIsAboutOpen(false)}
              className="absolute top-4 right-4 text-2xl leading-none"
            >
              ×
            </button>

            <div className="grid md:grid-cols-[420px_1fr] gap-10 items-start mb-10">
              <div>
                <h3 className="text-5xl md:text-7xl leading-[0.85] font-black uppercase mb-6">
                  Romain
                  <br />
                  Baudry
                </h3>

                <p className="text-2xl md:text-3xl leading-tight font-medium mb-8">
                  I create videos with a strong focus on visual storytelling and emotion.
                </p>

                <p className="text-base md:text-lg leading-relaxed max-w-md">
                  Working across documentaries, branded films, social content and independent projects, always searching for strong visuals, emotion and authenticity.
                </p>
              </div>

              <div>
                <img
                  src="/romain-about.jpg"
                  alt="Romain Baudry"
                  className="w-full aspect-[4/5] object-cover border-2 border-black"
                />
              </div>
            </div>

            <div className="uppercase text-sm tracking-[0.2em] font-semibold border-t border-black pt-6">
              <a
                href="https://www.instagram.com/romainbaudry/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
