import React, {Link} from 'react';

import '../../css/landing.css';
import '../../css/global.css';

const ExternalNav = () => {
    return ( 
        <div>
            <nav className='navContainer'>
                <h1 className='navItem extralight'><a>Programmer</a></h1>
                <h1 className='navItem extralight'><a>Writer</a></h1>
                <h1 className='navItem extralight'><a>Facilitator</a></h1>
            </nav>
        </div>
     );
}
 
export default ExternalNav;