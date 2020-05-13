import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavButton = (props) => {
	return (
		<motion.div
			class={`buttons ${props.buttonAlign ?? ""}`}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
		>
			<Link
				to={`${props.buttonLink ?? "/"}`}
				class={`button ${props.buttonStyle ?? "is-primary is-rounded"}`}
				style={{ textDecoration: "none" }}
			>
				{props.buttonName ?? "Return to home page"}
			</Link>
		</motion.div>
	);
};

export default NavButton;
