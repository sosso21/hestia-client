import "../styles/Home.css";

const FlexList = ({ data }) => {
  return (
    <ul className="flex-list">
      {(data || []).map((i, k) => (
        <li className="adventage-list-item" key={k}>
          <i className={`fs-1 my-1 mx-auto text-hermes ` + i.svg}></i>
          <strong className="my-1">{i.title} </strong>
          <p>{i.description} </p>
        </li>
      ))}
    </ul>
  );
};
export default FlexList;
