export const occupationData = () => {
	const { sibiryakov, veresk, dachi, terrasa, aparts } = {
		veresk: vereskRoomsData(),
		dachi: dachiData(),
		terrasa: terrasaRoomsData(),
		aparts: apartsData(),
		sibiryakov: sibiryakovRoomsData(),
	};
	const data = [
		...sibiryakov.value,
		...veresk.value,
		...aparts.value,
		...dachi.value,
		...terrasa.value,
	];

	return useState("occupationData", () => data);
};
