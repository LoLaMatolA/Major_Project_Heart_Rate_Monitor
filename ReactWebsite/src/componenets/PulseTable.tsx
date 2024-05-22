interface Props {
  pulseValue: number;
  index: number;
  date: string;
  handleDelete: (index: number) => void;
}

const PulseTable = ({ pulseValue, index, date, handleDelete }: Props) => {
  const handleDeleteClick = () => {
    handleDelete(index); // Call the handleDelete function with the index
  };

  // Determine the category based on the pulse value
  const getCategory = (pulse: number) => {
    if (pulse < 60) {
      return "Too Low";
    } else if (pulse <= 100) {
      return "Normal";
    } else {
      return "Too High";
    }
  };

  const category = getCategory(pulseValue);

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{category}</td>
      <td>{pulseValue}</td>
      <td>{date}</td>
      <td>
        <button onClick={handleDeleteClick}>Delete</button>
      </td>
    </tr>
  );
};

export default PulseTable;
