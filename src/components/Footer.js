import React from 'react';


import Newsletter from './Newsletter';

// create a 2x3 CSS Grid (NavHeader/Nav, CallToAction/SignUpForm, SMTOAction/Social Media)


const Footer = (props) => {
    return ( 
        <Grid>
            <Row>
                <Column></Column>
                <Column></Column>
                <Column></Column>
            </Row>
            <Row>
                <Column></Column>
                <Column><Newsletter/></Column>
                <Column></Column>
            </Row>
        </Grid>  
     );
}
 
export default Footer;