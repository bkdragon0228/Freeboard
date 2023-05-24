export const getDate = (createdAt) => {
  const dateObj = new Date(createdAt);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // 설계상 오류
  const date = String(dateObj.getDate()).padStart(2, "0");

  return `${year}-${month}-${date}`;
};
