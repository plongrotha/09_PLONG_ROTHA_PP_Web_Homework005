import { get } from "http";

export const getallBook = async () => {
  const response = await fetch(`process.env.NEXT_PUBLIC_AUTH_BASE_URL/book`);

  const data = await response.json();
  return data.payload;
};

export const getallCategory = async () => {
  try {
    const response = await fetch(
      `process.env.NEXT_PUBLIC_AUTH_BASE_URL/category`
    );

    if (!res.ok) throw new Error("Failed to fetch categories");
    const data = await res.json();
    return data.payload;
  } catch (e) {
    return [];
  }
};
export const getBookById = async (id) => {
  try {
    const response = await fetch(
      `process.env.NEXT_PUBLIC_AUTH_BASE_URL/book/${id}`
    );
    if (!response.ok) throw new Error("Failed to fetch book");
    const data = await response.json();
    return data.payload;
  } catch (e) {
    return null;
  }
};
