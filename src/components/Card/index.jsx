import React from "react";
import Img from "../../assets/pngwing.png"
import "./style.css"

const Card = () => {
	return (
		<div className="Card">
			<img src={Img} />
			<h2>Hello React!</h2>
		</div>

	)
}

export default Card