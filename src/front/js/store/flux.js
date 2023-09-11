const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			backendUrl: process.env.BACKEND_URL,
			token: "",
			userData: {},
		},
		actions: {
			// Use getActions to call a function within a fuction
			login: async (user) => {
				try {
					const store = getStore()
					const response = await fetch(`${store.backendUrl}/api/login`, {
						method: "POST",
						headers: {
							"content-type": "application/json",
						},
						body: JSON.stringify(user),
					});
					const data = await response.json();
					if (!data.token) return false;
					console.log(data); //vemos si existe el token 
					setStore({ token: data.token });
					return true;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			registerClub: async (dataClub) => {
				try {
					const store = getStore()
					const response = await fetch(`${store.backendUrl}/api/club`, {
						body: JSON.stringify(dataClub),
						method: "POST",
						headers: {
							"content-type": "application/json",
						},
					})//fin del fetch

					const data = await response.json();
					if (response.status !== 201) {
						return false;
					} else {
						return true;
					}
				} catch (error) {
					console.log(error)
				}

			},
			logout: () => {

				setStore({ token: "" });
			},
			//
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		},





	};
};

export default getState;
