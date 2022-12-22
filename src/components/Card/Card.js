import React from "react";
import {
  CardContainer,
  TextHeader,
  CardBox,
  CotainerBox,
  CardText,
  TextDescription,
  CardHeaderText,
  Icon,
  IconStack,
} from "./CardElement";

import {
  FaDatabase,
  FaMobileAlt,
  FaInternetExplorer,
  FaConnectdevelop,
  FaPumpMedical,
  FaBug,
  FaAngular,
  FaReact,
  FaNodeJs,
  FaLaravel,
} from "react-icons/fa";

import { SiMysql, SiMongodb } from "react-icons/si";
import InfoContainer from "../InfoSection/InfoElement";
const CardView = () => {
  return (
    <CardContainer id={'What'} > 
      <TextHeader> What I do!</TextHeader>
      <CotainerBox>
     
        <CardBox>
          <CardHeaderText>
            <Icon>
              <FaInternetExplorer />
            </Icon>
            <CardText>Website Development</CardText>
            <TextDescription>
              Develop systems according to customer requirements using react or
              angular technology.
            </TextDescription>
            <IconStack>
              <FaAngular />
              <FaReact />
            </IconStack>
          </CardHeaderText>
        </CardBox>
        <CardBox>
          <CardHeaderText>
            <Icon>
              <FaMobileAlt />
            </Icon>
            <CardText>Application Development</CardText>
            <TextDescription>
              developed applications for both ios and android using
              react-native.
            </TextDescription>
            <IconStack>
              <FaReact />
            </IconStack>
          </CardHeaderText>
        </CardBox>
        <CardBox>
          <CardHeaderText>
            <Icon>
              <FaConnectdevelop />
            </Icon>
            <CardText>Api Development</CardText>
            <TextDescription>
              Develop an API so that the front end can connect.
            </TextDescription>
            <IconStack>
            <FaNodeJs />
            <FaLaravel />
            </IconStack>
          </CardHeaderText>
        </CardBox>
        <CardBox>
          <CardHeaderText>
            <Icon>
              <FaDatabase />
            </Icon>
            <CardText>Design Database </CardText>
            <TextDescription>
              Database design for flexible and easy to use APIs.
            </TextDescription>
            <IconStack>
            <SiMysql />
            <SiMongodb />
            </IconStack>
          </CardHeaderText>
        </CardBox>
        <CardBox>
          <CardHeaderText>
            <Icon>
              <FaPumpMedical />
            </Icon>
            <CardText>System Maintenance</CardText>
            <TextDescription>
              System maintenance to ensure that the developed system can be used
              efficiently according to customer requirements.
            </TextDescription>
            {/* <IconStack>
            <FaNodeJs />
            <FaLaravel />
            </IconStack> */}
          </CardHeaderText>
        </CardBox>
        <CardBox>
          <CardHeaderText>
            <Icon>
              <FaBug />
            </Icon>
            <CardText>Test the system </CardText>
            <TextDescription>
              When finished writing the code, test the system manually.
            </TextDescription>
            {/* <IconStack>
            <FaNodeJs />
            <FaLaravel />
            </IconStack> */}
          </CardHeaderText>
        </CardBox>
      </CotainerBox>
    </CardContainer>
  );
};

export default CardView;
