import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./redux/store";
import { getData} from "./redux/storeSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalWindow from "./components/ModalWindow";

import RecursiveComponent from "./components/RecursiveComponent";
import Status from "./components/Status";
import CollapseButtons from "./components/CollapseButtons";

function App() {

    const dispatch = useDispatch()
    const {data, status} = useSelector((state: RootState) => {
        return state.store
    })

    useEffect(() => {//@ts-ignore
        if (status === 'firstStart' || status === 'added' ) {
            //@ts-ignore
            dispatch(getData())
        }
    }, [dispatch, status])

    return (
        <div className={'main'}>
            <ModalWindow/>
            <Status/>
            <CollapseButtons/>
            <RecursiveComponent data={[data]} />
        </div>
    )
}

export default App;

