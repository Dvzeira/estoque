import { Link, Outlet } from "react-router-dom";



export default function ItensRoot() {
  return (
    <>
      <h2>Stock Itens</h2>
      <div className="navItens">
        <Link to="/itensroot"><span>Todos os Itens</span></Link>
        <Link to="newitem"><span>Novo Iten</span></Link>
      </div>
      <hr style={{ marginBottom: "40px" }} />
      <Outlet />
    </>
  )
}