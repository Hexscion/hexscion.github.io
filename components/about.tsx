export default function About() {
  return (
    <section className="bg-dark text-light py-20 px-8">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center relative after:content-[''] after:block after:w-8 after:h-px after:bg-light after:opacity-25 after:mx-auto after:mt-2">
          Who I Am
        </h2>
        
        <div className="flex flex-col items-center gap-6 text-lg sm:text-lg lg:text-xl text-center max-w-300 leading-relaxed font-light">
          <p>
            I’m a frontend developer based in <strong className="font-bold text-accent">Mangalore, India</strong>. 
            I specialize in building clean, responsive user interfaces and focusing on performance and code quality.
          </p>
          <p>
            Beyond coding, I've always had a passion for technology and hardware. I often spend time setting up systems, 
            troubleshooting setups, and helping out my peers with tech problems in my circle.
          </p>
          <p>
            Thanks for stopping by, feel free to look around and explore my work.
          </p>
        </div>
      </div>
    </section>
  );
}
