// today's date
const today = new Date()

// rawg endpoint
export const ENDPOINT = 'https://api.rawg.io/api'

// get trending games
export const RAWG_TRENDING = `${ENDPOINT}/games?dates=${today.getFullYear()}-${(
  '0' +
  (today.getMonth() + 1)
).slice(-2)}-10,${today.getFullYear() + 1}-${(
  '0' +
  (today.getMonth() + 1)
).slice(-2)}-10&ordering=-added&key=${process.env.API_KEY}`

// get game with slug
export const RAWG_GAME_SLUG = slug =>
  `${ENDPOINT}/games/${slug}?&key=${process.env.API_KEY}`
