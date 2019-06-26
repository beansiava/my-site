import React from 'react';


let data = {
    p:[ 
    "I have 'experienced' joy is wrong.  I am experiencing it now and only now.",
    "There are no degrees of love - only to love freely or not.",
    "Self awareness is enough.  In many ways, it's all we have.", 
    "All choices seem bad when you forget about the joy and remember the risk.",
    "People will recieve you when you are ready.",
    "Love is an underwhelming word for the most fulfilling thing.",
    "If time and space are forgotten when in the presence of someone, know this is what love looks like.",
    "Spiritual growth is practical growth."
    ]
}

const returnProverb = () =>{
    let loc = 0;
    loc =  Math.floor(Math.random()*(data.p.length));
    return data.p[loc];
}
const setProverb = (proverb) =>{
    proverb = returnProverb();
    
    return proverb;
}
let proverb = setProverb();

// ToDo: Change to a class with state constructor - use setState to alter toggle
const Proverbs = () => {
    return ( 
        <div>
            <p onClick={setProverb(proverb)}>{proverb}</p>
        </div>
     );
}
 
export default Proverbs;