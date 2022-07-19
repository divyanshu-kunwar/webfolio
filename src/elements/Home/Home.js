/**
 * path = "/" or "/home"
 */
import { useEffect, useState } from 'react'
import {Outlet , useNavigate } from 'react-router-dom'

import styles from './home.module.css'
import swapButton from '../../image/rightSwap.svg'
import menuIcon from '../../image/menu.svg'


import pagesData from '../../Data/pages'

export default function Home(){

    const [tabNo , setTabNo] = useState(1);
    const [currentPage , setCurrentPage] = useState(1);
    const [max , setMax] = useState(4);
    let navigate = useNavigate()
    
    useEffect(() => {
        console.log(Object.keys(pagesData.tabs).length)
        setMax(Object.keys(pagesData.tabs).length)
    } , [])

    return <div className={styles.bodyStyle}>

    {/*---------------------------------------- Navigation Bar --------------------------------*/}
    <div className={styles.navBarStyle}>
        <div id="navTop" className={styles.navTop} >
        <img id="menuClick" className={styles.menuIcon} src={menuIcon} alt="menu"  
        onClick={() => {
            if(document.getElementById("menu").style.display == "none"){
            document.getElementById("menu").style.display = "flex";

            document.getElementById("menu").style.opacity = "1";
            document.getElementById("menu").style.transition = "opacity 0.5s ease-in-out";
            }else{
            document.getElementById("menu").style.display = "none";
            document.getElementById("menu").style.opacity = "0";
            document.getElementById("menu").style.transition = "opacity 0.5s ease-in-out";
            }
        }}
        />
        <span style={{color:'var(--primary-color)',fontFamily:'cursive' , fontWeight:'bold' , cursor:'pointer'}} onClick={
            () => {
                navigate('/')
            }
        }>
            {pagesData.name}

        </span>
        </div>
        <div id="menu" className={styles.navLinksParent}>

            {Object.keys(pagesData.tabs).map((key) => {
                return <span key={key} className={styles.navLinks} 
                style={tabNo == key? {color:'var(--primary-color)'} : {color:'var(--text-color-1)'}} 
                onClick = {() => {
                        setCurrentPage(parseInt(key))
                        setTabNo(parseInt(key))
                        navigate(`/home/feature${key}`)
                        if(window.matchMedia("only screen and (max-width: 600px)").matches){
                            document.getElementById("menu").style.display = "none";
                            document.getElementById("menu").style.opacity = "0";
                            document.getElementById("menu").style.transition = "opacity 0.5s ease-in-out";
                        }
                }
                }>
                    {pagesData.tabs[key].title}
                </span>
            }
            )}


        </div>
        <div>
        </div>
    </div>

    {/*---------------------------------------- Main Content --------------------------------*/}
    <div className={styles.mainContentStyle}>
        <Outlet>
        </Outlet>
    </div>

    {/*----------------------------- buttons for navigation and indicator-------------------- */}
    <div className={styles.swapButtons}>

    { (currentPage > 1) &&
        <img className={styles.LeftSwap} src={swapButton} alt="leftSwapBtn" 
            onClick={
                ()=>{
                    setTabNo(currentPage-1)
                        setCurrentPage(currentPage-1)
                        navigate(`/home/feature${currentPage-1}`)
                        console.log(currentPage);
                }
        }/>
    }

        {(currentPage < max) &&
        <img className={styles.RightSwap} src={swapButton} alt="rightSwapBtn"
        onClick={
            ()=>{
                setTabNo(currentPage+1)
                    navigate(`/home/feature${currentPage+1}`)
                    setCurrentPage(currentPage+1)
            }
        }/>}


    </div>
    <div className={styles.bottomLoader}>
       <div className={styles.EmptyLoader}></div>
       <div className={styles.filledLoader} style={{
        width:`${95/max}%` , transform:`translateX(${currentPage*100-90}%)` ,
        transition:`transform 0.5s ease-out`
        }}></div>
    </div>

    {/*---------------------------------------- footer --------------------------------*/}
    <div className={styles.footerStyle}>
        <div>
            {Object.keys(pagesData.social).map((key) => {
                return <a key={key} href={pagesData.social[key].link}>
                    <img className={styles.social_icon} src={pagesData.social[key].icon} alt={pagesData.social[key].title} 
                        onClick={
                            ()=>{
                                window.open(pagesData.social[key].url)
                            }
                        }
                    />
                </a>
            })
            }
        </div>
        <span id="copyright" className={styles.copyright}>No Copyright@</span>
        <span className={styles.copyright}>{pagesData.credit}</span>
    </div>

</div>

}