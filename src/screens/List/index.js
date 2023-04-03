import { useEffect, useState } from "react";
import { Button, ListRender, Loader, Modal } from "../../components";
import { getList } from "../../services/request";
import "./index.css";

export const ListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);

  const onClickAddButton = () => {
    setModalVisible(true);
  };

  const onClickCloseModal = () => {
    setModalVisible(false);
    loadListItems();
  };

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
            <h2 className="list-screen-header-title">Lista Supermercado</h2>
          </div>
          <div className="list-screen-header-button-container">
            <Button onClick={onClickAddButton}>Adicionar</Button>
          </div>
        </div>
        <div className="list-screen-list-container">
          {loading ? <Loader /> : <ListRender list={listData} />}
        </div>
      </div>
      {modalVisible && <Modal onClose={onClickCloseModal} />}
    </div>
  );
};
