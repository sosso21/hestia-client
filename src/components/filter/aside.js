import { useEffect, useState } from "react";

import "../../styles/agencyNScpi.css";
import fr from "../../store/fr";
import { data } from "../../store/data";
import {
  type,
  category,
  localisation
} from "../../store/store"

const Aside = ({ filter, setFilter,  _agency=[] }) => {
  const [agency, setAgency] = useState(_agency);
  useEffect(() => {
    if (!agency.length) {
      fetch(data.urlServer + "/api/agency/find")
      .then((res) => res.json())
      .then((res) => setAgency(res));
    }
  }, []);

  const handleChange = (item, change = []) => {
    if (change.includes(item)) {
      return change.filter((i) => i != item);
    } else {
      return [...change, item];
    }
  };

  const txt = fr.SCPI;
  return (
    <aside className=" px-2 aside-left">
      <strong>{txt.filterTitle} </strong>
      <div className="d-flex my-2">
        {[1, 0].map((i) => (
          <button
            onClick={() => setFilter({ ...filter, inOurSelection: i })}
            className={`btn btn-sm ${
              i == filter.inOurSelection ? "btn-hermes" : "btn-dark"
            }`}
          >
            {!!i ? txt.allScpi : txt.ourSelection}
          </button>
        ))}
      </div>

      <div className="form-group">
        <label htmlFor="q">{txt.search} </label>
        <input
          type="text"
          className="form-control"
          id="q"
          value={filter.q}
          onChange={(e) => setFilter({ ...filter, q: e.target.value })}
          aria-describedby="helpId"
          placeholder={txt.qPlaceOlder}
        />
      </div>

      <div className="form-group">
        <label htmlFor="AgencyName">{txt.AgencyName} </label>
        <select
          value={filter.parentAgency || ""}
          onChange={(e) =>
            setFilter({ ...filter, parentAgency: e.target.value })
          }
          className="form-control"
          id="AgencyName"
        >
          <option>{txt.inputPlaceOlder} </option>
          {[...agency].map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      <strong>{txt.FilterType} </strong>
      {[...type].map((item, key) => (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={(filter.type || []).includes(item)}
            onChange={() =>
              setFilter({ ...filter, type: handleChange(item, filter.type) })
            }
            id={"typeCheckBox" + key}
          />
          <label className="form-check-label" htmlFor={"typeCheckBox" + key}>
            {item}
          </label>
        </div>
      ))}

      <strong>{txt.category} </strong>
      {[...category].map((item, key) => (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={(filter.category || []).includes(item)}
            onChange={() =>
              setFilter({
                ...filter,
                category: handleChange(item, filter.category),
              })
            }
            id={"CategoryCheckBox" + key}
          />
          <label
            className="form-check-label"
            htmlFor={"CategoryCheckBox" + key}
          >
            {item}
          </label>
        </div>
      ))}

      <strong>{txt.location} </strong>
      {[...localisation].map((item, key) => (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={(filter.localisation || []).includes(item)}
            onChange={() =>
              setFilter({
                ...filter,
                localisation: handleChange(item, filter.localisation),
              })
            }
            id={"localisationCheckBox" + key}
          />
          <label
            className="form-check-label"
            htmlFor={"localisationCheckBox" + key}
          >
            {item}
          </label>
        </div>
      ))}

      <strong>{txt.lifeAssurance} </strong>
      {[1, 0].map((item, key) => (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={(filter.lifeAssurance || []).includes(item)}
            onChange={() =>
              setFilter({
                ...filter,
                lifeAssurance: handleChange(item, filter.lifeAssurance),
              })
            }
            id={"includeLifeAssurance" + key}
          />
          <label
            className="form-check-label"
            htmlFor={"includeLifeAssurance" + key}
          >
            {((!item ? "Non " : "") + txt.includeLifeAssurance).toLowerCase()}
          </label>
        </div>
      ))}
    </aside>
  );
};

export default Aside;
