/**
 * path = "/" or "/home/feature1"
 */
import pagesData from "../../../Data/pages";
import style from "./feature.module.css";
import { Player } from "@lottiefiles/react-lottie-player";



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
            <Player
              src={pagesData.animationurl}
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
            {pagesData.page1section1}
          </p>
        </div>

        <div>{pagesData.page1section3}</div>

        <div>
          <span className={style.descriptionLabels}>
            Fun Facts and Photo(s)
          </span>
          <br />
          <br />
          <div className={style.grid2}>
            <img className={style.photo} src={pagesData.profilePic} alt="me" />
            {pagesData.page1section3}
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
