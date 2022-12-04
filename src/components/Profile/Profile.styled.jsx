import styled from 'styled-components';

export const Avatar = styled.img`
  margin-top: 25px;
  width: 150px;
  border-radius: 50%;
  background: #e0e0e0;
  box-shadow: 16px -16px 32px #afafaf, -16px 16px 32px #ffffff;
`;

export const UserName = styled.h1`
  margin-top: 25px;
  font-family: 'Roboto, system-ui, sans-serif';
  color: #1f3349;
`;

export const Tag = styled.p`
  font-family: 'Roboto, system-ui, sans-serif';
  font-size: 20px;
  color: #a1abb6;
`;

export const Location = styled.p`
  font-family: 'Roboto, system-ui, sans-serif';
  font-size: 20px;
  color: #a1abb6;
`;

export const StatsList = styled.ul`
  display: flex;
  width: 100%;
  height: 60px;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  font-size: 13px;
  font-family: 'Roboto, system-ui, sans-serif';
  border: 1px solid;
  border-color: #e5ebf3;
  color: #89898f;
  background-color: #f3f6f9;
`;

export const StatusValue = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #1f3349;
`;

export const ProfileContainer = styled.div`
  height: 400px;
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
