import {MdEventNote, MdFeed, MdLocalGroceryStore} from 'react-icons/md'
import {RiPagesLine} from 'react-icons/ri'
import {SiCoursera} from 'react-icons/si'
import {FaUserFriends,FaBlog} from 'react-icons/fa'

export const sidebarMenu = [
    {
      name: 'News Feed',
      icon: <MdFeed fontSize='25px'/>,
      link:'/overview'
    },
    {
      name: 'Pages',
      icon: <RiPagesLine fontSize='25px'/>,
      link:'/page'

    },
    {
      name: 'Groups',
      icon: <FaUserFriends fontSize='25px'/>,
      link:'/friends'

    },
    {
      name: 'Course',
      icon: <SiCoursera fontSize='25px'/>,
      link:'/course'

    },

    {
      name: 'Blog Posts',
      icon: <FaBlog fontSize='25px'/>,
      link:'/blog'

    },
    {
      name: 'Market Place',
      icon: <MdLocalGroceryStore fontSize='25px'/>,
      link:'/store'

    },
    {
      name: 'Events',
      icon: <MdEventNote fontSize='25px'/>,
      link:'/events'

    },
    
    
  ];
  