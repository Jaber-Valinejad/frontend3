import styles from '../styles/layout.module.c

export default function Layout(props) {
  return (
    <div style={{
      backgroundImage: "url('/background.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh"
    }}>
      <h1 style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.8)' }}>To Do</h1>
      {props.children}
    </div>
  );
}
