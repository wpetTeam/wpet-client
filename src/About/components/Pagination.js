import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import 'About/styles/_style.scss';

const Pagination = ({ direction, moveSlide }) => {
    return (
        <>
            <button onClick={moveSlide} className="about-pagination-button">
                {direction === 'next' && (
                    <MdKeyboardArrowRight
                        size={45}
                        className="pagination-icon"
                    />
                )}
                {direction === 'prev' && (
                    <MdKeyboardArrowLeft
                        size={45}
                        className="pagination-icon"
                    />
                )}
            </button>
        </>
    );
};
export default Pagination;
