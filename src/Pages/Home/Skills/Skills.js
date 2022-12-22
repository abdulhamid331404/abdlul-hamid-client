import React from 'react';

const Skills = () => {
    return (
        <div className='mt-5 mb-10' >
            <h1 className="text-3xl mt-5 font-bold">
                My Skills
            </h1>
            <hr />
            <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 text-center gap-5 mt-10'>
                <div>
                    <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":95}}>95%</div>
                      <p className='font-bold '>HTML5</p>
              </div>
                <div>
                    <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":90}}>90%</div>
                      <p className='font-bold '>CSS3</p>
                </div>
                <div>
                    <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":80}}>80%</div>
                      <p className='font-bold '>BOOTSTRAP5</p>
                </div>
                <div>
                    <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":90}}>90%</div>
                      <p className='font-bold '>TAILWIND CSS</p>
                </div>
                <div>
                    <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}}>70%</div>
                      <p className='font-bold '>JAVASCRIPT</p>
                </div>
                <div>
                    <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":80}}>80%</div>
                      <p className='font-bold '>REACT JS</p>
                </div>
                <div>
                    <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":85}}>85%</div>
                      <p className='font-bold '>NODE JS</p>
                </div>
                <div>
                    <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":80}}>80%</div>
                      <p className='font-bold '>EXPRESS JS</p>
                </div>
                <div>
                    <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":60}}>60%</div>
                      <p className='font-bold '>MONGO DB </p>
                </div>
                <div>
                    <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":75}}>75%</div>
                      <p className='font-bold '>FIREBASE</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;