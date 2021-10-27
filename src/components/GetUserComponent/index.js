import "./styles.css";
import { useState } from "react";

function GetUserComponent({ setUser, setIsLoggedIn }) {
  const [userInput, setUserInput] = useState("");

  function HandleLogin(userInput) {
    setUser(userInput);
    setIsLoggedIn(true);
  }

  return (
    <div className="formParent">
      <h1>DanielsBook</h1>
      <form className="formChild">
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          placeholder="Insira seu nome"
        ></input>
        <button onClick={() => HandleLogin(userInput)}>Entrar</button>
      </form>
    </div>
  );
}

export default GetUserComponent;
