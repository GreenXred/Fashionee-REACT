import search from '../../../../assets/search.svg';

import { useEffect, useState } from 'react';

export default function SearchBar({ defaultValue = '', onChange }) {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        const t = setTimeout(() => {
            onChange?.(value.trim());
        }, 300);
        return () => clearTimeout(t);
    }, [value, onChange]);

    return (
        <div className="search">
            <input
                className="input"
                type="text"
                placeholder="Search products"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                aria-label="Search products"
            />
        </div>
    );
}
