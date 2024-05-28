import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { itemActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const fetchData = async () => {
      dispatch(fetchStatusActions.markFetchingStarted());

      try {
        const response = await fetch("http://localhost:8080/items");
        const data = await response.json();
        dispatch(itemActions.addInitialItems(data.items[0]));
        dispatch(fetchStatusActions.markFetchDone());
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        dispatch(fetchStatusActions.markFetchingFinished());
      }
    };

    fetchData();
  }, [fetchStatus.fetchDone, dispatch]);
  return <></>;
};

export default FetchItems;
