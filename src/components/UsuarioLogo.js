import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { faUser } from '@fortawesome/free-solid-svg-icons';
const UsuarioLogo = () => {


    return (
        <>
        <div>
        <Link to='/usuario' className="linksEstilo">
        <FontAwesomeIcon icon={faUser}/>
        </Link>
        </div>
        </>
    )
}

export default UsuarioLogo;