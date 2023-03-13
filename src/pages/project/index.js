import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

// images from the asset folder in the image file


import InterFace from '../../assets/images/InterFace.png'
import HOTxCOLD from '../../assets/images/HOTxCOLD.png'
import Dramado from "../../assets/images/Dramado.png"
import SimonGame from "../../assets/images/SimonGame.png"
import DiceChallenge from "../../assets/images/DiceChallenge.png"
import myroster from "../../assets/images/roster.png"
import bank from "../../assets/images/banking.png"
import Muskan_Me from '../../assets/images/Muskan_.Me.png'
import coffee from "../../assets/images/coffee.png"
// projects' id, name, stacks, icon and url data
export const projects = [
  {
    id: 1,
    name: 'CLI based Banking',
    desc:
      'A command line interface that\'s published on NPM, using it, one can authenticate herself as an existing user or new user and store data in the form of a key-value store directly from their terminal',
    stack: 'MONGODB | COMMENDER.JS | INQUIRER.JS | JWT | NODE.JS | EXPRESS.JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/muskandn/Bank_CLI',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://worlde-cloned.netlify.app/',
    },
    imgUrl: bank,
  },

  {
    id: 4,
    name: 'My_Roster',
    desc: 'Designed and developed an application for the user specially to keep track of errands or tasks that need to be done',
    stack: 'EJS | CSS | JAVASCRIPT | MONGODB | NODE.JS | EXPRESS.JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/muskandn/My_Roster',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://react-booking-project.netlify.app/',
    },
    imgUrl:myroster
  },
  {
    id: 3,
    name: 'InterFace',
    desc: 'Developed and designed a platform where users can upload personal diaries where the blogs will be saved using the user-provided title.',
    stack: 'HTML | CSS | JAVASCRIPT | MONGODB | NODE.JS | EXPRESS.JS',
    imgUrl: InterFace,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/muskandn/InterFace',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://gpt3-openai-project.netlify.app/',
    },
  },
  {
    id: 2,
    name: 'HOTxCOLD',
    desc: 'A Responsive restaurant website design with great UI Effect',
    stack: 'HTML | CSS | JAVASCRIPT',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/muskandn/HOTxCOLD',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://gericht-restaurant-website.netlify.app/',
    },
    imgUrl:coffee,
  },
  // {
  //   id: 4,
  //   name: 'Dramado',
  //   desc: 'A JavaScript project that enhanced my skills a lot',
  //   stack: 'HTML | CSS | JAVASCRIPT',
  //   gitHubUrl: {
  //     icon: <GrGithub />,
  //     url: 'https://github.com/Almarex-Web-Dev/React-booking-project',
  //   },
  //   website: {
  //     icon: <TbWorld />,
  //     url: 'https://react-booking-project.netlify.app/',
  //   },
  //   imgUrl:
  //   Dramado
  // },

  // {
  //   id: 5,
  //   name: 'SimonGame',
  //   desc: 'A project that displays all information about a country',
  //   stack: 'React JS',
  //   gitHubUrl: {
  //     icon: <GrGithub />,
  //     url: 'https://github.com/Almarex-Web-Dev/rest-countries-api-project',
  //   },
  //   website: {
  //     icon: <TbWorld />,
  //     url: 'https://rest-countries-web-app-project.netlify.app/',
  //   },
  //   imgUrl: SimonGame,
  // },
  // {
  //   id: 6,
  //   name: 'DiceChallenge',
  //   desc: 'A simple landing page website',
  //   stack: 'React js, SCSS',
  //   gitHubUrl: {
  //     icon: <GrGithub />,
  //     url: 'https://github.com/Almarex-Web-Dev/Huddle-landing-page',
  //   },
  //   website: {
  //     icon: <TbWorld />,
  //     url: 'https://huddle-website-project.netlify.app/',
  //   },
  //   imgUrl: DiceChallenge,
  // },

]
