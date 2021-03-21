import styled from 'styled-components';

export const List = styled.div`
  width: 50%;
  margin-right: 2rem;
`;

export const ListTitle = styled.h2`
  font-size: 1.7rem;
  font-weight: 500;

  & > span {
    text-transform: capitalize;
    color: #2292ff;
  }
`;

export const ListTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  & > thead {
    & > tr {
      & > th {
        background-color: #eee;
        padding: 0.8em;
        text-align: left;
      }
    }
  }
  & > tbody {
    & > tr {
      & > td {
        padding: 0.8em;
        border-bottom: 1px solid #eee;
      }
      &:hover {
        & > td {
          background-color: #e9f4ff;
          cursor: pointer;
        }
      }
      &.selected {
        & > td {
          color: #2292ff;
        }
      }
    }
  }
`;
