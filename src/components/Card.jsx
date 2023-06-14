import React from "react";
import Img from "../assets/img.png"

const Card = () => {
	return (
		<div className="Card">
			<img src={Img}></img>
			<h2>Hello React!</h2>
		</div>

	)
}

export default Card