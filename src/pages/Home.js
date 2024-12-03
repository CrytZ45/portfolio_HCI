import React, { useContext } from 'react';
import WomanImg from '../img/home/woman.png';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';
import Resume from '../assets/Resume.pdf';

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const handleResumeClick = () => {
    window.open(Resume, '_blank');
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col justify-center'>
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>
              Freelancer <br /> UI/UX Designer
            </h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Diatagon, Lianga</p>
            <button onClick={handleResumeClick} className='btn mb-[30px]'>
              Click here for CV
            </button>
          </motion.div>

          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className='relative lg:-righ-40 overflow-hidden'
            >
              <motion.img
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={WomanImg}
                alt=''
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;