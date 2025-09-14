import search from '../../../../assets/search.svg';

export default function SearchBar() {
    return (

        <div className="search">
            <label>
                <input type="text" placeholder="Search" className="input search-row" />
                <img src={search} alt="Search icon" className="search-icon" />
            </label>
        </div>
    );
}