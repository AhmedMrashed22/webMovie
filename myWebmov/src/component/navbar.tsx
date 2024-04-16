
import { Menu } from "semantic-ui-react" ;
import { Link } from "react-router-dom";

export const Navbare = () => {
  return (
    <Menu fixed="top" size="huge">
           <Menu.Item as={Link} to="/" style={{ fontSize:"1,5 rem" }}> Home </Menu.Item>
           <Menu.Item as={Link} to="/rated" style={{ fontSize:"1,5 rem" }}>  Rated </Menu.Item>
        <Menu.Menu position="right"> 
        
         <Menu.Item as={Link} to="/auth" style={{ fontSize:"1,5 rem" }}> Auth </Menu.Item>

        
          </Menu.Menu>


    </Menu>
    );
    
}