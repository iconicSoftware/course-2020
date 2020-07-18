import React, { Fragment, useState, useEffect } from 'react';

// Component
import Home from '../Home/Home'

// Services
import { getNew } from '../../Services/newService';

const Header = () => {

    const [articulos, setArticulos] = useState([]);
    const [totalRegister, setTotalRegister] = useState(0);
    const [topic, setTopic] = useState("bitcoins");
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        getNew(topic)
            .then(res => {
                setArticulos(res.data.articles);
                setTotalRegister(res.data.totalResults);
            })
            .catch(err => {
                console.log(err);
            })
    }, [isFetching]);

    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#a">News Google API</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#a">Football <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#a">Programing</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2"
                            type="search" placeholder="Search"
                            aria-label="Search"
                            onChange={(e) => setTopic(e.target.value)} />
                        <button class="btn btn-outline-primary my-2 my-sm-0"
                            type="submit"
                            onClick={() => setIsFetching(!isFetching)}>
                            Search
                    </button>
                    </form>
                </div>
            </nav>
            <Home
                articulos={articulos}
                totalRegister={totalRegister} />
        </Fragment>

    );
}

export default Header;