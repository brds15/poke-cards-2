import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="template-content" role="main">
        <div className="template-content-search">
          <div>
            <label>
              <input type="text" placeholder="Buscar Pokémon" />
            </label>
            <img
              alt="search"
              onClick="onSearch()"
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png"
            />
          </div>
        </div>
        <div className="template-content-list">
          <div className="template-content-list-cards">
            <div className="template-content-list-cards-item">
              {/*<h4> { card.name }</h4>*/}
              {/*<img alt="card image" src="{{ card.imageUrl }}"/>*/}
              {/*<span>Id: { card.id }</span>*/}
              {/*<ul className="template-content-list-cards-item-type">*/}
              {/*  <li>Tipos</li>*/}
              {/*  <li> { type }</li>*/}
              {/*</ul>*/}
            </div>
          </div>
        </div>
        <h1> Nenhum resultado a exibir.</h1>
      </div>
    );
  }
}

export default Content;
