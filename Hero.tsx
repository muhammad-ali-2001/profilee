/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import HeroLink from "./HeroLink";
import ResumeLink from "./ResumeLink";

function Hero() {
  return (
    <>
      <div
        className="relative w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <h2 className="text-4xl mb-5">Hello, I'm Ali.</h2>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
          I enjoy <span className="heroShiny1 text-fun-pink">building</span> and{" "}
          <span className="heroShiny2 text-fun-pink">designing</span> for the
          web and mobile.
          <img
            alt="html"
            className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px] animate-bounce"
            style={{ animationDelay: "0.4s" }}
            src={`static/doodles/hero/html.svg`}
          />
          <img
            alt="nextjs"
            className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11 animate-bounce"
            style={{ animationDelay: "0.2s" }}
            src={`static/doodles/hero/nextjs.svg`}
          />
          <img
            alt="coder"
            className="sqD hidden sm:block bottom-[-340px] left-[-180px] animate-bounce"
            style={{ animationDelay: "0.4s" }}
            src={`static/doodles/hero/coder.svg`}
          />
          <img
            alt="js"
            className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px] animate-bounce"
            style={{ animationDelay: "0.5s" }}
            src={`static/doodles/hero/js.svg`}
          />
          <img
            alt="dino"
            className="sqD bottom-[-320px] right-[65%] sm:right-[45%] animate-bounce"
            style={{ animationDelay: "0.6s" }}
            src={'static/doodles/hero/dino.svg'}
          />
          <img
            alt="paintbrush"
            className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%] animate-bounce"
            style={{ animationDelay: "0.7s" }}
            src={`static/doodles/hero/paintbrush.svg`}
          />
          <img
            alt="pop1"
            className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px] animate-bounce"
            src={`static/doodles/hero/pop1.svg`}
          />
          <img
            alt="code"
            className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40 animate-bounce"
            style={{ animationDelay: "0.9s" }}
            src={`static/doodles/hero/code.svg`}
          />
        </h1>
        <div style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between", gap: "20px" }}>
          <HeroLink />
          <ResumeLink />
        </div>
      </div>
    </>
  );
}

export default Hero;
