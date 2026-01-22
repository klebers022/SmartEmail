type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: Props) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.05)",
      }}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
}
