import React from 'react';
import './styles.css';
const OurProjects = () => {
  return (
    <div className="py-3">
      <h1 className="text-center font-semibold md:text-2xl">Our Projects</h1>
      <p className="text-center text-gray-500 font-semibold lg:text-2xl px-20 xl:px-80 mt-3">
        Biodiversity within natural and human-altered landscapes in rural and
        urban areas is well conserved and derived ecosystem services are
        flourishing
      </p>
      {/* projects */}
      <div className="w-screen px-12 py-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 ">
        {/* conserving remnant eco sysytem div */}
        <div>
          <div>
            <img
              src="../public/ProjectsFiles/lantana4.png"
              alt="conseving image not found"
              className="rounded-lg"
            />
          </div>
          {/* remnant eco system heading */}
          <h1 className="md:text-2xl p-1 font-semibold">
            Conserving remnant ecosystem
          </h1>
          {/* remnant ecosystem description  */}
          <p className="text-gray-500 font-semibold p-1">
            We monitor the biodiversity of remnant ecosystems, such as the
            rainforest of Busaga, the gallery forest of Mashyoza and the
            riparian forest of protected lakes.
          </p>
        </div>
        {/* end of remnant system */}

        {/* Restoring Landscapes */}
        <div>
          <div>
            <img
              src="../public/ProjectsFiles/restoration1.jpeg"
              alt="conseving image not found"
              className="rounded-lg"
            />
          </div>
          {/* Restoring landScapes system heading */}
          <h1 className="md:text-2xl p-1 font-semibold">
            Restoring landscapes
          </h1>
          {/* Restoring description  */}
          <p className="text-gray-500 font-semibold p-1">
            We contribute to national goals of forest landscape restoration, and
            we lay emphasis on growing indigenous trees due to their crucial
            roles of supporting biodiversity and carbon sequestration
          </p>
        </div>
        {/* end Restoring LandScapes*/}

        {/* Managing Invasive Species*/}
        <div>
          <div>
            <img
              src="../public/ProjectsFiles/lantana4.png"
              alt="conseving image not found"
              className="rounded-lg"
            />
          </div>
          {/* Invasive species heading */}
          <h1 className="md:text-2xl p-1 font-semibold">
            Managing invasive species
          </h1>
          {/* Invasive Species desctription */}
          <p className="text-gray-500 font-semibold p-1">
            We raise public awareness on the invasion of Lantana camara in
            native and exotic woodlands and advocate for its removal from the
            flower market
          </p>
        </div>
        {/* bird naming */}
        <div>
          <div>
            <img
              src="../public/ProjectsFiles/bird1.png"
              alt="conseving image not found"
              className="rounded-lg"
            />
          </div>
          {/* bird naming  heading */}
          <h1 className="md:text-2xl p-1 font-semibold ">
            Bird naming protocol
          </h1>
          {/* bird naming  desctription */}
          <p className="text-gray-500 font-semibold p-1">
            We lead the monumental project of documenting and assigning
            Kinyarwanda names of all bird species of Rwanda (Slightly over 700)
            in a bid to ignite the human-nature connection and to safeguard
            associated traditions
          </p>
        </div>
        {/* bird naming */}

        {/* videos  */}
        {/* video one */}

        {/* video two */}
      </div>
      <div className=" w-screen grid grid-cols-1 md:grid-cols-2 place-items-center">
        {/* first i frame */}
        <div className="md:w-1/2">
          <iframe
            className="w-screen h-80 md:w-full"
            height="315"
            src="https://www.youtube.com/embed/BNlJS-F-Oio?si=HvMkF6Iy19Sj98Hp&amp;start=1673"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        {/* second i frame */}
        <div className="md:w-1/2">
          <iframe
            className="w-screen h-80 md:w-full"
            height="315"
            src="https://www.youtube.com/embed/OFKQ9DMXO_E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
