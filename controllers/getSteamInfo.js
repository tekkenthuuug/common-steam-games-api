const handleGetSteamInfo = (steam) => (req, res) => {
	if (req.headers.origin !== "https://tekkenthuuug.github.io") {
		res.status(400).json("You are not allowed to use this API!");
		return;
	}
	steam
		.resolve(req.body.profileURL)
		.then((id) => {
			steam
				.getUserSummary(id)
				.then((summary) => {
					const { steamID, nickname, url, avatar } = summary;
					res.status(200).json({
						steamid    : steamID,
						name       : nickname,
						profileurl : url,
						avatar     : avatar.large
					});
				})
				.catch(() => {
					res.status(400).json("Error getting user info");
				});
		})
		.catch(() => {
			res.status(400).json("Error resolving user");
		});
};

module.exports = {
	handleGetSteamInfo
};
