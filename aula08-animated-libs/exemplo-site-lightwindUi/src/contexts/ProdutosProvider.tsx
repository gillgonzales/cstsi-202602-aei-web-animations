import { createContext, useState, type ReactNode, type Dispatch, type SetStateAction } from "react";
import { mockedProducts, type Product } from "../mocks/mockedProducts";

const MAX_TIMEOUT = 500;
const MOCKED_PRODUCTS = mockedProducts.reverse();

interface ProdutosContextType {
  produto: Product | null
  listProdutos: Product[]
  setProduto: Dispatch<SetStateAction<Product | null>>
  loadProdutos: () => void
  filterProdutos: (searchTerm: string) => void
  findProdutoById: (id: string | number) => Product | undefined
}

interface ProdutosProviderProps {
  children: ReactNode
}

export const ProdutosContext = createContext<ProdutosContextType>({
  produto: null,
  listProdutos: [],
  setProduto: () => {},
  loadProdutos: () => {},
  filterProdutos: () => {},
  findProdutoById: () => undefined,
});

const ProdutosProvider = ({ children }: ProdutosProviderProps) => {
  const [produto, setProduto] = useState<Product | null>(null);
  const [listProdutos, setListProdutos] = useState<Product[]>([])

  const loadProdutos = () => {
    setTimeout(() => setListProdutos(MOCKED_PRODUCTS), MAX_TIMEOUT);
  }

  const findById = (id: string | number): Product | undefined => {
    const found = MOCKED_PRODUCTS.find(produto => produto.id === Number(id))
    if (found) setProduto(found)
    return found;
  }

  const filterProdutos = (searchTerm: string) => {
    const filteredProducts = MOCKED_PRODUCTS.filter((product) => {
      return product.nome.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setListProdutos(filteredProducts)
  }

  return (
    <ProdutosContext.Provider
      value={{
        produto,
        listProdutos,
        setProduto,
        loadProdutos,
        filterProdutos,
        findProdutoById: findById,
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};

export default ProdutosProvider;
