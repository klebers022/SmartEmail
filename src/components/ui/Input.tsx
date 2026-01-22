type Props = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export default function Input({ label, value, onChange, placeholder }: Props) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <label>{label}</label>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "8px",
          marginTop: "4px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}
