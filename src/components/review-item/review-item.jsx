export const ReviewItem = ({ author, text }) => {
  return (
    <li>
      <p>Author: {author}</p>
      <p>{text}</p>
    </li>
  );
};
