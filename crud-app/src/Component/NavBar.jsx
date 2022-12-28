
import { AppBar, Toolbar, styled } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,faAdd} from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: #111111;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    return (
        <Header position="static">
             <div style={{textAlign:'center',fontSize:"xx-large"}}>EMPLOYEE DETAILS</div>
            <Toolbar>
                <Tabs to="all" exact>All Users <FontAwesomeIcon icon={faEnvelope} /></Tabs>
                <Tabs to="add" exact>Add User  <FontAwesomeIcon icon={faAdd} /></Tabs>
            </Toolbar>
           
        </Header>
    )
}

export default NavBar;