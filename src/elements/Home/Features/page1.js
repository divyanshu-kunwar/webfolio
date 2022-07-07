/**
 * path = "/" or "/home/feature1"
 */
import style from './feature.module.css'
import arrow from '../../../image/greenArrow.svg'
import { useNavigate } from 'react-router-dom'

export default function FeaturePage1(){
    let navigate = useNavigate()
    return  <div className={style.FeaturePage}>
    Features 101
 </div>
}
 