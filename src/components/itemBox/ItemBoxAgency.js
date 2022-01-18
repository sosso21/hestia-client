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

const ItemBoxAgency = ({ className = get_random(defaultClass), item }) => {
  const txt = fr.itemBox;

  return (
    <a className={className + " my-2 px-2 py-1 agency-box "} href={`/agency/${item.slug}`}>
      <strong className="fw-lighter  fs-3 title-agency-box"> {item.title} </strong>
      <div className="logo-img">
        <img src={item.logo_url} alt={"logo de" + item.title} />
      </div>
      <div className="sup-info-flex">
        <span>
          <p>{txt.creation}</p>
          <time datetime={item.agencyCreation.split("-")[0]}>
            {item.agencyCreation.split("-")[0]}
          </time>
        </span>
        <span>
          <p>{txt.scpiLength}</p>
          <p>{item.scpiLength} </p>
        </span>
        <span>
          <p>{txt.encours}</p>
          <p> {item.encours}
          </p>
        </span> <span>
          <p>{txt.effective}</p>
          <p> {item.effective} </p>
        </span>
      </div>
      <div className="my-1">
          <p className="fs-5 text-center">{txt.MajorityShareholder} : {item.MajorityShareholder} </p>
      </div>
    </a>
  );
};

export default ItemBoxAgency;
