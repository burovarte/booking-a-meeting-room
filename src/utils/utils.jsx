export const floorsAndRoom = (num, startNum) => {
	return Array(num)
		.fill(0)
		.map((_, i) => i + startNum)
		.map((v) => (
			<option key={v} value={v}>
				{v}
			</option>
		));
};
