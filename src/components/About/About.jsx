import React from 'react';

const About = () => {
  return (
    <div
      className="w-screen h-screen about relative flex"
      style={{
        backgroundImage: 'url(../ProjectsFiles/bird-rwandan1.jpeg',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="bg-black opacity-30 w-full h-full absolute top-0 z-10"></div>
      <div className="absolute top-0 z-10 text-center mt-12">
        {/* our story div */}
        <div>
          <h1 className="text-white md:text-5xl">OUR STORY</h1>
          <p className="text-white mt-12 md:text-4xl px-12">
            We are a Rwandan NGO founded by a group of young professionals from
            diverse backgrounds. We share a common passion for reconciling
            environmental conservation with the amelioration of community
            livelihoods.
          </p>
        </div>
        {/* end of our story div */}
        {/* our mission */}
        <div className="mt-12">
          <h1 className="text-white md:text-5xl">OUR MISSION</h1>
          <p className="text-white mt-12 md:text-4xl px-12">
            Biodiversity within natural and human-altered landscapes in rural
            and urban areas is well conserved and derived ecosystem services are
            flourishing.
          </p>
        </div>
        {/* end of our mission */}
        <div className="mt-12">
          <h1 className="text-white md:text-5xl">OUR VISION</h1>
          <p className="text-white mt-12 md:text-4xl px-12">
            Biodiversity within natural and human-altered landscapes in rural
            and urban areas is well conserved and derived ecosystem services are
            flourishing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;