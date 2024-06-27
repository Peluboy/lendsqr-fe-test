import { CardProps } from "../../../Utilities/types";
import classes from "./Card.module.css";

const Card = ({ children }: CardProps) => {
  return <div className={classes.container}>{children}</div>;
};

export default Card;
