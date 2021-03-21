import styled from 'styled-components';

export const Container = styled.div`
  height: 60%;
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 3rem 0 5rem 0;
`;

export const Message = styled.div`
  text-align: center;

  & h2 {
    font-size: 26px;
    margin: 30px 0 12px 0;
    font-weight: normal;
    letter-spacing: 0.3em;
    color: #333;
    padding: 0;
  }
  & > span {
    display: block;
    font-size: 18px;
    padding-right: 10px;
    margin: 0;
    color: #999;
  }

  // Spinner
  & .spinner {
    width: 100px;
    height: 100px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
  & .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #5375ae;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
    animation: sk-bounce 2.0s infinite ease-in-out;
  }
  & .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
  @-webkit-keyframes sk-bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }
  @keyframes sk-bounce {
    0%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
`;
