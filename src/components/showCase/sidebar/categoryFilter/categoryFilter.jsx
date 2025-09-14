export default function CategoryFilter() {
    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Categories</div>
            <div className="sidebar-content">
                <ul className="custom-list">
                    <li className="item">All</li>
                    <li className="item active">Men</li>
                    <li className="item">Women</li>
                    <li className="item">Accessories</li>
                    <li className="item">New Arrivals</li>
                </ul>
            </div>
        </div>
    );
}