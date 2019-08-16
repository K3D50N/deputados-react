import React, { Component } from 'react';
import api from '../../services/api';

import './style.css';

class Search extends Component
{

    state = {
        deputados: [],
    }

    componentDidMount()
    {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get(`deputados/`);

        const { docs } = response;

        console.log(response.data.dados);
        this.setState({ deputados: response.data.dados });
    }

    render()
    {   
        const {deputados} = this.state;
        
        return(
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    
                </div>
                <div className="col-md-4"></div>
            </div>
            {
                deputados.map((dep, k) => (
                    <div className="row" id="card" key={k}>
                        <div className="col-md-3">
                            <img src={`${dep.urlFoto}`} id="img" />
                        </div>
                        <div className="col-md-7">
                            <h4>Deputado:{ dep.nome }</h4>
                            <p><b>Partido: </b>{ dep.siglaPartido } - { dep.siglaUf }</p>
                            <p><b>Email: </b><a href="#">{ dep.email }</a></p>
                            <a href={`${dep.uri}`}>Ver Gastos</a>
                        </div>
                    </div>
                ))
            }
            
        </div>
        );
    }
}

export default Search;
