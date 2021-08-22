import React, { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
    name: string;
    price: string;
    category: string;
}

const Form = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        price: '',
        category: ''
    });

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        //...data -> pega o valor que já existe nesse componente 
        //e acrescenta mais o value, tudo feito de forma dinâmica
        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(formData);
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
                            <option value="livros">Livros</option>
                            <option value="computadores">Computadores</option>
                            <option value="eletronicos">Eletrônicos</option>
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
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;