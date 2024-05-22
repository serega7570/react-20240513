import Restaurant from './components/restaurant';
import { restaurants } from './consts/mock';

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
