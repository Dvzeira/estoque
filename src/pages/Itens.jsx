import BlackBarSection from "../components/blackBarSection";
import BtnVer from "../components/btnVer";
import BtnExcluir from "../components/btnExcluir"; // Corrigir o nome do componente
import { useContext } from "react";

import BtnEdit from "../components/btnEdidt";
import { ItemContextt } from "../contexts/contexto";

export default function Itens() {
  const itens = useContext(ItemContextt);

  return (
    <>
      <BlackBarSection>
        <div className="blackBarGrid">
          <span>ID</span>
          <span className="item1">Nome</span>
          <span className="item2">Em Estoque</span>
          <span className="item3">Categoria</span>
          <span className="item4">Ações</span>
        </div>
        {/* Mapear os itens e exibi-los individualmente */}
        {itens.itens.map((item, index) => (
          <div key={index} className="dadosGrid">
            <span style={{ marginTop: "30px" }}>{item.id}</span>
            <span style={{ marginTop: "30px" }}>{item.name}</span>
            <span style={{ marginTop: "30px" }}>{item.inStock}</span>
            <span style={{ marginTop: "30px" }}>{item.category}</span>
            <div className="btns">
              <BtnVer id={`/itensroot/${item.id}`} />
              <BtnEdit id={`/itensroot/${item.id}/update`} />
              <BtnExcluir id={item.id} />
            </div>
          </div>
        ))}
      </BlackBarSection>
    </>
  );
}
