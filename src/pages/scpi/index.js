import { useState, useEffect, useRef } from "react";
import useOnScreen from "../../plugins/useOnScreen";
import Header from "../../components/header/index";
import fr from "../../store/fr";
import { data } from "../../store/data";
import Aside from "../../components/filter/aside";
import ItemBoxSCPI from "../../components/itemBox/ItemBoxSCPI";
import "../../styles/agencyNScpi.css";
import Footer from "../../components/footer";

const Scpi = () => {
  const txt = fr.SCPI;
  const [SCPI, setSCPI] = useState([]);
  const [request, setRequest] = useState({ limit: 20, start: 0, block: false });
  const [filter, setFilter] = useState({});
  const spiner = useRef();
  const isVisible = useOnScreen(spiner);

  const getItems = (start= request.start ,_scpi =SCPI ) => {
    let params = {};
    for (const key in filter) {
      if (!!filter[key].length) {
        let newArr = [];
        newArr[key] = filter[key];
        params = { ...params, ...newArr };
      }
    }
    let urlEncode = new URLSearchParams(params).toString();

    fetch(
      `${data.urlServer}/api/scpi/filter/${request.start}-${request.limit}${
        !!urlEncode ? "?" + urlEncode : ""
      }`
    )
      .then((res) => res.json())
      .then((res) => {
        
        setRequest({
          ...request,
          start: start + request.limit,
          block: !([...res].length == request.limit) || start > 50, /// juste pour pas poluer la page
        });
  
          setSCPI([..._scpi, ...res]);
        
      });
  };

  useEffect(() => {
      !!isVisible && !request.block && getItems();
  }, [isVisible]);

  useEffect(() => {
    getItems( 0, [] );
  }, [filter]);

  return (
    <>
      <Header />
      <main className="w-100 h-100 ">
        <h1 className=" my-4 py-4 fw-lighter text-center w-100">
          {txt.title.toUpperCase()}{" "}
        </h1>
        <div className="flex-content">
          <span>
            <Aside filter={filter} setFilter={(v) => setFilter(v)} />
          </span>

          <section className="flex-section-items">
            {[...SCPI].map((i) => (
              <ItemBoxSCPI item={i} />
            ))}
          </section>
        </div>
        <span className=" w-100 d-flex justify-content-center">
          {!!request.block || (
            <i ref={spiner} className="my-4 spinner-border"></i>
          )}
        </span>
      </main>
      <Footer />
    </>
  );
};

export default Scpi;
