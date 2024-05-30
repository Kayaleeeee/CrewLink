import Image from "next/image"
import styles from "./page.module.css"
import mainImage from "@assets/main-image.jpg"

export default function Home() {
  const categoryList = [
    {
      title: "구인 구직",
    },
    { title: "커뮤니티" },
    { title: "포트폴리오 제작" },
    { title: "경력 정리" },
  ]
  return (
    <main className={styles.main}>
      <section className={styles.inlineWrapper}>
        <div className={styles.titleView}>
          <h1 className={styles.mainTitleEn}>
            CONNECT <br />
            <b className={styles.linedText}>COLABORATE</b>
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
      </section>
      <section className={styles.secondSection}>
        <div className={styles.secondSection_ImageContainer}>
          <div className={styles.secondSection_image} />
          <div className={styles.columnWrapper}>
            <div className={styles.secondSection_image} />
            <div className={styles.secondSection_image} />
          </div>
        </div>
        <div style={{ width: "2rem" }} />
        <div className={styles.secondSection_textContaier}>
          <h3 className={styles.section_mainText}>Unlimited Skills for</h3>
          <h3 className={styles.section_mainText_lined}>Super Projects.</h3>
          <p>
            encompasses many different skills and disciplines in the production and maintenance of
            websites. The different areas of web design include web graphic design, interface
            design, including standardized code.
          </p>
        </div>
      </section>
      <section className={styles.categorySectionWrapper}>
        <div className={styles.categorySectionWrapper_textContainer}>
          <h3 className={styles.section_mainText_white}>
            How Can
            <b className={styles.section_mainText_lined_white}> We help</b>
          </h3>
          <p className={styles.section_contentText}>
            We help premium brands achieve their future through innovation and creative
            <br />
            perspectives. We grow your company through proprietary in-house ideas, tested and
            <br />
            perfected over the years..
          </p>
        </div>
        <div className={styles.categorySectionWrapper_cardWrapper}>
          {categoryList.map((item) => {
            return (
              <div key={item.title} className={styles.categorySectionWrapper_card}>
                <h4 className={styles.categorySectionWrapper_card_title}>{item.title}</h4>
              </div>
            )
          })}
        </div>
      </section>
      <section></section>
    </main>
  )
}
