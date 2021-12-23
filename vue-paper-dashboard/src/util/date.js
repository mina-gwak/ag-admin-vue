const convertDate = (date) => {
  const offset = new Date().getTimezoneOffset() * 60000;
  const newDate = new Date(new Date(date) - offset);
  return newDate.toISOString().split('T')[0];
};

export { convertDate };