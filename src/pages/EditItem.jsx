import { useContext, useState } from "react"
import { ItemContextt } from "../contexts/contexto"
import { useParams } from "react-router-dom"


export default function EditItem() {
  const itens = useContext(ItemContextt)
  const { id } = useParams()
  const item = itens.getItem(id)

  const [name, setName] = useState("")
  const [quant, setQuant] = useState("")
  const [price, setPrice] = useState("")
  const [category, setcategory] = useState("")
  const [description, settDescripttion] = useState("")


  const updateItem = (ev) => {
    ev.preventDefault()
    if (!name || !quant || !price || !category || !description) {
      alert("Por favor, preencha todos os campos obrigatórios.");
    } else {
      const updatedItem = {
        name: name,
        inStock: parseFloat(quant),
        price: price,
        category: category,
        description: description,
        updatedAt: new Date()
      }

      itens.editItem(id, updatedItem)

      setName("")
      setQuant("")
      setPrice("")
      setcategory("")
      settDescripttion("")
    }
  }

  return (
    <>
      <h3>{item.name}</h3>
      <br />
      <form onSubmit={updateItem}>

        <div>
          <label htmlFor="name">Nome:</label>
          <input id="name" type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="qtd">Quantidade</label>
          <input id="qtd" type="number"
            value={quant}
            onChange={(ev) => setQuant(ev.target.value)}
          />
        </div>

        <div>
          <label htmlFor="price">Preço</label>
          <input id="price" type="text"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Categoria</label>
          <input type="text"
            value={category}
            onChange={(ev) => setcategory(ev.target.value)}
          />
        </div>

        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea name="" id="descricao" cols="30" rows="10"
            value={description}
            onChange={(ev) => settDescripttion(ev.target.value)}
          ></textarea>
        </div>


        <button className="btnSalvar">Salvar</button>

      </form>

    </>

  )
}