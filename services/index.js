// today's date
const today = new Date()

// rawg endpoint
export const ENDPOINT = 'https://api.rawg.io/api'

// get trending games
export const RAWG_TRENDING = `${ENDPOINT}/games?dates=${today.getFullYear()}-10-10,${
  today.getFullYear() + 1
}-10-10&ordering=-added&key=${process.env.API_KEY}`
