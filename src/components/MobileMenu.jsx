import { CircleX } from "lucide-react";
import { Link } from "react-router-dom";

const MobileMenu = ({setOpenMobileMenu}) => {
    return <div>
        <button onClick={() => setOpenMobileMenu(false)}>

        <CircleX />
        </button>
        <ul>
            <li>
                <Link to="/collection/fashion">Fashion</Link>
            </li>
            <li>
                <Link to="/collection/electronics">Electronic</Link>
            </li>
            <li>
                <Link to="/collection/house-holds">House holds</Link>
            </li>
            <li>
                <Link to="/collection/personal-care">Personal care</Link>
            </li>
        </ul>
        <div className="border-t border-slate-300">
            <p>Account</p>
        </div>
    </div>
}

export default MobileMenu;