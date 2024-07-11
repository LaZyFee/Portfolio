import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='text-white bg-[#19376D]' id='contact'>

            <div className='lg:flex lg:gap-10 items-center justify-center mt-10 p-8'>
                <div className='lg:w-1/2 '>
                    <h1 className="text-5xl">Contact</h1>
                    <p className="text-base">Feel free to reach out!</p>
                </div>
                <div className='lg:w-1/2 mt-10 lg:mt-0'>
                    <div className='flex gap-4 items-center mb-4'>
                        <MdEmail /> rhr277@gmail.com
                    </div>
                    <div className='flex gap-4 items-center mb-4'>
                        <FaLinkedin /> linkedin.com/in/rabiul-rafee-361224183
                    </div>
                    <div className='flex gap-4 items-center mb-4'>
                        <FaGithub /> github.com/LaZyFee
                    </div>

                </div>
            </div>

            <p className='text-center p-4'> ©️ All Rights Reserved Rabiul Rafee 2024 </p>
        </div>
    );
};

export default Contact;