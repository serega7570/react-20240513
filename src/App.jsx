import { useState } from 'react';
import Restaurant from './components/restaurant';
import { restaurants } from './consts/mock';
import restaurant from './components/restaurant';

const App = () => {
    const [activeId, setActiveId] = useState(restaurants[0].id);

    const activeRestaurant = restaurants.find((restaurant) => restaurant.id === activeId);

    return (
        <>
            <ul class="nav">
                {restaurants.map((restaurant) => {
                    return (
                        <li class="nav-item">
                            <h4>
                                <a class="nav-link ps-0 pe-5 cursor-pointer" onClick={() => setActiveId(restaurant.id)}>
                                    {restaurant.name}
                                </a>
                            </h4>
                        </li>
                    );
                })}
            </ul>
            <Restaurant restaurant={activeRestaurant} />
        </>
    );
};

export default App;
