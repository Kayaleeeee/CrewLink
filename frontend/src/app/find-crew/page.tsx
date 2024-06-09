import CrewList from "@compositions/find-crew/CrewList/CrewList"
import styles from "./findCrew.module.css"
import { CategoryList } from "../_compositions/find-crew/CategoryList/CategoryList"

export default function FindCrewPage() {
  return (
    <div className={styles.pageWrapper}>
      <CategoryList />

      <CrewList />
    </div>
  )
}
