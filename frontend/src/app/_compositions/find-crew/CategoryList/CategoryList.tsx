"use client"

import { ReactElement, useState } from "react"
import styles from "./categoryList.module.css"
import { Camera, Headphones, Monitor, Users } from "react-feather"
import classNames from "classnames"

const categoryList: {
  [key: string]: {
    categoryList: { title: string; renderIcon: (color: string) => ReactElement }[]
  }
} = {
  ["촬영"]: {
    categoryList: [
      { title: "영화", renderIcon: (color) => <Camera color={color} /> },
      { title: "뮤직비디오", renderIcon: (color) => <Headphones color={color} /> },
      { title: "커머셜", renderIcon: (color) => <Monitor color={color} /> },
      { title: "예능", renderIcon: (color) => <Users color={color} /> },
    ],
  },
}

export const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryList["촬영"].categoryList[0].title
  )

  return (
    <div className={styles.listWrapper}>
      {categoryList["촬영"].categoryList.map((category, index) => {
        const isSelected = selectedCategory === category.title
        return (
          <div
            key={`${category.title}_${index}`}
            className={classNames([
              styles.categoryItemWrapper,
              {
                [styles.selectedItem]: isSelected,
              },
            ])}
            onClick={() => setSelectedCategory(category.title)}
          >
            <div>{category.renderIcon(isSelected ? "white" : "black")}</div>
            <div
              className={classNames([
                styles.categoryTitle,
                {
                  [styles.selectedTitle]: isSelected,
                },
              ])}
            >
              {category.title}
            </div>
          </div>
        )
      })}
    </div>
  )
}
