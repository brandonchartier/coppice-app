import { h, program } from 'coppice';

const model = {
  count: 0,
};

const update = {
  increment: (state) => ({ count: state.count + 1 }),
  decrement: (state) => ({ count: state.count - 1 }),
};

const view = (state, msg) => (
  <div>
    <h1>{state.count}</h1>
    <button onclick={msg.increment}>+</button>
    <button onclick={msg.decrement} disabled={state.count <= 0}>-</button>
  </div>
);

const counter = program({
  model,
  update,
  view,
});

export default counter;
