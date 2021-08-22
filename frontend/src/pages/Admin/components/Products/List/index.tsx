import { useHistory } from 'react-router-dom';

const List = () => {
    //Resgatando todo o histórico das rotas já existentes
    const history = useHistory();
    const handleCreate = () => {
        //redirecionando para essa rota ao clicar no botão 
        history.push('/admin/products/create');
    }

    return (
        <div className="admin-products-list">
            <button className="btn btn-primary btn-lg" onClick={handleCreate}>
                ADICIONAR
            </button>
        </div>
    )
}

export default List;