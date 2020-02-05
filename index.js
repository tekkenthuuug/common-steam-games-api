const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const steamAPI = require("steamapi");

const getSteamInfo = require("./controllers/getSteamInfo");
const getUserGames = require("./controllers/getUserGames");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const steam = new steamAPI(process.env.REACT_APP_STEAM_API_KEY);

app.post("/getSteamInfo", getSteamInfo.handleGetSteamInfo(steam));

app.post("/getUserGames", getUserGames.handleGetUserGames(steam));

app.listen(process.env.PORT || 5000, () => {
	console.log("PORT: ", process.env.PORT);
});
