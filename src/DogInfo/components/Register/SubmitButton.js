import 'DogInfo/components/Register/Content/styles/_style.scss';

export const SubmitButton = (props) => {
    return (
        <button
            className="next-btn"
            onClick={() => props.setStep(props.step + 1)}
        >
            {props.text}
        </button>
    );
};
