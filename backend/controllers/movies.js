import fs from "fs";


export const getMovies=(req, res) => {
	const fileBuffer=fs.readFileSync("../data/movies.json","utf-8");
	const movies=JSON.parse(fileBuffer);
	res.send(movies);
}