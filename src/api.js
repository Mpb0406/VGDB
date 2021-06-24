//Base URL
const base_url =  'https://api.rawg.io/api/';
const key =  'd4e2f1bb879d432d940e4c73eebaafce';
const keyURL =  `key=${key}`;

//Get Date
const getCurrentMonth = () => {
    const month =  new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
}

const getCurrentDay = () => {
    const day =  new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
}

//Full Date
const currentYear = new Date().getFullYear();
const currentMonth =  getCurrentMonth();
const currentDay =  getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//FUll URLs
const popular_games = `games?${keyURL}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?${keyURL}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?${keyURL}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//Game Details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?${keyURL}`

//Fetch Screenshots
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?${keyURL}`

//Searched Game
export const searchedGameURL = (game_name) => `${base_url}games?${keyURL}&search=${game_name}&page_size=10`