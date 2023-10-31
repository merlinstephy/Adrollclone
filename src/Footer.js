import { Container } from "react-bootstrap";

export default  function Footer(){
    return(
        <div className="container-fluid" style={{backgroundColor : '#f4f6f9'}}>
     
<div className="footer">
    <center>
    <img src="next.svg"  style ={{width : '60px',height : '60px'}} /><br/>
    <img src="adroll.svg" style ={{width : '40px',height : '40px',margin :'0px',padding :'0px'}}/>
    <img src="rollworks.svg" style ={{width : '80px',height : '80px'}}/>
    <p style={{fontSize:"10px"}} className="my-3">NextRoll is as an equal opportunity employer.<br></br>
We stand alongside organizations that support our Rollers and Community.</p>
<div className="p my-3" style={{display:"flex",fontSize:"10px",justifyContent:"space-evenly",fontWeight :'700'}}>
<p>Careers</p>
    <p>Trust Center</p>
    <p>Terms of Service</p>
    <p>Website Terms of Use</p>
    <p>Privacy Notice</p>
    <p>Infringement Policy</p>
    <p>Ad Opt Out</p>
    <p>CCPA Notice at Collection</p>
    <p>AdChoices</p></div>

    <p>Your Privacy Choices <img src="https://www.adroll.com/assets/img/your-privacy-choices.png" style={{height:"10px",width:"20px"}}/>
</p>
<p style={{fontSize:"9.5px"}}>© 2006-2023, NextRoll, Inc. All rights reserved. AdRoll is a division of NextRoll. To learn more please visit nextroll.com.

</p>
<button className="footerbtn" style={{backgroundColor : '#00aeef',borderColor : '#f4f6f9',borderRadius : '0.6rem'}}>DO NOT SELL OR SHARE MY PERSONAL INFORMATION</button>
<br></br><br></br>

</center>
        </div>



</div>
    )}