import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleWeDo = () => {
  const { id } = useParams();
  const dataa = useSelector((state) => state.dos);
  
  const singleData  = dataa.find(amadata=>amadata.id == id)

  return (
    <div
      className="w-screen h-fit bg-white p-5 md:p-12"
      style={{ width: '80%' }}
    >
      <div className="">
        {/* heading and hide button */}
        <div className="flex justify-between w-full">
          <div>
            {' '}
            <h1 className="text-md text-semibold text-slate-900 md:text-2xl">
              {singleData.h3}
            </h1>
            <p className="mt-5">{singleData.span}</p>
          </div>
          <h1>Hide</h1>
        </div>
        {/* end of heading and hide button */}
        {/* two paragraphs and line with empty div*/}
        <div className="flex justify-between">
          {/* two paragraphs and line */}
          <div className="flex mt-5">
            <div>
              <p className="text-gray-400 text-semibold mb-2">
               {singleData.p1}
              </p>

              <p className="text-gray-400 text-semibold mb-2">
              {singleData.p2}
              </p>
              <h1 className="text-slate-900 md:text-lg">
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
  );
};

export default SingleWeDo;
