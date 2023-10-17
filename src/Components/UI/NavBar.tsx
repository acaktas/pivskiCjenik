import { Link } from 'react-router-dom';
import './NavBar.module.scss'

interface NavBarProps {
    session: string | null;
    setSession: (id?:string) => void;
}

const NavBar = (props: NavBarProps) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/pivskiCjenik/">Home</Link>
        </li>
        {props.session && <li>
          <Link to="/pivskiCjenik/menu">Menu</Link>
        </li>}
        {!props.session && <li>
          <Link to="/pivskiCjenik/login">Login</Link>
        </li>}
        {props.session && <li>
          <Link to="/pivskiCjenik/slider">Slider</Link>
        </li>}
        {props.session && <li onClick={()=>props.setSession()}>
          <Link to="/pivskiCjenik/">Logout</Link>
        </li>}
        {!props.session && <li>
          <Link to="/pivskiCjenik/reg">Registration</Link>
        </li>}
      </ul>
    </nav>
  );
};

export default NavBar;