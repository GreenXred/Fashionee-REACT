export default function ApplyButton({ onApply, disabled = false }) {
    return (
      <div className="button-wrapper">
        <button className="button" onClick={() => onApply?.()} disabled={disabled}>
          Apply Filter
        </button>
        <div className="vertical-line"></div>
      </div>
    );
  }
  