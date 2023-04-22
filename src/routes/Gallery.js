import "./Gallery.css";
// import { SRLWrapper } from "simple-react-lightbox";
const videoPlayer =
  "https://res.cloudinary.com/ds5ayigjw/video/upload/v1617926559/my-website/2021-04-05_23-07-04_jklscb.mp4";
const imageURL =
  "https://res.cloudinary.com/ds5ayigjw/image/upload/v1618081385/web-site_kc5dsf.png";
export default function Gallery() {
  return (
    <div className="Gallery">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <SRLWrapper> */}
      <div className="container1">
        <div className="image-card">
          <img className="img" src={imageURL} alt="Umbrella" />
        </div>
        <div className="image-card">
          <video className="img" controls>
            <source src={videoPlayer} />
          </video>
        </div>

        <div className="image-card">
          <video className="img" controls>
            <source src={videoPlayer} />
          </video>
        </div>

        <div className="image-card">
          <video className="img" controls>
            <source src={videoPlayer} />
          </video>
        </div>

        <div className="image-card">
          <video className="img" controls>
            <source src={videoPlayer} />
          </video>
        </div>
      </div>
      {/* </SRLWrapper> */}
    </div>
  );
}
