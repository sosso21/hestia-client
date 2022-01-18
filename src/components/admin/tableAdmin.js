import fr from "../../store/fr"
import { data } from "../../store/data";
 

const TableAdmin =({list ,setItem  ,section })=>{ 
  const txt = fr.tableAdmin; 

  
    const deleteItem = (id)=>{
  
    const header = {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams({
         id:id,
         token :localStorage.getItem("token")
      }).toString(),
    };
    console.log('====================================');
    console.log(`${data.urlServer}/api/${section}/delete`);
    console.log('====================================');
    fetch(`${data.urlServer}/api/${section}/delete`,header)
    .then(res => res.json())
    .then(res=>{
      if (res.success) {
       setItem(list.filter(i=> i.id != id))
      }
    } )
  } 


    return (

        <table className="table table-hover text-reset">
  <thead className="bg-dark text-white">
    <tr>
      <th scope="col">{txt.id}</th>
      <th scope="col">{txt.title}</th>
      <th scope="col">{txt.CreatedAT}</th>
      <th scope="col"><i className="bi bi-gear-fill"></i> </th>
    </tr>
  </thead>
  <tbody>
   {[...list].map((i,k)=><tr className="text-reset" key={k}>
      <th scope="row">{i.id} </th>
      <td>{i.title}</td>
      <td>{i.createdAt}</td>
      <td className="d-flex "> <i onClick={()=> deleteItem(i.id)} className="btn text-danger mx-2 my-auto bi bi-trash-fill"></i> <a href={`/admin/${section}/edit/${i.slug}`} className="btn mx-2 text-primary my-auto bi bi-pencil-fill"></a> </td>
    </tr>) }
  </tbody>
</table>

    )
}
export default TableAdmin