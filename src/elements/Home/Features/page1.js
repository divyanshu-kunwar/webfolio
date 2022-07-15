/**
 * path = "/" or "/home/feature1"
 */
import style from './feature.module.css'

export default function FeaturePage1(){
    return  <div  className={style.AboutPage}>
        <h1>My, Myself & I</h1>
        <p>I’m a Front-End Developer from India.
             I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
             <p>Well-organised person, problem solver, independent employee with high attention to detail.
                 Fan of MMA, outdoor activities, TV series and English literature.
                  A family person and father of two fractious boys,
                  Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
            <p>Let’s make something special.</p>
    </div>
}
 