"use client";

import { quotes } from "@/data/quotes";
import { useEffect, useState } from "react";

export default function Hero() {
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    // Select a random quote when the component mounts
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6">
            hi, i'm
          </h1>
          <h1 className="text-7xl md:text-8xl lg:text-9xl mb-6">
            <em>rachel tomasetti</em>
          </h1>
          {/* <p className="text-xl md:text-2xl text-foreground/80">
            {randomQuote}
          </p> */}
        </div>
        <div className="relative">
          <div className="aspect-[5/5] rounded-2xl overflow-hidden shadow-2xl relative">
            <img
              src="/rachel-miami.jpg"
              alt="Rachel in Miami"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}