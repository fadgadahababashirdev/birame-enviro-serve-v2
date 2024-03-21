import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.css';
import { Link } from 'react-router-dom';
import SingleWeDo from './SingleWeDo';
const WhatWeDo = () => {
  const relo = useSelector((state) => state.dos);
  const [model, setModel] = useState(false);

  return (
    <div className="relative">
      <div className=" grid  grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-12 px-12 py-12">
        {/* mapping array of what we do */}
        {relo.map((singleDo) => (
          <div key={singleDo.id}>
            <h1>{singleDo.paragraphOne}</h1>
            <div className="content">
              <img src={singleDo.image} alt="the image could not be found" />
              <div className="theblackdiv flex">
                <Link to={`/what-we-do/${singleDo.id}`}>
                  {' '}
                  <button className="border border-white p-3 white rounded-md text-white">
                    Explore more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* end of mapping array of what we do */}
      </div>

      {/* {model && (
        <div
          className="top-0 left-0 fixed flex justify-center items-center"
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}
        >
          <SingleWeDo />
        </div>
      )} */}
    </div>
  );
};

export default WhatWeDo;
