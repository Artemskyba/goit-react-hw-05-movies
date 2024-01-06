import { ReviewText } from './review-item,styled';

export const ReviewItem = ({ author, text }) => {
  return (
    <li>
      <h3>Author: {author}</h3>
      <ReviewText>{text}</ReviewText>
    </li>
  );
};
