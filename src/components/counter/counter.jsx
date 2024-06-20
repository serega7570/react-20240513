import { useCount } from '../../hooks/use-count';

const Counter = ({ value = 0, min = 0, max = 5 }) => {
    const { increment, decrement, count } = useCount(value, min, max);
    return (
        <div>
            <button onClick={decrement} disabled={count === min}>
                -
            </button>
            {count}
            <button onClick={increment} disabled={count === max}>
                +
            </button>
        </div>
    );
};

export default Counter;
