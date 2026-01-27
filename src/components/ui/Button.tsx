type Props = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({
  text,
  onClick,
  type = "button",
  disabled = false,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 16px",
        background: disabled ? "#9ca3af" : "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.7 : 1,
        transition: "0.2s",
      }}
    >
      {text}
    </button>
  );
}
