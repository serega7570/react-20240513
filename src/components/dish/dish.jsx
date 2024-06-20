import { useState } from 'react';
import Counter from '../counter';

const Dish = ({ dish }) => {
    const [count, setCount] = useState(0);

    return (
        <li>
            {dish.name}
            <Counter value={count} onChange={setCount} />
        </li>
    );
};

export default Dish;
