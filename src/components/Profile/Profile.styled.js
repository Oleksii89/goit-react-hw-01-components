import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background-color: grey;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  width: 370px;
  border-radius: 10px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  border-bottom: whitesmoke solid 2px;
`;

export const Photo = styled.img`
  width: 150px;
  border-radius: 50%;
  background-color: whitesmoke;
  padding: 20px 10px 0px 10px;
  margin-bottom: 15px;
`;

export const UsernameText = styled.p`
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 10px;
`;
export const TagText = styled.p`
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 10px;
`;
export const LocationText = styled.p`
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 10px;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: 0;
  width: inherit;
  background-color: teal;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const StatsContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  min-width: 80px;
  padding: 7px 0;
`;
export const LabelText = styled.span`
  margin-right: 3px;
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 5px;
`;
export const QuantityText = styled.span`
  font-weight: 750;
  font-size: 20px;
  margin-bottom: 10px;
`;
