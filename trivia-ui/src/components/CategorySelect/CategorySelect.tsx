import { useEffect, useState } from "react"
import { CategoryResponse, getAllCategories } from "../../services/trivia-service"
import styles from "./CategorySelect.module.scss"
import { UseFormRegisterReturn } from "react-hook-form";

interface CategorySelectProps {
  register: UseFormRegisterReturn<"category">
}

const CategorySelect = ({ register }: CategorySelectProps) => {

  const [categories, setCategories] = useState<CategoryResponse[]>([]);

  useEffect(() => {
    getAllCategories()
      .then(data => {
        setCategories(data)
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <div>
      <select 
        id="category" 
        className={styles.selectMenu} 
        {...register}
      >
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CategorySelect
