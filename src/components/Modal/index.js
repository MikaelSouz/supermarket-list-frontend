import "./index.css";
import { useState } from "react";
import { Input, Button } from "../../components";
import { createItem } from "../../services/request";

export const Modal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const callAddItem = async () => {
    if (name.length < 3) {
      alert("Nome deve conter mais de 2 caracteres!");
      return;
    }

    if (quantity < 1) {
      alert("Quantidade não pode ser menor que 1.");
      return;
    }

    const result = await createItem({ name, quantity: Number(quantity) });
    if (!result?.error) {
      alert("Item salvo com sucesso");
      onClose();
    }
  };
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <h3>Adicionar novo item</h3>
          <button onClick={onClose} className="modal-close-button"></button>
        </div>
        <div className="modal-contents">
          <div className="modal-inputs">
            <Input
              onChange={(text) => setName(text)}
              value={name}
              label="Nome"
              placeholder="Ex.: Arroz"
            ></Input>
            <Input
              onChange={(text) => setQuantity(text)}
              value={quantity}
              label="Quantidade"
              type="Number"
            ></Input>
          </div>
          <div className="modal-inputs">
            <Button onClick={callAddItem}>Adicionar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
