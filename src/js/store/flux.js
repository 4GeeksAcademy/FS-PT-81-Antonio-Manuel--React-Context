import { useEffect } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://playground.4geeks.com/contact',
			contacts: [],
			selected: {}
		},
		actions: {
			selectContact: (contact) => setStore({selected: contact}),
			createAgenda: async () => {
				try {
					const resp = await fetch(getStore().url + '/agendas/antonio', {
						method: 'POST',
						headers: {'Content-Type': 'application/json'
						}
					})
					if(!resp.ok) throw new Error ('Error while')
					const data = await resp.json()
					console.log(data)
					getActions().getAgenda();
				} catch (error){
					console.error(error)
				}
			},
			getAgenda: async () => {
				try {
					const resp = await fetch(getStore().url + '/agendas/antonio')
					if(resp.status === 404) return getActions().createAgenda()
					if(!resp.ok) throw new Error ('Error while')
					const data = await resp.json()
					console.log(data)
					setStore({contacts: data.contacts});	
				} catch (error){
					console.error(error)
				}
			},
			createContact: async (contact) => {
				try {
					const resp = await fetch(getStore().url + '/agendas/antonio/contacts', {
						method: 'POST',
						headers: {'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					});
					if(!resp.ok) throw new Error ('Error while');
					return getActions().getAgenda()
				} catch (error){
					console.error(error)
				}
			},
			editContact: async (contact) => {
				try {
					const resp = await fetch(getStore().url + '/agendas/antonio/contacts/' + contact.id, {
						method:'PUT',
						headers: {'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					})
					if(!resp.ok) throw new Error ('Error while')
					getActions().getAgenda();
				} catch (error){
					console.error(error)
				}
			},
			deleteContact: async (id) => {
				try {
					const resp = await fetch(getStore().url + '/agendas/antonio/contacts/' + id, {
					method:'DELETE',
					headers: {'Content-Type': 'application/json'
					}
					})
					if(!resp.ok) throw new Error ('Error while')
					getActions().getAgenda();
				} catch (error){
					console.error(error)
				}
			}
			
		}
	};
};


export default getState;
