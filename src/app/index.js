import { h, program } from 'coppice';
import r from 'ramda';

const count = r.over(r.lensProp('count'));

const counter = program({
  model: {
    count: 0
  },
  update: {
    inc: _ => count(r.inc),
    dec: _ => count(r.dec),
    add: n => count(r.add(n))
  },
  view: msg => state => (
    <div>
      <h1>{state.count}</h1>
      <button onclick={msg.inc}>+1</button>
      <button onclick={msg.dec} disabled={state.count <= 0}>-1</button>
      <button onclick={_ => msg.add(5)}>+5</button>
    </div>
  )
});

export default counter;
