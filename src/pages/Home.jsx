import { createResource } from "solid-js";
import Card from "../components/Card";

const fetchProducts = async () => {
    const response = await fetch('http://localhost:4000/products');
    return response.json();
}

const Home = () => {
    const [products] = createResource(fetchProducts);

    return (
        <div class="grid grid-cols-4 gap-10 my-4">
        <Card rounded={true} flat={false}>
          <h2>T-shirt - Black</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam saepe odio iure, tempora molestiae modi?</p>
          <button class="btn">View</button>
        </Card>
        <Card rounded={false} flat={true}>
          <h2>Hoodie - White</h2>
          <button class="btn">View</button>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam saepe odio iure, tempora molestiae modi?</p>
          <p>Only $10</p>
        </Card>

        <p>{console.log(products(), products.loading)}</p>
      </div> 

    );
}
 
export default Home;