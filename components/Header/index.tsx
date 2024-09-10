"use client";

import type { NextPage } from "next";
import styles from './index.module.scss'
import {navs} from './config'
import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation';

const Header = () => {
  console.log('searchParams.get("id")');
  const pathName = usePathname(); // 获取当前路径
  const searchParams = useSearchParams(); // 获取查询参数
  console.log('pathName',pathName);

  return (
    <div className={styles.navbar}>
      <section className={styles.logArea}>BLOG-C</section>
      <section className={styles.navArea}>
        {
          navs.map(item => (
            <Link href={item.value} key={item.value}>
              {/* <div className={styles.navItem}>{item.label}</div> */}
              <div
                className={`${styles.navItem} ${pathName === item.value ? styles.active : ''}`}
              >
                {item.label}
            </div>
            </Link>
          ))
        }
      </section>
    </div>
    
  )
}

export default Header