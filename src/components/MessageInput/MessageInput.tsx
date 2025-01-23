import styles from "./MessageInput.module.scss";

interface MessageInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function MessageInput({
  placeholder,
  value,
  onChange,
  onEnterPress,
}: MessageInputProps) {
  return (
    <input
      data-cy="message-input"
      className={styles["message-input"]}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onEnterPress}
      maxLength={280}
      autoFocus
    />
  );
}
export default MessageInput;
