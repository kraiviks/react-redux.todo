import React, { useState } from "react";
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	ListGroupItem,
	InputGroupAddon,
	InputGroupText,
	Input,
} from "reactstrap";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { checkTask, del, like } from "../../redux/actions";

const Tabs = ({ children }) => {
	const [activeTab, setActiveTab] = useState("1");

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	const { todos } = useSelector((state) => state);
	const dispatch = useDispatch();

	const checkedList = todos.filter((item) => item.check !== false);

	const finalCheckedList = checkedList.map((item) => {
		return (
			<ListGroupItem key={item.id}>
				<InputGroupAddon addonType="prepend">
					<InputGroupText>
						<Input
							addon
							type="checkbox"
							defaultChecked={item.check}
							aria-label="Checkbox for following text input"
							onClick={() => dispatch(checkTask(item.id))}
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
						onClick={() => dispatch(like(item.id))}
					></i>
					<i
						className="fas fa-trash"
						onClick={() => dispatch(del(item.id))}
					></i>
				</div>
			</ListGroupItem>
		);
	});

	return (
		<div>
			<Nav tabs>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === "1" })}
						onClick={() => {
							toggle("1");
						}}
						style={{ cursor: "pointer" }}
					>
						All
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === "2" })}
						onClick={() => {
							toggle("2");
						}}
						style={{ cursor: "pointer" }}
					>
						Done
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={activeTab}>
				<TabPane tabId="1">{children}</TabPane>
				<TabPane tabId="2">
					<div className="tasks">{finalCheckedList}</div>
				</TabPane>
			</TabContent>
		</div>
	);
};

export default Tabs;
