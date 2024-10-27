import { useSelector } from "react-redux";
import Card from "../Card";
import styles from "./CardsList.module.scss";
import { defaultStateType, TCard } from "../../types";

const CardsList = () => {
  const week = useSelector((state: defaultStateType) => state.week);
  const menuList = useSelector((state: defaultStateType) => state.menuList);

  const weekMenu = menuList.filter((item) => item.week === week);

  console.log("weekMenu", weekMenu);
  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        {weekMenu.map(
          (item: { date: string; day: string; lunch: string }, index) => (
            <Card
              key={index.toString()}
              id={index.toString()}
              date={item.date}
              day={item.day}
              lunch={item.lunch}
            />
          )
        )}
      </div>
    </div>
  );
};

export default CardsList;
