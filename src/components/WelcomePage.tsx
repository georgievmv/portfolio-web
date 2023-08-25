import styles from './WelcomePage.module.css';
const WelcomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroIntroduction}>
        <h1>Front-End React Developer</h1>
        <p>
          Hi, I'm Martin Georgiev. A passionate Front-end React Developer based in Stara Zagora,
          Bulgaria. 📍
        </p>
        <div className={styles.techStack}>
          <h5>Tech Stack</h5>
          <ul>
            <li title="HTML5">
              <img src="assets\html.6e7b1b463015c056aeb9a624c8dc2876.svg" alt="HTML" />
            </li>
            <li title="CSS">
              <img src="assets\css3.9cecabbf6ce67609c48bc4f280a11002.svg" alt="CSS" />
            </li>
            <li title="JavaScirpt">
              <img src="assets\javascript.de4c2594613e34b15666206bbede7327.svg" alt="JavaScript" />
            </li>
            <li title="TypeScript">
              <img src="assets\Typescript_logo_2020.svg" alt="TypeScript" />
            </li>
            <li title="React">
              <img src="assets\react.afac9c43724070bf6674f2692b7356a9.svg" alt="React" />
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.heroImage}></div>
    </div>
  );
};

export default WelcomePage;
