import { Size } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const headers = new Headers();
  headers.append("Cache-Control", "no-cache");

  const res = await fetch(URL, { headers });

  return res.json();
};

export default getSizes;
