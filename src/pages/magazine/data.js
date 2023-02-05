import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

// images from the asset folder in the image file


import Abhishar01 from '../../assets/images/abhishar01.png'
import Abhishar02 from '../../assets/images/abhishar02.png'

export const pages = [
  {
    id: 1,
    name: 'Muskan_Me',
    desc:
      'A game that gives you 5 attempts to guess the correct word of the day',
    stack: 'HTML CSS JAVASCRIPT',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/Wordle-clone',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://worlde-cloned.netlify.app/',
    },
    imgUrl: Abhishar01,
  },
  {
    id: 2,
    name: 'HOTxCOLD',
    desc: 'A Responsive restaurant website design with great UI Effect',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/Restaurant-Website-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://gericht-restaurant-website.netlify.app/',
    },
    imgUrl:Abhishar02,
  }



]