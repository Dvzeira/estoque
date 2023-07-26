import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header>
      <nav>
        <h3>React Stock</h3>
        <div>
          <Link to="/">
            <span>Inicio</span>
          </Link>

          <Link to="/itensroot">
            <span>Itens</span>
          </Link>

        </div>
      </nav>
    </header>
  )
}