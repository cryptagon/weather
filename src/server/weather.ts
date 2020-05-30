import axios from 'axios'

const API_KEY = 'b5da909fe484b34a60f2f7237cf4c8fd'

export async function weather(query: string): Promise<any> {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&appid=${API_KEY}`
  const response = await axios.get(url)
  return response.data
}
