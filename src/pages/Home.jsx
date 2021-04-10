import React from "react";
import ImportWindow from "../components/ImportWindow";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<StyledHome>
			<ImportWindow />
		</StyledHome>
	);
}

const StyledHome = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;
