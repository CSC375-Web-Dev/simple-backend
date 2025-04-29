import axios from 'axios'

export function logAPIError(err) {
  if (axios.isAxiosError(err)) {
    console.error('Message:', err.message)
    console.error('Status:', err.response.status)
    console.error('Data:', err.response.data)
  }
  else if (err instanceof Error) {
    console.error(`Message: ${err.message}\n\nStack Trace: ${err.stack}`)
  }
  else {
    console.error(`ERROR: ${err}`)
  }
}