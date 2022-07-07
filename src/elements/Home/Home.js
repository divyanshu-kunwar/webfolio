/**
 * path = "/" or "/home"
 */
import { useState } from 'react'
import {Outlet , useNavigate } from 'react-router-dom'

import styles from './home.module.css'
import swapButton from '../../image/rightSwap.svg'

import logo from '../../image/logo2.png'
import pagesData from '../../Data/pages.json'

export default function Home(){

    const [tabNo , setTabNo] = useState(1);
    const [currentPage , setCurrentPage] = useState(1);
    const [max , setMax] = useState(3);
    let navigate = useNavigate()
    

    return <div className={styles.bodyStyle}>

    {/*---------------------------------------- Navigation Bar --------------------------------*/}
    <div className={styles.navBarStyle}>
        <div><img src={logo} width="68px" alt="thryve logo"/></div>
        <div className={styles.navLinksParent}>

            {Object.keys(pagesData.tabs).map((key) => {
                return <span key={key} className={styles.navLinks} 
                style={tabNo == key? {color:'var(--primary-color)'} : {color:'var(--text-color-1)'}} >
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
            <span className={styles.navLinks2} >Contact</span>
            <span className={styles.navLinks2} >Privacy Policy</span>
            <span className={styles.navLinks2} >About Us</span>
        </div>
        <span>No Copyright@</span>
        <span>Handicrafted With 😍 in India</span>
    </div>

</div>

}


/*
                
*/