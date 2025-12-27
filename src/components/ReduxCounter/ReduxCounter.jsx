import { useDispatch, useSelector } from 'react-redux';
import { CounterBox } from 'components/ReduxCounter/ReduxCounter.styled';
import { increment, decrement } from '../../redux/counter/actions';

export default function ReduxCounter() {
  const { total, step } = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment(step));

  const handleDecrement = () => dispatch(decrement(step));

  return (
    <CounterBox>
      <h1>Счётчик</h1>
      <p>{total}</p>
      <div>
        <button type="button" onClick={handleDecrement}>
          Уменьшить
        </button>

        <button type="button" onClick={handleIncrement}>
          Увеличить
        </button>
      </div>
    </CounterBox>
  );
}
