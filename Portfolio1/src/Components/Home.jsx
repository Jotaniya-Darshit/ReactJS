import React, { useEffect, useState,useRef } from 'react'
import 'boxicons'
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAward, faCalendar, faGraduationCap, faHeadphones, faNavicon, faServer, faShareAlt, faSuitcase, faSwatchbook, faArrowRight, faGrip, faCode, faPenToSquare, faClock, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faInstagram, faFacebookMessenger, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'

export default function Home() {
  const [activeTab, setActiveTab] = useState('#frontend');

  useEffect(() => {
    const tabs = document.querySelectorAll('[data-target]');
    const tabContent = document.querySelectorAll('[data-content]');

    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach(tabContents => {
          tabContents.classList.remove("skills__active");
        });

        target.classList.add("skills__active");

        tabs.forEach(tab => {
          tab.classList.remove("skills__active");
        });

        tab.classList.add("skills__active");
      });
    });

    return () => {
      tabs.forEach(tab => {
        tab.removeEventListener("click", () => { });
      });
    };
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePortfolioPopup = () => {
    setIsPopupOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const popup = document.querySelector(".portfolio__popup");
      const button = document.querySelector(".work__button");

      if (popup && !popup.contains(e.target) && !button.contains(e.target)) {
        setIsPopupOpen(false);  
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  const [focusStates, setFocusStates] = useState({
    username: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleFocus = (field) => {
    setFocusStates((prevState) => ({ ...prevState, [field]: true }));
  };

  const handleBlur = (field, value) => {
    if (value === "") {
      setFocusStates((prevState) => ({ ...prevState, [field]: false }));
    }
  };


  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const navHighlighter = () => {
      let scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(`.nav__menu a[href*="${sectionId}"]`)
            .classList.add("active-link");
        } else {
          document
            .querySelector(`.nav__menu a[href*="${sectionId}"]`)
            .classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", navHighlighter);

    return () => {
      window.removeEventListener("scroll", navHighlighter);
    };
  }, []);

    const navMenuRef = useRef(null);
    const navToggleRef = useRef(null);
    const navCloseRef = useRef(null);
  
    const handleToggleClick = () => {
      navMenuRef.current.classList.add("show-slidebar");
    };
  
    const handleCloseClick = () => {
      navMenuRef.current.classList.remove("show-slidebar");
    };

  return (

    <div>
      <div className="nav__toggle" id="nav-toggle" ref={navToggleRef} onClick={handleToggleClick}> 
        <FontAwesomeIcon icon={faNavicon} className='social__share' />

      </div>
      <aside className='slidebar' id='slidebar'>
        <nav id="slidebar" ref={navMenuRef}>
          <div className="nav__logo">
            <a href="" className="nav__logo-text">D</a>
          </div>

          <div className="nav__menu">
            <div className="menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link">Home</a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">About</a>
                </li>
                <li className="nav__item">
                  <a href="#skills" className="nav__link">Skills</a>
                </li>
                <li className="nav__item">
                  <a href="#work" className="nav__link">Work</a>
                </li>
                {/* <li className="nav__item">
                  <a href="#services" className="nav__link">Services</a>
                </li> */}
                <li className="nav__item">
                  <a href="#contact" className="nav__link">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="btn__share">
            <FontAwesomeIcon icon={faShareAlt} className='social__share' />
          </div>

          <div className="nav__close" id="nav-close" ref={navCloseRef} onClick={handleCloseClick}>
            <FontAwesomeIcon icon={faClock} className='social__share' />

          </div>
        </nav>
      </aside>

      <div className="main">
        <section className="home" id='home'>
          <div className="home__container container grid">
            <div className="home__social">
              <span className="home__social-follow">Follow Me</span>
              <div className="home__social-links">
                <a href="https://www.facebook.com/" className="home__social-link" target='_blank'>
                  <FontAwesomeIcon icon={faFacebookF} className='social__share' />
                </a>
                <a href="https://www.instagram.com/" className="home__social-link" target='_blank'>
                  <FontAwesomeIcon icon={faInstagram} className='social__share' />
                </a>
                <a href="https://twitter.com/" className="home__social-link" target='_blank'>
                  <FontAwesomeIcon icon={faTwitter} className='social__share' />
                </a>
              </div>
            </div>

            <img src="./1st.svg" alt="" className="home__img" />

            <div className="home__data">
              <h1 className="home__title">Hi, I'am Darshit</h1>
              <h3 className="home__subtitle">Frontend Developer</h3>
              <p className="home__description">High-level experience in web design and development knowledge, producing quality work.</p>
              <a href="" className="button">
                <FontAwesomeIcon icon={faUser} className='button__icon' />
                More About Me
              </a>
            </div>

            <div className="my__info">
              <div className="info__item">
                <FontAwesomeIcon icon={faFacebookMessenger} className='info__icon' />
                <div>
                  <h3 className="info__title">Messenger</h3>
                  <span className="info__subtitle">user.fb123</span>
                </div>
              </div>
              <div className="info__item">
                <FontAwesomeIcon icon={faWhatsapp} className='info__icon' />
                <div>
                  <h3 className="info__title">Whatsapp</h3>
                  <span className="info__subtitle">9265717401</span>
                </div>
              </div>
              <div className="info__item">
                <FontAwesomeIcon icon={faEnvelope} className='info__icon' />
                <div>
                  <h3 className="info__title">Email</h3>
                  <span className="info__subtitle">darshitjotaniya1235@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about section" id='about'>
          <h2 data-heading="My intro" className="section__title">About Me</h2>

          <div className="about__container container grid">
            <img src="./2ed.svg" alt="" className='about__img' />

            <div className="about__data">
              <h3 className="about__heading">Hi, I'm Darshit Jotaniya, Based in Rajkot</h3>
              <p className="about__description">
                Web developer, with extensive knowledge and years of experience in web technologies and UI/UX design, delivering quality work.
              </p>

              <div className="about__info grid">
                <div className="about__box">
                  <FontAwesomeIcon icon={faAward} className='about__icon' />
                  <h3 className="about__title">Experience</h3>
                  <span className="about__subtitle">1 year</span>
                </div>

                <div className="about__box">
                  <FontAwesomeIcon icon={faSuitcase} className='about__icon' />
                  <h3 className="about__title">Completed</h3>
                  <span className="about__subtitle">40+ Projects</span>
                </div>

                <div className="about__box">
                  <FontAwesomeIcon icon={faHeadphones} className='about__icon' />
                  <h3 className="about__title">Support</h3>
                  <span className="about__subtitle">Online 24/7</span>
                </div>
              </div>
              <a href="#contact" className="button">
                <FontAwesomeIcon icon={faNavicon} className='button__icon' />
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <h2 data-heading="My Joueney" className='section__title'>My Experience</h2>

          <div className="skills__container container grid">
            <div className="skill__tabs">
              <div
                className={`skills__header ${activeTab === '#frontend' ? 'skills__active' : ''}`}
                onClick={() => setActiveTab('#frontend')}
                data-target="#frontend">
                <i className="uill uill-brackets-curly skills__icon"></i>
                <div>
                  <h1 className="skills__title">Frontend Developer</h1>
                  <span className="skills__subtitle">More than 2 years</span>
                </div>
                <FontAwesomeIcon icon={faAngleDown} className='skills__arrow' />
              </div>
            </div>

            <div className="skills__content">
              {activeTab === '#frontend' && (
                <div className="skills__group skills__active">
                  <div className="skills__list grid">
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__number">95%</span>
                      </div>

                      <div className="skills__bar">
                        <span className="skills__parecentage" style={{ width: "95%" }}></span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__number">95%</span>
                      </div>

                      <div className="skills__bar">
                        <span className="skills__parecentage" style={{ width: "95%" }}></span>
                      </div>
                    </div>



                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__number">80%</span>
                      </div>

                      <div className="skills__bar">
                        <span className="skills__parecentage" style={{ width: "80%" }}></span>
                      </div>
                    </div>



                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">React</h3>
                        <span className="skills__number">85%</span>
                      </div>

                      <div className="skills__bar">
                        <span className="skills__parecentage" style={{ width: "85%" }}></span>
                      </div>
                    </div>
                  </div>                </div>
              )}

              {activeTab === '#design' && (
                <div className="skills__group skills__active">
                  <div className="skills__list grid">
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Figma</h3>
                        <span className="skills__number">90%</span>
                      </div>

                      <div className="skills__bar">
                        <span className="skills__parecentage" style={{ width: "95%" }}></span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Sketch</h3>
                        <span className="skills__number">95%</span>
                      </div>

                      <div className="skills__bar">
                        <span className="skills__parecentage" style={{ width: "95%" }}></span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Photoshop</h3>
                        <span className="skills__number">80%</span>
                      </div>

                      <div className="skills__bar">
                        <span className="skills__parecentage" style={{ width: "80%" }}></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === '#backend' && (
                <div className="skills__group skills__active">
                  <div className="skills__list grid">
                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__number">95%</span>
                      </div>

                      <div className="skills__bar">
                        <span className="skills__parecentage" style={{ width: "95%" }}></span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">Phython</h3>
                        <span className="skills__number">95%</span>
                      </div>

                      <div className="skills__bar">
                        <span className="skills__parecentage" style={{ width: "95%" }}></span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">My SQL</h3>
                        <span className="skills__number">80%</span>
                      </div>

                      <div className="skills__bar">
                        <span className="skills__parecentage" style={{ width: "80%" }}></span>
                      </div>
                    </div>

                    <div className="skills__data">
                      <div className="skills__titles">
                        <h3 className="skills__name">React</h3>
                        <span className="skills__number">85%</span>
                      </div>

                      <div className="skills__bar">
                        <span className="skills__parecentage" style={{ width: "85%" }}></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="work__section" id="work">
          <h2 data-heading="My Portfolio" className="section__title">Recent Works</h2>

          <div className="work__filters">
            <span className="work__item active-work">All</span>
            <span className="work__item">Web</span>
            <span className="work__item">App</span>
            <span className="work__item">Design</span>
          </div>

          <div className="work__container container grid">
            <div className="work__card">
              <img src="BlinkIt.png" alt="" className='work__img' />
              <h3 className="work__title">BlinkIt</h3>
              <span className="work__button"><a className='color' target='blank' href="https://blinkit.com/">Demo</a>
                <FontAwesomeIcon icon={faArrowRight} className='work__button-icon' />
              </span>
              <div className="portfolio__item-details">
                <h3 className="details__title">The Services Provide for design</h3>
                <p className="details__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quaerat, laudantium nam qui eveniet, voluptates nulla reprehenderit dignissimos debitis corrupti similique aperiam. Ullam quaerat quia voluptates laborum iste obcaecati culpa?</p>

                <ul className="details__info">
                  <li>Created - <span>4 Dec 2020</span></li>
                  <li>Technologies - <span>html css</span></li>
                  <li>Role - <span>Frontend</span></li>
                  <li>View - <span><a href="#">www.domain.com</a></span></li>
                </ul>
              </div>
            </div>

            <div className="work__card">
              <img src="Myntra.png" alt="" className='work__img' />
              <h3 className="work__title">Myntra</h3>
              <span className="work__button"><a className='color' target='blank' href="https://blinkit.com/">Demo</a>
                <FontAwesomeIcon icon={faArrowRight} className='work__button-icon' />
              </span>
              <div className="portfolio__item-details">
                <h3 className="details__title">mobile app landing design & app maintain.</h3>
                <p className="details__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quaerat, laudantium nam qui eveniet, voluptates nulla reprehenderit dignissimos debitis corrupti similique aperiam. Ullam quaerat quia voluptates laborum iste obcaecati culpa?</p>

                <ul className="details__info">
                  <li>Created - <span>4 Dec 2020</span></li>
                  <li>Technologies - <span>html css</span></li>
                  <li>Role - <span>Frontend</span></li>
                  <li>View - <span><a href="#">www.domain.com</a></span></li>
                </ul>
              </div>
            </div>

            <div className="work__card">
              <img src="FlipKart.png" alt="" className='work__img' />
              <h3 className="work__title">FlipKart</h3>
              <span className="work__button"><a target='blank' className='color' href="https://www.flipkart.com/">Demo</a>
                <FontAwesomeIcon icon={faArrowRight} className='work__button-icon' />
              </span>
              <div className="portfolio__item-details">
                <h3 className="details__title">Logo design Creative & Application</h3>
                <p className="details__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quaerat, laudantium nam qui eveniet, voluptates nulla reprehenderit dignissimos debitis corrupti similique aperiam. Ullam quaerat quia voluptates laborum iste obcaecati culpa?</p>

                <ul className="details__info">
                  <li>Created - <span>4 Dec 2020</span></li>
                  <li>Technologies - <span>html css</span></li>
                  <li>Role - <span>Frontend</span></li>
                  <li>View - <span><a href="#">www.domain.com</a></span></li>
                </ul>
              </div>
            </div>

            <div className="work__card">
              <img src="Zepto.png" alt="" className='work__img' />
              <h3 className="work__title">Zepto</h3>
              <span className="work__button"><a target='blank' className='color' href="https://www.zeptonow.com/">Demo</a>
                <FontAwesomeIcon icon={faArrowRight} className='work__button-icon' />
              </span>
              <div className="portfolio__item-details">
                <h3 className="details__title">Mobile app landing design & Services</h3>
                <p className="details__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quaerat, laudantium nam qui eveniet, voluptates nulla reprehenderit dignissimos debitis corrupti similique aperiam. Ullam quaerat quia voluptates laborum iste obcaecati culpa?</p>

                <ul className="details__info">
                  <li>Created - <span>4 Dec 2020</span></li>
                  <li>Technologies - <span>html css</span></li>
                  <li>Role - <span>Frontend</span></li>
                  <li>View - <span><a href="#">www.domain.com</a></span></li>
                </ul>
              </div>
            </div>

            <div className="work__card">
              <img src="Amazon.png" alt="" className='work__img' />
              <h3 className="work__title">Amazon</h3>
              <span className="work__button"> <a className='color' target='blank' href="https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=674842289437&hvpos=&hvnetw=g&hvrand=4788947563789731541&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007759&hvtargid=kwd-10573980&hydadcr=14453_2316415&gad_source=1">Demo</a>
                <FontAwesomeIcon icon={faArrowRight} className='work__button-icon' />
              </span>
              <div className="portfolio__item-details">
                <h3 className="details__title">Design for technology & services</h3>
                <p className="details__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quaerat, laudantium nam qui eveniet, voluptates nulla reprehenderit dignissimos debitis corrupti similique aperiam. Ullam quaerat quia voluptates laborum iste obcaecati culpa?</p>

                <ul className="details__info">
                  <li>Created - <span>4 Dec 2020</span></li>
                  <li>Technologies - <span>html css</span></li>
                  <li>Role - <span>Frontend</span></li>
                  <li>View - <span><a href="#">www.domain.com</a></span></li>
                </ul>
              </div>
            </div>

            <div className="work__card">
              <img src="Screenshot 2024-12-31 000612.png" alt="" className='work__img' />
              <h3 className="work__title">Web Design</h3>
              <span className="work__button">Demo
                <FontAwesomeIcon icon={faArrowRight} className='work__button-icon' />
              </span>
              <div className="portfolio__item-details">
                <h3 className="details__title">App for technology & services</h3>
                <p className="details__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quaerat, laudantium nam qui eveniet, voluptates nulla reprehenderit dignissimos debitis corrupti similique aperiam. Ullam quaerat quia voluptates laborum iste obcaecati culpa?</p>

                <ul className="details__info">
                  <li>Created - <span>4 Dec 2020</span></li>
                  <li>Technologies - <span>html css</span></li>
                  <li>Role - <span>Frontend</span></li>
                  <li>View - <span><a href="#">www.domain.com</a></span></li>
                </ul>
              </div>
            </div>

          </div>
        </section>

{/* 
        <section className="services section" id="services">
          <h2 data-heading="Services" className='section__title'>What I Offer</h2>

          <div className="services__container container grid">
            <div className="services__content">
              <div>
                <FontAwesomeIcon icon={faGrip} className='services__icon' />
                <h3 className="services__title">Web <br /> Designer</h3>
              </div>
              <span className="services__button">
                View More
                <FontAwesomeIcon icon={faArrowRight} className='services__icon' />
              </span>

              <div className="services__modal">
                <div className="services__modal-content">
                  <FontAwesomeIcon icon={faClock} className='services__icon' />

                  <h3 className='services__modal-title'>Web Designer</h3>
                  <p className="services__modal-description">Services with more then 3 years of experience.
                    Providing quality work to clients and companies.
                  </p>

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <FontAwesomeIcon icon={faCircleCheck} className='services__icon' />
                      <p className="services__modal-info">I develop the user interface</p>
                    </li>
                    <li className="services__modal-service">
                      <FontAwesomeIcon icon={faCircleCheck} className='services__icon' />
                      <p className="services__modal-info">Web page development.</p>
                    </li>
                    <li className="services__modal-service">
                      <FontAwesomeIcon icon={faCircleCheck} className='services__icon' />
                      <p className="services__modal-info">I position your company brand.</p>
                    </li>
                    <li className="services__modal-service">
                      <FontAwesomeIcon icon={faCircleCheck} className='services__icon' />
                      <p className="services__modal-info">Design and mockup of products for compaines.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="services__content">
              <div>
                <FontAwesomeIcon icon={faCode} className='services__icon' />
                <h3 className="services__title">UI / UX <br /> Designer</h3>
              </div>

              <span className="services__button">
                View More
                <FontAwesomeIcon icon={faArrowRight} className='services__icon' />
              </span>

              <div className="services__modal">
                <div className="services__modal-content">
                  <FontAwesomeIcon icon={faClock} className='services__icon' />

                  <h3 className='services__modal-title'>UI / UX Designer</h3>
                  <p className="services__modal-description">Services with more then 3 years of experience.
                    Providing quality work to clients and companies.
                  </p>

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <FontAwesomeIcon icon={faCircleCheck} className='services__icon' />
                      <p className="services__modal-info">I develop the user interface</p>
                    </li>
                    <li className="services__modal-service">
                      <FontAwesomeIcon icon={faCircleCheck} className='services__icon' />
                      <p className="services__modal-info">Web page development.</p>
                    </li>
                    <li className="services__modal-service">
                      <FontAwesomeIcon icon={faCircleCheck} className='services__icon' />
                      <p className="services__modal-info">I position your company brand.</p>
                    </li>
                    <li className="services__modal-service">
                      <FontAwesomeIcon icon={faCircleCheck} className='services__icon' />
                      <p className="services__modal-info">Design and mockup of products for compaines.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="services__content">
              <div>
                <FontAwesomeIcon icon={faPenToSquare} className='services__icon' />

                <h3 className="services__title">Branding <br /> Designer</h3>
              </div>

              <span className="services__button">
                View More
                <FontAwesomeIcon icon={faArrowRight} className='services__icon' />
              </span>

              <div className="services__modal">
                <div className="services__modal-content">
                  <FontAwesomeIcon icon={faClock} className='services__icon' />

                  <h3 className='services__modal-title'>Branding Designer</h3>
                  <p className="services__modal-description">Services with more then 3 years of experience.
                    Providing quality work to clients and companies.
                  </p>

                  <ul className="services__modal-services grid">
                    <li className="services__modal-service">
                      <FontAwesomeIcon icon={faCircleCheck} className='services__icon' />
                      <p className="services__modal-info">I develop the user interface</p>
                    </li>
                    <li className="services__modal-service">
                      <FontAwesomeIcon icon={faCircleCheck} className='services__icon' />
                      <p className="services__modal-info">Web page development.</p>
                    </li>
                    <li className="services__modal-service">
                      <FontAwesomeIcon icon={faCircleCheck} className='services__icon' />
                      <p className="services__modal-info">I position your company brand.</p>
                    </li>
                    <li className="services__modal-service">
                      <FontAwesomeIcon icon={faCircleCheck} className='services__icon' />
                      <p className="services__modal-info">Design and mockup of products for compaines.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}



        {/* <section className="testmonials section">
          <h2 data-heading="My clients say" className="section__title">Testtimonials</h2>

          <div className="testimonials__container container">
            <div>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="testimonial__card mySwiper">
                    <div className="testimonial__quote">
                      <box-icon type='solid' name='quote-alt-left'></box-icon>
                    </div>
                    <p className="testimonial__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque sed impedit, laboriosam tempora sit quam sequi quos nesciunt inventore consectetur ullam architecto quae magni ipsam. Ea numquam eos adipisci porro!</p>

                    <h3 className="testimonial__date">March 27. 2020</h3>
                    <div className="testmonial__profile">
                      <img src="" alt="" className="testimonial__profile-img" />

                      <div className="testimonial__profile-data">
                        <span className="testimonial__profile-name">Lee Doe</span>
                        <span className="testimonial__profile-detail">   Director of a company</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial__card mySwiper">
                    <div className="testimonial__quote">
                      <box-icon type='solid' name='quote-alt-left'></box-icon>
                    </div>
                    <p className="testimonial__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque sed impedit, laboriosam tempora sit quam sequi quos nesciunt inventore consectetur ullam architecto quae magni ipsam. Ea numquam eos adipisci porro!</p>

                    <h3 className="testimonial__date">March 27. 2020</h3>
                    <div className="testmonial__profile">
                      <img src="" alt="" className="testimonial__profile-img" />

                      <div className="testimonial__profile-data">
                        <span className="testimonial__profile-name">Lee Doe</span>
                        <span className="testimonial__profile-detail">   Director of a company</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial__card mySwiper">
                    <div className="testimonial__quote">
                      <box-icon type='solid' name='quote-alt-left'></box-icon>
                    </div>
                    <p className="testimonial__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque sed impedit, laboriosam tempora sit quam sequi quos nesciunt inventore consectetur ullam architecto quae magni ipsam. Ea numquam eos adipisci porro!</p>

                    <h3 className="testimonial__date">March 27. 2020</h3>
                    <div className="testmonial__profile">
                      <img src="" alt="" className="testimonial__profile-img" />

                      <div className="testimonial__profile-data">
                        <span className="testimonial__profile-name">Lee Doe</span>
                        <span className="testimonial__profile-detail">   Director of a company</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section> */}

        <section className="contact section" id="contact">
          <h2 className="section__title" data-heading="Get in Touch">Contact Me</h2>

          <div className="contact__container container grid">
            <div className="contact__content">
              <div className="contact__info">
                <div className="contact__card">
                  <FontAwesomeIcon icon={faEnvelope} className='contact__card-icon' />
                  <h3 className="contact__card-title">Email</h3>
                  <span className="contact__card-subtitle">darshitjotaniya1235@gmail.com</span>
                  <span className="contact__button">
                    Write me
                    <FontAwesomeIcon icon={faArrowRight} className='contact__button-icon' />
                  </span>
                </div>

                <div className="contact__card">
                  <FontAwesomeIcon icon={faWhatsapp} className='contact__card-icon' />
                  <h3 className="contact__card-title">Whatsapp</h3>
                  <span className="contact__card-subtitle">+91 92657 17401</span>
                  <span className="contact__button">
                    Write me
                    <FontAwesomeIcon icon={faArrowRight} className='contact__button-icon' />
                  </span>
                </div>

                <div className="contact__card">
                  <FontAwesomeIcon icon={faFacebookMessenger} className='contact__card-icon' />
                  <h3 className="contact__card-title">Facebook</h3>
                  <span className="contact__card-subtitle">usr.fb123</span>
                  <span className="contact__button">
                    Write me
                    <FontAwesomeIcon icon={faArrowRight} className='contact__button-icon' />
                  </span>
                </div>
              </div>
            </div>
            <div className="contact__content">
              <form action="" className="contact__form">
                <div
                  className={`input__container ${focusStates.username ? "focus" : ""
                    }`}
                >
                  <input
                    type="text"
                    className="input"
                    onFocus={() => handleFocus("username")}
                    onBlur={(e) => handleBlur("username", e.target.value)}
                  />
                  <label>Username</label>
                  <span>Username</span>
                </div>

                <div
                  className={`input__container ${focusStates.email ? "focus" : ""
                    }`}
                >
                  <input
                    type="email"
                    className="input"
                    onFocus={() => handleFocus("email")}
                    onBlur={(e) => handleBlur("email", e.target.value)}
                  />
                  <label>Email</label>
                  <span>Email</span>
                </div>

                <div
                  className={`input__container ${focusStates.phone ? "focus" : ""
                    }`}
                >
                  <input
                    type="tel"
                    className="input"
                    onFocus={() => handleFocus("phone")}
                    onBlur={(e) => handleBlur("phone", e.target.value)}
                  />
                  <label>Phone</label>
                  <span>Phone</span>
                </div>

                <div
                  className={`input__container ${focusStates.message ? "focus" : ""
                    }`}
                >
                  <textarea
                    className="input"
                    onFocus={() => handleFocus("message")}
                    onBlur={(e) => handleBlur("message", e.target.value)}
                  ></textarea>
                  <label>Message</label>
                  <span>Message</span>
                </div>

                <button className="button" type="submit">
                  <FontAwesomeIcon icon={faNavicon} className="contact__card-icon" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>


        <footer className="footer">
          <div className="footer__bg">
            <div className="footer__container container grid">
              <div>
                <h1 className="footer__title">Darshit</h1>
                <sapn className="footer__subtitle">Frontend developer</sapn>
              </div>

              <ul className="footer__links">
                <li>
                  <a href="#services" className='footer__link'>Services</a>
                </li>
                <li>
                  <a href="#work" className='footer__link'>Work</a>
                </li>
                <li>
                  <a href="#contact" className='footer__link'>Contact</a>
                </li>
              </ul>

              <div className="footer__socials">
                <a href="https://www.facebook.com/" className="footer__social" target='_blank'>
                  <FontAwesomeIcon icon={faFacebookF} className='social__share' />
                </a>
                <a href="https://www.instagram.com/" className="footer__social" target='_blank'>
                  <FontAwesomeIcon icon={faInstagram} className='social__share' />
                </a>
                <a href="https://twitter.com/" className="footer__social" target='_blank'>
                  <FontAwesomeIcon icon={faTwitter} className='social__share' />
                </a>
              </div>
            </div>

            <p className="footer__copy">&#169; Darshit Jotaniya. All right reserved</p>
          </div>
        </footer>
      </div>
    </div>

  );
}
