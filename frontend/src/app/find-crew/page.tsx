import CrewList from "@compositions/find-crew/CrewList/CrewList"
import styles from "./findCrew.module.css"

export default function FindCrewPage() {
  return (
    <div className={styles.pageWrapper}>
      <CrewList />
    </div>
  )
}
