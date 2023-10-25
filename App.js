import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
    
  return (
    <div>
      <Header logo_src={"/img/rock.png"}/>
      <Nav menu_items={[{title:"Новости", link:"/news"}, {title:"O нас", link:"/about"}]}/>
      <Footer contacts={"Наши Контакты"} copy={"Наши Копирайты"}/>
    </div>
  );
}
export default App;