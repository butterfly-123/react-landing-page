import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <header>
        <div>
          <nav className={styles.containerNav}>
            <div>
              <a className={styles.logo} href="/#">
                sparkloop
              </a>
            </div>
            <ul>
              <li>
                <a href="/#">Features</a>
                <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
              </li>
              <li>
                <a href="/#">Publisher Stories</a>
              </li>
              <li>
                <a href="/#">Pricing</a>
              </li>
              <li>
                <a href="/#">Login</a>
              </li>
            </ul>
            <button>Start For Free</button>
          </nav>
        </div>
      </header>
      <main>
        <section>
          <div className={styles.sectionTextButtons}>
            <h1>The #1 newsletter growth platform</h1>
            <p>
              <span>The world’s best newsletter operators</span> and media
              brands rely on SparkLoop to grow their audience faster and more
              affordably. You should too.
            </p>
            <div className={styles.buttons}>
              <button>Book a call</button>
              <button className={styles.buttonSecond}>Start For Free</button>
            </div>
          </div>
          <div>
            <img
              src="https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62af35f90bb19452416a7b91_hero-img.png"
              loading="lazy"
              sizes="(max-width: 479px) 94vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, 73vw"
              srcSet="https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62af35f90bb19452416a7b91_hero-img-p-500.png 500w, https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62af35f90bb19452416a7b91_hero-img-p-800.png 800w, https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62af35f90bb19452416a7b91_hero-img-p-1080.png 1080w, https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62af35f90bb19452416a7b91_hero-img-p-1600.png 1600w, https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62af35f90bb19452416a7b91_hero-img.png 2000w"
              alt=""
            />
          </div>
        </section>
      </main>
      <section className={styles.sectionHeaderSecond}>
        <div>
          <div className={styles.sectionBrands}>
            <span>TRUSTED BY THOUSANDS OF TOP BRANDS:</span>
            <div>
              <img
                src="https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62c43f6b4caf55b3b80d65db_flipside-loog.png"
                loading="lazy"
                height="50"
                alt=""
              />
              <img
                src="https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62c43ef0bf214d0c94aea8fc_james-clear-logo.svg"
                loading="lazy"
                height="50"
                alt=""
              />
              <img
                src="https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/634ead55755e88655ca08f44_front%20office%20sports%20logo.png"
                loading="lazy"
                height="50"
                sizes="(max-width: 479px) 44vw, (max-width: 767px) 26vw, (max-width: 991px) 30vw, 13vw"
                srcSet="https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/634ead55755e88655ca08f44_front%20office%20sports%20logo-p-500.png 500w, https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/634ead55755e88655ca08f44_front%20office%20sports%20logo-p-800.png 800w, https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/634ead55755e88655ca08f44_front%20office%20sports%20logo-p-1080.png 1080w, https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/634ead55755e88655ca08f44_front%20office%20sports%20logo-p-1600.png 1600w, https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/634ead55755e88655ca08f44_front%20office%20sports%20logo-p-2000.png 2000w, https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/634ead55755e88655ca08f44_front%20office%20sports%20logo.png 2818w"
                alt=""
              />
              <img
                src="https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62c43ef1defb610b403ca32a_1440-transparent-logo-no-tag-1024-x-310%403x.png"
                loading="lazy"
                height="50"
                alt=""
              />
              <img
                src="https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/634ead35293a50aaa7c8e6e4_Girlboss_Logo_Wordmark_Black.png"
                loading="lazy"
                height="50"
                alt=""
              />
              <img
                src="https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62c43ef09017e46ce1ce30f6_punchbowl-logo.png"
                loading="lazy"
                height="50"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.container} ${styles.sectionGrow}`}>
        <div className={styles.containerGrow}>
          <div>
            <h2>
              <span>Grow organically</span> with a newsletter referral program
            </h2>
            <p>
              Reward your audience for sharing with friends — and watch your
              newsletter grow 20-200% faster. It couldn't be easier...
            </p>
            <div className={styles.list}>
              <span>
                <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
                Integrate with your email platform in two-clicks
              </span>
              <span>
                <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
                Automatically fulfil digital and physical rewards
              </span>
              <span>
                <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
                Show a beautiful, in-email referral section
              </span>
            </div>
            <div className={styles.buttons}>
              <button>Find out more</button>
              <button className={styles.buttonSecond}>Get started</button>
            </div>
          </div>
          <div>
            <img
              className={styles.newsLetterImg}
              src="https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62c43fed4e0f3901d1fbeb51_referral%20section.png"
              loading="lazy"
              sizes="(max-width: 479px) 94vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, 42vw"
              srcSet="https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62c43fed4e0f3901d1fbeb51_referral%20section-p-500.png 500w, https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62c43fed4e0f3901d1fbeb51_referral%20section-p-800.png 800w, https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62c43fed4e0f3901d1fbeb51_referral%20section.png 1188w"
              alt=""
            />
          </div>
        </div>
        <div className={styles.containerInfo}>
          <div className={styles.containerInfoSecond}>
            <div className={styles.flex}>
              <img
                src="https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62af380ee7ad8f79aa28950c_cropped-dan-oshinsky-dot-com-header-scaled-1%20(1).jpeg"
                loading="lazy"
                width="391"
                id="w-node-_31ebb885-3ee7-ea14-ea8f-71c8877d9d85-13067427"
                srcSet="https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62af380ee7ad8f79aa28950c_cropped-dan-oshinsky-dot-com-header-scaled-1%20(1)-p-500.jpeg 500w, https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62af380ee7ad8f79aa28950c_cropped-dan-oshinsky-dot-com-header-scaled-1%20(1)-p-800.jpeg 800w, https://global-uploads.webflow.com/6278ffab9cf6e95f0162ea8e/62af380ee7ad8f79aa28950c_cropped-dan-oshinsky-dot-com-header-scaled-1%20(1).jpeg 980w"
                sizes="(max-width: 479px) 16vw, (max-width: 767px) 17vw, (max-width: 991px) 42vw, 28vw"
                alt=""
              />
              <div>
                <p>
                  SparkLoop is the fastest way to get a newsletter referral
                  program — like TheSkimm and Morning Brew — up and running.
                  I've tested different referral tools, but{' '}
                  <span>none is as easy to use or as cost effective</span> as
                  SparkLoop.
                </p>
                <span>Dan Oshinsky</span>
                <span>INBOX COLLECTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
