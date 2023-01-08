import { handleAddtoCart } from "../Component/Course";
export const productLoder = async () => {

    // product data
    const productsData = await fetch('manifest.json')
    const products = await productsData.json();

    //get cart
    const savedCart = handleAddtoCart();
    console.log(savedCart, 'savedcart');

    for (const id in savedCart) {
        console.log(id);
    }
    return products;

}