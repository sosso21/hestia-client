import {
  useState,
  useEffect
} from "react";

const colors = {
  light: "bg-white text-dark",
  dark: "bg-night text-white"
};


  const useClass = (bol = false) => {

  const [darkTheme, setDarkTheme] = useState(bol)
  useEffect(() => {

    const MyTheme = localStorage.getItem("darkTheme");
    MyTheme && setDarkTheme((MyTheme === "true") ? true : false);
    
  }, [])

  useEffect(() => {
    localStorage.setItem("darkTheme", darkTheme);
     
      document.querySelector('body').classList.value =(darkTheme ? colors.dark : colors.light)
 
 
  }, [darkTheme])


  return [
    darkTheme,
    setDarkTheme 
    //useContext(createContext(darkTheme ? colors.dark : colors.light))
  ]
}

export default useClass