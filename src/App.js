import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import {Route, Routes} from 'react-router-dom';
import {Main} from './components/Main/Main.jsx'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="" element={<Main />}/>
                    <Route path="/profile/:userId" element={<ProfileContainer />}/>
                    <Route path='/profile' element={<ProfileContainer />} />
                    <Route path="/dialogs/*" element={<DialogsContainer />}/>
                    <Route path="/users/*" element={<UsersContainer />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;