import { useContext, useState } from "react"
import { ItemContextt } from "../contexts/contexto"


export default function NewItem() {
  const [name, setName] = useState("")
  const [quant, setQuant] = useState("")
  const [price, setPrice] = useState("")
  const [category, setcategory] = useState("")
  const [description, settDescripttion] = useState("")

  const itens = useContext(ItemContextt);

  const createItem = (ev) => {
    ev.preventDefault()
    const newItem = {
      id: Math.floor(Math.random() * 10000000),
      name: name,
      inStock: parseFloat(quant),
      price: price,
      category: category,
      description: description,
      createdAt: new Date()
    }

    itens.addItens(newItem)

    setName("")
    setQuant("")
    setPrice("")
    setcategory("")
    settDescripttion("")
  }


  return (
    <form action="" onSubmit={createItem}>

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
  )
}