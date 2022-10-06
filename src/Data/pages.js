import linkedin_icon from "../image/social/linkedin.svg";
import github_icon from "../image/social/github.svg";
import youtube_icon from "../image/social/youtube.svg";
import profilePic from "../image/pic2.jpg";

const pagesData = {
  name: "Divyanshu",
  fullName: "Divyanshu Kunwar",
  tabs: {
    1: {
      title: "About",
    },
    2: {
      title: "My Skills",
    },
    3: {
      title: "Portfolio",
    },
    4: {
      title: "Contact",
    },
    5: {
      title: "Resume",
    },
  },
  social: {
    1: {
      url: "https://www.linkedin.com/in/divyanshu-kunwar-6b11131b3/",
      icon: linkedin_icon,
    },
    2: {
      url: "https://www.youtube.com/c/HomoFabers",
      icon: youtube_icon,
    },
    3: {
      url: "https://github.com/KUNWAR-DIVYANSHU",
      icon: github_icon,
    },
  },
  credit: "Handicrafted With 😍 in India",

  // page 1 content ---------------- ---------------- ----------------- 

  animationurl: "https://assets2.lottiefiles.com/packages/lf20_qf4ez0v4.json",
  page1section1: (
    <p>
      <center>
        I'm a <big>Data Scientist</big> and a <big>Software Developer</big>.
      </center>
      <br />
      My job consists in helping companies and researchers to <big>
        analyse
      </big>{" "}
      their <big>datasets</big> . I am skilled for most data-science steps:{" "}
      <big>data pre-processing,</big>{" "}
      <big>application of statistical methods</big> ,
      <big> data visualization</big> and <big>results communication</big>.
      <br />
      <br />I have a deep understanding and best practices of the{" "}
      <big>front-end</big> and <big>back-end</big> web development.
      <br />
    </p>
  ),
  page1section2: (
    <p>
      Currently I am pursuing <big>B.Tech.</big> in <big>Computer Science</big>{" "}
      from{" "}
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
    </p>),
    page1section3 : ( <p><big>
        "Best place to hangout is my room and best person to hangout
        with is my laptop"
        <br />
      </big>
      <br />
      <br />
      I'm being myself. I'm doing what I love. That's all that matters.
    </p>),
    profilePic: profilePic,
};

export default pagesData;
