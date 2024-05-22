import { useState } from 'react';

const Dish = ({ dish }) => {
    const [count, setCount] = useState(0);

    const handleChangeCount = (e) => {
        if (e.target.value < 0 || e.target.value > 5) return;
        setCount(e.target.value);
    };
    return (
        <li>
            {dish.name}
            <input className="ms-1 w-25" min={0} max={5} value={count} type="number" onChange={handleChangeCount} />
        </li>
    );
};

export default Dish;
