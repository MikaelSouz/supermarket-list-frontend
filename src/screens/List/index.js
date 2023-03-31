import { useEffect, useState } from "react";
import { Button, ListCard } from "../../components";
import { getList } from "../../services/request";
import "./index.css";

export const ListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);

  const loadListItems = async () => {
    setLoading(true);
    const result = await getList();
    console.log(result);
    setListData(result);
    setLoading(false);
  };

  useEffect(() => {
    loadListItems();
  }, []);

  return (
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <div className="list-screen-header-content">
            <img
              src="/images/logo.png"
              alt="supermaket-list-logo"
              className="list-screen-img"
            />
            <h2>Lista Supermercado</h2>
          </div>
          <div className="list-button-container">
            <Button>Adicionar</Button>
          </div>
        </div>
        <div className="list-screen-list-container">
          {loading && <h3>Carregando...</h3>}
          {!loading && listData?.length > 0 ? (
            listData.map((item) => <ListCard key={item._id} item={item} />)
          ) : (
            <h3>Sua lista está vazia!</h3>
          )}
        </div>
      </div>
    </div>
  );
};
