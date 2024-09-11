"use client";

import {useState} from 'react'

import type { NextPage } from "next";
import styles from './index.module.scss'
import {navs} from './config'
import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation';

import { Button } from "antd";

import Login from "../Login/idnex"

const Header = () => {
  
  const [isLoginShow,setIsLoginShow] = useState(false)
  const [from,setFrom] = useState({
    phone:'',
    verify:'',
  })

  const pathName = usePathname(); // 获取当前路径
  const searchParams = useSearchParams(); // 获取查询参数
  
  const handleLogin = () => {
    console.log('handleLogin')
    setIsLoginShow(true)
  }

  const handleWrite = () => {
    console.log('handleWrite')
  }

  const handleClose = () => {
    setIsLoginShow(false)
  }

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

      <section>
        <Button onClick={handleWrite}>写文章</Button>
        <Button onClick={handleLogin} type="primary">登录</Button>
      </section>

      <Login isLoginShow={isLoginShow} onClose={handleClose}></Login>
    </div>
    
  )
}

export default Header