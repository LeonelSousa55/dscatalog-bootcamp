import { useHistory } from 'react-router-dom';
import './styles.scss';

type Props = {
    title: string;
    //Passando um bloco de elementos para dentro desse componente
    children: React.ReactNode;
}

const BaseForm = ({ title, children }: Props) => {
    const history = useHistory();
    const handleCancel = () => {
        //Voltando um nível com base na rota atual ou seja irá voltar para Ex:/admin/products, /admin/categories
        history.push('../');
    }
    return (
        <div className="admin-base-form card-base">
            <h1 className="base-form-title">
                {title}
            </h1>
            {children}
            <div className="base-form-actions">
                <button
                    className="btn btn-outline-danger border-redius-10 me-3"
                    onClick={handleCancel}
                >
                    CANCELAR
                </button>
                <button className="btn btn-primary border-redius-10 base-primary-leo">
                    CADASTRAR
                </button>
            </div>
        </div>
    )
}

export default BaseForm;