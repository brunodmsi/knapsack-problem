import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 30px;

  background: #1e1e1e;
  padding: 20px 25px;
  color: #f2f2f2;
  width: 100%;
  max-width: 940px;
  border-radius: 4px;

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;

    h2 {
      margin-bottom: 20px;
    }

    label {
      margin-bottom: 10px;
    }

    button {
      margin-top: 10px;
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
