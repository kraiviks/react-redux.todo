const add = (item) => ({ type: "ADD", payload: item });
const del = (id) => ({ type: "DEL", payload: id });
const like = (id) => ({ type: "LIKE", payload: id });
const onFilter = (value) => ({ type: "ON_FILTER", payload: value });
const checkTask = (id) => ({ type: "CHECK_TASK", payload: id });

export { add, del, like, onFilter, checkTask };
