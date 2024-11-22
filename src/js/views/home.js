import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/contactCard.jsx";

export const Home = () => {

	const {store, actions} = useContext(Context)
	useEffect(() => {
		actions.createAgenda()
		actions.getAgenda()
		console.log(store.contacts)
	}, []);
	return (

	<div className="text-center mt-5">
		{
			store.contacts?.map(contact => <ContactCard key={contact.id}
			name={contact.name}
			phone={contact.phone}
			email={contact.email}
			address={contact.address}
			id={contact.id}

			/>)
		}
		
	</div>
	
	);
};
