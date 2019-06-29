import React from 'react';
import styled from '@emotion/styled';

import Newsletter from './Newsletter';

// create a 2x3 CSS Grid (NavHeader/Nav, CallToAction/SignUpForm, SMTOAction/Social Media)
const Grid = styled.div({

})
const Row = styled.div({

})
const Column = styled.div({

})

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