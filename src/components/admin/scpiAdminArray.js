import { useState, useEffect, useRef } from "react";
import useOnScreen from "../../plugins/useOnScreen";
 import { data } from "../../store/data";
import Aside from "../filter/aside";
import TableAdmin from "./tableAdmin";


const SCPIAdminArray = ({agency ={}})=>{

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
    <> <section className="my-4 d-flex ">
        <div  className="w-25 d-block mx-auto">
            <Aside filter={filter} setFilter={(v) => setFilter(v)} _agency={agency} />
        </div>
        <div className="w-75 px-4">
            <TableAdmin section={"scpi"} list={SCPI} setItem={setSCPI} />
        </div>
            
    </section>
            {!!request.block || (
            <i ref={spiner} className="my-4 spinner-border"></i>
          )}
        
    </>
  );
    
}
export default SCPIAdminArray