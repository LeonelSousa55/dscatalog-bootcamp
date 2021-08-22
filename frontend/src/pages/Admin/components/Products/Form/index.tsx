import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
    name: string;
    price: string;
    category: string;
    description: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

const Form = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        price: '0',
        category: '1',
        description: ''
    });

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;

        //...data -> pega o valor que já existe nesse componente 
        //e acrescenta mais o value, tudo feito de forma dinâmica
        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            //Pegando tudo que já existe no payload e adicionando o resto dos dados
            ...formData,
            imgUrl: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/173977/Console-Playstation-5-Ps5-Sony-Branco-Disc-Version_1625063236_g.jpg',
            categories: [{ id: formData.category }]
        }

        makeRequest({ url: '/products', method: 'POST', data: payload })
            //Inicializando os valores dos campos após a insersão dos dados
            .then(() => {
                setFormData({ name: '', category: '1', price: '0', description: '' });
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <BaseForm title="Cadastrar um produto">
                <div className="row">
                    <div className="col-6">
                        <input
                            type="text"
                            className="form-control mb-3"
                            onChange={handleOnChange}
                            name="name"
                            value={formData.name}
                            placeholder="Nome do produto"
                        />
                        <select
                            className="form-control mb-3"
                            onChange={handleOnChange}
                            name="category"
                            value={formData.category}
                        >
                            <option value="1">Livros</option>
                            <option value="2">Eletrônicos</option>
                            <option value="3">Computadores</option>
                        </select>
                        <input
                            type="text"
                            onChange={handleOnChange}
                            className="form-control"
                            name="price"
                            value={formData.price}
                            placeholder="Preço"
                        />
                    </div>
                    <div className="col-6">
                        <textarea
                            className="form-control"
                            onChange={handleOnChange}
                            name="description"
                            value={formData.description}
                            rows={10}
                            cols={10}
                            placeholder="Descrição"
                        />
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;