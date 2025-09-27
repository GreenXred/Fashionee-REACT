import rightPagin from '../../../../assets/right-pagin-arrow.svg';
import leftPagin from '../../../../assets/left-pagin-arrow.svg';

import './pagination.css';

export default function Pagination({ page, totalPages, onPrev, onNext, onSelect }) {
    const pages = [...Array(totalPages).keys()].map((index) => index + 1);
    return (
        <div className="pagination">
            <div
                className='arrow'
                onClick={page === 1 ? undefined : onPrev}
            >
                <img src={leftPagin} alt="" />
            </div>

            <div className="pages">
                {pages.map((pageNumber) => (
                    <div
                        key={pageNumber}
                        className={'page' + (pageNumber === page ? ' active' : '')}
                        onClick={() => onSelect?.(pageNumber)}
                    >
                        {pageNumber}
                    </div>
                ))}
            </div>

            <div
                className='arrow'
                onClick={page === totalPages ? undefined : onNext}
            >
                <img src={rightPagin} alt="" />
            </div>
        </div>
    );
}
