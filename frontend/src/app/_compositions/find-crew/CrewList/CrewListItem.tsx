import { CrewListItemType } from "@/app/types/CrewListItemType"
import styles from "./crewList.module.css"

type Props = {
  item: CrewListItemType
}

export const CrewListItem = ({ item }: Props) => {
  return (
    <div className={styles.listItemWrapper}>
      <div className={styles.profileImage}></div>
      <div className={styles.name}> {item.name}</div>
      <div>주요 분야: {item.mainField}</div>
      <div>최근 작품 {item.latestWork}</div>
      <div>포지션: {item.position}</div>
      <div>경력: {item.totalExperience}</div>
    </div>
  )
}
