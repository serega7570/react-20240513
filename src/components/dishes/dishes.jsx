import Dish from '../dish';

const Dishes = ({ dishes }) => {
    return (
        <ul>
            {dishes.map((dish) => {
                return <Dish dish={dish} />;
            })}
        </ul>
    );
};

export default Dishes;
