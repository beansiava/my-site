import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from './Newsletter';
const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";
 
// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>
 
// use the render prop and your custom form
const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <Newsletter onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed ! {console.log('Subscribed')}</div>}
      </div>
    )}
  />
)
export default CustomForm;