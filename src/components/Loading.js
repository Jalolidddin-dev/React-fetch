import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./Loading.css";
function Loading() {
  return (
    <div className="loading_box">
      <AiOutlineLoading3Quarters className="loading_icon" />
    </div>
  );
}

export default Loading;
