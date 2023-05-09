import { useState } from "react";
import "./App.css";
import { DatePicker, Space, Button } from "antd";
import TextArea from "antd/es/input/TextArea";

function App() {
	const [tower, setTower] = useState("А");
	const [floor, setFloor] = useState("3");
	const [conferenceRoom, setConferenceRoom] = useState("1");
	const [date, setDate] = useState("");
	const [dateString, setDateString] = useState("");
	const [comment, setComment] = useState("");

	const onChangeСomment = (e) => {
		setComment(e.target.value);
	};

	const onChangeDate = (date, dateString) => {
		setDate(date);
		setDateString(dateString);
	};

	const onChangeTower = (event) => {
		const value = event.target.value;
		setTower(value);
	};

	const onChangeFloor = (event) => {
		const value = event.target.value;
		setFloor(value);
	};

	const onChangeConferenceRoom = (event) => {
		const value = event.target.value;
		setConferenceRoom(value);
	};

	const onSend = () => {
		date !== ""
			? (console.log({
					Башня: tower,
					Этаж: floor,
					Переговорка: conferenceRoom,
					Дата: dateString,
					Комментарий: comment,
			  }),
			  alert("Забронировано!"))
			: alert("Проверьте дату!");
	};

	const onClear = () => {
		setTower("А");
		setFloor("3");
		setConferenceRoom("1");
		setDate("");
		setDateString("");
		setComment("");
	};

	const floorsAndRoom = (num, startNum) => {
		return Array(num)
			.fill(0)
			.map((_, i) => i + startNum)
			.map((v) => (
				<option key={v} value={v}>
					{v}
				</option>
			));
	};

	return (
		<div className="content">
			<h2>Бронирование переговорной</h2>
			<div className="sections">
				<div className="towers">
					<span>Башня: </span>
					<select value={tower} onChange={onChangeTower}>
						<option value="А">А</option>
						<option value="Б">Б</option>
					</select>
				</div>
				<div className="floor">
					<span>Этаж: </span>
					<select value={floor} onChange={onChangeFloor}>
						{floorsAndRoom(25, 3)}
					</select>
				</div>
				<div className="conferenceRoom">
					<span>Переговорная: </span>
					<select value={conferenceRoom} onChange={onChangeConferenceRoom}>
						{floorsAndRoom(10, 1)}
					</select>
				</div>

				<Space direction="vertical">
					<DatePicker
						value={date}
						placeholder="Выбор даты"
						onChange={onChangeDate}
					/>
				</Space>
			</div>
			<div className="sections textarea">
				<TextArea
					value={comment}
					placeholder="Комментарий"
					onChange={onChangeСomment}
					style={{
						height: 80,
						width: 600,
						resize: "none",
					}}
				></TextArea>
			</div>
			<div className="sections">
				<Space wrap>
					<Button onClick={onSend} type="primary">
						Отправить
					</Button>
				</Space>
				<Space wrap>
					<Button onClick={onClear} type="primary">
						Очистить
					</Button>
				</Space>
			</div>
		</div>
	);
}

export default App;
