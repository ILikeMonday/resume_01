import Navbar from "../components/Navbar";

export default function MainLayouts(props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}
