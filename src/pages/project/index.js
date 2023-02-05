import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

// images from the asset folder in the image file


import InterFace from '../../assets/images/InterFace.png'
import HOTxCOLD from '../../assets/images/HOTxCOLD.png'
import Dramado from "../../assets/images/Dramado.png"
import SimonGame from "../../assets/images/SimonGame.png"
import DiceChallenge from "../../assets/images/DiceChallenge.png"

import Muskan_Me from '../../assets/images/Muskan_.Me.png'
// projects' id, name, stacks, icon and url data
export const projects = [
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
    imgUrl: Muskan_Me,
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
    imgUrl: HOTxCOLD,
  },
  {
    id: 3,
    name: 'InterFace',
    desc: 'This is an amazing project with cool UI interface',
    stack: 'React JS',
    imgUrl: InterFace,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/OpenAI-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://gpt3-openai-project.netlify.app/',
    },
  },
  {
    id: 4,
    name: 'Dramado',
    desc: 'A complicated project that enhanced my skills a lot',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/React-booking-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://react-booking-project.netlify.app/',
    },
    imgUrl:
    Dramado
  },

  {
    id: 5,
    name: 'SimonGame',
    desc: 'A project that displays all information about a country',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/rest-countries-api-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://rest-countries-web-app-project.netlify.app/',
    },
    imgUrl: SimonGame,
  },
  {
    id: 6,
    name: 'DiceChallenge',
    desc: 'A simple landing page website',
    stack: 'React js, SCSS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/Huddle-landing-page',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://huddle-website-project.netlify.app/',
    },
    imgUrl: DiceChallenge,
  },

]