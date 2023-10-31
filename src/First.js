import React from 'react';
import './First.css';

function First()
{
    return(
        <div className='container-fluid'>
        <div className='row g-0'>
           <div className='col-lg-6 small' style={{marginTop : '130px', padding : '50px'}}>
               <h1><b>Smaller budgets need smarter dollars</b></h1>
               <p>Create, manage, and analyze your display, Facebook, Instagram, Pinterest,
                    TikTok, and email campaigns from a single platform. AdRoll helps marketers do more with less.</p>
                    <button type="button" className="but">GET STARTED</button>
                    <button type="button" className="but1">GET IN TOUCH</button>
           </div>
           <div className='col-xl-6 hero'>
           <div className='d-none d-xl-block d-lg-none'>
               <img src ="./hero.webp" alt="" />
           </div>
       </div>
       </div>



      


   </div>
    );
}

export default First;