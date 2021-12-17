import { Product } from "../models/Product";

export const createProduct = async (req, res) => {
    const { name, category, price, imgURL } = req.body;

    try {
        const newProduct = new Product({
            name,
            category,
            price,
            imgURL,
        });

        const productSaved = await newProduct.save();

        res.status(201).json(productSaved);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};


export const getProducts = (req, res) => {
    res.json("get products 4");

}

export const getProductsById = (req, res) => {

}

export const UpdateProductById = (req, res) => {

}

export const deleteProductById = (req, res) => {

}
