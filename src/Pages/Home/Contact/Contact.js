import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_tgdxddc', 'template_mfkqzsc', form.current, 'vQuKSGTypj6w0JW25')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };



    return (
        <div className='h-[530px] flex justify-center items-center shadow-2xl'>
            <div className=' w-96 p-7 bg-base-100 card '>
                <form  ref={form} onSubmit={sendEmail}>
                   <div className='gird lg:grid-cols-2'>
                   <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Name </span></label>
                        <input type="text" name='user_name' required className="input input-bordered w-full " />

                 </div >
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" 
               required     name='user_email'     className="input input-bordered w-full max-w-xs" />
                    </div>
                   </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Message </span></label>
                        <textarea className=" textarea  input-bordered w-full h-48 " 
                     required    placeholder="Your message here"></textarea>
                    </div>
                    <br />
                    <input className='btn btn-accent w-full' value="Submit" type="submit" />

                </form>
            </div>
        </div>
    );
};

export default Contact;