import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="row">
			<div className="p-3 bg-dark text-white">
				<div className="position0">
					<h1>
						<i className="far fa-clock"></i>
					</h1>
				</div>
			</div>
			<div className="p-3 bg-dark text-white">
				<div className="position1">
					<h1>0</h1>
				</div>
			</div>
			<div className="p-3 bg-dark text-white">
				<div className="position2">
					<h1>0</h1>
				</div>
			</div>
			<div className="p-3 bg-dark text-white">
				<div className="position3">
					<h1>0</h1>
				</div>
			</div>
			<div className="p-3 bg-dark text-white">
				<div className="position4">
					<h1>0</h1>
				</div>
			</div>
			<div className="p-3 bg-dark text-white">
				<div className="position5">
					<h1>0</h1>
				</div>
			</div>
		</div>
		// <button type="button" onclick="reloadPage();">Reload page</button>
	);
}
