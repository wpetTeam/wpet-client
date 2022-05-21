import 'PetInfo/components/Register/Content/styles/_style.scss';

export const Button = (props) => {
    return (
        <button
            className="next-btn"
            onClick={props.onClick}
            // onClick={() => props.setStep(props.step + 1)}
        >
            {props.text}
        </button>
    );
};
