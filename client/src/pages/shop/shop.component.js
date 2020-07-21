import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
const CollectionsOverview = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);

const CollectionPage = lazy(() => import("../collection/collection.container"));
const Shoppage = ({ match, isLoading, fetchCollectionsStart }) => {
  useEffect(() => {
    if (match.isExact) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 55,
        behavior: "smooth",
      });
    }
  }, [match.isExact]);

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path={match.path} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Switch>
    </Suspense>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shoppage);
