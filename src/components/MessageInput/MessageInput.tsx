import TextareaAutosize from "react-textarea-autosize";

import styles from "./MessageInput.module.scss";

interface MessageInputProps {
  placeholder: string;
  value: string;
  maxRows?: number;
  maxLength?: number;
  isSecondary?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onEnterPress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

function MessageInput({
  placeholder,
  value,
  maxRows,
  maxLength = 280,
  isSecondary = false,
  onChange,
  onEnterPress,
}: MessageInputProps) {
  return (
    <TextareaAutosize
      data-cy="message-input"
      className={`${styles["message-input"]} ${
        isSecondary ? styles.secondary : ""
      }`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onEnterPress}
      maxLength={maxLength}
      autoFocus
      maxRows={maxRows}
    />
  );
}
export default MessageInput;
