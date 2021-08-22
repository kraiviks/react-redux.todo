import React, { useState } from "react";
import { connect } from "react-redux";
import "./formInput.scss";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { add, del } from "../../redux/actions";
const FormInput = ({ add }) => {
	const [textIput, setTextInput] = useState("");
	const onSubmit = (e) => {
		e.preventDefault();

		add(textIput);
		setTextInput("");
	};
	const onKeyPress = (e) =>{ 
		if (e.key === "Enter") {
			onSubmit(e)
		}
	}
	return (
		<Form className="form" onSubmit={onSubmit} onKeyPress={onKeyPress}>
			<FormGroup>
				<Label for="exampleText">Enter task:</Label>
				<Input
				className="mt-3"
					type="textarea"
					name="text"
					id="inputText"
					value={textIput}
					onChange={(e) => setTextInput(e.target.value)}
				/>
			</FormGroup>
			<Button type="submit">Submit</Button>
		</Form>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		add: (newItem) => dispatch(add(newItem)),
		del: (id) => dispatch(del(id)),
	};
};

export default connect(null, mapDispatchToProps)(FormInput);
