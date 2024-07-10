import "./Projects.css";
import projectOne from "./images/ContactBook.png";
import projectTwo from "./images/MovieSearch.png";
import projectThree from "./images/TodoList.png";
import projectFour from "./images/Screenshot 2024-02-01 194213.png";

export const Projects = () => {
  return (
    <div className="projectPageContainer">
      <div className="projectContainer">
        <div className="galleryContainer w4">
          <div className="galleryItem">
            <div className="image">
              <img src={projectOne} alt="projectOne" />
            </div>
          </div>
        </div>
        <div className="galleryContainer w2">
          <div className="galleryItem">
            <div className="image">
              <img src={projectTwo} alt="projectTwo" />
            </div>
          </div>
        </div>
        <div className="galleryContainer w2">
          <div className="galleryItem">
            <div className="image">
              <img src={projectThree} alt="projectThree" />
            </div>
          </div>
        </div>
        <div className="galleryContainer w4">
          <div className="galleryItem">
            <div className="image">
              <img src={projectFour} alt="projectFour" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="projectPageContainer">
    //   <div className="projectContainer">
    //     <div className="projectBox1">
    //       <img src={projectOne} alt="projectOne" />
    //     </div>
    //     <div className="projectBox2">
    //       <img src={projectTwo} alt="projectTwo" />
    //     </div>
    //     <div className="projectBox3">
    //       <img src={projectThree} alt="projectThree" />
    //     </div>
    //     <div className="projectBox4">
    //       <img src={projectFour} alt="projectFour" />
    //     </div>
    //   </div>
    // </div>
  );
};
