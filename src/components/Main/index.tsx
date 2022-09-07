import { MainTag } from "./style";
import List from "../List";
import { ProductContext } from "../../../contexts/ProductContext";
import {useContext} from "react"
import { useNavigate } from "react-router-dom";
import Categorys from "../../Categorys";
const Main = () => {
  const {categorysList, setSelectCategory} = useContext(ProductContext)
  const navigate = useNavigate()
  return (
    <MainTag>
      <div className="container">
        <div className="addProduct">
          <h2>Minha lista de produtos</h2>
          <button onClick={() => navigate("/addproduct")}>
            Adicionar novo produto
          </button>
        </div>

        <section className="listContainer">
          <div>
            {window.innerWidth < 764 && <h3>Categorias:</h3>}
            <Categorys />
          </div>
          <List />
        </section>
      </div>
    </MainTag>
  );
};

export default Main;