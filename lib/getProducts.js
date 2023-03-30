export async function getProducts() {
  const url = 'http://localhost:3000/api/get-products';
  const productsData = await fetch(url);
  const resdata = await productsData.json();
  return resdata;
}
