import React from 'react';

import { Wrapper } from './styles';
import Header from '../../../components/Header';

export default function Default({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}
