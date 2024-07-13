import "./Projects.css";
import projectOne from "./images/ContactBook.png";
import projectTwo from "./images/MovieSearch.png";
import projectThree from "./images/TodoList.png";
import projectFour from "./images/Screenshot 2024-02-01 194213.png";

export const Projects = () => {
  return (
    //Fix with linkes and right projects
      <div className="projectPageContainer" id="projects">
        <div className="titleContainer">School projects</div>
        <div className="projectContainer">
          <div className="galleryContainer w4">
            <div className="galleryItem">
              <a
                href="https://github.com/SophiaKornilia/kunskapskontroll2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image">
                  <img src={projectOne} alt="projectOne" />
                </div>
                <div className="text">
                  <h3>Project 1</h3>
                  <p>
                    Ett responsivt webbutseende projekt som använder flexbox och
                    CSS Grid för att skapa en dynamisk layout som anpassar sig
                    till olika skärmstorlekar.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="galleryContainer w2">
            <div className="galleryItem">
              <a
                href="https://github.com/maijanp/blomsterhornan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image">
                  <img src={projectTwo} alt="projectTwo" />
                </div>
                <div className="text">
                  {" "}
                  <h3>Project 2</h3>
                  <p>
                    Ett projekt som använder flexbox och CSS Grid för en
                    responsiv webbdesign.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="galleryContainer w2">
            <div className="galleryItem">
              <a
                href="https://github.com/Medieinstitutet/the-todos-SophiaKornelia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image">
                  <img src={projectThree} alt="projectThree" />
                </div>
                <div className="text">
                  {" "}
                  <h3>Project 3</h3>
                  <p>
                    Ett projekt som använder flexbox och CSS Grid för en
                    responsiv webbdesign.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="galleryContainer w4">
            <div className="galleryItem">
              <a
                href="https://github.com/SophiaKornilia/kunskapskontroll3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image">
                  <img src={projectFour} alt="projectFour" />
                </div>
                <div className="text">
                  {" "}
                  <h3>Project 4</h3>
                  <p>
                    Ett responsivt webbutseende projekt som använder flexbox och
                    CSS Grid för att skapa en dynamisk layout som anpassar sig
                    till olika skärmstorlekar.
                  </p>
                </div>
              </a>
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
