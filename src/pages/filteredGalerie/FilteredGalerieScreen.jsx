import React from 'react';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import CartePhoto from '../../components/cartePhoto/CartePhoto';

const FilteredGalerieScreen = () => {


    const {id} = useParams();

    const [articles, setArticles]= useState([]);

    useEffect(() => {
        fetch("http://blog-api/article/*", {
          method: "POST",
          body: JSON.stringify({
            with: ["image"],
          }),
        })
          .then((resp) => {
            return resp.json();
          })
    
          .then((json) => {
            setArticles(json);
          });
      }, []);

console.log(articles);
    return (
        <div className=''>


            { articles &&
            articles?.data?.map((article) => {

                if(article.Id_category === id){
                    return (
                        <div key={article.Id_article}>
                            <CartePhoto
                            title={article.title}
                            content={article.content}
                            src={article?.with[0]?.src}
                            alt={article?.with[0]?.alt}
                            />
                        </div>
                    );
                }
            })}
            
        </div>
    );
};

export default FilteredGalerieScreen;
