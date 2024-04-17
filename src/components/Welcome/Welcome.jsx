import "./Welcome.css"

export default function Welcome({ region }) {
  return (
    <div className="text-white text-[25px] z-20">
       <span id="region" className="text-[40px] font-bold">{region}</span>
    </div>
  );
}
