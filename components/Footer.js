import Link from "next/link";
import styles from '../styles/Footer.module.scss'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div id="footer">
        <div>
          <ul>
            <li>
              <Link
              href="/contact"
                style={{
                  cursor: "pointer",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Επικοινωνία
              </Link>
            </li>
            <li>
              <Link
              href="/help"

                style={{
                  cursor: "pointer",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Βοήθεια
              </Link>
            </li>
            <li>
              <Link
              href="/newsletter"

                style={{
                  cursor: "pointer",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Newsletter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
