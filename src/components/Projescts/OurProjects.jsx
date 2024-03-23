import React from 'react';
import './styles.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
const OurProjects = () => {
  return (
    <div
      id="ourprojects"
      className="w-screen"
      style={{ marginTop: '5rem', marginBottom: '12rem' }}
    >
      <div className="flex flex-col justify-center py-3 items-center ">
        {/* container of page name icon and the page description */}
        <div className="flex gap-2 py-3 md:gap-x-10 items-center">
          {' '}
          {/* the icon */}
          <FaLongArrowAltRight className="text-2xl " />
          {/* the page name */}
          <h1 className="text-gray-600 font-bold md:text-5xl py-5">
            Our Projects
          </h1>
        </div>
        {/* page description */}
        <h1 className=" text-gray-400 md:text-2xl px-6 lg:text-4xl text-center ">
          Biodiversity within natural and human-altered landscapes in rural and
          urban areas is well conserved and derived ecosystem services are
          flourishing
        </h1>
      </div>
      {/* end container of page name  , icon and descrioption */}

      {/* projects container */}
      <div className="w-screen grid pt-20 place-items-center p-5 gap-3 grid-cols-1 px-4 bg-zinc-50  md:grid-cols-2 lg:grid-cols-3">
        {/* first grid  */}
        <div className="my-4">
          {/* image */}
          <img
            src="../public/ProjectsFiles/mashyoza1.jpeg"
            alt="lantana image not found"
            className="rounded-lg "
          />
          {/* project title */}
          <h1 className="text-sky-950 font-semibold my-3 md:text-2xl ">
            Conserving remnant ecosystem
          </h1>
          {/* project description */}
          <p className="text-gray-400 md:text-xl font-medium pr-3">
            We monitor the biodiversity of remnant ecosystems, such as the
            rainforest of Busaga, the gallery forest of Mashyoza and the
            riparian forest of protected lakes.
          </p>
        </div>
        {/* end of first grid */}

        {/* second grid  */}
        <div className="my-4">
          {/* image */}
          <img
            src="../public/ProjectsFiles/restoration1.jpeg"
            alt="lantana image not found"
            className="rounded-lg "
          />
          {/* project title */}
          <h1 className="text-sky-950 font-semibold my-3 md:text-2xl ">
            Restoring landscapes
          </h1>
          {/* project description */}
          <p className="text-gray-400 md:text-xl font-medium pr-3">
            We contribute to national goals of forest landscape restoration, and
            we lay emphasis on growing indigenous trees due to their crucial
            roles of supporting biodiversity and carbon sequestratio
          </p>
        </div>

        {/* second grid */}

        {/* third grid  */}
        <div className="my-4">
          {/* image */}
          <img
            src="../public/ProjectsFiles/Lantana1.JPG"
            alt="lantana image not found"
            className="rounded-lg "
          />
          {/* project title */}
          <h1 className="text-sky-950 font-semibold my-3 md:text-2xl ">
            Managing invasive species
          </h1>
          {/* project description */}
          <p className="text-gray-400 md:text-xl font-medium pr-3">
            We raise public awareness on the invasion of Lantana camara in
            native and exotic woodlands and advocate for its removal from the
            flower market
          </p>
        </div>
        {/* end of third grid  */}

        {/* fourth grid  */}
        <div className="my-4">
          {/* image */}
          <img
            src="../public/ProjectsFiles/birds.png"
            alt="lantana image not found"
            className="rounded-lg "
          />
          {/* project title */}
          <h1 className="text-sky-950 font-semibold my-3 md:text-2xl ">
            Bird naming protocol
          </h1>
          {/* project description */}
          <p className="text-gray-400 md:text-xl font-medium pr-3">
            We lead the monumental project of documenting and assigning
            Kinyarwanda names of all bird species of Rwanda (Slightly over 700)
            in a bid to ignite the human-nature connection and to safeguard
            associated traditions
          </p>
        </div>

        {/* fourth grid  */}
      </div>
      <div className="grid grid-cols-1 gap-4 px-3 md:grid-cols-2 ">
        <div className="bg-red-500  justify-center flex">
          <iframe
            // width="560"
            height="400"
            className="object-cover w-full"
            src="https://www.youtube.com/embed/BNlJS-F-Oio?si=HvMkF6Iy19Sj98Hp&amp;start=1673"
            title="CoEB WEEKLY SEMINAR SERIES on Developing a bird-naming protocol for the long-term conservation ."
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="bg-blue-400 justify-center flex ">
          <iframe
            // width="560"
            height="400"
            className="object-cover w-full"
            src="https://www.youtube.com/embed/OFKQ9DMXO_E"
            title="CoEB WEEKLY SEMINAR SERIES on Developing a bird-naming protocol for the long-term conservation ."
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      {/* end of projects container */}
    </div>
  );
};

export default OurProjects;
