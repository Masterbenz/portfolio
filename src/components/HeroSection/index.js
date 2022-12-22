import React , {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement'
import { HeroContainer , 
        HeroBg , 
        VideoBg , 
        HeroContent ,
        HeroImg ,
        HeroH1 , 
        HeroP ,
        HeroBtnWrapper ,
        ArrowForward ,
        ArrowRight ,
} from './HeroElement'

const HeroSection = () => {
    const [hover , setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer >
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='Video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Cherdpong Puengtuean</HeroH1>
            <HeroP>
                I'm FullStack Deverloper
            </HeroP>
            {/* <HeroBtnWrapper>
                <Button
                 to="signup" 
                 onMouseEnter={onHover} 
                 onMouseLeave={onHover}
                 primary='true'
                 dark='true'
                 >
                    Profile { hover ?<ArrowRight/> : <ArrowForward /> }
                </Button>
            </HeroBtnWrapper> */}
        </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
