export const occupationData = () => {
  const { veresk, dachi, terrasa, aparts } = {
    veresk: vereskRoomsData(),
    dachi: dachiData(),
    terrasa: terrasaRoomsData(),
    aparts: apartsData(),
  };
  const data = [
    ...veresk.value,
    ...aparts.value,
    ...dachi.value,
    ...terrasa.value,
  ];

  return useState("occupationData", () => data);
};
