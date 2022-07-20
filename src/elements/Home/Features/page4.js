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

        <form id="contact-form"  method="POST" 
        action="https://script.google.com/macros/s/AKfycbwTGXeVMIiu8dR3hF5QenCNPXQRqwBnPgu8BnqYsQmH3fWcmBNZH58pOIKcByX5w8wISw/exec"
        onSubmit={
          (e) => {
            document.getElementById("loader").style.display = "block";
            document.getElementById("backdrop").style.display = "block";
            e.preventDefault();
            const data = new FormData(e.target);
            const action = e.target.action;
            fetch(action, {
              method: 'POST',
              body: data,
            })
            .then(() => {
              document.getElementById("loader").style.display = "none";
            document.getElementById("backdrop").style.display = "none";
              alert("Thank you for messaging. I will get back to you soon.");
            })
          }
        }>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="Name" placeholder="Your name.." required/>

        <label htmlFor="lname">Email</label>
        <input type="text" id="lname" name="Email" placeholder="Your Email.." required/>

        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="Message" placeholder="Write something.." style={{height:"200px"}} required></textarea>

        <input type="submit" value="Submit" />
        </form>
        </div>
        <div id="backdrop" className={style.backDrop}></div>
        <div id="loader" className={style.loader}></div>
     </div>
 }
  