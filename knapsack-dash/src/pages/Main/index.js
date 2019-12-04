import React from 'react';
import { Form } from '@rocketseat/unform';

import { Container } from './styles';
import Header from '../../components/Header';

export default function Main() {
  function handleSubmit(data) {}

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit}>
          <h2>Teste</h2>
        </Form>
      </Container>
    </>
  );
}
