import React, { useState, useEffect } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";

const ffmpeg = createFFmpeg({ log: true });

function App() {
	const [ready, setReady] = useState(false);
	const [video, setVideo] = useState();
	const [gif, setGif] = useState();

	const load = async () => {
		await ffmpeg.load();
		setReady(true);
	};

	const convertToGif = async () => {
		ffmpeg.FS("writeFile", "test.mp4", await fetchFile(video));
		await ffmpeg.run(
			"-i",
			"test.mp4",
			"t",
			"-2.5",
			"-ss",
			"-f",
			"gif",
			"out.gif"
		);

		const data = ffmpeg.FS("readFile", "out.gif");
		const url = URL.createObjectURL(
			new Blob([data.buffer], { type: "image / gif" })
		);
		setGif(url);
	};

	useEffect(() => {
		load();
	}, []);

	return ready ? (
		<div className="App">
			<GlobalStyle />
			<Home />
			{/* {video && (
				<video
					controls
					width="250"
					src={URL.createObjectURL(video)}
				></video>
			)}
			<input type="file" onChange={(e) => setVideo(e.target.files[0])} />

			<h3>Result</h3>
			<button onClick={convertToGif}>Convert</button>
			{gif && <img src={gif} alt="gif" />} */}
		</div>
	) : (
		<p>Loading...</p>
	);
}
export default App;
