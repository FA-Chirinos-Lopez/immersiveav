import * as React from "react";
import Header from "../components/header";
import Phone from "../components/phone";
import Footer from"../components/footer";
import Hero from "../components/hero";
import SubFooter from "../components/subFooter";
import "../styles/our-services.scss"
import { StaticImage } from "gatsby-plugin-image";
import News from "../components/news";


  

const firstSectionTexts=[
    
    'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'Lorem ipsum dolor sit amet consectetur adipiscing elit',

]
;



const OurServices = () =>{

return(
<div  >
<div className="wrapper4">
<Header/>
<Phone/>
<Hero/>
<main className="body">
{/* **************************************FIRST SECTION************************************************** */}
    <article className="firstServicesSection">
            <div className="firstTitleBox titleServicesPage"><h1 className="firstTitleBoxText">Services</h1></div>
            <div className="firstSection1">
                <div className="flexBox1">
                    <div className="firstTextServices"><p className="textFS" >{firstSectionTexts[0]}</p></div>
                    
                    <div className="firstSection1images">
                        <div className="flexBox1_1">
                        <StaticImage className="littleImg img1_1" src="..\images\u9.JPG" alt=""></StaticImage>
                        <div className="emptySpace emptySpace1_0"></div>
                        <StaticImage className="littleImg img1_2" src="..\images\u10.JPG" alt=""></StaticImage>
                        <div className="emptySpace emptySpace1_1" ></div>
                        
                        </div>
                        <div className="flexBox1_2">
                        <StaticImage className="littleImg img1_3" src="..\images\u8.jpg" alt=""></StaticImage>
                        <StaticImage className="littleImg img1_4" src="..\images\c11.jpg" alt=""></StaticImage>
                        <div className="emptySpace emptySpace2_0"></div>                        
                        <StaticImage className="littleImg img1_5" src="..\images\u4.jpg" alt=""></StaticImage>
                        <div className="emptySpace emptySpace2_1"></div>
                        </div>   
                    </div>
                    </div>
                    <div className="flexBox_1_2_0">
                        <div className="flexBox_1_2_1">
                            <div className="flexBox_1_2_1Title titleServicesPage">Live</div>
                            <div className="flexBox_1_2_1P textServicesPage">{firstSectionTexts[1]}</div>
                        </div>
                        <div className="flexBox_1_2_2">
                        <StaticImage className="littleImg img_1_2_2_0" src="..\images\u12.JPEG" alt=""></StaticImage>
                        <StaticImage className="img_1_2_2_1" src="..\images\u3.JPEG" alt=""></StaticImage>
                        </div>

                    </div>
                    
            </div>
            
            
    </article>
    <div className="breakServices"><h1></h1>
    </div>
    {/* **************************************SECOND SECTION************************************************** */}
    <article className="servicesSecondSection">
        <div className="flexBox_2">
       
            <div className="flexBox_2_1">
                <div className="text_2_1_1 titleServicesPage" >Virtual</div>
                <div className="text_2_1_2 textServicesPage">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'<br /><br />' nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
            <div className="flexBox_2_2">
            <StaticImage className="img_2_2_1" src="..\images\u8.JPG" alt=""></StaticImage>
            <StaticImage className="littleImg img_2_2_2" src="..\images\u5.JPG" alt=""></StaticImage>
            </div>
        </div>        
    </article>
    <div className="breakServices"><h1></h1>
    </div>
    {/* **************************************THIRD SECTION************************************************** */}
    <article className="servicesThirdSection">
    
    <div className="flexBox_3">
       
            <div className="flexBox_3_1">
                <div className="text_3_1_1 titleServicesPage">Studio</div>
                <div className="text_3_1_2 textServicesPage">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'<br /><br />' nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
            <div className="flexBox_3_2">
            <StaticImage className="img_3_2_1" src="..\images\u6.jpeg" alt=""></StaticImage>
            <StaticImage className="img_3_2_2" src="..\images\u7.jpeg" alt=""></StaticImage>
            </div>
        </div>        
    </article>
    <div className="breakServices"><h1></h1></div>
    {/* **************************************FOURTH SECTION************************************************** */}
    <article className="servicesFourthSection">
    
    <div className="flexBox_4">
       
            <div className="flexBox_4_1">
                <div className="text_4_1_1 titleServicesPage">Hybrid</div>
                <div className="text_4_1_2 textServicesPage">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'<br /><br />' nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>
            <div className="flexBox_4_2">
            <StaticImage className="littleImg img_4_2_1" src="..\images\u11.jpg"  alt=""></StaticImage>
            <StaticImage className="img_4_2_2" src="..\images\u2.jpg" alt=""></StaticImage>
            </div>
        </div>        
    </article>


           
    </main>
        <div className="footerSection">
        <News />
        
        <Footer/>
       <SubFooter/>
       </div>
       
             
       </div>
       </div>
       
       
    )
}
export default OurServices
