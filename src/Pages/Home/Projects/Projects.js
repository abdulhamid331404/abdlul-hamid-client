import React from 'react';
import computerHub from '../../../images/project-img/computer-hub.png'
import emaJohn from '../../../images/project-img/ema-john.png'
import cbcNews from '../../../images/project-img/cbc-news.png'
import { Link } from 'react-router-dom';

const Projects = () => {

  

  return (
    <div className='mt-5 mb-5 ml-3'>
      <h1 className="text-4xl font-bold">
        My Projects
      </h1>
      <hr />
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 '>
        <div className=''>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={emaJohn} alt="Shoes" /></figure>
  <div className="card-body">
              <h2 className="card-title">E-Commerce Website</h2>
              <p>It is an e-commerce site. There are several types of products here. A buyer can shop here as per his wish.</p>
              <div  className="card-actions justify-end">
              <Link to="/details"><button  className="btn btn-primary">Details</button></Link>  

              </div>
            </div>
          </div>
        </div>
        <div className=''>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={computerHub} alt="Ema John" /></figure>
  <div className="card-body">
              <h2 className="card-title">Resells Site</h2>
              <p>This website is a reseller site. Where anyone can sell their used computer. And if anyone wants to buy interest he can do that too.</p>
              <div className="card-actions justify-end">
              <Link to="/details"><button  className="btn btn-primary">Details</button></Link>  
              </div>
            </div>
          </div>
        </div>
        <div className=''>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={cbcNews} alt="CbcNews" /></figure>
  <div className="card-body">
              <h2 className="card-title">Online News Platform</h2>
              <p>
This site is an online news platform. Where people can read as much as they want. There are several categories.</p>
              <div className="card-actions justify-end">
            <Link to="/details"><button  className="btn btn-primary">Details</button></Link>    
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;