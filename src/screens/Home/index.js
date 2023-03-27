import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
import "./index.css";

export const HomeScreen = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const onClickContinue = () => {
    if (username.length <= 3) {
      alert("Usuário deve conter mais do que 3 caracteres");
      return;
    }

    localStorage.setItem("@Supermaket-List:username", username);
    navigate("/List");
  };

  return (
    <div className="home-screen-container">
      <div className="home-screen-content-container">
        <img
          className="shopping-bag-image"
          src="/images/shopping-bag.svg"
          alt="shopping-bag"
        ></img>
        <h1 className="home-screen-title">
          Sua lista de supermercado mais fácil do que nunca
        </h1>
        <h3 className="home-screen-subtitle">
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </h3>
        <h3 className="home-screen-subtitle-description">
          Digite abaixo seu usuário para ter acesso a sua lista de compras:
        </h3>
        <Input
          onChange={(text) => setUsername(text)}
          value={username}
          label="Username"
          placeholder="ex: usuario01"
        />
        <div className="home-screen-button-container">
          <Button onClick={onClickContinue}>Acessar</Button>
        </div>
      </div>
    </div>
  );
};