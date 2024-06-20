const RatingController = ({ currentValue, max = 5, onChange }) => {
    const ratingValues = [...Array(max)].map((_, i) => i + 1);
    return (
        <>
            {ratingValues.map((value) => (
                <button key={value} disabled={value === currentValue} onClick={() => onChange(value)}>
                    {value}
                </button>
            ))}
        </>
    );
};

export default RatingController;
