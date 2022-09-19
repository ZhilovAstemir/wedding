import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../store";
import {changeTest} from "../store/models/main";
import {useCallback} from "react";
import TestComponent from "../components/Test";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const state = useSelector<AppState>(state => state.main);

  const handleChangeTest = useCallback(
      () => {
        dispatch(changeTest());
      },
      [dispatch],
  );

  return (
    <div>
      <TestComponent />
    </div>
  )
}



export default Home
