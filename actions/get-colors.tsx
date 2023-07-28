import { Color } from "@/type";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const headers = new Headers();
  headers.append("Cache-Control", "no-cache");

  const res = await fetch(URL, { headers });

  return res.json();
};

export default getColors;
