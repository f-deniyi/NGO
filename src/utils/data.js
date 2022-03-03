import {MdEventNote, MdFeed, MdLocalGroceryStore} from 'react-icons/md'
import {RiPagesLine} from 'react-icons/ri'
import {SiCoursera} from 'react-icons/si'
import {FaUserFriends,FaBlog} from 'react-icons/fa'

export const sidebarMenu = [
    {
      name: 'Home',
      icon: <MdFeed fontSize='25px' className='nav-item-icon'/>,
      link:'/#home'
    },
    {
      name: 'Fashion',
      icon: <RiPagesLine fontSize='25px' className='nav-item-icon'/>,
      link:'/#fashion'

    },
    {
      name: 'Groups',
      icon: <FaUserFriends fontSize='25px' className='nav-item-icon'/>,
      link:'/'

    },
    {
      name: 'Course',
      icon: <SiCoursera fontSize='25px' className='nav-item-icon'/>,
      link:'/'

    },

    {
      name: 'Blog',
      icon: <FaBlog fontSize='25px' className='nav-item-icon'/>,
      link:'/'

    },
    {
      name: 'Market',
      icon: <MdLocalGroceryStore fontSize='25px' className='nav-item-icon'/>,
      link:'/'

    },
    {
      name: 'Events',
      icon: <MdEventNote fontSize='25px' className='nav-item-icon'/>,
      link:'/'

    },
    {
      name: 'Blog',
      icon: <FaBlog fontSize='25px' className='nav-item-icon'/>,
      link:'/'

    }
   
    
    
  ];
  