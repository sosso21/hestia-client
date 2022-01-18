import { data } from "../store/data";
const session = async (setUsConnect , url = data.urlServer) => {
  
      const token =  localStorage.getItem("token");
      const userInfo =  sessionStorage.getItem("userInfo")

      
      if (!!token && !!userInfo) { 
        return  setUsConnect(true)
      }
     else  if (!!token && !userInfo) {
        const header = {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
          body: new URLSearchParams({
            token: token,
          }).toString(),
        };
      

        fetch(`${url}/api/admin/auth`, header)
          .then((res) => res.json())
          .then(
            (result) => {
              
              if (result.error == "disconnect") {
                setUsConnect(false)
                return localStorage.setItem("token", "");
              }
              if (result.token) {
                localStorage.setItem("token", result.token);
                sessionStorage.setItem(
                  "userInfo",
                  JSON.stringify(result.userInfo)
                );
                 window.location.reload();
                setUsConnect(true);
              } else {
                setUsConnect(false);
              }
            },
            (err) => {
              setUsConnect(false);
            }
          );
          
      } else {
        setUsConnect(false);
      } 
      
};
export default session