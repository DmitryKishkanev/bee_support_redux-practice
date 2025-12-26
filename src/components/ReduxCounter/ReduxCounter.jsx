import { useDispatch, useSelector } from 'react-redux';
import { CounterBox } from 'components/ReduxCounter/ReduxCounter.styled';

export default function ReduxCounter() {
  const { total, step } = useSelector(state => state);

  const dispatch = useDispatch();

  const increment = () => dispatch({ type: 'increment', payload: step });

  const decrement = () => dispatch({ type: 'decrement', payload: step });

  return (
    <CounterBox>
      <h1>Счётчик</h1>
      <p>{total}</p>
      <div>
        <button type="button" onClick={decrement}>
          Уменьшить
        </button>

        <button type="button" onClick={increment}>
          Увеличить
        </button>
      </div>
    </CounterBox>
  );
}
