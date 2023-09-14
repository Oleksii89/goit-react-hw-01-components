import styled from 'styled-components';

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
  margin-top: 10px;
  box-shadow: 0 0 10px #c6cccced;
`;

export const StatList = styled.ul`
  width: 370px;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  background-color: teal;
  color: #ffffff;
`;
export const TitleText = styled.h2`
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: #524a4d;
`;
export const StatsLi = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: inherit;
  align-items: center;
`;

export const PercentageText = styled.span`
  font-weight: 750;
  font-size: 20px;
  color: white;
`;
