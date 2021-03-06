import * as React from 'react';
import NavButton from '../shared/NavButton';
 
const Home: React.FunctionComponent = () => {
  return ( 
    <div id="home">
      <h1>Tomasz Nawrocki</h1>
      <h2>Software Developer</h2>
      <nav id="home-nav">
        <NavButton destination="/about" text="About" />
        <NavButton destination="/portfolio" text="Portfolio" />
        <NavButton destination="/contact" text="Contact" />
      </nav>
    </div>
   );
}
 
export default Home;
