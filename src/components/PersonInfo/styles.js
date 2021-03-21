import styled from 'styled-components';

export const Info = styled.div`
  flex: 1 1 auto;
`;

export const ListTitle = styled.h2`
  font-size: 1.7rem;
  font-weight: 500;

  & > span {
    text-transform: capitalize;
    color: #2292ff;
  }
`;

export const Details = styled.ul`
  list-style-type: none;
  padding: 0;

  & > li {
    padding: .8em 1.2em;
    background-color: #eee;
    border-radius: 7px;
    margin: 0 0 1em 0;
    overflow: auto;

    & > div:first-child {
      font-weight: 500;
      font-size: 0.8rem;
      display: block;
      margin: 0 0 .3em 0;
      color: #666;
    }
    & > div:last-child {
      font-size: 1.3rem;
    }
  }
`;
