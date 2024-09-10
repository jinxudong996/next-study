import type { NextPage } from "next";
import styles from './index.module.scss'
import {navs} from './config'
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <section className={styles.logArea}>BLOG-C</section>
      <section className={styles.navArea}>
        {
          navs.map(item => (
            <Link href={item.value} key={item.value}>
              <div className={styles.navItem}>{item.label}</div>
            </Link>
          ))
        }
      </section>
    </div>
    
  )
}

export default Header