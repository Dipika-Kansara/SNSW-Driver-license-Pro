import { useContext } from 'react';
import {Outlet,Link} from 'react-router-dom'
import UserInfo from './UserInfo';
import { TokenContext } from '../App';
import { isInRole } from '../identity';

const Main = () => {
    const [token,setToken] = useContext(TokenContext)

    return(
        <div style={{margin:'auto',padding:'0px 50px'}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                {token && isInRole(token,'customer') && <Link to={"/customer"} className="link">Home</Link>}
                {token && isInRole(token,'admin') && <Link to={"/admin"} className="link">Home</Link>}
                <UserInfo />
            </div>
                
            <Outlet />
        </div>
    )
}



export default Main;