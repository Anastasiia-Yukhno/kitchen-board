import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { defaultStateType } from "../../types";
import { changeWeek } from "../../state/actions";

import styles from "./Pagination.module.scss";

const Pagination = () => {
  const dispatch = useDispatch();
  const weekDates = useSelector((state: defaultStateType) => state.weekDates);

  const setWeek = (week: number) => dispatch(changeWeek(week));

  return (
    <div className={styles.Wrapper}>
      {weekDates.map((week, index) => (
        <button
          key={index.toString()}
          className={styles.Pagination}
          onClick={() => {
            setWeek(week.week);
          }}>
          {week.weekDate}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
