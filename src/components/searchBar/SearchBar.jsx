// import React, {useState, useEffect} from 'react';

// const SearchBar = ({data}) => {

//   const [articles, setArticles] = useState([]);

//     useEffect(() => {
//         fetch("http://blog-api/article/", {
//           method: "POST",
//           body: JSON.stringify({
//             with: ["image"],
//           }),
//         })
//           .then((resp) => {
//             return resp.json();
//           })
//           .then((json) => {
//             setArticles(json);
//           });
    
        
//       }, []);

//     const [searchTerm, setSearchTerm] = useState("");

//     const handleSearchChange =(event) => {
//         setSearchTerm(event.target.value);
    
//     };


//     // let filteredData=[];


//     if(data){
//      articles = data?.filter((data)=>
//     data?.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
//     );
//     }

//     return (

//         <div className=' m-auto text-center'>
//             <form >
//                 <input className='w-1/2 text-center border rounded border border-cyan-500/50 my-5 '
//                     type="text"
//                     placeholder='Rechercher'
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                  />
//             </form>
//             <ul>
//                 {articles.map((data)=> (
//                 <li key={data?.id}>{data?.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default SearchBar;

// import React, { useState, useEffect } from 'react';

// const SearchBar = () => {
//   const [articles, setArticles] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetch('http://blog-api/article/', {
//       method: 'POST',
//       body: JSON.stringify({
//         with: ['image'],
//       }),
//     })
//       .then((resp) => {
//         return resp.json();
//       })
//       .then((json) => {
//         setArticles(json);
//       });
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   let filteredData = [];

//   if (articles) {
//     filteredData = articles.filter((article) =>
//       article.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
//     );
//   }

//   return (
//     <div className='m-auto text-center'>
//       <form>
//         <input
//           className='w-1/2 text-center border rounded border border-cyan-500/50 my-5'
//           type='text'
//           placeholder='Rechercher'
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//       </form>
//       <ul>
//         {filteredData.map((article) => (
//           <li key={article.id}>{article?.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchBar;


// import React, { useState } from 'react';

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [articles, setArticles] = useState([]);

//   const handleSearchChange = (event) => {
//     const query = event.target.value;
//     setSearchTerm(query);

//     fetch(`/blog-api/article?query=${query}`)
//       .then(response => response.json())
//       .then(data => setArticles(data));
//   };

//   const filteredArticles = articles.filter(article =>
//     article.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <input type="text" value={searchTerm} onChange={handleSearchChange} />
//       <ul>
//         {filteredArticles.map(article =>
//           <li key={article?.id}>{article?.name}</li>
          
//         )}
//         console.log(article);
//       </ul>
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState, useEffect } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://blog-api/article?q=${searchTerm}`);
      const data = await response.json();
      console.log(data);
      setSearchResults(data.data);
    };

    fetchData();
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='m-auto text-center '>
      <input type="text" value={searchTerm} onChange={handleChange} placeholder='Recherche' className='text-center w-1/6 rounded h-8 text-lg font-medium outline-0' />
      <ul>
        {searchResults?.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;

