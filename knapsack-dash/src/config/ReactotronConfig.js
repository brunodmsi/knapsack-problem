import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV) {
  const tron = Reactotron.configure().connect();

  console.tron = tron;

  tron.clear();
}
