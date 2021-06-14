import styled from "styled-components";

export const Container = styled.div`
  /* width: 500px; */
  white-space: nowrap;
  /* padding: 0 200px; */
  margin-top: 100px;
`;

export const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  width: 100%;
`;
export const CoinDetail = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
  min-width: 300px;
`;
export const CoinImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;
export const CoinTitle = styled.div`
  font-size: 16px;
  width: 150px;
`;
export const CoinData = styled.div`
  display: flex;
  text-align: right;
  justify-content: space-between;
  width: 100%;
`;

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 40px;
//   /* margin-left: 100px; */
//   flex-direction: row;
//   /* margin: 0px 50; */
//   /* background-color: #243b55; */
//   &:active {
//     box-shadow: #2952a3 0px 3px 10px;
//     transform: scale(0.95);
//   }
//   @media only screen and (max-width: 770px) {
//     padding-right: 15px;
//   }
// `;
// export const CardStyle = styled.div`
//   width: 300px;
//   height: 210px;
//   margin: 0 2%;
//   cursor: pointer;
// `;

// export const ImageTag = styled.div`
//   position: relative;

//   left: 220px;
//   bottom: 50px;
//   width: 50px;
// `;
