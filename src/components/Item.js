import { useState, useEffect } from "react";

export default function Item() {
  const [foodItems, setFoodItems] = useState([]);

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [url, setUrl] = useState('')
  const [recipe, setRecipe] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [nutrients, setNutrients] = useState('')

  let [showNewItem, setShowNewItem] = useState(false)


  useEffect(() => {
    fetch(`http://localhost:9292/items`)
      .then((res) => res.json())
      .then((res) => {
        setFoodItems(res);
      });
  }, []);

  let newItem = {
    name: name,
    image: image,
    url: url,
    recipe: recipe,
    ingredients: ingredients,
    nutrients: nutrients,
  };


  const handleSubmit = function (e) {
    e.preventDefault();
    toggleShow(true)


    fetch(`http://localhost:9292/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then()
  };

  function toggleShow(show) {
    setShowNewItem(show)
  }
  function addNewRecipe(){
    resetForm()
    toggleShow(false)
  }

  function resetForm() {
    setName('')
    setImage('')
    setUrl('')
    setRecipe('')
    setIngredients('')
    setNutrients('')
  }

  return (
    <div className="add-item-container">
      {!showNewItem ? <form className="submissions" onSubmit={handleSubmit}>
        <h1>Add a Recipe!</h1>
        <input type='text' label='name' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='text' label='image' placeholder='image' value={image} onChange={(e) => setImage(e.target.value)} />
        <input type='text' label='url' placeholder='url' value={url} onChange={(e) => setUrl(e.target.value)} />
        <input type='text' label='recipe' placeholder='recipe' value={recipe} onChange={(e) => setRecipe(e.target.value)} />
        <input type='text' label='ingredients' placeholder='ingredients' value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        <input type='text' label='nutrients' placeholder='nutrients' value={nutrients} onChange={(e) => setNutrients(e.target.value)} />
        <button>Submit</button>
      </form> : null}



      {showNewItem ? <div>
        <h2 className="submission-message">{'Yay! your ' + newItem.name + ' recipe was submitted!'}</h2>
        <img className="submission-image" src={image}></img>
        <button onClick={() => addNewRecipe()}>Add a new Recipe?</button>
      </div> : null}

    </div>
  );
}
