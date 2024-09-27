import { useContext } from "react"
import styles from "./CategorySelect.module.scss"
import { UseFormRegisterReturn } from "react-hook-form";
import { CategoryContext } from "../../context/CategoryContextProvider/CategoryContextProvider";

interface CategorySelectProps {
  register: UseFormRegisterReturn<"category">
}

const CategorySelect = ({ register }: CategorySelectProps) => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('Something went wrong');
  }
  const { categories } = context

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
