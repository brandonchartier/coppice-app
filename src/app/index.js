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
  action: {
    wait: (ctx, n) => setTimeout(() => ctx.commit('add', n), 1000)
  },
  view: ctx => state => (
    <div>
      <h1>{state.count}</h1>
      <button onclick={ctx.commit('inc')}>+</button>
      <button onclick={ctx.commit('dec')} disabled={state.count <= 0}>-</button>
      <button onclick={_ => ctx.dispatch('wait', 5)}>+5</button>
    </div>
  )
});

export default counter;
