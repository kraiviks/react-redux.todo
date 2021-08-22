const todoAppState = {
	todos: [
		{ task: "Add task", like: true, check: false, id: 1 },
		{ task: "Утренняя пробежка", like: false, check: false, id: 13 },
		{ task: "Почистить mac от приложений", like: false, check: false, id: 4 },
		{ task: "Видалити непотрібні додатки на телефоні", like: true, check: false, id: 5 },
	],
};

const reducer = (state = todoAppState, action) => {
	switch (action.type) {
		case "ADD":
			const oldArr = state.todos;
			const newArr = [
				{
					task: action.payload,
					like: false,
					check: false,
					id: new Date().getMilliseconds(),
				},
			];
			return {
				...state,
				todos: [...oldArr, ...newArr],
			};
		case "DEL":
			const endArr = state.todos.filter(
				(item) => item.id !== action.payload
			);

			return {
				...state,
				todos: [...endArr],
			};
		case "LIKE":
			const nArr = state.todos.map((item) => {
				if (item.id === action.payload) {
					return { ...item, like: !item.like };
				}
				return item;
			});

			return {
				...state,
				todos: [...nArr],
			};
		case "CHECK_TASK":
			const checkArr = state.todos.map(item=> {
				if (item.id === action.payload) {
					return {...item, check: !item.check}
				}	
				return item;
			})
			return {
				...state,
				todos: checkArr
			};
		default:
			return state;
	}
};

export default reducer;
