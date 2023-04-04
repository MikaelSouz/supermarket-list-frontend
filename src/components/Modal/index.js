import "./index.css";
import { useEffect, useState } from "react";
import { Input, Button } from "../../components";
import { createItem, updateItem, deleteItem } from "../../services/request";

export const Modal = ({ item, onClose }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const validateBeforeSave = () => {
    if (name.length < 3) {
      alert("Nome deve conter mais de 2 caracteres!");
      return false;
    }

    if (quantity < 1) {
      alert("Quantidade não pode ser menor que 1.");
      return false;
    }

    return true;
  };

  const callAddItem = async () => {
    const validate = validateBeforeSave();

    if (validate) {
      const result = await createItem({ name, quantity: Number(quantity) });
      if (!result?.error) {
        alert("Item salvo com sucesso");
        onClose();
      }
    }
  };

  const callUpdateItem = async () => {
    const validate = validateBeforeSave();

    if (validate) {
      const result = await updateItem(item?._id, {
        name,
        quantity: Number(quantity),
        checked: item?.checked,
      });
      if (!result?.error) {
        alert("Item atualizado com sucesso");
        onClose();
      }
    }
  };

  const callDeleteItem = async () => {
    const result = await deleteItem(item?._id);

    if (!result?.error) {
      alert("Item excluído com sucesso");
      onClose();
    }
  };

  useEffect(() => {
    if (item?.name && item?.quantity) {
      setName(item?.name);
      setQuantity(item?.quantity);
    }
  }, [item]);

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <h3>{item ? "Editar item" : "Adicionar novo item"}</h3>
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
            <Button onClick={item ? callUpdateItem : callAddItem}>
              {item ? "Atualizar" : "Adicionar"}
            </Button>
            {item && (
              <Button onClick={callDeleteItem} variant="outline" icon={"trash"}>
                Excluir item
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
