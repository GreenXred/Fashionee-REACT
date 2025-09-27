export default function PriceBar({ min, max, onChange, minLimit, maxLimit }) {
  const onMin = (e) => onChange?.({ min: e.target.value, max });
  const onMax = (e) => onChange?.({ min, max: e.target.value });

  return (
    <div className="sidebar-item">
      <div className="sidebar-title">Price</div>
      <div className="sidebar-content">
        <div className="price-bar">
          <input
            type="text"
            className="input"
            value={min ?? ''}
            onChange={onMin}
            min="0"
            step="0.01"
            placeholder={minLimit != null ? String(minLimit) : ''}
          />
          <input
            type="text"
            className="input"
            value={max ?? ''}
            onChange={onMax}
            min="0"
            step="0.01"
            placeholder={maxLimit != null ? String(maxLimit) : ''}
          />
        </div>
      </div>
    </div>
  );
}
