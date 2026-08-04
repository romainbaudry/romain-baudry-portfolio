"use client";

import React, { useState } from "react";
import VideoText from "./components/VideoText";

const sections = [
  {
    number: "01",
    title: "DIRECTOR",
    subtitle: "documentary, artist content, events",
    bg: "bg-[#F4C234]",
    hoverBg: "hover:bg-[#34B300]",
    text: "text-black",
    accent: "text-black",
  },
  {
    number: "02",
    title: "EDITOR",
    subtitle: "Editing, rhythm and post-production",
    bg: "bg-[#4C8EF7]",
    hoverBg: "hover:bg-[#C69BEA]",
    text: "text-black",
    accent: "text-black",
  },
  {
    number: "03",
    title: "YOUTUBE",
    subtitle: "YouTube, social media, photography and thumbnails",
    bg: "bg-[#E6A8C9]",
    hoverBg: "hover:bg-[#34B300]",
    text: "text-black",
    accent: "text-black",
  },
  {
    number: "04",
    title: "MUSIC",
    subtitle: "DJ sets, events and musical projects",
    bg: "bg-[#FF5533]",
    hoverBg: "hover:bg-[#F4C234]",
    text: "text-black",
    accent: "text-black",
  },
];

const directorVideos = [
  {
    title: "Blacksmith",
    youtubeUrl: "https://youtu.be/26FzZbTLQoY",
    thumbnail: "https://img.youtube.com/vi/26FzZbTLQoY/maxresdefault.jpg",
    previewVideo: "/videos/director/blacksmith.mp4",
  },
  {
    title: "Une Ferme sur Sol Vivant",
    youtubeUrl: "https://youtu.be/T6cFPxLRkTs",
    thumbnail: "https://img.youtube.com/vi/T6cFPxLRkTs/maxresdefault.jpg",
    previewVideo: "/videos/director/ferme.mp4",
  },
  {
    title: "Equilibrivm",
    youtubeUrl: "https://youtu.be/TDGUyRcKDQY",
    thumbnail: "https://img.youtube.com/vi/TDGUyRcKDQY/maxresdefault.jpg",
    previewVideo: "/videos/director/equilibrivm.mp4",
  },
  {
    title: "La Bonne Aventure",
    youtubeUrl: "https://youtu.be/sdHxbXPZtUA",
    thumbnail: "https://img.youtube.com/vi/sdHxbXPZtUA/maxresdefault.jpg",
    previewVideo: "/videos/director/bonne-aventure-2.mp4",
  },
];

const editorVideos = [
  {
    title: "Editor Project 1",
    youtubeUrl: "https://youtu.be/hzexEBHNh_E",
    thumbnail: "https://img.youtube.com/vi/hzexEBHNh_E/maxresdefault.jpg",
    previewVideo: "/videos/editor/a-second-life.mp4",
  },
  {
    title: "Editor Project 2",
    youtubeUrl: "https://youtu.be/1nictnMek7I",
    thumbnail: "https://img.youtube.com/vi/1nictnMek7I/maxresdefault.jpg",
    previewVideo: "/videos/editor/allianz.mp4",
  },
  {
    title: "Editor Project 3",
    youtubeUrl: "https://youtu.be/bO7QcNrlU-s",
    thumbnail: "https://img.youtube.com/vi/bO7QcNrlU-s/maxresdefault.jpg",
    previewVideo: "/videos/editor/fretbay.mp4",
  },
  {
    title: "Editor Project 4",
    youtubeUrl: "https://youtu.be/t0vYfXplAZ4",
    thumbnail: "https://img.youtube.com/vi/t0vYfXplAZ4/maxresdefault.jpg",
    previewVideo: "/videos/editor/grand-blanc.mp4",
  },
  {
    title: "Editor Project 5",
    youtubeUrl: "https://youtu.be/j571JNrDRwE",
    thumbnail: "https://img.youtube.com/vi/j571JNrDRwE/maxresdefault.jpg",
    previewVideo: "/videos/editor/repetto.mp4",
  },
  {
    title: "Editor Project 6",
    youtubeUrl: "https://youtu.be/xa9F1JSC4g4",
    thumbnail: "https://img.youtube.com/vi/xa9F1JSC4g4/maxresdefault.jpg",
    previewVideo: "/videos/editor/undone.mp4",
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
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "fr">("en");

  const currentSections = sections.map((section) => ({
    ...section,
    title:
      language === "fr"
        ? {
            DIRECTOR: "RÉALISATION",
            EDITOR: "MONTAGE",
            YOUTUBE: "YOUTUBE",
            MUSIC: "MUSIQUE",
          }[section.title] || section.title
        : section.title,
    subtitle:
      language === "fr"
        ? {
            "01": "documentaire, contenu artistique, événements",
            "02": "montage, rythme et post-production",
            "03": "YouTube, réseaux sociaux, photo et miniatures",
            "04": "DJ sets, événements et projets musicaux",
          }[section.number] || section.subtitle
        : section.subtitle,
  }));

  const activeSection = currentSections.find(
    (section) => section.number === openSection
  );

  return (
    <main className="bg-[#F7F4EE] text-black min-h-screen">
      <section className="relative px-6 md:px-10 pt-8 pb-8 border-b border-black overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source src="/videos/flicker-texture-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        <div className="relative z-10 bg-transparent">
          <div className="grid md:grid-cols-[1fr_320px] gap-8 md:gap-10 items-end">
            <div>
              <h1 className="leading-[0.85]">
                <span className="text-white block text-[20vw] sm:text-[16vw] md:text-[7vw] font-black uppercase leading-none">
                  Romain
                </span>
                <span className="text-white block text-[20vw] sm:text-[16vw] md:text-[7vw] font-black uppercase leading-none">
                  Baudry
                </span>
              </h1>
            </div>

            <div className="md:justify-self-end flex flex-col items-start md:flex-row gap-3 mt-4 md:mt-0">
              <button
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="paper-texture w-full md:w-auto text-sm uppercase tracking-[0.25em] font-semibold border border-black px-5 py-3 min-w-[90px] bg-[#34B300] hover:bg-[#4C8EF7] hover:text-white hover:-translate-y-1 hover:shadow-[4px_4px_0px_black] transition-all duration-300"
              >
                {language === "en" ? "FR" : "EN"}
              </button>
              <button
                onClick={() => setIsAboutOpen(true)}
                className="paper-texture w-full md:w-auto text-sm uppercase tracking-[0.25em] font-semibold border border-black px-5 md:px-6 py-3 min-w-[140px] bg-[#C69BEA] hover:bg-[#4C8EF7] hover:-translate-y-1 hover:shadow-[4px_4px_0px_black] transition-all duration-300"
              >
                {language === "en" ? "About" : "About"}
              </button>
              <button
                onClick={() => setIsContactOpen(true)}
                className="paper-texture w-full md:w-auto text-sm uppercase tracking-[0.25em] font-semibold border border-black px-5 md:px-6 py-3 min-w-[140px] bg-[#FF5533] hover:bg-[#34B300] hover:-translate-y-1 hover:shadow-[4px_4px_0px_black] transition-all duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        {currentSections.map((section) => (
          <div key={section.number}>
            <div
              onClick={() =>
                setOpenSection(
                  openSection === section.number ? null : section.number
                )
              }
              onMouseEnter={() => setHoveredSection(section.number)}
              onMouseLeave={() => setHoveredSection(null)}
              className={`${section.bg} ${section.hoverBg} ${section.text} paper-texture border-b border-black px-6 md:px-10 py-6 md:py-8 cursor-pointer transition-all duration-500 hover:scale-y-[1.12] hover:z-10 hover:relative group`}
            >
              <div className="grid grid-cols-[20px_55px_1fr] md:grid-cols-[40px_120px_1fr_100px] items-center gap-3 md:gap-8 transition-all duration-500 group-hover:py-3">
                <div className="w-4 h-4 rounded-full border border-current" />

                <div className={`text-[10vw] md:text-[5vw] font-black leading-none ${section.accent}`}>
                  {section.number}
                </div>

                <h2 className="transition-all duration-500 group-hover:translate-x-3 group-hover:scale-y-110 origin-center break-words">
                  <VideoText
                    text={section.title}
                    active={hoveredSection === section.number}
                    videoSrc="/videos/flicker-texture-2.mp4"
                    className="text-[7vw] md:text-[6vw] leading-none font-black uppercase"
                  />
                </h2>
                
                <div className="hidden md:flex justify-end">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-black text-white flex items-center justify-center text-3xl md:text-5xl font-black transition-all duration-300 group-hover:scale-110">
                    <svg
                      viewBox="0 0 24 24"
                      className={`w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 ${
                        openSection === section.number
                          ? "rotate-90 group-hover:rotate-[110deg]"
                          : "rotate-0 group-hover:rotate-[20deg]"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {section.number === "01" && openSection === "01" && (
              <div className="bg-black text-white px-6 md:px-10 py-10 border-b border-black animate-in fade-in duration-500">
                <div className="grid md:grid-cols-2 gap-6">
                  {directorVideos.map((video) => (
                    <div
                      key={video.youtubeUrl}
                      onClick={() => setSelectedVideo(video.youtubeUrl)}
                      className="group relative block overflow-hidden bg-black cursor-pointer"
                    >
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full aspect-video object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                      >
                        <source src={video.previewVideo} type="video/mp4" />
                      </video>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center border border-white/20">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-7 h-7 text-white"
                            fill="currentColor"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.number === "02" && openSection === "02" && (
              <div className="bg-black text-white px-6 md:px-10 py-10 border-b border-black animate-in fade-in duration-500">
                <div className="grid md:grid-cols-2 gap-6">
                  {editorVideos.map((video) => (
                    <div
                      key={video.youtubeUrl}
                      onClick={() => setSelectedVideo(video.youtubeUrl)}
                      className="group relative block overflow-hidden bg-black cursor-pointer"
                    >
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full aspect-video object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                      >
                        <source src={video.previewVideo} type="video/mp4" />
                      </video>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center border border-white/20">
                          <svg
                            viewBox="0 0 24 24"
                            className="w-7 h-7 text-white"
                            fill="currentColor"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.number === "03" && openSection === "03" && (
              <div className="bg-black text-white px-6 md:px-10 py-10 border-b border-black animate-in fade-in duration-500">
                <div className="grid md:grid-cols-2 gap-6">
                  {contentVideos.map((video) => (
                    <div
                      key={video.youtubeUrl}
                      onClick={() => setSelectedVideo(video.youtubeUrl)}
                      className="group relative block overflow-hidden bg-black cursor-pointer"
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
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.number === "04" && openSection === "04" && (
              <div className="bg-black text-white px-6 md:px-10 py-10 border-b border-black animate-in fade-in duration-500">
                <div className="grid md:grid-cols-2 gap-6">
                  {musicVideos.map((video) => (
                    <div
                      key={video.youtubeUrl}
                      onClick={() => setSelectedVideo(video.youtubeUrl)}
                      className="group relative block overflow-hidden bg-black cursor-pointer"
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
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-5xl leading-none z-10"
          >
            ×
          </button>

          <div className="w-full max-w-6xl aspect-video">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo
                .split("/")
                .pop()
                ?.split("?")[0]}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
          <div className="paper-texture bg-[#34B300] border-2 border-black max-w-2xl w-full p-6 md:p-10 shadow-[12px_12px_0px_black] relative rotate-0 md:rotate-2">
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 text-2xl leading-none"
            >
              ×
            </button>

            <div>
              <div>
                <h3 className="text-4xl md:text-6xl leading-[0.85] font-black uppercase mb-6">
                  {language === "en" ? "Let's" : "Parlons"}
                  <br />
                  {language === "en" ? "Talk" : "Ensemble"}
                </h3>

                <p className="text-lg md:text-2xl leading-tight font-medium mb-8 max-w-lg">
                  {language === "en"
                    ? "Available for directing, editing, content creation and creative collaborations."
                    : "Disponible pour la réalisation, le montage, la création de contenu et les collaborations créatives."}
                </p>

                <div className="space-y-5 text-lg">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] mb-2">
                      {language === "en" ? "Phone" : "Téléphone"}
                    </p>
                    <a href="tel:+33699425230" className="hover:underline font-medium">
                      +33 6 99 42 52 30
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
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/40 p-3 md:p-6 overflow-y-auto">
          <div className="paper-texture bg-[#FFF200] border-2 border-black max-w-5xl w-full p-6 pt-16 md:p-12 shadow-[12px_12px_0px_black] relative rotate-0 md:-rotate-2 max-h-[95vh] mt-4 md:mt-8">
            <button
              onClick={() => setIsAboutOpen(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-4xl leading-none z-50 bg-[#FFF200] border border-black w-12 h-12 flex items-center justify-center"
            >
              ×
            </button>

            <div className="grid md:grid-cols-[420px_1fr] gap-10 items-start mb-10">
              <div>
                <h3 className="text-4xl md:text-7xl leading-[0.85] font-black uppercase mb-6">
                  Romain
                  <br />
                  Baudry
                </h3>


                <p className="text-sm md:text-lg leading-relaxed max-w-md">
                  {language === "en" ? (
                    <>
                      Director, editor, content creator and DJ, I move between disciplines and use each of them to feed the others.
                      <br /><br />
                      My work is driven by curiosity, visual culture and a constant search for emotion, rhythm and strong imagery.
                    </>
                  ) : (
                    <>
                      Réalisateur, monteur, créateur de contenu et DJ, je navigue entre les disciplines et les fais dialoguer entre elles.
                      <br /><br />
                      Mon travail est guidé par la curiosité, la culture visuelle et une recherche constante d'émotion, de rythme et d'images fortes.
                    </>
                  )}
                </p>
              </div>

              <div>
                <img
                  src="/romain-about.jpg"
                  alt="Romain Baudry"
                  className="w-full max-w-[320px] mx-auto aspect-[4/5] object-cover border-2 border-black"
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