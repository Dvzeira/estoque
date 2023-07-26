import { createContext, useState } from "react";

export const ItemContextt = createContext();

export function ItemContexttProvider({ children }) {
  const [itens, setItens] = useState(() => {
    const storedItems = localStorage.getItem('obc-react-stock');
    if (!storedItems) {
      // Se a chave 'obc-react-stock' não existir ou estiver vazia no localStorage, retorna um array vazio
      return [];
    }

    try {
      const itens = JSON.parse(storedItems);
      itens.forEach((item) => {
        item.createdAt = new Date(item.createdAt);
        item.updatedAt = new Date(item.updatedAt);
      });
      return itens;
    } catch (error) {
      console.error('Erro ao analisar dados do localStorage:', error);
      return [];
    }
  });

  const addItens = (item) => {
    const updatedItems = [item, ...itens,];
    setItens(updatedItems);
    localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems));
    return updatedItems;
  }

  const getItem = (itemId) => {
    return itens.find((item) => item.id === +itemId);
  }

  const deleteItem = (itemId) => {
    setItens(current => {
      const updatedItems = current.filter(item => item.id !== itemId)
      localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const editItem = (itemID, newItem) => {
    const updatedItens = itens.map(item => {
      if (item.id === +itemID) {
        return { ...item, ...newItem, updatedAt: new Date() }
      }
      return item

    })
    localStorage.setItem('obc-react-stock', JSON.stringify(updatedItens))
    setItens(updatedItens)
  }

  const sumItens = () => {
    return itens.reduce((acum, item) => +acum + +item.inStock, 0)
  }

  const stock = {
    itens,
    addItens,
    getItem,
    deleteItem,
    editItem,
    sumItens
  }

  return (
    <ItemContextt.Provider value={stock}>
      {children}
    </ItemContextt.Provider>
  )
}
