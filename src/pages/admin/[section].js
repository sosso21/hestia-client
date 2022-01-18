import { useState,useEffect } from "react";
import Header from "../../components/header/index"
import Footer from "../../components/footer"
import { useParams } from "react-router-dom";
import TableAdmin from "../../components/admin/tableAdmin";
import fr from "../../store/fr";
import { data } from "../../store/data";
import SCPIAdminArray from "../../components/admin/scpiAdminArray";

const Admin = () => {
  const { section  } = useParams() ;
  const txt =fr.adminHome
const [navigation, setNavigation] = useState(section || "scpi" );
 const [agency , setAgency] = useState([])
 const [FilterAgency, setFilterAgency] = useState("")

const getAgency =()=>{
  const url = `${data.urlServer}/api/agency/${!!FilterAgency ?('search/'+FilterAgency):'find' }`

fetch(url)
.then(res=> res.json())
.then(res=>setAgency(res) )
}
useEffect(() => {
  getAgency()
}, [FilterAgency])


  return (
    <>
    <Header/>
    <main>
      <div className="my-4 mx-auto p-4 d-flex justify-content-end ">
        {txt.nav.map(i=> (i.section==navigation)&& <a href={`/admin/${i.section}/upload`} className="btn btn-sm btn-hermes"><i class  ="mx-2 my-auto bi bi-plus-lg"></i> {i.add}</a> )  } 
      </div>

      <nav className="my-4 nav nav-pills nav-justified">
  
    { txt.nav.map(i=> <i className={`nav-item nav-link ${(navigation== i.section) ? "bg-hermes text-light" :""}`} onClick={()=>{setNavigation(i.section); setFilterAgency("") }} >{i.text}</i>)}
</nav> 
{ (navigation ==='agency')?

<>   <div className="form-group ">
       
      <div className="w-50 mx-auto my-4">
        <input type="text" className="form-control" id="qAgency" value={FilterAgency} onChange={e=>setFilterAgency(e.target.value) }  placeholder={txt.q}/>
      </div>
    </div>
<TableAdmin list={agency} section={navigation} setItem={setAgency} />
</>
:
<>
<SCPIAdminArray agency={agency}/>
</>
}


       </main> 
    <Footer/>
    </>
  );
};

export default Admin;
