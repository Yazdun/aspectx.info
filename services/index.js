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

// get creatores
export const RAWG_CREATORS = `${ENDPOINT}/creators?page_size=20&key=${process.env.API_KEY}`

// find creator
export const RAWG_FIND_CREATOR = id =>
  `${ENDPOINT}/creators/${id}?key=${process.env.API_KEY}`

// get creator's game
export const RAWG_FIND_CREATOR_GAMES = id =>
  `${ENDPOINT}/games?key=${process.env.API_KEY}&creators=${id}`

// get all games
export const RAWG_ALL_GAMES = `${ENDPOINT}/games?key=${process.env.API_KEY}&ordering=-added&page_size=12`

// get game screenshots
export const RAWG_GAME_SLUG_SCREENSHOTS = slug =>
  `${ENDPOINT}/games/${slug}/screenshots?&key=${process.env.API_KEY}`
