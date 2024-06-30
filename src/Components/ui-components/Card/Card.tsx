import { CardProps } from "../../../Utilities/types";
import classes from "./Card.module.scss";

const Card = ({ children }: CardProps) => {
  return <div className={classes.container}>{children}</div>;
};

export default Card;
