import { Link } from "react-router-dom"


export default function BtnEdit(props) {
  return <Link to={props.id}><button className="btnVer" style={{ backgroundColor: "cyan" }}>Editar</button></Link>
}