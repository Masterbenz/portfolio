import styled from "styled-components";

export const CardContainer = styled.div`
  /* background: #0c0c0c; */
  background: #010606;
  text-align: center;
  /* justify-content: center; */
  align-items: center;
  align-self: center;
  height: 468px;
  display: flex;
  flex-direction: column;

  /* width: 100%; */
  /* display: flex;  */

  /* height: 860px; */
  /* margin-bottom: 50px;  */

  /* text-align: center; */

`;

export const CardHeader = styled.div`
  /* border-width: 1px ;
 border-color: grey; */
  width: 70%;
  flex-direction: row;
  /* background: white; */
  align-items: center;
  justify-content: center;
  align-self: center;
  /* align-self: center; */
  /* background: red; */
  /* background: red; */
  /* display: flex;
flex-direction: column; */

  /* flex-direction: row; */
  @media screen and (max-width: 768px) {
    width: 90%;
    /* padding: 100px 0;
    height: 1500px; */
  }
`;

export const CardBox = styled.div`
  border-width: 2px;
  height: 200px;
  width: 60%;
  align-self: center;
  text-align: center;
  align-items: center;
  justify-content: center;
  /* display:block; */
  /* justify-content: center;
  margin-top: 20px;
  align-self: center; 
  align-items: center;
  text-align: center; */
  display: grid;
  column-gap: 15px;
  grid-template-columns: repeat(3, auto);
  background-color: #2196f3;
  /* padding: 10px;
  width: 60%;  */
  @media screen and (max-width: 768px) {
    /* grid-template-columns: 1fr 1fr 1fr ; */
    width: 90%;
    /* padding: 100px 0;
    height: 1500px; */
  }
`;

export const CardItem = styled.div`
  /* text-align: center;
  justify-content: center;
  align-self: center; */
  /* background-color: rgba(255, 255, 255, 0.8); */
  /* border: 1px solid rgba(0, 0, 0, 0.8); */
  /* height: px; */
  /* justify-content: center; */
  /* padding: 20px; */
  /* font-size: 30px; */
  /* justify-self: center; */
  /* align-self: center;
  text-align: center; */
`;

export const CardItemText = styled.h2`
  /* display:'flex';
  justify-content: center; */
  color: white;
 font-size: 36px;
 line-height: 16px;
 font-weight: 700px;
 letter-spacing: 1.4px;
 text-transform: uppercase;
 margin-bottom: 70px;
 margin-top: 40px;

`;
export const TextSlide = styled.p`
  color: white;
  /* font-size: 16px;
  line-height: 16px;
  font-weight: 700px;
  letter-spacing: 1.4px;
  text-transform: uppercase; */
  /* margin-bottom: 16px; */
  /* justify-self: flex-end; */
  /* background-color: white; */
`;

export const ImgSlide = styled.img`
  /* width: 100px; */
  height: 100px;
  margin-top: 20px;
  /* justify-content: center; */
  /* background: transparent; */
  /* background-color: red;  */
`;
