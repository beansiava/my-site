import React from 'react';
import styled from "@emotion/styled";

import './../css/global.css';

const A = styled.a({
    textDecoration: 'underline',
    color: 'inherit',
    
})

const P = styled.p({
    color: '#343434',
    textShadow: "-1px 0 '#707070', 0 1px '#707070', 1px 0 '#707070', 0 -1px '#707070'",
    fontFamily: 'montserrat',
    fontSize: '8px',
})

const Resume = () => {
    return ( 
        <div>
            <P>
                or, if you want to download a resume (how boring), <br />
                you can <A href="../files/resume.pdf" download>click here</A>
            </P>

        </div> 
    );
}
 
export default Resume;