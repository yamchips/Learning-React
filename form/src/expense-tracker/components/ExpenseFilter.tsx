import { optional } from "zod";
import categories from "../categories";

interface Props {
  onSelectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectedCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectedCategory(e.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((c) => (
        <option key={c} value={c}>
          c
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
