import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  /* margin-bottom: 20px; */
  background: #010606;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  /* background: ; */
  /* padding: 20px; */
  height: auto;
  padding-top:20px;

 
`;
export const TextHeader = styled.p`
  font-size: 30px;
  color: white;
  font-weight: 700;
  /* padding-top: 60px; */
`;

export const CotainerBox = styled.div`
  display: grid;
  padding: 0 24px;
  column-gap: 70px;
  grid-template-columns: 1fr 1fr;
  width: calc(100% - 400px);
  min-width: 800px;
  /* justify-content: center;
  align-items: center; */
  /* border-width: 10px; */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    /* column-gap: 15px; */
    min-width: 450px;
  }

  @media screen and (max-width: 468px) {
    grid-template-columns: 1fr; /* column-gap: 15px; */
    min-width: 350px;
  }
`;

export const CardBox = styled.div`
  /* border-width: 2px; */

  height: 200px;
  /* width: 300px; */
  /* background-color: red; */
  background: #161b1b;
  border-radius: 5px;
  height: auto;
  /* box-sizing: border-box; */
  margin-bottom: 30px;
  border-radius: 10px;
  justify-content: center;
  flex-direction: row;
  display: flex;
  padding: 20px;
  align-items: center;
  /* margin-top: ; */
  /* border-color: gray; */
  /* box-shadow: 1px 1px 5px 1px gray; */

  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(131, 58, 180);
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
    color: black;
  }
  /* @media screen and (max-width: 468px) {
    transform: rotate(3deg);
  } */
`;

export const CardBoxLeft = styled.div`
  border-width: 2px;
  height: 170px;
  border-radius: 5px;
  margin-bottom: 30px;
  border-color: grey;
  box-shadow: 1px 1px 5px 1px grey;

  @media screen and (max-width: 468px) {
    transform: rotate(-3deg);
  }
`;

export const CardHeaderText = styled.div`
  /* flex-direction: column;
  justify-content: space-between; */
  width: 100%;
`;

export const CardText = styled.h2`
  text-align: center;
  font-weight: 500;
  color: white;
  font-size: 26px;
  margin-top: 15px;
  /* text-decoration: underline;
  text-decoration-color: #01bf71; */
`;

export const TextDescription = styled.p`
  font-size: 14px;
 
  /* margin-left: 20px; */
  color: white;
  /* width: 90%; */
`;

export const Icon = styled.i`
  font-size: 36px;
  color: lightcyan;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconStack = styled.i`
  display: flex;
  color: "white";
  font-size: 22px;
  gap: 10px;
  flex-direction: row;
  color: white;
`;
