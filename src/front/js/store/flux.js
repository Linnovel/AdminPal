const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			backendUrl: process.env.BACKEND_URL,
			token: "",
			userData: {},
			clubData: {},
			clubslist: [],
			placeslist: [],
			placeData: {},
			imageData: [],
			imagesList: [],
			dataUser: {}

		},
		actions: {
			// Usuarios
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
					setStore({ token: data.token });
					return true;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			registerUser: async (userData) => {
				try {
					const store = getStore()
					const response = await fetch(`${store.backendUrl}/api/user`, {
						body: JSON.stringify(userData),
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
			getUserData: async () => {
				try {
					const store = getStore()
					const response = await fetch(`${store.backendUrl}/api/private`, {
						headers: {
							Authorization: `Bearer ${store.token}`,
						},
					});
					const data = await response.json();
					if (response.status === 401) {
						alert("No autorizado");
						return;
					}
					//console.log(data);
					setStore({ userData: data });

				} catch (error) {
					console.log(error)
				}
			},
			editUser: async (id_user, dataUser) => {
				try {
					const store = getStore()
					const response = await fetch(`${store.backendUrl}/api/user/${id_user}`, {
						body: JSON.stringify(dataUser),
						method: "PUT",
						headers: {
							"content-type": "application/json",
							"Authorization": `Bearer ${store.token}`,
						},
					})//fin del fetch

					const data = await response.json();
					if (response.status !== 201) {
						return false;
					} else {
						setStore({ UserData: data });
						return true;
					}
				} catch (error) {
					console.log(error)
				}

			},

			//clubs
			registerClub: async (dataClub) => {
				try {
					const store = getStore()
					const response = await fetch(`${store.backendUrl}/api/club`, {
						body: JSON.stringify(dataClub),
						method: "POST",
						headers: {
							"content-type": "application/json",
							"Authorization": `Bearer ${store.token}`,
						},

					})//fin del fetch

					const data = await response.json();
					if (response.status !== 201) {
						return false;
					} else {
						setStore({ clubData: data });
						return true;
					}
				} catch (error) {
					console.log(error)
				}

			},
			editClub: async (id, dataClub) => {
				try {
					const store = getStore()
					const response = await fetch(`${store.backendUrl}/api/club/${id}`, {
						body: JSON.stringify(dataClub),
						method: "PUT",
						headers: {
							"content-type": "application/json",
							"Authorization": `Bearer ${store.token}`,
						},
					})//fin del fetch

					const data = await response.json();
					if (response.status !== 201) {
						return false;
					} else {
						setStore({ clubData: data });
						return true;
					}
				} catch (error) {
					console.log(error)
				}

			},
			getClubData: async (id) => {
				try {
					const store = getStore()
					const response = await fetch(`${store.backendUrl}/api/club/${id}`, {
						headers: {
							Authorization: `Bearer ${store.token}`,
						},
					});
					const data = await response.json();
					if (response.status === 401) {
						alert("No autorizado");
						return;
					}
					setStore({ clubData: data });

				} catch (error) {
					console.log(error)
				}
			},
			getClubs: async () => {
				try {
					const store = getStore()
					const response = await fetch(`${store.backendUrl}/api/club/user`, {
						headers: {
							Authorization: `Bearer ${store.token}`,
						},
					});
					if (response.status === 401) {
						alert("No autorizado");
						return;
					}
					if (response.status === 404) {
						alert("La lista de Clubs esta vacia");
						return;
					}
					if (response.status === 200) {
						const data = await response.json();
						setStore({ clubslist: data });
						return data.length;

					}


				} catch (error) {
					console.log(error)
				}
			},
			deleteClub: async (id) => {
				try {
					const store = getStore();
					const response = await fetch(`${store.backendUrl}/api/club/${id}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`,
						},
					});
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
			//cierre de sesion
			logout: () => {

				setStore({ token: "" });
			},
			//lugares
			registerPlace: async (id_club, dataPlace) => {
				try {
					const store = getStore()
					const response = await fetch(`${store.backendUrl}/api/place/${id_club}`, {
						body: JSON.stringify(dataPlace),
						method: "POST",
						headers: {
							"content-type": "application/json",
							"Authorization": `Bearer ${store.token}`,
						},

					})//fin del fetch

					const data = await response.json();
					if (response.status !== 201) {
						return false;
					} else {
						setStore({ placeData: data });
						return true;
					}
				} catch (error) {
					console.log(error)
				}

			},
			getPlaces: async (id_club) => {
				try {
					const store = getStore()
					const response = await fetch(`${store.backendUrl}/api/club/place/${id_club}`, {
						headers: {
							Authorization: `Bearer ${store.token}`,
						},
					});
					if (response.status === 401) {
						alert("No autorizado");
						return;
					}
					if (response.status === 200) {
						const data = await response.json();
						setStore({ placeslist: data });
						return data.length;

					}



				} catch (error) {
					console.log(error)
				}
			},
			getPlaceData: async (id) => {
				try {
					const store = getStore()
					const response = await fetch(`${store.backendUrl}/api/place/${id}`, {
						headers: {
							Authorization: `Bearer ${store.token}`,
						},
					});
					const data = await response.json();
					if (response.status === 401) {
						alert("No autorizado");
						return;
					}
					setStore({ placeData: data });

				} catch (error) {
					console.log(error)
				}
			},
			editPlace: async (id, dataPlace) => {

				try {
					const store = getStore()
					const response = await fetch(`${store.backendUrl}/api/place/${id}`, {
						body: JSON.stringify(dataPlace),
						method: "PUT",
						headers: {
							"content-type": "application/json",
							"Authorization": `Bearer ${store.token}`,
						},
					})//fin del fetch

					const data = await response.json();
					if (response.status !== 201) {
						return false;
					} else {
						setStore({ placeData: data });
						return true;
					}
				} catch (error) {
					console.log(error)
				}

			},
			deletePlace: async (id) => {
				try {
					const store = getStore();
					const response = await fetch(`${store.backendUrl}/api/place/${id}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`,
						},
					});
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
			//imagenes
			registerImage: async (id_place, image) => {
				try {
					//console.log(image)
					const store = getStore()
					const formData = new FormData()
					formData.append("image", image.image[0])
					const response = await fetch(`${store.backendUrl}/api/image/${id_place}`, {
						body: formData,
						method: "POST",
						headers: {
							"Authorization": `Bearer ${store.token}`,
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
			getImage: async (id_place) => {
				try {
					const store = getStore()
					const response = await fetch(`${store.backendUrl}/api/image/place/${id_place}`, {
						headers: {
							Authorization: `Bearer ${store.token}`,
						},
					});
					const data = await response.json();
					if (response.status === 401) {
						alert("No autorizado");
						return;
					}
					setStore({ imageData: data });

				} catch (error) {
					console.log(error)
				}
			},
			getAllImage: async (id_place) => {
				try {
					const store = getStore()
					const response = await fetch(`${store.backendUrl}/api/place/image/${id_place}`, {
						headers: {
							Authorization: `Bearer ${store.token}`,
						},
					});
					const data = await response.json();
					if (response.status === 401) {
						alert("No autorizado");
						return;
					}
					setStore({ imagesList: data });

				} catch (error) {
					console.log(error)
				}
			},







			//************ */
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
