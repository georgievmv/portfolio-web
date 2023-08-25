import styles from './ProjectsPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectsPage = () => {
  const imageMouseOutHandler = () => {
    const image = document.getElementById('NLB-image');
    if (image) {
      image.style.objectPosition = '0% 0%';
      image.style.transition = 'object-position 2s';
    }
  };

  const imageMouseEnterHandler = () => {
    const image = document.getElementById('NLB-image');
    if (image) {
      image.style.objectPosition = '0% 100%';
      image.style.transition = 'object-position 5s ease-in';
    }
  };

  return (
    <div className={styles.projectsPage}>
      <div className={styles.container}>
        <section className={styles.card}>
          <article className={styles.text}>
            <h2>TIME MANAGMENT TOOL</h2>
            <p className={styles.paragraph}>
              An app that allows you to plan your time. You can add and remove tasks for diffrent
              days.
            </p>
            <div className={styles.buttons}>
              <a target="_blank" href="https://github.com/georgievmv/time-scheduler">
                <FontAwesomeIcon icon={faGithub} />
                <p className={styles.buttonText}>Code</p>
              </a>
              <a target="_blank" href="https://georgievmv.github.io/time-scheduler/">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                <p className={styles.buttonText}>Visit site</p>
              </a>
            </div>
          </article>
          <iframe
            width={200}
            height={600}
            src="https://georgievmv.github.io/time-scheduler/"
            frameBorder={0}
          ></iframe>
        </section>
      </div>
      <div className={styles.container}>
        <section className={styles.card}>
          <a className={styles.imageLink} target="_blank" href="https://nolangbarriers.com/">
            <img
              id="NLB-image"
              onMouseEnter={imageMouseEnterHandler}
              onMouseOut={imageMouseOutHandler}
              className={styles.image}
              src="src\assets\nolangbarriers.com_.png"
              alt=""
            />
          </a>
          <article className={styles.text}>
            <h2>NO LANGUAGE BARRIERS</h2>
            <p className={styles.paragraph}>
              A website that offers a dynamic and secure space where clients from around the world
              can connect with proffesional linguists for top-tier translation services.
            </p>
            <div className={styles.buttons}>
              <a target="_blank" href="https://github.com/ivanilev/no-lang-barriers">
                <FontAwesomeIcon icon={faGithub} />
                <p className={styles.buttonText}>Code</p>
              </a>
              <a target="_blank" href="https://nolangbarriers.com/">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                <p className={styles.buttonText}>Visit site</p>
              </a>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;
