/**
 * path = "/" or "/home/feature1"
 */
 import style from './feature.module.css'
 import data from '../../../Data/portofolio'

 export default function FeaturePage3(){
     return <div className={style.AboutPage}>
        <h1>
        <div className={style.myselftext}>Project</div>{" "}
        <div className={style.waivyText}>Portofolio</div>
      </h1>
        <div className={style.portofolioGrid}>
            
            {Object.keys(data).map((key) => {
                return <div className={style.gridItem}>
                    <img src={data[key].image} 
                    onClick={
                        () => {
                            window.open(data[key].video , '_blank')
                        }
                    } alt={data[key].name}/>
                    <div>
                        <h3>{data[key].name}</h3>
                        <p>{data[key].description}</p>
                        <a href={data[key].link}>
                            {(data[key].link).slice(0,15) +".."+ (data[key].link).slice(-15)}
                            </a>
                    </div>
                </div>
        })
            }

        </div>
     </div>
 }
  