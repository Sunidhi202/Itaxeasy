import React from 'react';
import {
  FaYoutubeSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaWhatsappSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>iTaxEasy</h1>
        <p className='py-4'>India's Most Trusted Accounting And Financial Platform Continuing The Legacy Of Accounting Firm N.S. Bedi And Associates Since 1972.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={50} />
            <FaInstagram size={50} />
            <FaTwitterSquare size={50} />
            <FaWhatsappSquare size={50} />
            <FaYoutubeSquare size={50} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Quick Link</h6>
        <ul>
            <li className='py-2 text-sm'>About Us</li>
            <li className='py-2 text-sm'>Contact Us</li>
            <li className='py-2 text-sm'>Company Profile</li>
            <li className='py-2 text-sm'>Terms & Conditions</li>
            <li className='py-2 text-sm'>Disclaimer Policy</li>
            <li className='py-2 text-sm'>Software License</li>
            <li className='py-2 text-sm'>FAQ's</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>We Offer</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
