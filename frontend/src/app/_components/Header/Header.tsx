import Link from "next/link"
import styles from "./header.module.css"

export const Header = () => {
  const menuList: { title: string; link: string }[] = [
    { title: "HOME", link: "/" },
    { title: "크루찾기", link: "/find-crew" },
    { title: "내 포트폴리오", link: "/my-portfolio" },
  ]
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.logo}>CREW LINK</div>
      <div className={styles.itemInlineWrapper}>
        {menuList.map(({ title, link }, index) => {
          return (
            <Link key={`${title}_${index}`} className={styles.item} href={link}>
              {title}
            </Link>
          )
        })}
      </div>
    </header>
  )
}
