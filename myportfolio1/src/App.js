
import mb from './images/menubar.png';
import about from './images/about.jpg';
import baner2 from './images/b2.png';
import baner3 from './images/b3.png';
import icon from './images/icon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
               <nav>
            <div class="logo">PORTFO<span>LIO</span></div>
            <div class="menu">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Skills</a>
                <a href="/">Services</a>
                <a href="/">Contact</a>
            </div>
        </nav>
        <div class="text">
            <p>Hello, I am</p>
            <h1> Shaikh Salman</h1>
            <p>And I am a <span id="#ani" style={{color:"#e74c3c"}}></span></p>
            <button class="c-btn">Hire me</button>
        </div>


      </header>
      <section id="sidenav">
       <img src={mb} id="menubar" alt="menu"/> 
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Skills</a>
            <a href="/">Services</a>
            <a href="/">Contact</a>
    </section>


    <section id="about">
        <div class="section-info">
            <h1>About</h1>
            <p>Who i am?</p>
        </div>
        <div class="about-row">
            <div class="about-left-col">
                 <img src={about} alt="about"/>
            </div>
            <div class="about-right-col"> 
                <p id="p-title"> Hello, I'm Shaikh Salman & I'm <span id="ani2" style={{color:"#e74c3c"}}></span></p>
                <p>
                    Hi, I'm Shaikh Salman and I graduated from the University of Amravati with a degree in Electronics and Telecommunication.
					My interests are in Front End Engineering, and I love to create beautiful and performant products with delightful user experiences.
                </p>
                <a href="pdf/html5.pdf" class="button_download">download Cv</a>
            </div>
        </div>
    </section>

     
    <section id="skills">
         <div class="section-info">
            <h1 style={{color: "white"}}>Skill's</h1>
            <p>Who i am?</p>
        </div>
        <div class="skills-row">
            <div class="skills-left-col">
                <p >
				As a web developer we Write well designed, testable, efficient code by using best software development practices.
				we Create website layout/user interfaces by using standard HTML, CSS, Bootsrap, Javascript and JQuery practices.
                   
                </p>
                <button class="c-btn">Read more</button>
            </div>
            <div class="skills-right-col">
                <div class="progress-div">
                <p>
                    <span>HTML</span><br/>
                    <progress value="90" max="100"></progress>
                    <span>90%</span>
                </p>
                <p>
                    <span>CSS</span><br/>
                    <progress value="80" max="100"></progress>
                   <span>80%</span>
                </p>
                <p>
                    <span>Bootstrap</span><br/>
                    <progress value="80" max="100"></progress>
                   <span>80%</span>
                </p>
                <p>
                    <span>javascript</span><br/>
                    <progress value="95" max="100"></progress>
                   <span>95%</span>
                </p>
                <p>
                    <span>JQuery</span><br/>
                    <progress value="85" max="100"></progress>
                   <span>85%</span>
                </p>
                </div>
            </div>
        </div>
        </section>
    
        <section id="services">
        <div class="section-info">
            <h1>Services</h1>
            <p>What we provide</p>
        </div>
        <div class="services-row">
            <div class="services-box" data-tilt>
            <img src={baner2} alt="baner2"/>
                <h2>Web Design</h2>
                <p>
                    A web design service provides you with a customized website design that's perfect for your business or personal website.
                </p>
            </div>
            <div class="services-box" data-tilt>
            <img src={baner2} alt="baner2"/>
                <h2>Web Development</h2>
                <p>
                    A Web Development service provides you design and construction of websites. We ensure that sites meet client expectations by ensuring they look good,
					run smoothly and offer easy access points with no loading issues between pages or error messages.
                </p>
            </div>
            <div class="services-box" data-tilt>
            <img src={baner2} alt="baner2"/>
                <h2>Mobil Apps Development</h2>
                <p>
                    In Mobile app development services we aimed at building iOS and Android applications that effectively complement or substitute websites.
                </p>
            </div>
        </div>
    </section>


    <section id="contact">
         <div class="section-info" style={{color:"white"}}>
            <h1>Get in Touch</h1>
            <p style={{color:"black"}}>We are Available</p>
        </div>

        <div  class="contact-row">
            <div class="contact-left-col">
            <img src={baner3} alt="baner3"/>
            </div>
            <div class="contact-right-col">
                <form action="mail.php" method="post" id="demo5">
                    <h2>Connect with us</h2>
                    <input type="text" name="name" required placeholder="Name"/>
                    <input type="email" name= "email" 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                    title="please enter valid email [test@test.com]." 
                    required placeholder="E-mail"/>
                    <br/>
                    <input type="tel" id="phone" name="phone" 
                    pattern="[0-9]{10}" required placeholder="Phone Number"/>
                    <br/>
                    <textarea cols="40" rows="10"
                     name="comment" placeholder=" write Message"></textarea>
                    <br/>
                    <button  class="c-btn">Submit</button>
                </form>
            </div>
        </div>
    </section>
    <section id="footer">
        <h2> Developed by <br/>Shaikh Salman </h2>
        <img src={icon} alt="icon"/>
    </section>








    </div>
  );
}

export default App;
