import Logo from "../../assets/Logo";
import NewTask from "../NewTask";

import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<NewTask />
		</header>
	);
};

export default Header;