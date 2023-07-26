import { useContext } from "react";
import BtnEdit from "../components/btnEdidt";
import BtnExcluir from "../components/btnExcluir";
import { ItemContextt } from "../contexts/contexto";
import { useParams } from "react-router-dom";



export default function Item() {
  const itens = useContext(ItemContextt);
  const { id } = useParams()
  const item = itens.getItem(id)
  return (
    <>
      <div className="btnsItem">
        <h3>{item.name}</h3>
        <BtnEdit id={`/itensroot/${id}/update`} />
        <BtnExcluir id={id} />
      </div>
      <section className="sectionItem">
        <div className="infoItem">
          <span>Categoria: {item.category}</span>
        </div>
        <div className="infoItem">
          <span>Quantidade em Estoque:  {item.inStock}</span>
        </div>
        <div className="infoItem">
          <span>Preço:  R${item.price}</span>
        </div>
      </section>
      <br />
      <span style={{ fontSize: "20px" }}>{item.description}</span>
      <br />
      <div className="dataItem">
        <span>Cadastrado em: {item.data}</span>
        <span>Atualizado em: {item.data}</span>
      </div>
    </>
  )
}