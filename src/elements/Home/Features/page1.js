/**
 * path = "/" or "/home/feature1"
 */
import pagesData from "../../../Data/pages";
import style from "./feature.module.css";

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
          <span className={style.descriptionLabels}>About Me</span>
          <p>
          Hi, I'm <big>Divyanshu Kunwar</big> , a <big>data scientist</big> and a <big>full stack developer</big>.<br/><br/>
          My job consists in helping companies and researchers to <big>analyse</big> their <big>datasets</big> .
          I am skilled for most data-science steps: <big>data pre-processing,</big> <big>application of statistical methods</big> ,
          <big> data visualization</big> and <big>results communication</big>.<br/><br/>
          </p>
        </div>

        <div>
          <span className={style.descriptionLabels}> </span>
          <p>
            I am also a <big>full stack web developer.</big><br/><br/>
            I have a deep understanding and best practices of the <big>front-end</big> and <big>back-end</big> web development.<br/><br/>
            Currently I am pursuing <big>B.Tech.</big> in <big>Computer Science</big> from <big>Tezpur University</big>.
            I am also pursuing <big>B.Sc.</big> in <big>Data Science & Programming</big> from <big>IIT Madras</big>.<br/><br/>
          </p>
        </div>

        <div>
          <span className={style.descriptionLabels}>Services</span>
          <p>
          As a freelance data analyst and data scientist, 
          I translate data into valuable and comprehensible insights.
           My goal is to <big>improve results</big>, make the <big>right decisions</big> and <big>save costs</big>.
           Let me help make <big>better use of your data</big>.<br/><br/>
           Area of my interests are as follows:
          </p>
        </div>

        <div>
          <span className={style.descriptionLabels}> </span>
          <p>
             
          </p>
        </div>

        <div>
          <span className={style.descriptionLabels}>Data Management and Analysis</span>
          <p>
          I am specialized in analyzing data. <big>Results</big>, <big>trends</big> and <big>recommendations</big> are clearly presented in  
          <big> reports</big> or <big>tools</big>.
          I present your data in an inspiring way by using an <big>infographic</big> rather than a piece of text. 
          I create interactive infographics which can be used internally or publicly.
          </p>
        </div>


        <div>
          <span className={style.descriptionLabels}>Machine Learning and Predictions</span>
          <p>
          Get more value from your data with <big>prediction models</big> and <big>machine learning</big> techniques,
           for example by <big>predicting behavior</big> or <big>targeting the right customer</big>.
          </p>
        </div>


      </div>
    </div>
  );
}
