const calcSubtotal = total => {
  return (total - calcPercentage(total)).toFixed(2);
};

const calcPercentage = total => {
  return ((7 / 100) * total).toFixed(2);
};

const filterClass = (classJson, id) => {
  const selectedClass = classJson.data.pack_list.filter(
    pack => pack.pack_id === id
  );
  return selectedClass[0];
};

export { calcSubtotal, calcPercentage, filterClass };
