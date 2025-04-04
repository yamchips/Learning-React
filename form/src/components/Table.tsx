interface Item {
  Description: string;
  Amount: number;
  Category: string;
}

interface Props {
  content: Item[];
  onDelete: (index: number) => void;
}

const Table = ({ content, onDelete }: Props) => {
  if (content.length === 0) return null;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {content.map((row, index) => (
          <tr key={index}>
            <td>{row.Description}</td>
            <td>{"$" + row.Amount.toFixed(2)}</td>
            <td>{row.Category}</td>
            <td>
              <button
                onClick={() => onDelete(index)}
                type="button"
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th>
            {"$" +
              content
                .reduce((sum, row) => {
                  return row.Amount + sum;
                }, 0)
                .toFixed(2)}
          </th>
          <th></th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;
