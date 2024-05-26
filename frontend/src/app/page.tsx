import Image from "next/image"
import styles from "./page.module.css"
import mainImage from "@assets/main-image.jpg"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.inlineWrapper}>
        <div className={styles.titleView}>
          <h1 className={styles.mainTitleEn}>
            CONNECT <br />
            COLABORATE
            <br /> CREATE
          </h1>
          <br />
          <h1 className={styles.mainTitleKr}>
            필름 전문가들을 위한 완벽한 네트워크. <br /> 인증된 포트폴리오를 기반으로 크루를
            찾아보세요.
          </h1>
        </div>
        <div className={styles.mainImageWrapper}>
          <Image
            className={styles.mainImage}
            src={mainImage}
            width={550}
            height={350}
            objectFit="cover"
            alt="main_image"
          />
        </div>
      </div>
    </main>
  )
}
