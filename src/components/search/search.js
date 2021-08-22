import React, { useState } from "react";
import "./search.scss";
import { InputGroup, Input } from "reactstrap";

const Search = ({ settextSearch }) => {
	const [term, setTerm] = useState("");
	const onSearchChange = (e) => {
		setTerm(e.target.value);
		settextSearch(e.target.value);
	};
	return (
		<InputGroup className="search">
			<Input
				placeholder="search"
				value={term}
				onChange={onSearchChange}
			/>
		</InputGroup>
	);
};

export default Search;
