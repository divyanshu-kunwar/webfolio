/**
 * path = "/" or "/home/feature1"
 */
import pagesData from "../../../Data/pages";
import style from "./feature.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

import profilePic from "../../../image/pic1.jpeg";

export default function FeaturePage1() {
  return (
    <div className={style.AboutPage}>
      <h1>
        <div className={style.hitext}>Hi!</div>
        <span className={style.handRotate}>👋 </span>{" "}
        <div className={style.myselftext}>Myself</div>{" "}
        <div className={style.waivyText}>{pagesData.fullName}</div>
      </h1>
      <div className={style.gridParent}>
        <div>
          <p>
            <Player src="https://assets2.lottiefiles.com/packages/lf20_qf4ez0v4.json" 
            background="transparent"
            speed="1"
            style={{
                height: "200px",
                "margin-left": "auto",
                "margin-right": "auto",
            }}
            loop
            autoplay
            />

            <center>
              I'm a <big>Data Scientist</big> and a{" "}
              <big>Software Developer</big>.
            </center>
            <br />
            My job consists in helping companies and researchers to{" "}
            <big>analyse</big> their <big>datasets</big> . I am skilled for most
            data-science steps: <big>data pre-processing,</big>{" "}
            <big>application of statistical methods</big> ,
            <big> data visualization</big> and <big>results communication</big>.
            <br />
            <br />I have a deep understanding and best practices of the{" "}
            <big>front-end</big> and <big>back-end</big> web development.
            <br />
          </p>
        </div>

        <div>
          <p>
            Currently I am pursuing <big>B.Tech.</big> in{" "}
            <big>Computer Science</big> from{" "}
            <big>
              <a href="http://www.tezu.ernet.in">Tezpur University</a>
            </big>
            . I am also pursuing <big>BS</big> in{" "}
            <big>Data Science & Programming</big> from{" "}
            <big>
              <a href="https://onlinedegree.iitm.ac.in/">IIT Madras</a>
            </big>
            .<br />
            <br />
            <hr width="100%" />
          </p>
        </div>

        <div>
          <span className={style.descriptionLabels}>Fun Facts and Photos</span>
          <br />
          <br />
          <div className={style.grid2}>
            <img className={style.photo} src={profilePic} alt="me" />
            <p>
              <big>
                "Best place to hangout is my room and best person to hangout
                with is my laptop"
                <br />
              </big>
              <br />
              <br />
              I'm being myself. I'm doing what I love. That's all that matters.
            </p>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}