import { useNavigate } from "react-router-dom";
import { ChangeHomePageBackgroundImage } from "../../redux/actions/HomePageBackGroundImageActions";
import Store from "../../redux/store/Store";
import "./Card.css";
export default function Card({region}) {
  const navigate = useNavigate();
  const { id, name, image } = region;
  return (
    <div
      className="card"
      onClick={() => {
        Store.dispatch(ChangeHomePageBackgroundImage(image));
        navigate(`region/${id}`);
      }}
    >
      <div
        className="overflow-hidden flex flex-col items-center justify-center gap-2 p-2 rounded-tl-lg  rounded-br-lg hover:translate-y-3 hover:cursor-pointer"
        style={{
          width: 250,
          height: 350,
          transition: "2s",
        }}
      >
        <img
          loading="lazy"
          style={{ transition: "0.5s" }}
          className="w-full h-full object-cover rounded-tl-lg rounded-br-lg"
          src={image}
        ></img>
      </div>
      <div
        style={{ transition: ".5s" }}
        className="region text-white"
      >
        {name}
      </div>
    </div>
  );
}
