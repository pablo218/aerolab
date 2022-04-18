import api from "config/api";
import { Product } from "types/apiResponses";

export const getProducts = () => api.get<Product[]>('products')