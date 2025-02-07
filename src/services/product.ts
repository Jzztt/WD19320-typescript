import { IProduct } from "../types/product";
import instanceAxios from "../ultis/configAxios";

const getAllProduct = async (): Promise<IProduct[] | void> => {
    try {
        const { data } = await instanceAxios.get<IProduct[]>('/products');
        return data;
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async (id: number) => {
    try {
        const { data } = await instanceAxios.delete<IProduct>(`/products/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const ProductService = {
    getAllProduct,
    deleteProduct
}