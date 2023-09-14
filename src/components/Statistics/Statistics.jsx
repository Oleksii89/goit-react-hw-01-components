import { LabelText } from 'components/Profile/Profile.styled';
import {
  StatList,
  StatisticsSection,
  TitleText,
  StatsLi,
  PercentageText,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <TitleText>{title}</TitleText>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsLi key={id}>
              <LabelText>{label}</LabelText>
              <PercentageText>{percentage}%</PercentageText>
            </StatsLi>
          );
        })}
      </StatList>
    </StatisticsSection>
  );
};
