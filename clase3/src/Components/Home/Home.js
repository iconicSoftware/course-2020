import React from 'react';

const Home = ({ articulos, totalRegister }) => {

    return (
        <div>
            <nav aria-label="breadcrumb mt-1">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">total results: {totalRegister}</li>
                </ol>
            </nav>
            <div class="row">
                {articulos.map((articulo) => {
                    return (

                        <div class="card col-sm-4">
                            <img src={(articulo.urlToImage)? articulo.urlToImage : null} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"><b>{articulo.author}</b></h5>
                                <p class="card-text">{articulo.description}</p>
                                <a className="btn btn-outline-info"
                                    href={articulo.url}>
                                    More info +
                                </a>
                                <p class="card-text"><small class="text-muted">{articulo.publishedAt}</small></p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Home;