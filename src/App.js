import './App.css';
import './main.css';
import first from './img/first_img.png';
import second from './img/second_img.png';
import third_one from './img/3_img (1).png';
import third_two from './img/3_img (4).png';
import third_three from './img/3_img (2).png';
import third_four from './img/3_img (3).png';
import ButtonToTop from "./ButtonToTop";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="header_top">
          <p id="logo">YKT SLESHER</p>
          <p id="BIG_TXT">DARK SIDE</p>
        </div>
        <div className="container">
          <div id="header_content">
            <p id="welcome_text">Welcome to DEMONS Realm, where shadows come alive and bloodthirsty creatures lurk in the darkest corners. Dare to enter this realm of  adventure, and supernatural forces.</p>
          </div>
          <button id="begin_btn">BEGIN YOUR JOURNEY</button>
          <div id="first_image">
            <img src={first} alt=""/>
          </div>
        </div>
      </header>
      <main className="main">
      <div className="container">
        <div id="main_text">
            <div id="second_image">
                <img src={second} alt=""></img>
            </div>
            <h1 id="first_heading">Unravel the Mystery</h1>
            <p className="main_text">Embark on an epic journey through haunting landscapes, filled with sinister beings and arcane powers. Explore an eerie universe where magic and darkness intertwine to create a thrilling experience like no other.</p>
            <p className="main_text">Combine battles with melee weaponswith dark fantasy elements to navigate treacherous paths, forge alliances and upgrade your resources in a relentless pursuit of justice and power.</p>
            <p className="main_text">Wield your strategy and wit, as you confront demons and other supernatural creatures in an enthralling crusade to uncover ancient secrets and destroy the king of the underworld from everlasting darkness.</p>
        </div>
        <div id="gallery">
            <h1 id="second_heading">Gallery</h1>
            <div className="img_gallery">
                <img src={third_one} alt="" id="first_img"></img>
                <img src={third_two} alt="" id="second_img"></img>
                <img src={third_three} alt="" id="third_img"></img>
                <img src={third_four} alt="" id="fourth_img"></img>
            </div>
        </div>
        <div id="reviews">
            <div className="review">
              <div className='Avatar'></div>
              <div className='Text'>Dark Side pulled me into a world of bloodlust and untamed power, a true masterpiece!</div>
              <div className='Name'>Alexandra Blackwood</div>
            </div>
            <div className="review">
              <div className='Avatar'></div>
              <div className='Text'>Dark Side pulled me into a world of bloodlust and untamed power, a true masterpiece!</div>
              <div className='Name'>Alexandra Blackwood</div>
            </div>
            <div className="review">
              <div className='Avatar'></div>
              <div className='Text'>Dark Side pulled me into a world of bloodlust and untamed power, a true masterpiece!</div>
              <div className='Name'>Alexandra Blackwood</div>
            </div>
        </div>
        <div className="joinPart">
          <div className="joinText">Ready to embrace the darkness and carve your own path through the shadowy underworld?</div>
          <button className="joinbtn" id="joinbtn">join the adventur</button>
          <button className="joinbtn" id="discoverbtn">discover more</button>
        </div>
    </div>
</main>
<ButtonToTop />
      <footer className="App-footer">
        <div className="footer">
          <div className="container">
            <div className="footer-btns">
              <div className="Explore">
              <p>Explore</p>
              <div className="footer-link">GAMEPLAY</div>
              <div className="footer-link">LOCATION</div>
              <div className="footer-link">FUNCTION</div>
              </div>
              <div className="Community">
                <p>Community</p>
                <div className="footer-link">FORUM</div>
                <div className="footer-link">BLOG</div>
                <div className="footer-link">NEWS</div>
                </div>
              <div className="Support">
                <p>Support</p>
                <div className="footer-link">FAQ</div>
                <div className="footer-link">CONTACT</div>
                <div className="footer-link">ABOUT US</div>
              </div>
            </div>
            <div className="Ishack">
              <p>© 2023 ISHACK TEAM</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
