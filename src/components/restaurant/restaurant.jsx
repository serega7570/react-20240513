import Dishes from '../dishes';
import Reviews from '../reviews/reviews';

const Restaurant = ({ restaurant }) => {
    return (
        <div>
            <h1>{restaurant.name}</h1>
            <h3>Меню</h3>
            <Dishes dishes={restaurant.menu} />
            <h3>Отзывы</h3>
            <Reviews reviews={restaurant.reviews} />
        </div>
    );
};

export default Restaurant;
