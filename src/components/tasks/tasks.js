import React from "react";
import { connect } from "react-redux";
import "./tasks.scss";
import {
	ListGroup,
	ListGroupItem,
	Input,
	InputGroupAddon,
	InputGroupText,
} from "reactstrap";
import { checkTask, del, like } from "../../redux/actions";

const Tasks = ({ todos, del, like, checkTask, textSearch }) => {
	const search = (items, textSearch = "") => {
		if (textSearch === 0) {
			return items;
		}
		return items.filter((item) => {
			return item.task.indexOf(textSearch) > -1;
		});
	};

	const sort = (items) => {
		return items.sort((a, b) => a.check - b.check)
	}
	let filterList = sort(search(todos, textSearch));

	const itemList = filterList.map((item) => {
		return (
			<ListGroupItem key={item.id}>
				<InputGroupAddon addonType="prepend">
					<InputGroupText>
						<Input
							addon
							type="checkbox"
							defaultChecked={item.check}
							aria-label="Checkbox for following text input"
							onClick={() => checkTask(item.id)}
						/>
					</InputGroupText>
				</InputGroupAddon>
				<div className={item.like ? "item like" : "item"}>
					<div className={item.check ? "checked" : null}>
						{item.task}
					</div>
				</div>
				<div className="icons">
					<i
						className={item.like ? "fas fa-heart" : "far fa-heart"}
						onClick={() => like(item.id)}
					></i>
					<i
						className="fas fa-trash"
						onClick={() => del(item.id)}
					></i>
				</div>
			</ListGroupItem>
		);
	});
	return (
		<ListGroup className="tasks">
			{itemList.length > 0 ? (
				itemList
			) : (
				<h5 style={{ textAlign: "center" }}>
					Plese enter task (:ˆ-ˆ:)
				</h5>
			)}
		</ListGroup>
	);
};

const mapStateToProps = (state) => {
	return {
		todos: state.todos,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		del: (id) => dispatch(del(id)),
		like: (id) => dispatch(like(id)),
		checkTask: (id) => dispatch(checkTask(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
