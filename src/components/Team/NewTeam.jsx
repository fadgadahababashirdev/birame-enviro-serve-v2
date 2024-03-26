import React, { useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../Footer/Footer';
const NewTeam = () => {
  const data = useSelector((state) => state.team);
  //   name of the team member
  const [name, setName] = useState('');
  //   position of the team member
  const [position, setPosition] = useState('');
  //   details of the team member
  const [details, setDetails] = useState('');
  // team model
  const [model, setModel] = useState(false);

  const handleDataById = (id) => {
    try {
      const filteredData = data.filter((singleTeam) => singleTeam.id === id);
      if (filteredData.length > 0) {
        const names = filteredData[0].names;
        setName(names);
        const positions = filteredData[0].position;
        setPosition(positions);

        const detailss = filteredData[0].details;
        setDetails(detailss);
      }
    } catch (error) {
      console.log('there was an error ', error);
    }
  };

  return (
    <div className="mt-12  w-screen h-screen" id="team">
      <div className="my-3 ml-3 flex items-center justify-center">
        {' '}
        <FaLongArrowAltRight className="text-cyan-400 text-2xl font-bold" />
        <h1 className="mx-5 text-2xl text-gray-400 md:text-2xl">Our Team</h1>
      </div>
      <div
        className=" relative grid grid-cols-1  mt-12 mx-6 pb-32 gap-3 md:grid-cols-2 lg:grid-cols-3 "
        id="pro"
      >
        {/* card container */}

        {data.map((team) => (
          <div className="" key={team.id}>
            {/* card */}

            <div className="w-full h-full image rounded-md">
              <img
                src={team.image}
                alt="image not found"
                className="w-full h-full"
              />
              <div className="conte px-3 pb-10 flex w-full h-full items-end justify-between">
                <div>
                  {/* name */}
                  <div className="flex gap-3  h-full items-center">
                    <span className="bg-cyan-400 w-5 h-1 "></span>
                    <h1 className="text-white  text-2xl text-sans">
                      {team.names}
                    </h1>
                  </div>
                  {/*position*/}
                  <div className="flex gap-3 pt-4  h-full items-center">
                    <span className="bg-cyan-400 w-5 h-1"></span>
                    <h1 className="text-white  text-2xl text-sans">
                      {team.position}
                    </h1>
                  </div>
                </div>
                <div
                  className="border border-cyan-300 cursor-pointer  px-4 py-1 rounded-md text-white"
                  onClick={() => {
                    handleDataById(team.id);
                    setModel(!model);
                  }}
                >
                  Details
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* end of the card container */}

        {model && (
          <div
            className="fixed top-0  left-0 w-full flex  h-screen items-center  justify-center px-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          >
            <div className="bg-white px-5 py-3 text-sm  w-fit md:w-2/3 lg:w-3/6">
              {/* header  */}
              <div className="flex justify-between">
                <div>
                  {' '}
                  <h1 className="text-gray-900 font-bold pb-3">{name}</h1>
                  <h2 className="text-gray-800 pb-3 font-semibold text-md">
                    {position}
                  </h2>
                </div>
                <span
                  className="font-bold text-gray-500 cursor-pointer "
                  onClick={() => setModel(!model)}
                >
                  Hide
                </span>
              </div>

              {/* details */}
              <div>
                <p className="text-gray-400">{details}</p>
              </div>
              {/* details */}
              {/* end of header */}
            </div>
          </div>
        )}
      </div>

      <div>
        <Footer/>

      </div>
    </div>
  );
};

export default NewTeam;
