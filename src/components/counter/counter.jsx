const Counter = ({ value, onChange, min = 0, max = 5 }) => {
    return (
        <div>
            <button onClick={() => onChange(value - 1)} disabled={value === min}>
                -
            </button>
            {value}
            <button onClick={() => onChange(value + 1)} disabled={value === max}>
                +
            </button>
        </div>
    );
};

export default Counter;
