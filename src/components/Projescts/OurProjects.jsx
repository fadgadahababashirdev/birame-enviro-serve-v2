import React from 'react';
import './styles.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const OurProjects = () => {
  const projectData = useSelector((state) => state.project);

  return (
    <div
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
          <h1
            className="text-gray-600 font-bold md:text-4xl py-5"
            id="ourprojects"
          >
            Our Projects
          </h1>
        </div>
        {/* page description */}
        <h1 className=" text-gray-400 md:text-2xl px-6 lg:text-2xl pl-12 pr-12 text-center ">
          Biodiversity within natural and human-altered landscapes in rural and
          urban areas is well conserved and derived ecosystem services are
          flourishing
        </h1>
      </div>
      {/* end container of page name  , icon and descrioption */}

      {/* page container */}

      <div
        className="w-screenrounded-lg px-1 py-12 grid grid-cols-1  gap-2 my-12 md:grid-cols-2  mx-6 lg:grid-cols-3   "
        id="pro"
      >
        {projectData.map((project) => (
          <div key={project.id}>
            <div
              className=""
              style={{ height: '22rem', width: '100%', borderRadius: '12px' }}
            >
              <img
                src={project.image}
                alt="image not found"
                className="w-full h-full object-cover"
                style={{ borderRadius: '12px' }}
              />
            </div>
            <p className="font-semibold my-3 text-slate-900 md:text-2xl">
              {project.heading}
            </p>
            <p className="text-gray-400 font-semibold md:text-xl">
              {project.description}
            </p>
          </div>
        ))}
      </div>

      {/* end of page container */}
      <div>
        <div className="my-12 ml-3 flex items-center justify-center">
          {' '}
          <FaLongArrowAltRight className="text-cyan-400 text-2xl font-bold " />
          <h1 className="mx-5 text-2xl text-gray-400 md:text-4xl" id="Resource">
            Resources
          </h1>
        </div>

        <div
          className="grid grid-cols-1 gap-4 px-1  md:grid-cols-2 mx-6 "
          id="Resource"
        >
          <div className=" justify-center flex">
            <iframe
              // width="560"
              height="400"
              className="object-cover w-full"
              src="https://www.youtube.com/embed/BNlJS-F-Oio?si=HvMkF6Iy19Sj98Hp&amp;start=1673"
              title="CoEB WEEKLY SEMINAR SERIES on Developing a bird-naming protocol for the long-term conservation ."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-blue-400 justify-center flex ">
            <iframe
              // width="560"
              height="400"
              className="object-cover w-full"
              src="https://www.youtube.com/embed/OFKQ9DMXO_E"
              title="CoEB WEEKLY SEMINAR SERIES on Developing a bird-naming protocol for the long-term conservation ."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* end of projects container */}
    </div>
  );
};

export default OurProjects;
