import "./bootstrap.min.css";
import "./cc.css";
import "../theme/variables.css";

const ExploreContainer: React.FC = () => {
  return (
    <div className="text-center">
      <img src="./assets/icon/ccicon.png" alt="App Logo" />
      <div className="p-3">
        <div className="container-fluid text-center p-3 soft-edge bg-tertiary">
          <h1>Çözelti Software</h1>
          <p>
            CC'lerinizi kayıt edebileceğiniz kombine edilmiş yeni uygulamamız
          </p>
          <div className="row">
            <div className="col">Sürüm : </div>
            <div className="col">0.0.1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreContainer;
