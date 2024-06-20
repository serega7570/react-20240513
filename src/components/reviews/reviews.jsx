import Review from '../review';
import ReviewForm from '../review-form/review-form';

const Reviews = ({ reviews }) => {
    return (
        <>
            <ul>
                {reviews.map((review) => {
                    return <Review key={review.id} review={review} />;
                })}
            </ul>
            <ReviewForm />
        </>
    );
};

export default Reviews;
