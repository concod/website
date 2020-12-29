import SimpleBlockContent from "../utils/blockBuilder";
import urlFor from "../utils/imageBuilder";
import styles from "./Footer.module.css";

const Footer = ({ props }) => {
  const { copyright, ctas, social } = props;
  return (
    <div className={styles.footer__bg}>
      <div className={styles.footer__content}>
        <div className={styles.static}>
          <SimpleBlockContent blocks={copyright[0]} />
          <div className={styles.footer__ctas}>
            {ctas.map((cta, index) => (
              <div
                className={styles.cta}
                style={{
                  paddingRight: "10px",
                  fontSize: "12px",
                }}
                key={cta._key}
              >
                <span>
                  <a
                    style={{ color: "#888b8d" }}
                    href={cta.link}
                    target="_blank"
                  >
                    {cta.title} {index < 3}
                  </a>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footer__social}>
          {social.map((icon) => (
            <div style={{ paddingRight: "20px" }} key={icon._key}>
              <a href={icon.alt} target="_blank">
                <img src={urlFor(icon)} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
