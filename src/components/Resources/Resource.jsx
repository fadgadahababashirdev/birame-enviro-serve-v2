import React from 'react';
import { IoBicycleSharp } from 'react-icons/io5';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { IoIosTabletPortrait } from 'react-icons/io';
import { ImMobile2 } from 'react-icons/im';
import { SlBadge } from 'react-icons/sl';
import { SlNotebook } from 'react-icons/sl';
import { SlSpeedometer } from 'react-icons/sl';
import './styles.css';

const Resource = () => {
  return (
    <div className="py-30" id="Resource">
      <div className="my-3 ml-3 flex items-center justify-center">
        {' '}
        <FaLongArrowAltRight className="text-cyan-400 text-2xl font-bold " />
        <h1 className="mx-5 text-2xl text-gray-400 md:text-4xl">Resources</h1>
      </div>
      <div className="blue grid p-5 bg-slate-50 gap-3 grid-cols-1  md:grid-cols-2 px-12 lg:grid-cols-3 ">
        {/* conservation of natural landScapes */}
        <div className="card white p-5 bg-white lg:py-12">
          <div className="content">
            <IoBicycleSharp className="icon text-3xl mb-3 text-gray-400 lg:text-5xl" />
            <h1 className="text-2xl font-semibold text-slate-600 mb-5">
              Conservation of natural landscapes
            </h1>
            <p className="text-md text-gray-400 font-semibold">
              {' '}
              We lead science-based restoration programs to address biodiversity
              loss and the climate break-down.
            </p>
          </div>
        </div>
        {/* conservation of natural landScapes */}
        {/* Research on the response of wildlife to environmental changes */}
        <div className="card white p-5 bg-cyan-500 lg:py-12">
          <div className="content">
            <ImMobile2 className="icon text-3xl mb-3 text-white lg:text-5xl" />
            <h1 className="text-2xl font-semibold text-white mb-5">
              Research on the response of wildlife to environmental changes
            </h1>
            <p className="text-md text-white font-semibold">
              {' '}
              We lead science-based restoration programs to address biodiversity
              loss and the climate break-down.
            </p>
          </div>
        </div>
        {/* Research on the response of wildlife to environmental changes */}

        {/* Advocacy for threatened ecosystems */}
        <div className="card white p-5 bg-white lg:py-12">
          <div className="content">
            <SlBadge className="icon text-3xl mb-3 text-gray-400 lg:text-5xl" />
            <h1 className="text-2xl font-semibold text-slate-600 mb-5">
              Advocacy for threatened ecosystems
            </h1>
            <p className="text-md text-gray-400 font-semibold">
              We raise awareness via social media platforms to halt
              environmental degradation caused by unsustainable development
              activities.
            </p>
          </div>
        </div>
        {/* Advocacy for threatened ecosystem */}
        {/* Conservation education through story-telling and arts */}
        <div className="card white p-5 bg-white lg:py-12">
          <div className="content">
            <SlNotebook className="icon text-3xl mb-3 text-gray-400 lg:text-5xl" />
            <h1 className="text-2xl font-semibold text-slate-600 mb-5">
              Conservation education through story-telling and Arts
            </h1>
            <p className="text-md  text-gray-400 font-semibold">
              We provide professional training on eco-tourism and best
              conservation practices to various stakeholders, including tour
              guides associations, Universities and Primary schools.
            </p>
          </div>
        </div>
        {/* Conservation education through story-telling and arts */}

        {/* community livelihoods improvement */}
        <div className="card white p-5 bg-white lg:py-12">
          <div className="content">
            <SlSpeedometer className="icon text-3xl mb-3 text-gray-400 lg:text-5xl" />
            <h1 className="text-2xl font-semibold text-slate-600 mb-5">
              Community livelihoods improvement
            </h1>
            <p className="text-md  text-gray-400 font-semibold">
              We pay school fees and offer mentorship programs to
              socio-economically disadvantaged children with priority given to
              disabled children and girls
            </p>
          </div>
        </div>
        {/* community livelihoods improvement */}
      </div>
    </div>
  );
};

export default Resource;
