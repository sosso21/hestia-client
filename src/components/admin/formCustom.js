import { useEffect, useState } from "react";
import { data } from "../../store/data";
import UploadFile from "./UploadFile";

const FormCustom = ({ state = "", setState, items }) => {
  const [parentAgency, setparentAgency] = useState("");

  useEffect(() => {
    fetch(`${data.urlServer}/api/agency/find`)
      .then((res) => res.json())
      .then((res) =>
        setparentAgency([...res].map((i) => ({ value: i.id, text: i.title })))
      );
  }, []);

  const handleChange = (k, v) => {
    let _state = {};
    _state[k] = v;
    setState({ ...state, ..._state });
  };

  return [...items].map((item) => {
    if (item.type == "text" || item.type === "email") {
      return (
        <div className="my-4 miin-w-50">
          <label htmlFor={item.slug}>{item.text}</label>
          {item.slug === "phone" && <i>+213(0) </i>}{" "}
          <input
            type={item.type}
            onChange={(e) => handleChange(item.slug, e.target.value)}
            value={state[item.slug]}
            className="form-control form-control-lg"
            id={item.type}
            aria-placeholder={item.placeOlder || ""}
          />
        </div>
      );
    } else if (item.type === "date") {
      return (
        <div className="my-4  miin-w-50">
          <label htmlFor={item.slug}>{item.text}</label>
          {item.slug === "phone" && <i>+213(0) </i>}{" "}
          <input
            type={item.type}
            onChange={(e) => handleChange(item.slug, e.target.value)}
            value={(state[item.slug] || "").split("T")[0]}
            className="form-control form-control-lg"
            id={item.type}
            aria-placeholder={item.placeOlder || ""}
          />
        </div>
      );
    } else if (item.type === "number" ) {
      return (
        <div className="my-4 miin-w-50">
          <label htmlFor={item.slug}>{item.text} : </label>
          {item.slug === "phone" && <i>+213(0) </i>}{" "}
          <input
            type={item.type}
            onChange={(e) => handleChange(item.slug, +e.target.value)}
            value={+state[item.slug]}
            className="form-control form-control-lg"
            id={item.type}
            aria-placeholder={item.placeOlder || ""}
          />
        </div>
      );
    } else if (item.type === "image") {
      return (
        <div className="d-block text-cener my-4">
          {state.logo_url || state._logo ? (
            <div className="py-4 px-2 my-auto mx-auto text-center w-100 h-100 ">
              <img width="200px" height="auto"
                src={state[item.slug] || state._logo.preview}
                alt="logo"
              />
              <i
                className="w-00 btn fs-1 text-danger my-2 mx-2 bi bi-x"
                onClick={() => setState({ ...state, _logo: "", logo_url: "" })}
              ></i>
            </div>
          ) : (
            <span className="mx-auto  d-flex justify-content-center">
              <div className=" mx-auto w-50">
                <UploadFile
                  onChange={(e) =>
                    setState({
                      ...state,
                      _logo: {
                        preview: URL.createObjectURL(e.target.files[0]),
                        raw: e.target.files[0],
                      },
                    })
                  }
                />
              </div>
            </span>
          )} 
        </div>
      );
    } else if (item.type === "textarea") {
      return (
        <div className="my-4 miin-w-50">
          <label htmlFor={item.slug}>{item.text}</label>{" "}
          <textarea
            rows="7"
            onChange={(e) => handleChange(item.slug, e.target.value)}
            value={state[item.slug]}
            className="form-control form-control-lg"
            id={item.type}
            placeholder={item.placeOlder || ""}
          ></textarea>{" "}
        </div>
      );
    } else if (item.type === "select" || item.type === "boolean") {
      const opt = item.slug === "parentAgency" ? parentAgency : item.option;

      return (
        <div className="my-4 miin-w-50">
          <label htmlFor={item.slug}>{item.text}</label>
          <select
            onChange={(e) => handleChange(item.slug, e.target.value)}
            value={state[item.slug]}
            className="form-control form-control-lg"
            id={item.type}
            placeholder={item.placeOlder || ""}
          >
            <option value=""></option>
            {[...opt].map((i, k) => (
              <option value={i.value} key={k}>
                {i.text}
              </option>
            ))}
            }
          </select>
        </div>
      );
    }
  });
};
export default FormCustom;
