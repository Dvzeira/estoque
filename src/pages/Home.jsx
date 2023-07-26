import { useContext } from "react";
import BlackBar from "../conpm install react-router-dommponents/blackBar";
import BlackBarSection from "../components/blackBarSection";
import { ItemContextt } from "../contexts/contexto";
import BtnVer from "../components/btnVer";

export default function Home() {
  const items = useContext(ItemContextt);

  const today = new Date();
  const limitDate = new Date();
  limitDate.setDate(limitDate.getDate() - 10);

  const recentItems = items.itens.filter((item) => item.createdAt >= limitDate && item.createdAt <= today);
  const recentTotal = recentItems.length;

  const endingItens = items.itens.filter(item => item.inStock < 10)
  const endingItensLength = endingItens.length

  return (
    <>
      <h2>Dashboard</h2>
      <section className="sectionDashboard">
        <div className="boxDashboards">
          <p>Diversidade de Itens</p>
          <p className="itensInformation">{items.itens.length} </p>
        </div>
        <div className="boxDashboards">
          <p>Inventário total</p>
          <p className="itensInformation">{items.sumItens()} </p>
        </div>
        <div className="boxDashboards">
          <p>Itens Recentes</p>
          <p className="itensInformation">{recentTotal} </p>
        </div>
        <div className="boxDashboards">
          <p>Itens Acabando</p>
          <p className="itensInformation"> {endingItensLength}</p>
        </div>
      </section>

      <div className="dadosItens">
        <BlackBarSection>
          <BlackBar>
            <span >Itens recentes</span>
            <span >Ações</span>
          </BlackBar>

          {recentItems.map(item => (
            <div className="ver" key={item.id}>
              <div></div>
              <span className="SpanItens">{item.name}</span>
              <BtnVer id={`/itensroot/${item.id}`} />
            </div>

          ))}
        </BlackBarSection>

        <BlackBarSection>
          <BlackBar>
            <span>Itens Acabando</span>
            <span>quant</span>
            <span>Ações</span>
          </BlackBar>
          {endingItens.map(item => {
            return (
              <div key={item.id} className="endingItems">
                <div></div>
                <span className="SpanItens">{item.name}</span>
                <span className="SpanItens">{item.inStock}</span>
                <BtnVer id={`/itensroot/${item.id}`} />
              </div>
            )
          })}
        </BlackBarSection>
      </div>
    </>
  );
}
