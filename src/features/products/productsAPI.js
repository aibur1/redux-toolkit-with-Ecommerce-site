import axios from "../../utils/axios.confiq";



export const fetchProducts = async ()  => {
    const data = await axios.get("/products");
    return data.data.data;
};

export const postProduct = async (productData)  => {
    await axios.post("/product", productData);
};

export const patchProduct = async (id, productData)  => {
    await axios.patch(`/product/${id}`, productData);
};

export const deleteProduct = async (id) => {
    await axios.delete(`/product/${id}`)
};



 // const res = await fetch("http://localhost:5000/products");