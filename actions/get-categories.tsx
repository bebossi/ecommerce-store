import { Category } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const headers = new Headers();
  headers.append("Cache-Control", "no-cache");

  const res = await fetch(URL, { headers });

  return res.json();
};

export default getCategories;
