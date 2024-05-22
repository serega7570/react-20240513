import Review from '../review';

const Reviews = ({ reviews }) => {
    return (
        <ul>
            {reviews.map((review) => {
                return <Review review={review} />;
            })}
        </ul>
    );
};

export default Reviews;
