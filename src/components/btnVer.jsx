import { Link } from "react-router-dom";


export default function BtnVer(props) {
  return <Link to={props.id}><button className="btnVer">Ver</button></Link >
}