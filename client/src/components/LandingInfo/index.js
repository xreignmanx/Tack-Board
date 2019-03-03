import React from "react";
import "./style.css";


function LandingInfo () {
          return (

<div className="landingInfo">
       <div class="row">
           <div class="col-md-12">
           <br></br>
               <h2 class="text-center text-brown mb-4">WELCOME BACK</h2>
                     <div class="row">
                        <div class="col-md- mx-auto">
                            <div class="card rounded-0" style={{borderWidth: '10px', borderColor: 'brown',
                            borderStyle: 'ridge', backgroundColor: 'tan'}}>
                                <div class="card-header">
                                    <h3 class="text-center mb-0">WELCOME</h3>
                                </div>
                                <div class="card-body">
                                    {/* <p className="info">TACKBOARD is a customisable task manager that allows YOU to share tasks and documentation
                                    with your CLIENTS.  TACKBOARD allows you to control who has access to each piece of documentation
                                    and if they have authorization to edit or update each piece of documention. </p>    */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            // <div className="landingInfo">
            //     <div class="col-md-2"></div>
            //     <div class="col-md-8">
            //         <h1 className="welcome">WELCOME</h1>
            //             <row className="infoSection">
            //                 <div class="col-md-2"></div>
            //                 <div class="col-md-8">

            //                 </div>
            //                 <div class="col-md-2"></div>
            //             </row>
                        
            //         <h2 className="select">Please Login or Register</h2>
            //     </div>
            //     <div class="col-md-2"></div>

            // </div>
          )
}


export default LandingInfo;