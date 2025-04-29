import axios from 'axios'
import { logAPIError } from './errors.js'

const BASE_URL = 'http://localhost:3000'

async function main() {
  try {
    const response = await axios.get(`${BASE_URL}/message`)
    const posts = response.data
    console.log(JSON.stringify(posts, null, 2))
  }
  catch(err) {
    logAPIError(err)
  }
}


main()