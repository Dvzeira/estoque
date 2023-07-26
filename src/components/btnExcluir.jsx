import { useContext } from "react";
import { ItemContextt } from "../contexts/contexto";
import { useNavigate, } from "react-router-dom";


export default function BtnExcluir(props) {
  const itens = useContext(ItemContextt);
  const navigate = useNavigate()
  const excluirItem = (ev) => {
    ev.preventDefault()

    if (confirm("Deseja mesmo excluir o Item? ")) {
      itens.deleteItem(props.id)
      navigate("/itensroot")
    }

  }


  return <button className="btnVer" style={{ backgroundColor: "#91003B" }}
    onClick={excluirItem}
  >Excluir</button>
}