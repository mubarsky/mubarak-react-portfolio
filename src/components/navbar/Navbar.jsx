import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <section className={styles.navbar}>
      <img
        src="/public/WhatsApp Image 2024-12-03 at 11.21.27_3b8336e3.jpg" alt="mubarak logo" />
      
      <ul>
        <li className="styles.navlists"> Home</li>
        <li className="styles.navlists"> About</li>
        <li className="styles.navlists"> Skills</li>
        <li className="styles.navlists"> Project</li>
        <li className="styles.navlists"> Contact</li>
        <li className="styles.navlists"> Foooter</li>
      </ul>
      
    </section>
  )
}

export default Navbar