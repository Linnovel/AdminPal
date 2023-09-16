const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			loginUser : (userData) => {
				console.log(userData)
			},
			registerUser : (userData) => {
				console.log(userData)
			}
		},

		
			
		
		
	};
};

export default getState;
