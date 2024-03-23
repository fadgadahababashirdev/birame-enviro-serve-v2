import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './styles.css';
const WhatWeDo = () => {
  const relo = useSelector((state) => state.dos);
  const [model, setModel] = useState(false);
  const [head, setHead] = useState('');
  const [spann, setSpann] = useState('');
  const [pOne, setPOne] = useState('');
  const [pTwo, setPTwo] = useState('');

  const handleData = (id) => {
    const filteredData = relo.filter((item) => item.id === id);
    if (filteredData.length > 0) {
      const h3Value = setHead(filteredData[0].h3);
      const span = setSpann(filteredData[0].span);
      const paragraphOne = setPOne(filteredData[0].p1);
      const paragraphTwo = setPTwo(filteredData[0].p2);
    } else {
      console.log('No data found for the provided id:', id);
    }
  };

  return (
    <div className="mt-12"id="whatwedo">
      <div className="mt-12 ml-3 flex items-center justify-center">
        {' '}
        <FaLongArrowAltRight className="text-cyan-400 text-2xl font-bold" />
        <h1 className="mx-5 text-2xl text-gray-400 md:text-2xl">What We Do</h1>
      </div>
      <div className="relative">
        <div className=" grid  grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-12 px-3 ">
          {/* mapping array of what we do */}
          {relo.map((singleDo) => (
            <div className="" key={singleDo.id}>
              <h1>{singleDo.paragraphOne}</h1>
              <div className="content bg-black h-full w-full">
                <img
                  src={singleDo.image}
                  alt="the image could not be found"
                  className="object-cover w-full h-full"
                />
                <div className="theblackdiv flex">
                  {' '}
                  <button
                    className="border border-white p-3 white rounded-md text-white"
                    onClick={() => {
                      setModel(true);
                      handleData(singleDo.id);
                    }}
                  >
                    Explore more
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* end of mapping array of what we do */}
        </div>

        {model && (
          <div
            className="top-0 left-0 fixed flex justify-center items-center"
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.6)',
            }}
          >
            {/* single we do  */}
            <div
              className="w-screen h-fit bg-white p-5 md:p-12"
              style={{ width: '80%' }}
            >
              <div className="">
                {/* heading and hide button */}
                <div className="flex justify-between w-full">
                  <div>
                    {' '}
                    <h1 className="text-md text-semibold text-slate-900 md:text-xl ">
                      {head}
                    </h1>
                    <p className="mt-5">{spann}</p>
                  </div>
                  <h1
                    onClick={() => setModel(!model)}
                    className="cursor-pointer text-gray-500 font-bold"
                  >
                    Hide
                  </h1>
                </div>
                {/* end of heading and hide button */}
                {/* two paragraphs and line with empty div*/}
                <div className="flex justify-between">
                  {/* two paragraphs and line */}
                  <div className="flex mt-5">
                    <div>
                      <p className="text-gray-400 text-semibold mb-2">{pOne}</p>

                      <p className="text-gray-400 text-semibold mb-2">{pTwo}</p>
                      <h1 className="text-slate-900 md:text-lg pt-4">
                        Forests , Animals ,Birds{' '}
                      </h1>
                    </div>
                    <div className="h-full w-1 bg-green-400 md:ml-12"></div>
                  </div>
                  <div className="md:w-80"></div>
                </div>
                {/* end of two paragraphs and line with empty div*/}
              </div>
            </div>

            {/* end of single we do component */}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatWeDo;
