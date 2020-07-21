import React, { useEffect } from "react";
import { default as Directory } from "../../components/directory-menu/directory-menu.container";
import { connect } from "react-redux";
import { HomePageContainer } from "./home.styles";
import { fetchDirectoryStart } from "../../redux/directory/directory.actions";

const HomePage = ({ fetchDirectoryStart }) => {
  useEffect(() => {
    fetchDirectoryStart();
  }, [fetchDirectoryStart]);
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchDirectoryStart: () => dispatch(fetchDirectoryStart()),
});

export default connect(null, mapDispatchToProps)(HomePage);
