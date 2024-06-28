import { FaStar, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }: { rating: number }) => {
  const maxRating = 3;

  const stars = Array.from({ length: maxRating }, (_, index) => {
    return index < rating ? <FaStar key={index} color="#ffd700" /> : <FaRegStar key={index} color="#ffd700" />;
  });

  return <div>{stars}</div>;
};

export default StarRating;
