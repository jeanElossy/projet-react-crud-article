import React, { useState } from 'react'

export default function Articles({article, deleteArticle}) {

    const [isEditing, setIsEditing] = useState(false);

    const getDate = () => {
        let newDate = new Date().toLocaleDateString("fr-FR",{
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
        return newDate;
    }

    const handleClickValid = () =>{
        setIsEditing(false);
    }

    return (
        <div>
            <div className="articles">
                <div className="AuthorDate">
                    <div style={{fontWeight:"bold"}}>{article.author}</div>
                    <div>poste du {getDate(article.date)}</div>
                </div>
                {isEditing  ? (<textarea autoFocus defaultValue={article.message} className="textarea"></textarea>) 
                    : (<p className="text">{article.message}</p>)
                }
                <div className="button">
                    {isEditing ? <button onClick={() => handleClickValid(article.id)}>Valider</button> :
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    }
                    <button onClick={() => deleteArticle(article.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}
