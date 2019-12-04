import styled from 'styled-components';

export const Container = styled.div`
  background: #1e1e1e;
  padding: 0 30px;
  border-radius: 4px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    h1 {
      font-size: 28px;
      color: #f2f2f2;
    }
  }
  aside {
    display: flex;
    align-items: center;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #f2f2f2;
    }
  }
`;
