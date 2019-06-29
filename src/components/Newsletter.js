import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Newsletter = (props) => {
    return ( 
        <div>
            {/* Still need to create an endpoint for this form.  (Mailchimp subscription) */}
            <form>
            <label className ="label">
                Email:
                <input type="email"  />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default Newsletter;


