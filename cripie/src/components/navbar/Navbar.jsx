import styles from "./index.module.scss";
import { VscAccount } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul>
        <li>
          <Link href="../account">
            <span>
              <VscAccount className={styles.icon} />
            </span>
            ACCOUNT
          </Link>
        </li>
        <li>
          <Link href="/">
            <span>
              <FiLogOut className={styles.icon} />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
