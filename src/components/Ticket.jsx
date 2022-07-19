import React from "react";
import styled from "styled-components";
import '../App.css';

function Ticket () {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form");
  };

  const handleChange = (event) => {
    
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            
            <h1>Création d'un Nouveau Ticket</h1>
          </div>
          <select>
            <option value=""> Sender</option>
            <option value="Marc">Marc</option>
            <option value="Jean">Jean</option>
          </select>
          <select>
            <option value=""> Receiver</option>
            <option value="Marc">Marie</option>
            <option value="Jean">Luc</option>
          </select>
          <select>
            <option value=""> Status</option>
            <option value="Marc">Assigné</option>
            <option value="Jean">En attente d'élément</option>
            <option value="Jean">A tester</option>
            <option value="Jean">Traité</option>
          </select>
          <label>Description</label>
          <input 
            type="text" class="description_input"
            name="Description"
            onChange={(e) => handleChange(e)}
          />
             <input 
            type="file" 
            name="file"
            onChange={(e) => handleChange(e)}
          />
          
        
          <button type="submit">Enregistrer </button>
         
        </form>
      </FormContainer>
      
    </>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background: linear-gradient( 106.37deg, #ffe1bc 29.63%, #ffcfd1 51.55%, #f3c6f1 90.85% );
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #00000076;
    border-radius: 0.5rem;
    padding: 3rem 5rem;
  }
  label{
    margin-left: 14px;
  }
  select{
    padding: 0.7rem;
    border: 0.1rem solid #f3c6f1;
    border-radius: 0.4rem;
    color: black;
    width: 94%;
    font-size: 1rem;
    margin-left: 14px;
    &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
  }
  input {
    padding: 0.7rem;
    border: 0.1rem solid #f3c6f1;
    border-radius: 0.4rem;
    color: black;
    width: 88%;
    font-size: 1rem;
    margin-left: 14px;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  .description_input{
    height: 100px;
  }
  button {
    background-color: #f3c6f1;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #997af0;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #997af0;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default Ticket;
