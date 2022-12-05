import React from "react";
import blogFetch from "../axios/config"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewPost.css"
const NewPost = () => {
  
  const navigate = useNavigate()
  const[title,SetTitle] = useState();
  const[body,SetBody] = useState();

const createPost= async (e)=>{
  e.preventDefault();

const post = {title,body, userId: 1}

await blogFetch.post("/posts", {body: post})
navigate("/")

}

  return (
    <div className="new-post">
      <h2>Inserir novo post:</h2>
      <form onSubmit={()=> createPost()}>
        <div className="form-control">
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o titulo"
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="title">Conteudo:</label>
          <textarea
            name="body"
            id="body"
            placeholder="Digite o conteudo"
            onChange={(e)=> setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Criar Post"  className="btn"/>
      </form>
    </div>
  );
};

export default NewPost;
