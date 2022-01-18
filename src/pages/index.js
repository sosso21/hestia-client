import { useRef } from "react";
import Header from "../components/header/index";
import First  from "../components/home/first.js";
import Second from "../components/home/second.js"
import Footer from "../components/footer"
import "../styles/Home.css"
const Home = () => {
  
  const secondRef = useRef()
   
  return (
    <> 
 <Header  />
 <main classname="w-100 h-100 d-flex flex-column">
 <First  onClickBtn={()=>secondRef.current.scrollIntoView({ behavior: 'smooth' })} />
 <Second elRef={secondRef} />
 </main>
 <Footer/>
    </>
  );
};

export default Home;
