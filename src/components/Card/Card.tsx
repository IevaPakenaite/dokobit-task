import styles from "./Card.module.scss";

interface Props {
  children: React.ReactNode;
}

function Card({ children }: Props) {
  return (
    <div data-cy="card" className={styles.card}>
      {children}
    </div>
  );
}

export default Card;
