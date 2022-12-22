import React , {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne , homeObjTwo , homeObjThree } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import SlickSlide from '../components/SlickSlide'
import Card from '../components/Card/Card';
import { useSelector, useDispatch } from 'react-redux'
import Timeline from '../components/timeline/timeline';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
     const myUser = useSelector((state) => state.masterbenz)
     console.log(myUser)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
       <Sidebar isOpen={isOpen} toggle={toggle} />
       <Navbar toggle={toggle} />
       {/* <HeroSection /> */}
       <InfoSection {...myUser.user}/>
       {/* <InfoSection {...homeObjTwo}/>
        <Services/>
       <InfoSection {...homeObjThree}/> */}
        <Card />
        <Timeline/>
        <SlickSlide/>
       <Footer />
    </>
  );
}

export default Home;
