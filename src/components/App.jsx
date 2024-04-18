import {Routes, Route} from "react-router-dom"
import {SharedLayout} from './SharedLayout'
import{HomePage} from '../pages/Home'
export const App = () => {
  return (
    <Routes>
   
      <Route path="/" element={<SharedLayout/>}>
      <Route index element={<HomePage/>} />
    {/* <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    > */}

    {/* </div> */}
    </Route>
    </Routes>
  );
};
