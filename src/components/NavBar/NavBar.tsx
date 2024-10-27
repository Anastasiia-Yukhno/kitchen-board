import DekstopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <DekstopNavigation />
      <MobileNavigation />
    </div>
  );
};

export default NavBar;
