import Image from "next/image"
import styles from "./page.module.css"
import image1 from "@assets/lightPic.jpg"
import image2 from "@assets/setPic.jpg"
import image3 from "@assets/teamPic.jpg"
import subImage1 from "@assets/subPic_1.jpeg"
import subImage2 from "@assets/subPic_1.jpeg"

export default function Home() {
  const categoryList = [
    {
      title: "Finding Crews",
      imageUrl: subImage1,
      content:
        "쉽고 빠르게 필요한 크루를 찾아보세요. 함께 작업할 인재를 손쉽게 연결합니다. \n최고의 팀을 구성하여 프로젝트를 성공으로 이끌어보세요.",
    },
    {
      title: "Community",
      imageUrl: subImage2,
      content: "전문가들과 함께하는 활발한 커뮤니티. 경험을 공유하며 함께 성장합니다. ",
    },
    {
      title: "Portfolio",
      imageUrl: subImage1,
      content:
        "포트폴리오로 나만의 경력을 정리하세요. 작품과 경험을 한눈에 보여주는 플랫폼, 내 가치를 돋보이게 만듭니다.",
    },
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
          {/* <Image
            className={styles.mainImage}
            src={mainImage}
            width={550}
            height={350}
            alt="main_image"
          /> */}
        </div>
      </section>
      <section className={styles.secondSection}>
        <div className={styles.secondSection_ImageContainer}>
          <div className={styles.columnWrapper}>
            <div className={styles.secondSection_image_1}>
              <Image src={image1} layout="responsive" alt="image 1" style={{ borderRadius: 16 }} />
            </div>
            <div>
              <h3 className={styles.section_mainText_lined_black}>10 years</h3>
              <p className={styles.section_mainText} style={{ fontSize: "20px" }}>
                experiences
              </p>
            </div>
          </div>
          <div className={styles.columnWrapper}>
            <div className={styles.secondSection_image_2}>
              <Image src={image2} layout="responsive" alt="image 2" style={{ borderRadius: 16 }} />
            </div>
            <div className={styles.secondSection_image_2}>
              <Image
                src={image3}
                layout="responsive"
                alt="image 3"
                style={{ borderRadius: 16, marginTop: 10 }}
              />
            </div>
          </div>
        </div>
        <div style={{ width: "2rem" }} />
        <div className={styles.secondSection_textContaier}>
          <h3 className={styles.section_mainText}>Unlimited Skills for</h3>
          <h3 className={styles.section_mainText_lined}>Super Projects.</h3>
          <p className={styles.section_contentText} style={{ textAlign: "left" }}>
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
          {categoryList.map((item, index) => {
            return (
              <div key={item.title} className={styles.categorySectionWrapper_card}>
                <h3 className={styles.categorySectionWrapper_card_number}>{`(0${index + 1})`}</h3>
                <h4 className={styles.categorySectionWrapper_card_title}>
                  {item.title.toLocaleUpperCase()}
                </h4>
                <div className={styles.categorySectionWrapper_card_image}>
                  <Image src={item.imageUrl} layout="responsive" alt="sub images" />
                </div>
                <p className={styles.categorySectionWrapper_card_text}>{item.content}</p>
              </div>
            )
          })}
        </div>
      </section>
      <section></section>
    </main>
  )
}
