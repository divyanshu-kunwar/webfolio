/**
 * path = "/" or "/home/feature1"
 */
 import style from './feature.module.css'
 import data from '../../../Data/portofolio'

 import github from '../../../image/social/github.svg'
 import youtube from '../../../image/social/youtube.svg'
 import web from '../../../image/social/web.svg'
 import demo from '../../../image/social/demo.png'

 const colorData = ['#FF6A6A' , '#5D81FF' , '#FF53CF' , '#3BD0FF' , '#FFC400' , '14FF00']

 export default function FeaturePage3(){
     return <div className={style.AboutPage}>
        <h1>
        <div className={style.myselftext}>Project</div>{" "}
        <div className={style.waivyText}>Portofolio</div>
      </h1>
        <div className={style.portofolioGrid}>

            {
            Object.keys(data).map((key) => {
                return <div className={style.projectCard}>
                    <img className={style.projectImg}src={data[key].img} alt="Q"/>
                    <span className={style.projectTitle}>{data[key].title}</span>
                    <span className={style.projectType}>{data[key].type}</span>
                    <div className={style.projectTag}>
                        {data[key].tag.map((tag) => {
                            return <span style={{backgroundColor:colorData[Math.floor(Math.random() * 5)]}}>{tag}</span>
                        }
                        )}
                    </div>
                    <span className={style.projectDesc}>{data[key].desc}</span>
                    <div className={style.linkContainer}>
                        <img src={web} alt="visit"/>
                        <img src={youtube} alt="Watch"/>
                        <img src={github} alt="Code"/>
                    </div>
                </div>
            })
            }


        </div>
     </div>
 }
  