import React, {Link} from 'react';

import '../../css/landing.css';
import '../../css/global.css';

const ExternalNav = () => {
    return ( 
        <div>
            <nav className='navContainer'>
                <h1 className='navItem extralight'><a className='aNav' href='https://github.com/beansiava'>Programmer</a></h1>
                <h1 className='navItem extralight'><a className='aNav' href='https://medium.com/@seanbiava'>Writer</a></h1>
                <h1 className='navItem extralight'><a className='aNav' href='https://www.linkedin.com/in/seanbiava/'>Facilitator</a></h1>
            </nav>
        </div>
     );
}
 
export default ExternalNav;