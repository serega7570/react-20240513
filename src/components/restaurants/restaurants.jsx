const Restaurants = ({ restaurants, setActiveId }) => {
    return (
        <ul className="nav">
            {restaurants.map((restaurant) => {
                return (
                    <li key={restaurant.id} className="nav-item">
                        <h4>
                            <a className="nav-link ps-0 pe-5 cursor-pointer" onClick={() => setActiveId(restaurant.id)}>
                                {restaurant.name}
                            </a>
                        </h4>
                    </li>
                );
            })}
        </ul>
    );
};

export default Restaurants;
