import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import { makeRequest } from 'core/utils/request';
import { ProductsResponse } from 'core/types/Product';
import ProductCardLoader from './components/Loaders/ProductCardLoader';
import Pagination from 'core/components/Pagination';
import './styles.scss';

const Catalog = () => {
    /*
    //Trabalhando com Fetch
    //Quando o componente iniciar, buscar a lista de produtos.
    useEffect(() => {
        //Limitações Fetch
        //Ele é muito verboso
        //Não tem suporte nativo para ler a barra de progresso de upload de arquivo
        //Não tem suporte nativo para enviar uma query string
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(response => console.log(response));
    }, []);
    */

    //Quando a lista de produtos estiver disponível,
    //Polular um estado do componente, e listar os produtos dinamicamente
    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
    //Trabalhando com o loader dos componentes
    const [isLoading, setIsLoading] = useState(false);

    //Trabalhando com Axios
    //Somente quando o componenten iniciar, buscar a lista de produtos.
    useEffect(() => {
        const params = {
            page: 0,
            linesPerPage: 12
        }
        //Iniciar o loader
        setIsLoading(true);
        makeRequest({ url: '/products', params })
            .then(response => setProductsResponse(response.data))
            .finally(() => {
                //Finalizar o loader
                setIsLoading(false);
            })
    }, []);

    return (
        <div className="catalog-container">
            <h1 className="catalog-title">
                Catálog de produtos
            </h1>
            <div className="catalog-products">
                {isLoading ? <ProductCardLoader /> : (
                    productsResponse?.content.map(product => (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <ProductCard product={product} />
                        </Link>
                    ))
                )}
            </div>
            <Pagination />
        </div>
    );
}

export default Catalog;