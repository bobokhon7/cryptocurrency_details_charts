import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background-color: #243b55; */
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  width: 80%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  /* width: 400px; */
`;
export const MarketInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  @media only screen and (max-width: 770px) {
    margin-top: 20px;
    /* width: 300px; */
    margin-left: 0;
  }
  /* width: 400px; */
`;

export const CoinWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  padding: 5px;
`;

export const CoinTitle = styled.div`
  font-size: 16px;
`;

export const MediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3px;
`;

export const LinkBox = styled.div`
  height: 35px;
  width: ${(props) => (props.changeWidth ? "190px" : "120px")};
  background-color: #f8f9fa;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 8px;
  margin-left: ${(props) => (props.move ? "67px" : "45px")};
  justify-content: flex-end;
`;

export const Box1 = styled.div`
  /* display: grid; */
  height: 35px;
  width: ${(props) => (props.changeView ? "100px" : "100px")};
  color: white;
  background-color: ${(props) => (props.changeView ? "#f8f9fa" : "black")};
  padding: 5px;
  margin-left: ${(props) => (props.changeMargin ? "10px" : "22px")};
  text-align: center;
  color: ${(props) => (props.changeView ? "black" : "white")};
  :hover {
    color: rgb(126, 211, 33);
  }
  border-radius: 8px;
`;

export const LinkTag = styled.a`
  text-decoration: none;
  color: black;
  transform: scale(0.9);
  :hover {
    color: rgb(126, 211, 33);
  }
`;
export const CoinPrice = styled.div`
  font-size: 30px;
`;
export const MoneyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TextTitle = styled.div`
  font-size: ${(props) => (props.changeFontSize ? "15px" : "20px")};
`;

export const LineChart = styled.div`
  margin-top: 50px;
  height: 100%;
  background: white;
  color: black;
  width: 80%;
  font-family: sans-serif;
  text-align: center;
  @media only screen and (max-width: 770px) {
    width: 400px;
  }
  padding-bottom: 80px;
`;

export const Descreption = styled.div`
  margin-top: 20px;
  padding: 30px;
  @media only screen and (max-width: 770px) {
    /* padding: 30px; */
    text-align: start;
    width: 400px;
    margin-right: 0;
  }
  color: black;

  text-align: start;
`;
