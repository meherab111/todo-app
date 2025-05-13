const todoKey = "todoKey";

export const getLSTodoData = () => {
  const rawData = localStorage.getItem(todoKey);

  if (!rawData) return [];

  return JSON.parse(rawData);
};

export const setLSTodoData = (formData) => {
  return localStorage.setItem(todoKey, JSON.stringify(formData));
};
