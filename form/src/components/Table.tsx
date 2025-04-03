interface Item {
  Description: string;
  Amount: number;
  Category: string;
}

interface Props {
  content: Item[];
}

const Table = ({ content }: Props) => {
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
            <td>{"$" + row.Amount}</td>
            <td>{row.Category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
