import axios from 'axios'

export async function getProducts() {
  try {
    return (await axios.get("http://xinnature.asia/menu/wp-json/wc/store/products")).data
  } catch(e) {
    console.error('failed to get products list from API')
    console.error(e)
  }
}
