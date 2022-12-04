import styled from 'styled-components';

export const StatisticsTitle = styled.h2`
  font-family: 'Roboto, system-ui, sans-serif';
  text-transform: upperCase;
  text-align: center;
  color: #52595f;
  padding-top: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  width: 100%;
  height: 60px;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsData = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 4);
  text-shadow: 1px 1px 2px black;
  font-size: 15px;
  font-family: 'Roboto, system-ui, sans-serif';
  border: 1px;
  color: white;
  background-color: ${getRandomHexColor};
`;

export const StatisticsValue = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

export const StatisticsContainer = styled.div`
  height: 120px;
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 24px;
  border-radius: 14px;
  background: linear-gradient(45deg, #f0f0f0, #cacaca);
  box-shadow: 12px -12px 24px #bebebe, -12px 12px 24px #ffffff;
`;
