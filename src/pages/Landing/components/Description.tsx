import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

import { Bullets } from './';
import { MemberType, BandType } from 'Types';

const API_URL = process.env.REACT_APP_API_URL;

const DescriptionCard: React.FC<{
  activeMember: MemberType | undefined;
}> = (props) => {
  const member = props.activeMember;

  const [bandData, setBandData] = useState<BandType>({
    logoUrl: '',
    information: '',
  });

  useEffect(() => {
    const getBandData = async () => {
      const response = await axios.get(`${API_URL}/get-band-data`);
      const data: BandType = response.data;

      setBandData(data);
    };

    getBandData();
  }, []);

  const transition = {
    duration: 0.25,
  };

  const easeVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition,
    },
    exit: {
      opacity: 0,
      transition,
    },
  };

  return (
    <div className='relative w-168 h-150 bg-primary-gold rounded-2xl shadow-xl'>
      <Bullets />
      <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 flex justify-center items-center bg-primary border-2 border-content-white rounded-full shadow-primary'>
        <AnimatePresence exitBeforeEnter>
          <motion.img
            variants={easeVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            key={props.activeMember?._id}
            src={member ? member.avatarUrl : bandData.logoUrl}
            alt='logo'
            className='h-42'
          ></motion.img>
        </AnimatePresence>
      </div>
      <div className='pl-16 pr-8 pt-44 pb-5 w-full h-full'>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={easeVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            key={props.activeMember?._id}
            className='w-full h-full pr-8 font-bpg-arial text-lg text-custom-black text-justify overflow-y-auto'
          >
            <p>{member ? member.biography : bandData.information}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DescriptionCard;
