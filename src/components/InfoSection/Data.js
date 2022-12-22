import car1 from '../../img/svg-1.svg'
import car2 from '../../img/svg-g.svg'
import { useSelector, useDispatch } from 'react-redux'

// export const Data = () => {
//     const myUser = useSelector((state) => state.sidebarShow)
//     return myUser.displayName;
// }

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About',
    headline: 'Cherdpong Puengtuean',
    description: `Hi! i am a Full Stackdeveloper
    development, including design creation, coding, debugging,` ,
    buttonLabel: 'Get Start' ,
    imgStart: false,
    img: require('../../img/cherdpong.jpeg'),
    alt: 'Car' ,
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Unlimited Transactions with zero fees',
    description: "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fee." ,
    buttonLabel: 'Learn More' ,
    imgStart: false,
    img: car2,
    alt: 'Piggy Bank' ,
    dark: false,
    primary: false,
    darkText: true
};


export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join Our Team',
    headline: 'Createing an account is extremely easy',
    description: "Get everthing set up and ready in under 10 minutes. All you need to do is add your  information and you're ready to go"  ,
    buttonLabel: 'Start Now' ,
    imgStart: true,
    img: require('../../img/car1.png'),
    alt: 'Car' ,
    dark: false,
    primary: false,
    darkText: true
};
