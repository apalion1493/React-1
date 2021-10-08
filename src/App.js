import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyPosts from "./components/Profile/MyPosts/MyPosts";

const App = () => {
    return (
        <main className="App app-wrapper">
            <Header/>
            <Navbar/>
            <MyPosts/>
        </main>
    );
}

export default App;
