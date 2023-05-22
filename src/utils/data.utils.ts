export const getData = async <T>(url: string): Promise<T> => {
  //T is a generic, random type.
  const response = await fetch(url);
  return await response.json(); //We return await, so it's a promise
};
