import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Container, Row } from "react-bootstrap";
import LineGradient from "./LineGradient";

const ImageGallery = () => {
  const gallery = [
    {
      id: 1,
      imgUrl:
        "https://th.bing.com/th/id/OIP.7Q8rcSfgoD1HbU1mSPXXYwHaEK?pid=ImgDet&rs=1",
      title: "title-1",
    },
    {
      id: 2,
      imgUrl:
        "https://chilternchatter.com/wp-content/uploads/2018/01/RED-Bird.jpg",
      title: "title-2",
    },
    {
      id: 3,
      imgUrl:
        "https://th.bing.com/th/id/OIP.Uq7mkJvBsGROLy8sLgUPcgHaEK?pid=ImgDet&rs=1",
      title: "title-3",
    },
    {
      id: 4,
      imgUrl:
        "https://www.tell-a-tale.com/wp-content/uploads/2014/03/birds-flying-in-tropical-rainforests-imagesforfree-org.jpg",
      title: "title-4",
    },
    {
      id: 5,
      imgUrl:
        "https://1.bp.blogspot.com/-KjYX45prWP0/Vp6yBtmKCuI/AAAAAAAAs-g/qEHmjaKzRjQ/s1600/DSC_2114.JPG",
      title: "title-5",
    },
    {
      id: 6,
      imgUrl: "https://images2.alphacoders.com/545/545412.jpg",
      title: "title-6",
    },
  ];

  const loadImages = () => {
    return gallery.map((item) => {
      return (
        <div key={item.id}>
          <img src={item.imgUrl} alt={item.title} />
        </div>
      );
    });
  };

  return (
    <section id="gallery" className="image-gallery">
      <Container>
        <div>
          <h2 className="image-gallery-heading">
            Some of
            <span style={{ color: "rgba(220, 68, 146, 1)" }}> My Work</span>
          </h2>
        </div>
        <LineGradient width="50%" />
        <br></br>
        <Row>
          <Carousel autoPlay autoFocus infiniteLoop>
            {loadImages()}
          </Carousel>
        </Row>
      </Container>
    </section>
  );
};

export default ImageGallery;
