import { useState } from 'react';
import Counter from './../counter';

const Dish = ({ dish }) => {
    return (
        <li>
            {dish.name}
            <Counter />
        </li>
    );
};

export default Dish;
