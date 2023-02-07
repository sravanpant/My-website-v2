import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am not your normal developer</p>
          <p className="py-2 text-gray-600">
            When I began studying C and C++ for my college semester
            examinations, I became deeply involved in coding and development.
            After then, there is no turning back.
          </p>
          <p className="py-2 text-gray-600">
            By pursuing Dr. Angela Yu&apos;s course on Udemy, I first learnt
            full stack web programming, including Mongodb, Express, React, and
            Node. The internet computer blockchain that was included in the full
            stack web development course is another platform that I have built
            on.
          </p>
          <p className="py-2 text-gray-600">
            On the LearnWeb3 platform, I am currently a sophomore graduate.
            Additionally, I&apos;m a beta tester for EarnWeb3, their new
            platform. Moreover, I know how to use Photoshop and Premiere Pro.
          </p>
          <p className="py-2 text-gray-600">
            My favourite pastime is reading. Among the well-known fiction
            authors, Agatha Christie and Enid Blyton are two of my personal
            favourites.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
