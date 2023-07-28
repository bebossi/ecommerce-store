import { Product } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  const headers = new Headers();
  headers.append("Cache-Control", "no-cache");

  const res = await fetch(`${URL}/${id}`, { headers });

  return res.json();
};

export default getProduct;
