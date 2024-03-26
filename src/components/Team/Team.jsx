import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './styles.css';
const Team = () => {
  return (
    <div className="mt-12"id="team">
      <div className="my-3 ml-3 flex items-center justify-center">
        {' '}
        <FaLongArrowAltRight className="text-cyan-400 text-2xl font-bold" />
        <h1 className="mx-5 text-2xl text-gray-400 md:text-2xl">Our Team</h1>
      </div>
      <div className="grid grid-cols-1  mt-12 mx-3 pb-32 gap-3 md:grid-cols-2 lg:grid-cols-3 " id="pro">
        {/* card container */}
        <div className="">
          {/* card */}

          <div className="w-full h-full image rounded-md">
            <img
              src="../public/Team/laura-cropped.png"
              alt="image not found"
              className="w-full h-full"
            />
            <div className="conte px-3 pb-10 flex w-full h-full items-end justify-between">
              <div>
                {/* name */}
                <div className="flex gap-3  h-full items-center">
                  <span className="bg-cyan-400 w-5 h-1 "></span>
                  <h1 className="text-white  text-2xl text-sans">
                    Dr Rurangwa Laure
                  </h1>
                </div>
                {/*position*/}
                <div className="flex gap-3 pt-4  h-full items-center">
                  <span className="bg-cyan-400 w-5 h-1"></span>
                  <h1 className="text-white  text-2xl text-sans">
                    Executive Director
                  </h1>
                </div>
              </div>
              <div className="border border-cyan-300  px-4 py-1 rounded-md text-white">
                Details
              </div>
            </div>
          </div>

          {/* card end  */}
        </div>
        {/* end of card container */}

        {/* second member  */}
        {/* card container */}
        <div className="">
          {/* card */}

          <div className="w-full h-full image">
            <img
              src="../public/Team/protais2.jpeg"
              alt="image not found"
              className="w-full h-full"
            />
            <div className="conte px-3 pb-10 flex w-full h-full items-end justify-between">
              <div>
                {/* name */}
                <div className="flex gap-3  h-full items-center">
                  <span className="bg-cyan-400 w-5 h-1 "></span>
                  <h1 className="text-white  text-2xl text-sans">
                    Niyigaba Protais
                  </h1>
                </div>
                {/*position*/}
                <div className="flex gap-3 pt-4  h-full items-center">
                  <span className="bg-cyan-400 w-5 h-1"></span>
                  <h1 className="text-white pr-3 text-2xl text-sans">
                    Research and Restoration Advisor
                  </h1>
                </div>
              </div>
              <div className="border border-cyan-300  px-4 py-1 rounded-md text-white">
                Details
              </div>
            </div>
          </div>

          {/* card end  */}
        </div>
        {/* end of card container */}
        {/* card container */}
        <div className="">
          {/* card */}

          <div className="w-full h-full image">
            <img
              src="../public/Team/Eric-Kayiranga.jpg"
              alt="image not found"
              className="w-full h-full"
            />
            <div className="conte px-3 pb-10 flex w-full h-full items-end justify-between">
              <div>
                {/* name */}
                <div className="flex gap-3  h-full items-center">
                  <span className="bg-cyan-400 w-5 h-1 "></span>
                  <h1 className="text-white  text-2xl text-sans">
                    Kayiranga Eric
                  </h1>
                </div>
                {/*position*/}
                <div className="flex gap-3 pt-4  h-full items-center">
                  <span className="bg-cyan-400 w-5 h-1"></span>
                  <h1 className="text-white  text-2xl text-sans">
                    Tourism Development Lead
                  </h1>
                </div>
              </div>
              <div className="border border-cyan-300  px-4 py-1 rounded-md text-white">
                Details
              </div>
            </div>
          </div>

          {/* card end  */}
        </div>
        {/* end of card container */}
        {/* card container */}
        <div className="">
          {/* card */}

          <div className="w-full h-full image">
            <img
              src="../public/Team/Aline_Mazimpaka.jpeg"
              alt="image not found"
              className="w-full h-full"
            />
            <div className="conte px-3 pb-10 flex w-full h-full items-end justify-between">
              <div>
                {/* name */}
                <div className="flex gap-3  h-full items-center">
                  <span className="bg-cyan-400 w-5 h-1 "></span>
                  <h1 className="text-white  text-2xl text-sans">
                    Mazimpaka Aline
                  </h1>
                </div>
                {/*position*/}
                <div className="flex gap-3 pt-4  h-full items-center">
                  <span className="bg-cyan-400 w-5 h-1"></span>
                  <h1 className="text-white  text-2xl text-sans">
                    Youth Empowerment Manager
                  </h1>
                </div>
              </div>
              <div className="border border-cyan-300  px-4 py-1 rounded-md text-white">
                Details
              </div>
            </div>
          </div>

          {/* card end  */}
        </div>
        <div className="">
          {/* card */}

          <div className="w-full h-full image">
            <img
              src="../public/Team/yves_tuyishime.jpeg"
              alt="image not found"
              className="w-full h-full"
            />
            <div className="conte px-3 pb-10 flex w-full h-full items-end justify-between">
              <div>
                {/* name */}
                <div className="flex gap-3  h-full items-center">
                  <span className="bg-cyan-400 w-5 h-1 "></span>
                  <h1 className="text-white  text-2xl text-sans">
                    Tuyishime Yves
                  </h1>
                </div>
                {/*position*/}
                <div className="flex gap-3 pt-4  h-full items-center">
                  <span className="bg-cyan-400 w-5 h-1"></span>
                  <h1 className="text-white  text-2xl text-sans">
                    Communication and Media Lead
                  </h1>
                </div>
              </div>
              <div className="border border-cyan-300  px-4 py-1 rounded-md text-white">
                Details
              </div>
            </div>
          </div>

          {/* card end  */}
        </div>
        <div className="">
          {/* card */}

          <div className="w-full h-full image">
            <img
              src="../public/Team/Bisangwa_Nganji.jpg"
              alt="image not found"
              className="w-full h-full"
            />
            <div className="conte px-3 pb-10 flex w-full h-full items-end justify-between">
              <div>
                {/* name */}
                <div className="flex gap-3  h-full items-center">
                  <span className="bg-cyan-400 w-5 h-1 "></span>
                  <h1 className="text-white  text-2xl text-sans">
                    Bisangwa Benjamin
                  </h1>
                </div>
                {/*position*/}
                <div className="flex gap-3 pt-4  h-full items-center">
                  <span className="bg-cyan-400 w-5 h-1"></span>
                  <h1 className="text-white  text-2xl text-sans">
                    Conservation Education Lead
                  </h1>
                </div>
              </div>
              <div className="border border-cyan-300  px-4 py-1 rounded-md text-white">
                Details
              </div>
            </div>
          </div>

          {/* card end  */}
        </div>
        {/* end of card container */}
      </div>
    </div>
  );
};

export default Team;
