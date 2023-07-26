
import 'bootstrap/dist/css/bootstrap.css';
import './home.css';
import React from 'react';
import MyImage from './images/Cover Image.png'
import  Image from './images/Section Image.png';
import Icon2 from './images/Icon.png';
import Icon3 from './images/Icon (4).png';
import Icon4 from './images/Icon (5).png'
import Icon5 from './images/Icon@2x.png';
import Icon6 from './images/Icon (2).png';
import Image1 from './images/Card 2.png'
import Image2 from './images/Image (1).png'
import Card1 from './images/card1 (1).png'
import Chase from './images/chase.png'
import Asus from './images/asus-logo.png'
import Allia from './images/allianz-1.png'
import New from './images/new-york-times.png'
import FooterImage from './images/footer Image.png'
import Link from './images/linkedin.png'
import Icon1 from './images/Icon (1).png'
import Image3 from './images/Pattern-fill-e37c23a0f5211e59dd2a24560c4838a3.png'
const Home = () => {

    return (
        <div className='container'>
        <div className="row">
            <div className='col-md-6'>
          <div className="logo">Ozone</div>
          </div>
          <div className='col-md-6'>
            <div className="number"><i class="ri-phone-line"></i>+123 644 646</div>

            </div>
            < div className='row'>
            <div className='col-md-6'>
                <div  className='text'>
                <h6>Creative Digital Marketing Agency</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                </p>
                
                </div>
                <div className='btn btn-success'>Contact us</div>
                </div>
                <div className='col-md-6'>
                    
                    <img src={MyImage} alt="" className='IMLOG'/>
                </div>
           
    </div>
    </div>

            
            <div className='row'>
                
                    <p  className='text6'>Feareted in | <span className='text-muted'> aur Certification</span></p>
                    <div  className='grids '>
                       
                    
                    <div className='grid '>
                    <img src={Asus} className='log' />
                    </div>
                    <div className='grid '><img src={Allia} className='log' /></div>
                    <div className='grid '><img src={Chase} className='log' /></div>
                    <div className='grid '><img src={New} className='log' /></div>
                    <div className='grid '><img src={Link}className='log'  /></div>
                    </div>
                </div>
                
        
                <div className="row">
                
                    <div className="col-md-3 content mt-4">
                <div className="DIGITAL">
               <img src={Icon1} className='Icon' />
                <div class="text-center">
                    
                   <h4> scherche engine optimization</h4>
    
            </div>
                </div>
        </div>
                
                <div class="col-md-3 content mt-4">
                    <div class="DIGITAL">
                    <img src={Icon2} className='Icon'/>
                    <div class="text-center">
                        
                        <h4>website Dignid et Developpement</h4>
                       
                    </div>
                </div>
                </div>

                <div class="col-sm-6 ">
                    
                <div class="digitals">
                    <h6>Aur Digital Marketing Spertise</h6>
                    
                        
                        <p>website Dignid et Developpement
                        website Dignid et Developpement
                        website Dignid et Developpement
            
                        </p>
                       
                    </div>
                
                </div>
                    
               < div class="col-md-3 content mt-4">
                
                    <div class="DIGITAL">
                  
                    
                    <img src={Icon3} className='Icon' />
                        <h4>video editing et production</h4>
                       
            
                </div>
                </div>
                <div class="col-md-3 content mt-4">
                    <div class="DIGITAL">
                    <img src={Icon4} className='Icon'/>
                    <div class="text-center">
                        
                        <h4>Content writing</h4>
                       
                    </div>
                </div>
                </div>
              
        
            <div className="col-md-3 content mt-4">
                <div className="DIGITAL">
                <img src={Icon5} className='Icon1'/>
                <div class="text-center">
                    
                   <h4>Social Media Marketing</h4>
    
            </div>
                </div>
        </div>
        <div class="col-md-3 content mt-4">
                    <div class="DIGITAL">
                    <img src={Icon6} className='Icon' />
                    <div class="text-center">
                        
                        <h4>ay per click (PPC)</h4>
                       
                    </div>
                </div>
                </div>

                
        </div>        
        
         <div className='row'>
         <div className='col-md-6'>
                    
                    <img src={Image} className='img'/>
                </div>
                
                <div className='col-md-6 '>
                
                <div div className='text1'>
                <h6>Why should you choose Ozone</h6>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                </h4>
                
                </div>
                <div className='btn btn-success'>Contact us</div>
                </div>


         </div>
         
        
         <div className='row'>
         
            <h5 className='text6'>Our last work</h5>
          
            <div className='col-md-4 '>
            
            <img src={Image1} alt=""className='img3'/>
            <h4>Aterme Digital Marketing</h4>
            <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            
            </div>
            
            <div className='col-md-4 '>
            
                   <img src={Image2} alt="" className='img3'/>
                   <h4>Marhem zine optimization</h4>
                   <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit
                   </h2>
                   
                   </div>
                   
                   <div className='col-md-4 '>
                
                   <img src={Image3} alt="" className='img3'/>
                   <h4>Basic pay per click</h4>
                   <h2> Lorem ipsum dolor sit amet, consectetur adipiscing elit
                   </h2>
                   
                   </div>
                   
                   
         
         
         </div>
         
         < div className='row'>
            
           
            
            <div className='cardes '>
            <h5>Testimonials</h5>
        <div className="cards">
          <div className="card1 col-md-4">
          
          <h3><img src={Card1} className='image1' /> Zeo mantis <span className='text-muted'>Faoulder, Apha Group</span>Why should you choose Ozone
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    </h3>


           
          </div>
          <div className="card1 col-md-4 ">
        
  <h3><img src={Card1}  className='image1' /> Doe zeo <span className='text-muted'>Faoulder,Beta Group</span>
  Why should you choose Ozone
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    </h3>
  

            
          </div>
          <div className="card1 col-md-4">
         
  <h3><img src={Card1}  className='image1' />Natali colin<span className='text-muted'>Faoulder Apha Group</span>
  Why should you choose Ozone
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    </h3>
  
  
</div>
           
            </div>
        
         </div>
         </div>
         <div className='row'>
            
         <div className='col-md-6 '>
                <div div className='text3'>
                <h6>Creative Digital Marketing Agency</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                </p>
                
                </div>
                <div className='btn btn-success'>Contact us</div>
                <div className="num">Or<i class="ri-phone-line"></i>+123 644 646</div>
                </div>
                <div className='col-md-6 '>
                    
                    <img src={FooterImage} alt="" className='img8' />
                
         </div>
         <div>
         <h1 className='h1'>Disign by  
            <u>Oceted D
                isign studio</u>
         </h1>
         </div>
         </div>
            </div>
            
       
                

                
                    
            
          
          
         
          
           
        
      );
      
    };


export default Home;