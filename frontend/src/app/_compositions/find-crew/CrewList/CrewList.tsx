import { CrewListItemType } from "@type/CrewListItemType"
import { CrewListItem } from "./CrewListItem"
import styles from "./crewList.module.css"

const dummyData: CrewListItemType[] = [
  {
    id: 1,
    name: "김아무개",
    mainField: "영화 촬영",
    position: "세컨드 어시스턴트",
    totalExperience: 4,
    latestWork: "넷플릭스 발레리나",
  },
  {
    id: 2,
    name: "민병휘",
    mainField: "영화, 뮤직비디오, CF 촬영",
    position: "DOP",
    totalExperience: 10,
    latestWork: "MV 판타지보이즌",
  },
  {
    id: 3,
    name: "송혜령",
    mainField: "영화 촬영",
    position: "DOP",
    totalExperience: 11,
    latestWork: "영화이름, 영화",
  },
  {
    id: 4,
    name: "권석현",
    mainField: "뮤직비디오 촬영",
    position: "촬영 감독",
    totalExperience: 14,
    latestWork: "aespa 어쩌구저쩌구",
  },
  {
    id: 5,
    name: "송혜령",
    mainField: "영화 촬영",
    position: "DOP",
    totalExperience: 11,
    latestWork: "영화이름, 영화",
  },
  {
    id: 6,
    name: "권석현",
    mainField: "뮤직비디오 촬영",
    position: "촬영 감독",
    totalExperience: 14,
    latestWork: "aespa 어쩌구저쩌구",
  },
]

const CrewList = () => {
  return (
    <div className={styles.listWrapper}>
      {dummyData.map((item) => {
        return <CrewListItem key={item.id} item={item} />
      })}
    </div>
  )
}

export default CrewList
