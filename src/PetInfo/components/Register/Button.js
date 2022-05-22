import 'PetInfo/components/Register/Content/styles/_style.scss';

export const Button = (props) => {
    return (
        <button className="next-btn" onClick={props.onClick}>
            {props.text}
        </button>
    );
};
