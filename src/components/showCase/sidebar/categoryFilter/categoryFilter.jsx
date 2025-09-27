export default function CategoryFilter({ value, onChange, options = [] }) {
  return (
    <div className="sidebar-item">
      <div className="sidebar-title">Categories</div>
      <div className="sidebar-content">
        <ul className="custom-list">
          {options.map((label) => (
            <li
              key={label}
              className={'item' + (value === label ? ' active' : '')}
              role="button"
              tabIndex={0}
              onClick={() => onChange?.(label)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onChange?.(label)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
