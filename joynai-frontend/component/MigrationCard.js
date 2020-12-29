import SimpleBlockContent from "../utils/blockBuilder";
import urlFor from "../utils/imageBuilder";
import styles from "./MigrationCard.module.css";
const MigrationCard = ({ icons, card, slice }) => {
  return (
    <>
      <div className={styles.migration__card}>
        <div className={styles.card__top}>
          <div>
            <img style={{ width: "120px" }} src={urlFor(icons)} />
          </div>
          <div>
            <SimpleBlockContent blocks={card?.slice(0, slice)} />
          </div>
        </div>
        <div className={styles.card__bottom}>
          <SimpleBlockContent blocks={card?.slice(slice, card?.length)} />
        </div>
      </div>
    </>
  );
};

export default MigrationCard;
