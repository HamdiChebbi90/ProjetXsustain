import React from "react";
// import "./style.css";
import logo2 from "../../assets/images/logo2.png";
import fb from "../../assets/icon/fb1.svg";
import insta from "../../assets/icon/inst1.svg";
import twitter from "../../assets/icon/twitter.svg";

import {useMutation} from "@tanstack/react-query";
import {useState} from "react";
import {addFeed} from "../../api/contact";



const Contact = () => {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const addFeedMutation = useMutation(
    {
      mutationFn: addFeed,
      onSuccess:(data)=>{
        console.log(data);
      },
      onError:(err)=>{
        console.log(err);
      }
    }
  )

function handleSubmit(e)  {
  e.preventDefault()
  addFeedMutation.mutate({name,email,subject,message});

  setName('');
  setEmail('');
  setSubject('');
  setMessage('');


}


  return (
    <div className="container_contact">
      <div className="contact">
        <div className="contact__left">
          <img src={logo2} alt="logo_contact" className="logo_contact" />
          <p>Streetz Turkia New Hip-Hop Station</p>
          <div className="contact__left__icons">
            <img src={fb} alt="fb" />
            <img src={insta} alt="insta" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
        <div className="contact__down">
          <h1>TEXT US!</h1>
          <form onSubmit={e => handleSubmit(e)}>
            <input type="text" placeholder="Your Name *"  onChange={(e) => setName(e.target.value)} value={name}/>
            <input type="email" placeholder="Your Email*" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input type="text" placeholder="Subject*" onChange={(e) => setSubject(e.target.value)} value={subject}/>
            <textarea placeholder="Your Message*" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
            <button type="submit" className="btn_contact"  >
             
            Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
