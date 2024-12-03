import React, {useContext} from 'react';

import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from 'react-icons/im';

import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
   <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a  href='https://www.facebook.com/parxpastel.naz' target='_blank'>
          <ImFacebook />
        </a>
      </li>
      <li>
        <a  href='https://www.x.com/BarlisanRussell' target='_blank'>
          <ImTwitter />
        </a>
      </li>
      <li>
        <a  href='https://ph.pinterest.com/barlisanrussell/' target='_blank'>
          <ImPinterest />
        </a>
      </li>
      <li>
        <a  href='https://www.instagram.com/raz.zzlle/' target='_blank'>
          <ImInstagram />
        </a>
      </li>
      <li>
        <a  href='https://www.youtube.com/@mewzcxikels7355' target='_blank'>
          <ImYoutube />
        </a>
      </li>
    </ul>
  </div>
  );
};

export default Socials;
