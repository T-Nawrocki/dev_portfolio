import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavButtonProps {
  destination: string,
  text: string
}
 
const NavButton: React.FunctionComponent<NavButtonProps> = (props) => {
  return ( 
    <div className="nav-button">
      <Link to={props.destination}>
        {props.text}
      </Link>
    </div>
   );
}
 
export default NavButton;
