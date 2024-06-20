import { useState } from 'react';
import Restaurant from './components/restaurant';
import Restaurants from './components/restaurants';
import { restaurants } from './consts/mock';

const App = () => {
    const [activeId, setActiveId] = useState(restaurants[0].id);

    const activeRestaurant = restaurants.find((restaurant) => restaurant.id === activeId);

    return (
        <>
            <Restaurants restaurants={restaurants} setActiveId={setActiveId} />
            <Restaurant restaurant={activeRestaurant} />
        </>
    );
};

export default App;
