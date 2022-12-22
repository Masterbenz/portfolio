import React from 'react';
import react from '../../img/logo.svg'
import angular from '../../img/angular.png'
import nodejs from '../../img/nodejs.png'
import laravel from '../../img/laravel.png'
import mongodb from '../../img/mongodb.png'
import {
    ServicesContainer, 
    ServicesH1,
    ServicesWrapper ,
    ServicesCard, 
    ServicesIcon , 
    ServicesH2, 
    ServicesP
} from './ServicesElement'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Skills</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={react}/>
                <ServicesH2>React</ServicesH2>
                <ServicesP>React is a JavaScript library for building user interfaces.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={react}/>
                <ServicesH2>React-native</ServicesH2>
                <ServicesP>React-native is a framework for developing mobile apps.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={angular}/>
                <ServicesH2>Angular</ServicesH2>
                <ServicesP>Angular is a development platform , built on TypeScript.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={nodejs}/>
                <ServicesH2>Nodejs</ServicesH2>
                <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={laravel}/>
                <ServicesH2>Laravel</ServicesH2>
                <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={mongodb}/>
                <ServicesH2>Mongodb</ServicesH2>
                <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
            </ServicesCard>
            
        </ServicesWrapper>
      
    </ServicesContainer>
  );
}

export default Services;
