import { HeaderTag } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { ImUser } from "react-icons/im";
import { UserContext } from "../../../contexts/UserContext";
import { ProductContext } from "../../../contexts/ProductContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setIsDropdownModal } = useContext(UserContext);
  const { setSearch } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <HeaderTag>
      <div className="container">
        <button onClick={() => navigate("/")}>
          <h1>Escambau</h1>
        </button>

        <section className="notification-perfil">
          <button>
            <IoMdNotificationsOutline className="notification" />
          </button>
          <button onClick={() => setIsDropdownModal(true)}>
            <ImUser className="perfil" />
            {window.innerWidth > 764 && (
              <h3 className="userName">Olá, {(user?.name)?.split(" ")[0]}</h3>
            )}
          </button>
        </section>
      </div>

      <div className="searchBar">
        <input
          type="text"
          placeholder="Busque por produtos aqui..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>
          <AiOutlineSearch className="magnifyGlass" />
        </button>
      </div>
    </HeaderTag>
  );
};

export default Header;