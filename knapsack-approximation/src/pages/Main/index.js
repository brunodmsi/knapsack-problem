import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';

import Approximation from '../../services/Knapsack/Approximation';

import { Container, Result } from './styles';

export default function Main() {
  const [isSolution, setIsSolution] = useState(false);
  const [result, setResult] = useState({});

  function handleSubmit({ number, capacity, epsilon }) {
    setIsSolution(false);

    if (
      isNaN(parseInt(number)) ||
      isNaN(parseInt(capacity)) ||
      isNaN(parseInt(epsilon)) ||
      number < 1 || capacity < 1 ||
      epsilon < 1
    ) return;

    const knapsack = new Approximation();
    const solution = knapsack.solve(number, capacity, epsilon);
    setResult(solution)
    setIsSolution(true);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Algoritmo de Aproximação</h1>

        <span>n => numero de itens</span>
        <span>c => capacidade da mochila</span>
        <span>e => epsilon, 1 + epsilon é a relação de aproximação do algoritmo</span>

        <p>Insira um número n</p>
        <Input name="number" placeholder="n => numero de itens"/>

        <p>Insira um número c</p>
        <Input name="capacity" placeholder="c => capacidade" />

        <p>Insira um número e</p>
        <Input name="epsilon" placeholder="e => epsilon (aproximacao)" />

        <button type="submit">OK</button>
      </Form>

      {isSolution
      ? (
        <Result>
          <h2>Valores: <span>{result.debugValue}</span></h2>
          <h2>Pesos: <span>{result.debugWeight}</span></h2>
          <h2>Valor máximo com precisão: <span>{result.debugMaxAccurate}</span></h2>
          <h2>Valor arredondado: <span>{result.debugRoundingValue}</span></h2>
          <h2>Valor máximo aproximado: <span>{result.debugMaxValueApprox}</span></h2>
          <h2>Tempo: <span>{result.debugTotalTime}</span></h2>
        </Result>
      ) : (
        <></>
      )
    }
    </Container>
  );
}
