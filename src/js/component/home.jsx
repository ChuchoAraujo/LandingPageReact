import React from "react";

//IMPORT COMPONENTS
import Navbar from "./navBar.jsx";
import Jumbotron from "./jumbotron.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"

//create your first component

const Home = () => {
	return (
		<>
			<Navbar
			     title1 = "Start bootstrap"
			     title2 = "Home"
			     title3 = "About"
			     title4 = "Services"
			     title5 = "Contact"
	        />
			<div className="container">
			<Jumbotron
				    title = "A warm welcome!"
				    buttom ="call to action"
			    />
			</div>
			<div className="row text center">
				<div className="col-2"></div>
				<div className="col-2 d-flex justify-content-center">
					<Card // IMAGEN 1
					     image = "https://images.unsplash.com/photo-1665731372442-a9d2e251af28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						 title = "Nieve"
						 description = "La nieve mas fria del mundo"
						 buttom = "Find out more"
					/>
				</div>
				<div className="col-2 d-flex justify-content-center ">
				    <Card  // IMAGEN 2
					     image = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						 title = "Barco"
						 description = "Vamos a nadar!"
						 buttom = "Find out more"
					/>
				</div>
				<div className="col-2 d-flex justify-content-center">
				    <Card // IMAGEN 3
					     image = "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						 title = "Globo"
						 description = "Vamos de paseo"
						 buttom = "Find out more"
					/>
				</div>
				<div className="col-2 d-flex justify-content-center">
				    <Card // IMAGEN 4
					     image = "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1177&q=80"
						 title = "Desierto"
						 description = "Hace mucho calor"
						 buttom = "Find out more"
					/>
				</div>
				<div className="col-2"></div>
			
			<footer
			     copyright = "Copyright © Your Website"
			/>
				
			</div>
		</>
		    
		
	)
};

export default Home;
