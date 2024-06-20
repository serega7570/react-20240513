import { useReducer } from 'react';
import RatingController from '../rating-controler/rating-controler';

const INITIAL_FORM_STATE = {
    userName: '',
    reviewText: '',
    rating: 0,
};

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'setUserName':
            return { ...state, userName: payload };
        case 'setReviewText':
            return { ...state, reviewText: payload };
        case 'setRating':
            return { ...state, rating: payload };
        case 'setInitialValues':
            return { ...INITIAL_FORM_STATE };
        default:
            return state;
    }
};

const ReviewForm = () => {
    const [formState, dispatch] = useReducer(reducer, INITIAL_FORM_STATE);

    return (
        <div className="card py-3 text-center">
            <div className="pb-3">
                <div>Имя</div>
                <input
                    value={formState.userName}
                    onChange={(event) => {
                        dispatch({ type: 'setUserName', payload: event.target?.value });
                    }}
                />
            </div>
            <div className="pb-3">
                <div>Текст</div>
                <textarea
                    value={formState.reviewText}
                    onChange={(event) => {
                        dispatch({ type: 'setReviewText', payload: event.target?.value });
                    }}
                ></textarea>
            </div>
            <div className="pb-3">
                <div>Рейтинг</div>
                <RatingController
                    currentValue={formState.rating}
                    maxValue={5}
                    onChange={(rating) => {
                        dispatch({ type: 'setRating', payload: rating });
                    }}
                />
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'setInitialValues' })}>Отправить</button>
            </div>
        </div>
    );
};

export default ReviewForm;
