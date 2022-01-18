
import useClass from "../../plugins/thme"
import fr from "../../store/fr"
export const NavComponent = ({onClick, navClass, linkClassName})=>{
const [darkTheme, setDarkTheme  ] =useClass()
const txt = fr.header
 return (
  <nav className={navClass}>
<i  onClick={()=>setDarkTheme(!darkTheme) }
className={linkClassName}>
 {darkTheme? <i className="bi bi-sun text-warning mx-2"></i>:<i className="bi bi-moon text-secondary mx-2"></i>}
  Thème  
</i>

      {txt.map(section=>
        <a href={section.href}
              className={  linkClassName}
               >
                 <i className={ `mx-2   ${section.icon} ` } ></i>
            {section.title}
        </a>
      )}
  </nav>
)
}
 
const Navbar = ({navClass, linkClassName}) =>(
  <NavComponent navClass={navClass}
                linkClassName = {linkClassName}
  />
);
export default Navbar;