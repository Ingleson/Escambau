import { motion } from "framer-motion";
import Header from "../UserDashboard/Header";
import { CurrentContext } from "../../contexts/CurrentContext";
import { UserContext } from "./../../contexts/UserContext";
import { useContext } from "react";
import { Container } from "./style";
import HeaderUnlogged from "../HeaderUnlogged";
import { ProductContext } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import TradeModal from "../TradeModal";
import ConfirmTradeModal from "../ConfirmTradeModal";

const MoreInfo = () => {
  const { user } = useContext(UserContext);
  const { setIsTradeModal } = useContext(ProductContext);
  const { currentUser, currentProduct, isLogged } = useContext(CurrentContext);
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >

        {user ? <Header /> : <HeaderUnlogged />}
        <ConfirmTradeModal />
        <TradeModal />
        <Container isLogged={isLogged}>
          <div className="left-wrapper">
            <div className="product-info">
              <small>{currentProduct?.category}</small>
              <h3>{currentProduct?.name}</h3>
              <img src={currentProduct?.image} alt={currentProduct?.name} />
            </div>
            <div className="product-description">
              <h3>Descrição do produto:</h3>
              <p>{currentProduct?.description}</p>
            </div>
          </div>
          <div className="right-wrapper">
            <div className="user-info">
              <div>
                <p>Postado por:</p>
                <h3 className="username">{currentUser?.name}</h3>
              </div>
              <p className="address">
                {currentUser?.cidade} - {currentUser?.estado}
              </p>
              <h3 className="price">
                Preço estipulado:{" "}
                <span className="product-value">
                  R$ {Number(currentProduct?.price).toFixed(2)}
                </span>
              </h3>
              <p className="preferences">
                Preferências: {currentProduct?.preferences}
              </p>
            </div>
            <button
              className="btn"
              disabled={isLogged}
              onClick={() => {
                user ? setIsTradeModal(true) : navigate("/register");
              }}
            >
              {user ? "Solicitar troca" : "Criar minha conta"}
            </button>
          </div>
        </Container>
      </motion.div>
    </>
  );
};

export default MoreInfo;
