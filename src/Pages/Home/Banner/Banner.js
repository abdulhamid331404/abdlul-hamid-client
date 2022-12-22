import React from 'react';
import img2 from '../../../images/banner-img/img2.png'

const Banner = () => {

  const downloadResume = () => {
    fetch("/resume_by_abdul_hamid.pdf")
      .then((response) => {
        response.blob().then((blob) => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "resume_by_abdul_hamid.pdf";
          alink.click();

        });
      });
  }


    return (
        <div  className="hero bg-base-200">
  <div className="hero-content p-0 flex-col lg:flex-row-reverse">
    <img className='w-1/3 ' src={img2} alt='' />
    <div className='w-1/3 text-left ml-10'>
      <h1 className="text-5xl  font-bold">Hi , I'm Abdul Hamid</h1>
    <p className="">I am <strong>MERN STACK DEVELOPER</strong>. Programming is my passion. I am developing my skills in every day.</p>
      <button onClick={downloadResume} className="btn btn-primary">Download Resume </button>
    </div>
  </div>
</div>
    );
};

export default Banner;