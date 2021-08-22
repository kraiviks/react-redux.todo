import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./counter.scss";

const Counter = ({ todos }) => {
	const [likes, setLikes] = useState();
	const setLik = () => {
		setLikes(todos.filter((item) => item.like === true).length);
	};
	useEffect(setLik);

	return (
		<div className="counter">
			<h2>Tasks: {todos.length}</h2>
			<h3>Likes: {likes}</h3>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		todos: state.todos,
	};
};

export default connect(mapStateToProps, null)(Counter);
