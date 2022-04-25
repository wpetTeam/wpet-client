import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import 'assets/styles/About/_style.scss';

const Pagination = ({ direction, moveSlide, isShow }) => {
    return (
        <>
            <button onClick={moveSlide} className="button">
                {direction === 'next' && isShow === 'True' && (
                    <MdKeyboardArrowRight size={45} className="icon" />
                )}
                {direction === 'prev' && isShow === 'True' && (
                    <MdKeyboardArrowLeft size={45} className="icon" />
                )}
            </button>
        </>
    );
};
export default Pagination;
