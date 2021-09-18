import React, { useState } from 'react'
import Articles from "./Articles";
import Form from './Form';

const New = () =>{

    const [data, setData] = useState([]);
    const handleContent = (article) =>{
        const newData = [...data];
        newData.push(article)

        setData(newData)
    }

    const handleDelete = (id) =>{
        const newDelete = [...data];
        const index = newDelete.findIndex((i) => i.id === id);

        newDelete.splice(index, 1);
        // console.log(index)
        setData(newDelete);
    }
    console.log(data)
    return (
        <div>
            <Form addMessage={handleContent}/>

            {data
                .sort((a,b) => b.id - a.id)
                .map((article) => (
                <Articles key={article.id} article={article} deleteArticle={handleDelete}/>
            ))}
        </div>
    )
}

export default New;
