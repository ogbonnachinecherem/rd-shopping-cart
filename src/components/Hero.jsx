import React from "react";
function Hero() {
    return (
        <>
        <section id="sec2">
				<div className="container second">
					<div className="row md">
						<div className="col-xs-12 col-md-3">
							<h2 className="siz">Sizes:</h2>
						</div>
						<div className="col-xs-12 col-md-6">
							<p className="prd">16 Product(s) found.</p>
						</div>
						<div className="col-xs-12 col-md-3 ob">Order by:  
							<select type="select" className="select"> 
                <option>Select</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
						</div>
					</div>
					<div className="row rw">
						<div className="col-xs-12 col-md-3">
							<div className="col-xs-12 col-md-12">
								<button type="submit" className="btncircle">XS</button>
								<button type="submit" className="btncircle">S</button>
								<button type="submit" className="btncircle">M</button>
								<button type="submit" className="btncircle">ML</button>
								<button type="submit" className="btncircle">L</button>
								<button type="submit" className="btncircle">XL</button>
								<button type="submit" className="btncircle">XXL</button>
							</div>
						</div>
						<div  className="col-xs-12 col-md-12">
							<small>Leave a star on Github if this respository was useful: </small><br/>
							<button className="sbt"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
								<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
				        </svg> Star 
				      </button>
				      <button className="sbt"> 848 </button>
							</div>
						</div>
				 </div>
	  </section>
        </>
    );
}
export default Hero;