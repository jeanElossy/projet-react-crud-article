import React, { useState } from 'react'

const Form = ({addMessage}) => {

    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");
    const [date, setDate] = useState(Date.now());
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(message.length < 140){
            setError(true);
        }else{
            (author === "" || message === "") ? alert("Veuillez renseigner tous les champs") : (
                addMessage({
                id: new Date().getTime(),
                author,
                message,
                date
                })) 
                setAuthor("")
                setMessage("")
                setError(false);
            }
        }

    return (
        <div className="form">
            <h1 style={{textAlign:"center"}}>New</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Author" 
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                />
                
                <textarea 
                    style={{border: error ? "1px solid red" : ".5px solid rgba(128, 128, 128, 0.555)"}}
                    cols="30" 
                    rows="5"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    placeholder="Ecrire votre message"
                ></textarea>
                {error && <div style={{textAlign:"center", color:"red"}}>Le nombre de caractere de votre message doit superieur a 140 !</div>}
                
                <div className="submit">
                    <input type="submit" value="Send"/>  
                </div>
                
            </form>
        </div>
    )
} 
export default Form;
