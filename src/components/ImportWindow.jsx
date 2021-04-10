import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import FilmIcon from "../film-fill.svg";
export default function ImportWindow() {
	const [files, setFiles] = useState([]);

	const { getRootProps, getInputProps } = useDropzone({
		accept: "video/*",
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, { preview: URL.createObjectURL(file) })
				)
			);
		},
	});

	console.log(files);

	const images = files.map((file) => (
		<div key={file.name} className="uploaded">
			<div>
				<video src={file.preview} width="250px"></video>
			</div>
		</div>
	));

	return (
		<StyledImportWindow>
			<h1>Add your Videos</h1>
			<p>Maximum Limit: 2GB</p>
			<div {...getRootProps()} className="uploader">
				<input {...getInputProps()} />
				<p>
					<b>Drag</b> & <b>Drop</b> your video files here or{" "}
					<b>Click</b> to select...
				</p>
			</div>
			<h3>Uploaded Files</h3>
			<div className="uploded">
				<img src={FilmIcon} alt="video" />
				<img src={FilmIcon} alt="video" />
				<img src={FilmIcon} alt="video" />
				<img src={FilmIcon} alt="video" />
			</div>
			<div>{images}</div>
		</StyledImportWindow>
	);
}
const StyledImportWindow = styled(motion.div)`
	display: flex;
	align-items: center;
	flex-direction: column;
	background: #fffefe;
	width: 30%;
	min-height: 50vh;
	max-height: 80vh;
	border-radius: 25px;
	overflow-y: scroll;
	box-shadow: 0px 0px 50px 0px rgba(170, 177, 187, 0.3);
	h1 {
		padding-top: 5rem;
	}
	h3 {
		color: #c1c0c1;
		font-weight: 400;
		align-self: flex-start;
		margin-left: 2rem;
	}
	.uploader {
		border: 2px dashed #7aa2e7;
		margin-top: 3rem;
		background: #fbfbff;
		width: 80%;
		margin: 3rem 2rem;
		width: auto;
		border-radius: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		p {
			color: #c0c0c2;
			padding: 6rem;
		}
		outline: none;
		cursor: pointer;
	}
	.uploaded {
		img {
			align-self: center;
		}
	}
`;
