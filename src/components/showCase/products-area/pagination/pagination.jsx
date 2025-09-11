import '../../../../assets/right-pagin-arrow.svg';
import '../../../../assets/left-pagin-arrow.svg';


export default function Pagination() {
    return (
        <div className="container">
            <div className="shop">
                <div className="products-wrapper">
                    <div classNAme="pagination">
                        <div classNAme="button left">
                            <img src={leftPagin} alt="left arrow" />
                        </div>
                        <div classNAme="pages">
                            <div classNAme="page active">1</div>
                            <div classNAme="page">2</div>
                            <div classNAme="page">3</div>
                        </div>
                        <div classNAme="button right">
                            <img src={rightPagin} alt="right arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}