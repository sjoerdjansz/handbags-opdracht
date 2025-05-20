import './App.css';

import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png";

import {bags} from "./Constants/products.js";

import {Button} from "./components/Button.jsx";
import {Product} from "./components/Product.jsx";

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
                <section>
                    <h2>The brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque excepturi expedita
                        magni mollitia nobis provident vero! Ad doloremque laborum saepe?</p>

                    <p> Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Doloremque excepturi expedita
                        magni mollitia nobis provident vero! Ad doloremque laborum saepe?</p>
                </section>
                <section>
                    <img src={brand} alt="brand"/>
                </section>
                <section>
                    <img src={ourStory} alt="brand"/>
                </section>
                <section>
                    <h2>Our story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque excepturi expedita
                        magni mollitia nobis provident vero! Ad doloremque laborum saepe? Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Illo, sit.</p>
                </section>

            </footer>
        </>
    );
}

export default App;
