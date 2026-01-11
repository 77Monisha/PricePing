import React from "react";

export default function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl text-center mx-auto">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-6 py-2 rounded-xl text-sm font-medium">
            Made with pure love by MOSH
          </div>
          <h2 className="text-5xl font-extrabold text-lime-900 tracking-wider">
            Never Miss a Price Drop
          </h2>
          <p className="text-xl text-lime-700 max-w-2xl mx-auto">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            hic, autem ipsum odio pariatur iste error sint, debitis recusandae
            minus aperiam beatae? Natus, est incidunt laborum quae repellat
            harum obcaecati?
          </p>
        </div>
      </div>
    </section>
  );
}
