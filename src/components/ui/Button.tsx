type Props = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({ text, onClick, type = "button" }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "10px 16px",
        background: "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}
