const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navbarList}>
        <li style={styles.navbarItem}>
          <a href="/addSong" style={styles.navbarLink}>
            Add Song
          </a>
        </li>
        <li style={styles.navbarItem}>
          <a href="/" style={styles.navbarLink}>
            Song List
          </a>
        </li>
        <li style={styles.navbarItem}>
          <a href="/musicDirectorSongs" style={styles.navbarLink}>
            List Director Songs
          </a>
        </li>
        <li style={styles.navbarItem}>
          <a href="/directorsingersongs" style={styles.navbarLink}>
            List Director Singer Songs
          </a>
        </li>
        <li style={styles.navbarItem}>
          <a href="/singersongsfromfilms" style={styles.navbarLink}>
            List Singer Songs
          </a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    padding: "10px 0",
  },
  navbarList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    textAlign: "center",
  },
  navbarItem: {
    display: "inline-block",
    margin: "0 10px",
  },
  navbarLink: {
    textDecoration: "none",

    fontSize: "16px",
  },
};

export default Navbar;
