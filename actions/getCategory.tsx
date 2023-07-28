import { Category } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const headers = new Headers();
  headers.append("Cache-Control", "no-cache");

  const res = await fetch(`${URL}/${id}`, { headers });

  return res.json();
};

export default getCategory;
