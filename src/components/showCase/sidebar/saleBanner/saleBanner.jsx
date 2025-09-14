import banner from '../../../../assets/season-sale-banner.svg';

export default function SaleBanner() {
    return (
        <div className="sidebar">
            <div>
                <a href="">
                    <img src={banner} alt="Season sale banner" />
                </a>
            </div>
        </div>
    );
}