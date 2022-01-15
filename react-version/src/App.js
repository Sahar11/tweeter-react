import './App.css';
import Navigation from './components/Navigation.js';
import Profile from './components/Profile.js';
import TweetList from './components/TweetList.js';
import TweetForm from './components/TweetForm.js';
function App() {
  return (

    <div className="App">
      <Navigation />
      <Profile />
      <main className = "container">
      <TweetForm />
      <TweetList />
      
      </main>
    </div>
  );
}

export default App;
