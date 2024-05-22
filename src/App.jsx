import Restaurant from './components/restaurant';
import { restaurants } from './consts/mock';

// ДЗ-1
const App = () => {
    return (
        <>
            {restaurants.map((restaurant) => {
                return <Restaurant restaurant={restaurant} />;
            })}
        </>
    );
};

export default App;
