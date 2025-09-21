export default function PriceBar({ min, max, onChange }) {
    const onMin = (e) => onChange?.({ min: e.target.value, max });
    const onMax = (e) => onChange?.({ min, max: e.target.value });
  
    return (
      <div className="sidebar-item">
        <div className="sidebar-title">Price</div>
        <div className="sidebar-content">
          <div className="price-bar">
            <input
              type="number"
              placeholder="0"
              className="input"
              value={min ?? ''}
              onChange={onMin}
              min="0"
              step="0.01"
            />
            <input
              type="number"
              placeholder="200"
              className="input"
              value={max ?? ''}
              onChange={onMax}
              min="0"
              step="0.01"
            />
          </div>
        </div>
      </div>
    );
  }
  