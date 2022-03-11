import React from 'react';
import "./Home.css";
import imgHomeShop from "./shopimg.jpg";

function Home() {
    return (
        <div className='global-container'>
            <h1 className="home-title">Bienvenue au <span>Shop</span></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit natus rerum quia, tenetur aliquam minus porro qui dolores, ea incidunt eligendi, facere esse dolorum laudantium debitis quaerat iusto velit.</p>
            <img src={imgHomeShop} alt="accueil-shop" />
        </div>
    );
}

export default Home;