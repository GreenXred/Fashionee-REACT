import rightPagin from '../../../../assets/right-pagin-arrow.svg';
import leftPagin from '../../../../assets/left-pagin-arrow.svg';


export default function Pagination() {
    return (
        <div className="pagination">
            <div className="button left">
                <img src={leftPagin} alt="left arrow" />
            </div>
            <div className="pages">
                <div className="page active">1</div>
                <div className="page">2</div>
                <div className="page">3</div>
            </div>
            <div className="button right">
                <img src={rightPagin} alt="right arrow" />
            </div>
        </div>
    )
}