const handleGetUserGames = (steam) => (req, res) => {
	if (req.headers.origin !== "https://tekkenthuuug.github.io") {
		res.status(400).json("You are not allowed to use this API!");
		return;
	}
	Promise.all(
		req.body.steamids.map((steamID) => {
			return steam.getUserOwnedGames(steamID);
		})
	)
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(500).json("Error getting users games");
		});
};

module.exports = {
	handleGetUserGames
};
