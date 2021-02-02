import React from 'react';

function Navbar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary my-4">
                <a className="navbar-brand" href="#">Curso BS4</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSite">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Início</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownSite" data-toggle="dropdown">Produtos</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Produto 01</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Produto 02</a>
                                <a className="dropdown-item" href="#">Produto 03</a>
                                <a className="dropdown-item" href="#">Produto 04</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contatos</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* <div id="carouselSite" className="carousel slide" data-ride="carousel" >

                <div className="carousel-item active">
                    <img className="d-block img-fluid" src="http://via.placeholder.com/1920x700" alt="Primeiro slide" />
                    <div className="carousel-caption d-none d-lg-block">
                        <h4>Primeiro Slide</h4>
                        <p>Conteúdo do primeiro slide</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src="http://via.placeholder.com/1920x700" alt="Segundo slide" />
                    <div className="carousel-caption d-none d-lg-block">
                        <h4>Segundo Slide</h4>
                        <p>Conteúdo do segundo slide</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block img-fluid" src="http://via.placeholder.com/1920x700" alt="Terceiro slide" />
                    <div className="carousel-caption d-none d-lg-block">
                        <h4>Terceiro Slide</h4>
                        <p>Conteúdo do terceiro slide</p>
                    </div>
                </div>
            </div> */}

            <div className="row">
                <div className="col-sm-6 col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <h4 className="card-title">Título do Card 01</h4>
                            <p className="card-text">Um pouco de texto para o card.</p>
                            <a href="3" className="card-link">Um link</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <h4 className="card-title">Título do Card 02</h4>
                            <p className="card-text">Um pouco de texto para o card.</p>
                            <a href="3" className="card-link">Um link</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <h4 className="card-title">Título do Card 03</h4>
                            <p className="card-text">Um pouco de texto para o card.</p>
                            <a href="3" className="card-link">Um link</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="jumbotron">
                <h1 className="display-3">Bootstrap 4</h1>
                <p className="lead">Um texto para dar destaque no elemento Jumbotron</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#">Mais um link</a>
                </p>
            </div>

        </div>
    );
}

export default Navbar;