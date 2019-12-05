import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 50px auto;
  width: 100%;
  max-width: 940px;
  border-radius: 4px;
  padding: 20px 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1e1e1e;
  color: #f2f2f2;

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;

    h1 {
      margin-bottom: 20px;
    }

    > p {
      font-size: 18px;
      font-weight: 600;
      margin-top: 15px;
    }

    input {
      padding: 10px 10px 10px 10px;
      border-radius: 4px;
      border: 0;

    }

    button {
      margin-top: 30px;
      padding: 10px 30px 10px 30px;
      align-items: center;
      justify-content: center;
      background-color: #BB86FC;
      border-radius: 4px;
      border: 0;
      color: #000;
      font-weight: 600;
    }
  }
`;

export const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 40px;


  h2 {
    font-size: 24px;
    margin-bottom: 15px;

    span {
      font-size: 18px;
    }
  }
`;
