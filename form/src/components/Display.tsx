import React from "react";

interface Props {
  onChange: (category: string) => void;
  selectedCategory: string;
}

const Display = ({ onChange, selectedCategory }: Props) => {
  return (
    <select
      name="display"
      id="display"
      className="form-select form-select-sm"
      aria-label="Small select"
      onChange={(e) => onChange(e.target.value)}
      value={selectedCategory}
    >
      <option value="">All</option>
      <option value="groceries">Groceires</option>
      <option value="utilities">Utilities</option>
      <option value="entertainment">Entertainment</option>
    </select>
  );
};

export default Display;
