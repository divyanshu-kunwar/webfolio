/**
 * path = "/" or "/home/feature1"
 */
 import style from './feature.module.css'
 import { Player } from "@lottiefiles/react-lottie-player";


import toolIcon1 from '../../../image/tools/1.gif'
import toolIcon2 from '../../../image/tools/2.gif'
import toolIcon3 from '../../../image/tools/3.gif'
import toolIcon4 from '../../../image/tools/4.gif'
import toolIcon5 from '../../../image/tools/5.gif'
import toolIcon6 from '../../../image/tools/6.gif'

 const Data ={
        1:{name : "Front-end", percent:"80%", color : "#333"},
        2:{name : "Back-end", percent:"60%", color : "#333"},
        3:{name : "Database", percent:"50%", color : "#333"},
        4:{name : "Android", percent:"70%", color : "#333"},
        5:{name : "Data Science", percent:"50%", color : "#333"},
        6:{name : "Machine Learning", percent:"30%", color : "#333"},
 }

const tools = {
    1:toolIcon1,
    2:toolIcon2,
    3:toolIcon3,
    4:toolIcon4,
    5:toolIcon5,
    6:toolIcon6
}

 export default function FeaturePage2(){
     return <div>
        <Player src="https://assets3.lottiefiles.com/packages/lf20_kkflmtur.json"
        background="transparent"
        speed="1"
        style={{ 
            width: "400px",
            position:"fixed",
            bottom:"-8px",
            left:"-70px",
            'zIndex':'3'

        }}
        loop
        autoplay
        />
        <div className={style.skillPage}>

        <div className={style.statsCard}>
            <h1>SkillBar</h1>
        {Object.keys(Data).map(key => {
            return <div className={style.skill}>
                <div className={style.name}>{Data[key].name}</div>
                <div className={style.skillBar} style={{borderColor:Data[key].color}}>
                    <div className={style.skillThumb} style={{backgroundColor:Data[key].color, width:Data[key].percent}}></div>
                </div>
            </div>
        })
        }
        </div>

        <div className={style.statsCard}>
        <h1>Tools and Technology I use</h1>
        <div className={style.toolGrid}>
        {Object.keys(tools).map(key => {
            return <div className={style.tool}>
                <img src={tools[key]} alt=""/>
            </div>
        })
        }
        </div>
        </div>

     </div>
     </div>
 }
  