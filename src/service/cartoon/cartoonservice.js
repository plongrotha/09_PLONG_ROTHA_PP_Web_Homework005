export const getallCartoon = async () => {
  try {
    const response = await fetch(
      `process.env.NEXT_PUBLIC_AUTH_BASE_URL/cartoon`
    );
    const data = await response.json();
    return data.payload;
  } catch (e) {
    return [];
  }
};

export const getcartoonBygenerate = async () => {
  try {
    const response = await fetch(
      `process.env.NEXT_PUBLIC_AUTH_BASE_URL/cartoon_generate`
    );
    const data = await response.json();
    return data.payload;
  } catch (e) {
    return [];
  }
};

//
export const getCartoonById = async (id) => {
  try {
    const response = await fetch(
      `process.env.NEXT_PUBLIC_AUTH_BASE_URL/cartoon/${id}`
    );
    if (!response.ok) throw new Error("Failed to fetch cartoon");
    const data = await response.json();
    return data.payload;
  } catch (e) {
    return null;
  }
};
