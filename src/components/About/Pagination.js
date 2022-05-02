import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import 'assets/styles/About/_style.scss';

const Pagination = ({ direction, moveSlide }) => {
    return (
        <>
            <button onClick={moveSlide} className="button">
                {direction === 'next' && (
                    <MdKeyboardArrowRight size={45} className="icon" />
                )}
                {direction === 'prev' && (
                    <MdKeyboardArrowLeft size={45} className="icon" />
                )}
            </button>
        </>
    );
};
export default Pagination;
