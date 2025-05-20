import './App.css';

import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";

import {bags} from "./Constants/products.js";

import {Button} from "./components/Button.jsx";
import {Product} from "./components/Product.jsx";
import {Tile} from "./components/Tile.jsx";

function App() {
    function handleClick(value) {
        console.log(value);
    }

    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button onClick={handleClick} text="to the collection"/>
                <Button onClick={handleClick} text="shop all bags"/>
                <Button onClick={handleClick} text="pre-orders" isDisabled={true}/>
            </nav>
            <main>
                {bags.map((bag) => {
                    return <Product key={bag.id} price={bag.price} title={bag.title} imgUrl={bag.image}
                                    label={bag.label}/>;
                })}
            </main>
            <footer>
                <Tile>
                    <h2>The brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem eligendi tempora!
                        Assumenda, facilis, temporibus. A ab fugit harum ipsa!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem eligendi tempora!
                        Assumenda, facilis, temporibus. A ab fugit harum ipsa!</p>
                </Tile>
                <Tile>
                    <img src={brand} alt="the brand"/>
                </Tile>
                <Tile>
                    <img src={ourStory} alt="our story"/>
                </Tile>
                <Tile>
                    <h2>Our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem eligendi tempora!
                        Assumenda, facilis, temporibus. A ab fugit harum ipsa!</p>
                </Tile>

            </footer>
        </>
    );
}

export default App;
