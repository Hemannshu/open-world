import React from 'react';
import education from '../img/education.png';
import BtnPrimary from './BtnPrimary';

const Hero = ({ openModal }) => {
  return (
    <div className="lg:grid border-b border-gray-100 dark:border-gray-700 lg:grid-cols-2 2xl:grid-cols-5 bg-white dark:bg-gray-800">
      <div className="px-12 py-8 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-16 xl:mr-0 lg:max-w-full 2xl:col-span-2">
        <div className="xl:max-w-xl">
          <img
            className=" mt-6 w-full rounded-lg h-60 drop-shadow-xl object-cover object-center lg:hidden"
            src={education} alt=" "
          />
          <h1 className=" mt-6 text-2xl font-bold text-gray-900 lg:text-3xl lg:mt-8 dark:text-gray-200">
            Learn any programming language.
            <br />
            <span className=" text-red-400">zero to hero</span>
          </h1>
          <p className="mt-2 text-lg text-semibold text-gray-600 lg:mt-8 dark:text-gray-300">
          We offer free programming courses to people worldwide, regardless of their prior programming experience. Whether you're an experienced programmer or a newcomer, you're welcome to join our community of developers and educators. Share your knowledge with us and contribute to making the world a better place. 🌎💕
          </p>
          <div className="space-x-2 mt-4 sm:mt-6">
            <BtnPrimary>Join Us Now</BtnPrimary>
          </div>
        </div>
      </div>
      <div className="relative 2xl:col-span-3">
        <img
          className=" absolute inset-0 w-full h-full drop-shadow-xl object-cover object-center"
          src={education}
        />
      </div>
    </div>
  );
};

export default Hero;