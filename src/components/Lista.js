import React, { Component } from 'react';
import { url } from '../helpers/url';

export default class Lista extends Component {

    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ products: data })
    }

    render() {
        const state = this.state.products;
        return <div>
            <div>
                <table className="table text-center mt-3">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Contraseña</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map(product => (
                                <tr key={product.id}>
                                    <td>{product.Nombre}</td>
                                    <td>{product.Apellido}</td>
                                    <td>{product.Correo}</td>
                                    <td>{product.Contraseña}</td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
            </div>
        </div>;
    }
}
