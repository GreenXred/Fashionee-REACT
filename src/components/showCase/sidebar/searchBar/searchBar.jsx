import Search from '../../../../assets/search.svg';

import { useEffect, useState, useRef } from 'react';

export default function SearchBar({ defaultValue = '', onChange }) {
    const [value, setValue] = useState(defaultValue);

    const onChangeRef = useRef(onChange);
    useEffect(() => { onChangeRef.current = onChange; }, [onChange]);

    useEffect(() => {
        const t = setTimeout(() => onChangeRef.current?.(value.trim()), 300);
        return () => clearTimeout(t);
    }, [value]);

    return (
        <div className="search">
            <input
                className="input"
                type="text"
                placeholder="Search products"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <span className="search-icon">
                <img src={Search} alt="" />
            </span>
        </div>
    );
}
