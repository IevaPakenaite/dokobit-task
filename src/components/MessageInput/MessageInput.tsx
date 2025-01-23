import { forwardRef } from "react";
import styles from "./MessageInput.module.scss";

interface MessageInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const MessageInput = forwardRef<HTMLInputElement, MessageInputProps>(
  ({ placeholder, value, onChange, onEnterPress }, ref) => {
    return (
      <input
        data-cy="message-input"
        className={styles["message-input"]}
        placeholder={placeholder}
        // ref={ref}
        value={value}
        onChange={onChange}
        onKeyDown={onEnterPress}
        maxLength={280}
      />
    );
  }
);

export default MessageInput;
