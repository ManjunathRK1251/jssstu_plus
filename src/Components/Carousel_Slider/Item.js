import "./Item.css";
// import img1 from "C:/Users/Manju/Desktop/JSSSTU+/jssstu_plus/src/Images/navbar_bg.jpg";

export default function Item(props) {
  return (

    <img src={props.ImgSrc} alt="" style={{ width: "400px", height: "300px" }} />
  );
}
