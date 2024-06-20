import Dish from '../dish';

const Dishes = ({ dishes }) => {
    return (
        <ul>
            {dishes.map((dish) => {
                return <Dish key={dish.id} dish={dish} />;
            })}
        </ul>
    );
};

export default Dishes;
