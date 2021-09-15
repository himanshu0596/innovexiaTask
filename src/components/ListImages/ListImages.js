import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getImages } from "../../action/GetImages";
import "./ListImages.scss";
import { Button } from "semantic-ui-react";

/*
Component for Listing Images and state mapped to redux store to get images from http call in saga and
to dispatch new action as load more button is clicked will change the limit in api and append the result to our dom 

Lazyload Image component is used to load images according to the viewport currently viewing
*/
let ListImages = (props) => {
  let limit = props.limit;
  return props.images ? (
    <div className="right_align">
      {props.images.map((img, key) => (
        <LazyLoadImage
          effect="blur"
          src={img.url}
          key={key}
          alt={img.categories[0].name}
          height="500px"
          width="600px"
        />
      ))}
      <Button onClick={() => props.getImages(props.categoryID, (limit += 10))}>
        Load More Images
      </Button>
    </div>
  ) : (
    <div className="pusherHeightWidth"></div>
  );
};

const mapDispatchToProps = {
  getImages: getImages,
};

const mapStateToProps = (state) => ({
  images: state.ImageReducer.images,
  limit: state.ImageReducer.limit,
});

ListImages = connect(mapStateToProps, mapDispatchToProps)(ListImages);
export default ListImages;
