import React, { useState } from "react";
import "./app.scss";
import Search from "../search/search";
import Tasks from "../tasks";
import FormInput from "../formInput";
import Counter from "../counter";
import Tabs from "../tabs";
import Title from "../title";

const App = () => {
	const [textSearch, settextSearch] = useState();

	return (
		<div className="app container">
			<main className="main">
				<Title/>
				<Counter />
				<Search settextSearch={settextSearch} />
				<Tabs>
					<Tasks textSearch={textSearch} />
				</Tabs>
				<FormInput />
			</main>
		</div>
	);
};

export default App;
