import { Calendar } from "../../icons/Calendar";
import { TCard } from "../../types";
import styles from "./Card.module.scss";

const Card = ({ id, date, day, lunch }: TCard) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Card}>
        <div className={styles.Day}>
          <div className={styles.Date}>
            <Calendar />

            <div className={styles.Text}>{`${date} - ${day}`}</div>
          </div>
        </div>

        <div className={styles.Lunch}>{lunch}</div>
      </div>
    </div>
  );
};

export default Card;
