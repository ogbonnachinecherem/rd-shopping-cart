import React from "react";
function Hero() {
    return (
        <>
        <div className="container second">
	<div className="row">
		<div className="col-xs-12 col-md-3">
			<h2 className="siz">Sizes:</h2>
		</div>
		<div className="col-xs-12 col-md-6">
			<p className="prd">16 Product(s) found.</p>
		</div>
		<div className="col-xs-12 col-md-3">
			<p>Order by: <input type="number" name="number" placeholder="select"/></p>
		</div>
	</div>
</div>
        </>
    );
}
export default Hero;