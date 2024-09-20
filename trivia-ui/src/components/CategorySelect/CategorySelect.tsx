import { useEffect, useState } from "react"
import { getAllCategories } from "../../services/trivia-service"

const CategorySelect = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories()
      .then(data => {
        setCategories(data)
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <div>
      {/* <select id="category">
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select> */}
    </div>
  )
}

export default CategorySelect
