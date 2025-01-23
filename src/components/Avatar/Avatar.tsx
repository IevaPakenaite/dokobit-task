import styles from "./Avatar.module.scss";

interface AvatarProps {
  name: string;
  surname: string;
}

const Avatar = ({ name, surname }: AvatarProps) => {
  const initials = `${name.charAt(0).toUpperCase()}${surname
    .charAt(0)
    .toUpperCase()}`;

  return (
    <div data-cy="avatar" className={styles.avatar}>
      {initials}
    </div>
  );
};

export default Avatar;
