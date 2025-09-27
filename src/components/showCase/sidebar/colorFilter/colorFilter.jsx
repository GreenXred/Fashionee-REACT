export default function ColorFilter({ value = [], onChange, options = [] }) {
    const selectedColors = value;
    const toggle = (clickedColorLabel) => {
        const normalizedColor = String(clickedColorLabel).toLowerCase();
        const isAlreadySelected = selectedColors.includes(normalizedColor);
        const updatedColors = isAlreadySelected
            ? selectedColors.filter((existingColor) => existingColor !== normalizedColor)
            : [...selectedColors, normalizedColor];
        onChange?.(updatedColors);
    };

    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Colors</div>
            <div className="sidebar-content">
                {options.map((colorLabel) => {
                    const normalizedColor = colorLabel.toLowerCase();
                    const isChecked = selectedColors.includes(normalizedColor);
                    const id = `color-${normalizedColor}`;
                    return (
                        <div className="color" key={normalizedColor}>
                            <input
                                id={id}
                                type="checkbox"
                                className="color-checkbox"
                                checked={isChecked}
                                onChange={() => toggle(colorLabel)}
                            />
                            <label htmlFor={id} className="color-name">{colorLabel}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
