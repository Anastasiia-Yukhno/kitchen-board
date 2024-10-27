import styles from "./MenuPage.module.scss";
import CardsList from "../../components/CardsList";
import Pagination from "../../components/Pagination";

const MenuPage = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Pagination}>
        <Pagination />
      </div>
      <div className={styles.CardsContainer}>
        <CardsList />
      </div>
    </div>
  );
};

export default MenuPage;
