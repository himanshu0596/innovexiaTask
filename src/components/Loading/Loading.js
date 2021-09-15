import React from "react";
import { connect } from "react-redux";

/*
Loading component to show loading message to indicate user that images are currently loading and it will render 
on loading set to true or false condition that is again coming from reducer as it receives the action the condition 
will be set to true and as the saga will dispatch next action on that condition will be set to false as images are 
loaded now.
*/
let Loading = ({ loading }) =>
  loading ? (
    <div style={{ textAlign: "center" }}>
      <h1>LOADING...</h1>
    </div>
  ) : null;
const mapStateToProps = (state) => ({ loading: state.ImageReducer.loading });
Loading = connect(mapStateToProps, null)(Loading);
export default Loading;
