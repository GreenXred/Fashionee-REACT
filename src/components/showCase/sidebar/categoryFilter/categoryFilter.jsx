export default function CategoryFilter({
    value,                          // All, 'Men, ...
    onChange,                      
    options = ['All','Men','Women','Accessories','New Arrivals'],
  }) {
    return (
      <div className="sidebar-item">
        <div className="sidebar-title">Categories</div>
        <div className="sidebar-content">
          <ul className="custom-list">
            {options.map(opt => (
              <li
                key={opt}
                className={'item' + (value === opt ? ' active' : '')}
                role="button"
                onClick={() => onChange?.(opt)}
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  