import "../../styles/ItemBoxAgency.css";
import fr from "../../store/fr";

const get_random = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};
const defaultClass = [
  "bg-dark text-light",
  "bg-night text-light",
  "bg-light text-dark",
  "bg-hermes text-light",
];

const ItemBoxSCPI = ({ className = get_random(defaultClass), item }) => {
  const txt = fr.itemBox;

  return (
    
    <a className={className + " my-2 px-2 py-1 agency-box border-stule-color"} href={`/scpi/${item.slug}`}>
      <strong className="fw-lighter  fs-3 title-agency-box"> {item.title} </strong>
      <div className="fs-4 text-right">
        <p className="fw-lighter  fs-5 title-agency-box"> {txt.setBy} : {item.agencyName } </p>
      </div>
      <div className="sup-info-flex">
     
        <span>
          <p>{txt.TDM} {new Date().getFullYear() -1 } </p>
          <p>{item.distributionRate} </p>
        </span>
        <span>
          <p>{txt.partPrice}</p>
          <p> {item.partPrice}
          </p>
        </span>  
      </div>
      
    </a>
  );
};

export default ItemBoxSCPI;
