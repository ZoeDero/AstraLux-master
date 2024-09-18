import React, { useState, useEffect } from "react";
import CategoryCard from "../../components/Categories/CategoryCard";

const AdminScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  const [category, setCategory] = useState("");

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://blog-api/category");
        const result = await response.json();
        if (Array.isArray(result.data)) {
          setCategories(result.data);
        } else {
          console.error("The API response data is not an array:", result);
          setCategories([]);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  // console.log("categories:", categories);

  const submitForm = async () => {
    if (!title || !content || !src || !category) return;

    const selectedCategory = categories.find(
      (cat) => cat.Id_category === category
    );

    const requestBody = {
      title,
      content,
      src: `/assets/img/${selectedCategory.title}/${src}`,
      alt,
      category,
    };

    try {
      const response = await fetch("http://blog-api/insert/product", {
        method: "POST",
        body: JSON.stringify(requestBody),
      });

      const result = await response.json();
      alert("Ajout validé ! ", result);
    } catch (error) {
      alert("ERREUR :", error);
    }
  };

  return (
    <>
      <div className=" min-h-84vh md:w-1/3 mt-28 m-auto text-white text-xl font-bold">
        <form
          className="  rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={async (e) => {
            e.preventDefault();
            await submitForm();
            setTitle("");
            setContent("");
            setSrc("");
            setAlt("");
            setCategory("");
          }}
        >
          <div className="mb-4">
            <label
              className="block text-white text-xl font-bold font-bold mb-2"
              htmlFor="title"
            >
              Titre:
            </label>
            <input
              className="shadow text-white text-xl font-bold appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-xl font-bold mb-2"
              htmlFor="content"
            >
              Contenu:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white text-xl font-bold leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-xl font-bold mb-2"
              htmlFor="src"
            >
              Chemin image:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white text-xl font-bold leading-tight focus:outline-none focus:shadow-outline"
              id="src"
              type="text"
              value={src}
              onChange={(e) => setSrc(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-xl font-bold mb-2"
              htmlFor="alt"
            >
              Texte alternatif de l'image :
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white text-xl font-bold leading-tight focus:outline-none focus:shadow-outline"
              id="alt"
              type="text"
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-xl font-bold text-sm font-bold mb-2"
              htmlFor="category"
            >
              Catégorie:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white text-xl font-bold leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Sélectionner une catégorie</option>
              {categories.map((cat) => (
                <option key={cat.Id_category} value={cat.Id_category}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="border-b-2 hover:border-cyan-300  hover:text-cyan-400  text-white text-xl font-bold font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Ajouter
            </button>
          </div>
        </form>

        <CategoryCard />
      </div>
    </>
  );
};

export default AdminScreen;
