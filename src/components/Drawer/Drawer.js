import React, { useEffect, useRef, useState } from "react";
import { Grid, Menu, Segment, Sidebar } from "semantic-ui-react";
import { getImages } from "../../action/GetImages";
import Loading from "../Loading/Loading";
import ListImages from "../ListImages/ListImages";
import axios from "axios";
import { connect } from "react-redux";
import "./Drawer.scss";
import { CATEGORY_URL } from "../../assets/constant";

/*
Drawer Component

Is sidebar component to dynamically display categories by mapping over them and generating elements for each
and with every element there is one event listner attached so that on click that category it will dispatch action
and will pass unique category id which is used to fetch specific ategory data in saga by appending the id to constant 
part of url after that on loading condition in pusher segment either the loader component will render or List of Images 
will render
*/

let Drawer = (props) => {
  const [categories, setCategories] = useState();
  let catID;
  const getImages = (id) => {
    props.getImages(id);
  };

  const getCategories = () =>
    axios.get(CATEGORY_URL).then((res) => setCategories(res.data));

  useEffect(() => getCategories(), []);

  const visiblity = true;
  return (
    <Grid columns={1}>
      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            vertical
            visible={visiblity}
            width="thin"
          >
            {categories?.map((cat, key) => {
              catID = cat.id;
              return (
                <Menu.Item key={key} as="a" onClick={() => getImages(cat.id)}>
                  {cat.name}
                </Menu.Item>
              );
            })}
          </Sidebar>
          <Sidebar.Pusher>
            <Loading />
            <ListImages categoryID={catID} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};

const mapDispatchToProps = {
  getImages: getImages,
};

Drawer = connect(null, mapDispatchToProps)(Drawer);

export default Drawer;
