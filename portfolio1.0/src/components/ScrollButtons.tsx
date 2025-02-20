import "./ScrollButtons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { adjustScroll } from "../utils/adjustScroll";

interface ScrollButtonProps {
  scrollTargetUp: string;
  scrollTargetDown: string;
  direction: ("up" | "down")[];
}
export const ScrollButtons: React.FC<ScrollButtonProps> = ({
  scrollTargetUp,
  scrollTargetDown,
  direction,
}) => {
  return (
    <div className="scroll-buttons">
      {direction.includes("up") && (
        <button
          className="scroll-button up"
          onClick={() => adjustScroll(scrollTargetUp)()}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
      {direction.includes("down") && (
        <button
          className="scroll-button down"
          onClick={() => adjustScroll(scrollTargetDown)()}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      )}
    </div>
  );
};
