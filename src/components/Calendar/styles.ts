import styled from 'styled-components';

type CellProps = {
  isWeekend?: boolean;
  isSelectedMonth?: boolean;
  isSelectedDay?: boolean;
};
type DayWrapperProps = {
  isCurrentDay: boolean;
};
export const CalendarWrapper = styled.div`
  width: 800px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 2px;
  background-color: '#404040';
`;

export const Cell = styled.div<CellProps>`
  min-width: 80px;
  min-height: 80px;
  background-color: ${({ isWeekend, isSelectedDay }) => {
    if (isSelectedDay) return '#498fd4';
    return isWeekend ? '#272829' : '#1e1f21';
  }};
  color: ${({ isSelectedMonth }) => (isSelectedMonth ? 'white' : '#555759')};
  cursor: pointer;
`;

export const DayWrapper = styled.div<DayWrapperProps>`
  display: flex;
  justify-content: space-between;
  padding: 4px;
  background-color: ${({ isCurrentDay }) => (isCurrentDay ? 'red' : null)};
`;
