/**
 * path = "/" or "/home/feature1"
 */
 import style from './feature.module.css'

 export default function FeaturePage4(){
        return <div className={style.AboutPage}>
        <h1>
        <div className={style.myselftext}>Reach Out</div>{" "}
        <div className={style.waivyText}>To Me</div>
      </h1>
        <div className={style.gridParent} style={{maxWidth:'500px'}}>


        <label for="fname">Name</label>
        <input type="text" id="name" name="firstname" placeholder="Your name.." />

        <label for="lname">Email</label>
        <input type="text" id="lname" name="lastname" placeholder="Your Email.." />

        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

        <input type="submit" value="Submit" />

        </div>
     </div>
 }
  