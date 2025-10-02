import { CircleX } from "lucide-react";
import { Link } from "react-router-dom";

const MobileMenu = ({ setOpenMobileMenu }) => {
    return <div className="p-2">
        <button onClick={() => setOpenMobileMenu(false)}>

            <CircleX />
        </button>
        <ul className="space-y-2">
            <li className="text-2xl py-2">
                <Link to="/collection/fashion">Fashion</Link>
            </li>
            <li className="text-2xl py-2">
                <Link to="/collection/electronics">Electronic</Link>
            </li>
            <li className="text-2xl py-2">
                <Link to="/collection/house-holds">House holds</Link>
            </li>
            <li className="text-2xl py-2">
                <Link to="/collection/personal-care">Personal care</Link>
            </li>
        </ul>
        
    </div>
}

export default MobileMenu;