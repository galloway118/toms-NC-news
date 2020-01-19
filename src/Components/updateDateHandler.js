export const UpdateDate = ({ created_at }) => {
  const newDate = new Date(created_at).toLocaleDateString(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  console.log(newDate);
  return newDate;
};
