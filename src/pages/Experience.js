import "./Experience.css";
import Navbar from "./Navbar";
import OJ2 from "../img/OJ2.jpg";
import OJT from "../img/OJT.jpg";
import JJJ from "../img/JJJ.jpg";
import FAM from "../img/FAM.jpg";
const Experience = () => {
  return (
    <>
      <Navbar />

     
          <section id="experience">
      <div class="text-center">
        <br></br><br></br>
         <h2 class="display-2 text-white"><strong>Experiences</strong></h2></div>
         <div class="text-center">
         <h5 class="text-white">During my on-the-job training,  at PrintZILLA.</h5></div>
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={OJ2} alt="" />
                <h4 className="text-center text-dark"></h4>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={FAM} alt="" />
                <h4 className="text-center text-dark"></h4>
              </div>
            </div>

          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={JJJ} alt="" />
                <h4 className="text-center text-dark"></h4>

              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={OJT} alt="" />
                <h4 className="text-center text-dark"></h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     
    </>
  );
};

export default Experience;