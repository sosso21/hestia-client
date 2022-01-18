const Table = ({ array = [] }) => {
  return (
    <table className="table table-hover text-reset">
      <tbody>
        {[...array].map((item) => (
          <tr>
            <th scope="row">{item.key} </th>
            <td className="text-end">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
