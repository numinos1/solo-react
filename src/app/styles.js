import styled from 'styled-components';

export const Application = styled.div`
  margin: 3rem;
`;

export const Title = styled.h1`
  color: #2292ff;
`;

export const SelectForm = styled.form`
  width: 50%;
  border: 1px;
  margin: 0 0 1.2rem 0;
  display: flex;

  & > select {
    flex: 1 1 auto;
    font-size: 1.2rem;
    padding: 0.4rem;
    margin-right: 1rem;
    border: 1px solid #999;
    border-radius: 4px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
