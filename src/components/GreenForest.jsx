import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import "./GreenForest.css"
const GreenForest = () => {
  return (
<>
  <div className="box-style">
    <div className="color-btn">
      <a href="#">
        <i className="fa fa-cog fa-spin" aria-hidden="true" />
      </a>
    </div>
    <div className="box-style-inner">
      <h3>Box Layout</h3>
      <div className="box-element">
        <div className="box-heading">
          <h5>HTML Layout</h5>
        </div>
        <div className="box-content">
          <ul className="box-customize">
            <li>
              <a className="boxed-btn" href="#">
                Boxed
              </a>
            </li>
            <li>
              <a className="wide-btn" href="#">
                Wide
              </a>
            </li>
            <li>
              <a className="rtl-btn" href="#">
                Rtl
              </a>
            </li>
            <li>
              <a className="ltl-btn" href="#">
                Ltl
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="box-element">
        <div className="box-heading">
          <h5>Backgroud Images</h5>
        </div>
        <div className="box-content">
          <ul className="box-bg-img">
            <li>
              <a className="bg-1" href="#">
                <img src="assets/images/01.jpg" alt="greenforest" />
              </a>
            </li>
            <li>
              <a className="bg-2" href="#">
                <img src="assets/images/02.jpg" alt="greenforest" />
              </a>
            </li>
            <li>
              <a className="bg-3" href="#">
                <img src="assets/images/03.jpg" alt="greenforest" />
              </a>
            </li>
            <li>
              <a className="bg-4" href="#">
                <img src="assets/images/04.jpg" alt="greenforest" />
              </a>
            </li>
            <li>
              <a className="bg-5" href="#">
                <img src="assets/images/05.jpg" alt="greenforest" />
              </a>
            </li>
            <li>
              <a className="bg-6" href="#">
                <img src="assets/images/06.jpg" alt="greenforest" />
              </a>
            </li>
            <li>
              <a className="bg-7" href="#">
                <img src="assets/images/07.jpg" alt="greenforest" />
              </a>
            </li>
            <li>
              <a className="bg-8" href="#">
                <img src="assets/images/08.jpg" alt="greenforest" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="box-element">
        <div className="box-heading">
          <h5>Backgroud Pattern</h5>
        </div>
        <div className="box-content">
          <ul className="box-pattern-img">
            <li>
              <a className="pt-1" href="#">
                <img
                  src="https://www.codexcoder.com/images/auror/pt-image/01.png"
                  alt="greenforest"
                />
              </a>
            </li>
            <li>
              <a className="pt-2" href="#">
                <img
                  src="https://www.codexcoder.com/images/auror/pt-image/02.png"
                  alt="greenforest"
                />
              </a>
            </li>
            <li>
              <a className="pt-3" href="#">
                <img
                  src="https://www.codexcoder.com/images/auror/pt-image/03.png"
                  alt="greenforest"
                />
              </a>
            </li>
            <li>
              <a className="pt-4" href="#">
                <img
                  src="https://www.codexcoder.com/images/auror/pt-image/04.png"
                  alt="greenforest"
                />
              </a>
            </li>
            <li>
              <a className="pt-5" href="#">
                <img
                  src="https://www.codexcoder.com/images/auror/pt-image/05.png"
                  alt="greenforest"
                />
              </a>
            </li>
            <li>
              <a className="pt-6" href="#">
                <img
                  src="https://www.codexcoder.com/images/auror/pt-image/06.png"
                  alt="greenforest"
                />
              </a>
            </li>
            <li>
              <a className="pt-7" href="#">
                <img
                  src="https://www.codexcoder.com/images/auror/pt-image/07.png"
                  alt="greenforest"
                />
              </a>
            </li>
            <li>
              <a className="pt-8" href="#">
                <img
                  src="https://www.codexcoder.com/images/auror/pt-image/08.png"
                  alt="greenforest"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Start Pre-Loader*/}
  <div id="loading" style={{ display: "none" }}>
    <div id="loading-center">
      <div id="loading-center-absolute">
        <div className="object" id="object_one" />
        <div className="object" id="object_two" />
        <div className="object" id="object_three" />
        <div className="object" id="object_four" />
      </div>
    </div>
  </div>
  {/* Start Pre-Loader */}
  <div className="box-layout">
    {/* End Pre-Loader */}
    <header className="header-style-2">
      <div className="bg-header-top">
        <div className="container">
          <div className="row">
            <div className="header-top">
              <ul className="h-contact">
                <li>
                  <i className="flaticon-time-left" /> Time : Tusday-Monday :
                  9:00am-6:00pm
                </li>
                <li>
                  <i className="flaticon-vibrating-phone" /> Phone : +88017 923
                  970 659
                </li>
                <li>
                  <i className="flaticon-placeholder" /> Address : Sute 07
                  Sahara Center
                </li>
              </ul>
              <div className="donate-option">
                <a href="donate.html">
                  <i className="fa fa-heart" aria-hidden="true" /> donate now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .bg-header-top */}
      {/* Start Menu */}
      <div className="bg-main-menu menu-scroll menu-fixed animated fadeInDown">
        <div className="container">
          <div className="row">
            <div className="main-menu">
              <div className="main-menu-bottom">
                <div className="navbar-header">
                  <a className="navbar-brand" href="index.html">
                    <img
                      src="assets/images/logo.png"
                      alt="logo"
                      className="img-responsive"
                    />
                  </a>
                  <button
                    type="button"
                    className="navbar-toggler collapsed d-lg-none"
                    data-bs-toggle="collapse"
                    data-bs-target="#bs-example-navbar-collapse-1"
                    aria-controls="bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="fa fa-bars" />
                    </span>
                  </button>
                </div>
                <div className="main-menu-area">
                  <div
                    className="navbar-collapse collapse"
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul>
                      <li className="menu-item-has-children">
                        <a href="#" className="active">
                          HOME
                        </a>
                        <ul className="sub-menu">
                          <li className="sub-active">
                            <a href="index.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Home Page one
                            </a>
                          </li>
                          <li>
                            <a href="home02.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Home Page two
                            </a>
                          </li>
                          <li>
                            <a href="home03.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Home Page three
                            </a>
                          </li>
                          <li>
                            <a href="home_box.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Home Box style
                            </a>
                          </li>
                          <li>
                            <a href="home_onepage.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Home One Page
                            </a>
                          </li>
                          <li>
                            <a href="index-rtl.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              الصفحة الرئيسية رتل
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Services</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="services.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Services
                            </a>
                          </li>
                          <li>
                            <a href="service_single.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Single Service
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">pages</a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="#">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Our Team
                            </a>
                            <ul className="sub-sub-menu">
                              <li>
                                <a href="team.html">
                                  <i
                                    className="fa fa-angle-double-right"
                                    aria-hidden="true"
                                  />{" "}
                                  Team
                                </a>
                              </li>
                              <li>
                                <a href="team_single.html">
                                  <i
                                    className="fa fa-angle-double-right"
                                    aria-hidden="true"
                                  />{" "}
                                  Single Team
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Our project
                            </a>
                            <ul className="sub-sub-menu">
                              <li>
                                <a href="project.html">
                                  <i
                                    className="fa fa-angle-double-right"
                                    aria-hidden="true"
                                  />{" "}
                                  Projects
                                </a>
                              </li>
                              <li>
                                <a href="project_single.html">
                                  <i
                                    className="fa fa-angle-double-right"
                                    aria-hidden="true"
                                  />{" "}
                                  Single Project
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Shop
                            </a>
                            <ul className="sub-sub-menu">
                              <li>
                                <a href="shop.html">
                                  <i
                                    className="fa fa-angle-double-right"
                                    aria-hidden="true"
                                  />{" "}
                                  Shop
                                </a>
                              </li>
                              <li>
                                <a href="shop_single.html">
                                  <i
                                    className="fa fa-angle-double-right"
                                    aria-hidden="true"
                                  />{" "}
                                  Single Shop
                                </a>
                              </li>
                              <li>
                                <a href="shop_cart.html">
                                  <i
                                    className="fa fa-angle-double-right"
                                    aria-hidden="true"
                                  />{" "}
                                  Shop Cart
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Campaign
                            </a>
                            <ul className="sub-sub-menu">
                              <li>
                                <a href="campaign.html">
                                  <i
                                    className="fa fa-angle-double-right"
                                    aria-hidden="true"
                                  />{" "}
                                  Campaign
                                </a>
                              </li>
                              <li>
                                <a href="campaign_single.html">
                                  <i
                                    className="fa fa-angle-double-right"
                                    aria-hidden="true"
                                  />{" "}
                                  Single Campaign
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="donate.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Donate Page
                            </a>
                          </li>
                          <li>
                            <a href="404_page.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              404 Page
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Events</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="event.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Events
                            </a>
                          </li>
                          <li>
                            <a href="event_single.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Single Event
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Blog
                            </a>
                          </li>
                          <li>
                            <a href="blog_02.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Blog style 02
                            </a>
                          </li>
                          <li>
                            <a href="blog_single.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Single Blog
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Gallery</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="gallery.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Gallery
                            </a>
                          </li>
                          <li>
                            <a href="gallery_02.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Gallery 02
                            </a>
                          </li>
                          <li>
                            <a href="gallery_03.html">
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                              />{" "}
                              Gallery 03
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">contacts</a>
                      </li>
                    </ul>
                    <div className="menu-right-option pull-right">
                      <div className="cart-option">
                        <div className="cart-icon">
                          <i
                            className="fa fa-shopping-cart"
                            aria-hidden="true"
                          />
                          <div className="count-cart">2</div>
                        </div>
                        {/* .cart-icon */}
                        <div className="cart-dropdown-menu">
                          <div className="cart-items">
                            <div className="cart-img">
                              <a href="single_shop_cat.html">
                                <img
                                  src="assets/images/cart-img-1.jpg"
                                  alt="cart-img-1"
                                />
                              </a>
                            </div>
                            <div className="cart-content">
                              <h6>
                                <a href="single_shop_cat.html">
                                  Product Title Here
                                </a>
                              </h6>
                              <p>
                                1*<span>$350</span>
                              </p>
                            </div>
                            <div className="cart-btn">
                              <a href="#">
                                <i
                                  className="fa fa-pencil"
                                  aria-hidden="true"
                                />
                              </a>
                              <a href="#">
                                <i className="fa fa-times" aria-hidden="true" />
                              </a>
                            </div>
                            <div className="clr" />
                          </div>
                          {/* .cart-items */}
                          <div className="cart-items">
                            <div className="cart-img">
                              <a href="#">
                                <img
                                  src="assets/images/cart-img-2.jpg"
                                  alt="cart-img-2"
                                />
                              </a>
                            </div>
                            <div className="cart-content">
                              <h6>
                                <a href="single_shop_cat.html">
                                  Product Title Here
                                </a>
                              </h6>
                              <p>
                                1*<span>$350</span>
                              </p>
                            </div>
                            <div className="cart-btn">
                              <a href="#">
                                <i
                                  className="fa fa-pencil"
                                  aria-hidden="true"
                                />
                              </a>
                              <a href="#">
                                <i className="fa fa-times" aria-hidden="true" />
                              </a>
                            </div>
                            <div className="clr" />
                          </div>
                          {/* .cart-items */}
                          <div className="cart-items">
                            <div className="cart-img">
                              <a href="#">
                                <img
                                  src="assets/images/cart-img-3.jpg"
                                  alt="cart-img-3"
                                />
                              </a>
                            </div>
                            <div className="cart-content">
                              <h6>
                                <a href="single_shop_cat.html">
                                  Product Title Here
                                </a>
                              </h6>
                              <p>
                                1*<span>$350</span>
                              </p>
                            </div>
                            <div className="cart-btn">
                              <a href="#">
                                <i
                                  className="fa fa-pencil"
                                  aria-hidden="true"
                                />
                              </a>
                              <a href="#">
                                <i className="fa fa-times" aria-hidden="true" />
                              </a>
                            </div>
                            <div className="clr" />
                          </div>
                          {/* .cart-items */}
                          <div className="total-price">
                            <p>
                              <span>Total Price :</span> $700{" "}
                            </p>
                          </div>
                          {/* .total-prices */}
                          <div className="checkout-btn">
                            <a href="#" className="btn btn-default">
                              donate now
                            </a>
                          </div>
                        </div>
                        {/* .cart-*/}
                      </div>
                      {/* .cart-option */}
                      <div className="search-box">
                        <i
                          className="fa fa-search first_click"
                          aria-hidden="true"
                          style={{ display: "block" }}
                        />
                        <i
                          className="fa fa-times second_click"
                          aria-hidden="true"
                          style={{ display: "none" }}
                        />
                      </div>
                      <div className="search-box-text">
                        <form action="search">
                          <input
                            type="text"
                            name="search"
                            id="all-search"
                            placeholder="Search Here"
                          />
                        </form>
                      </div>
                    </div>
                    {/* .header-search-box */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Start Slider Section */}
    <section className="bg-slider-option">
      <div className="slider-option slider-two">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={10000}>
              <div className="slider-item">
                <img
                  src="assets/images/slider-img-1.jpg"
                  alt="bg-slider-2"
                />
                <div className="slider-content-area">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6" />
                      <div className="col-md-6">
                        <div className="slider-content">
                          <h3>welcome to green forest</h3>
                          <h2>save the world</h2>
                          <p>By Planting Tree Tomorrow!</p>
                          <div className="slider-btn">
                            <a href="#" className="btn btn-default">
                              join now
                            </a>
                            <a href="donate.html" className="btn btn-default">
                              donate now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <div className="slider-item">
                <img
                  src="assets/images/slider-img-2.jpg"
                  alt="bg-slider-2"
                />
                <div className="slider-content-area">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6" />
                      <div className="col-md-6">
                        <div className="slider-content">
                          <h3>Donate &amp; help</h3>
                          <h2>For the Tree</h2>
                          <p>Greenforest html Template</p>
                          <div className="slider-btn">
                            <a href="#" className="btn btn-default">
                              join now
                            </a>
                            <a href="donate.html" className="btn btn-default">
                              donate now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slider-item">
                <img
                  src="assets/images/slider-img-3.jpg"
                  alt="bg-slider-2"
                />
                <div className="slider-content-area">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6" />
                      <div className="col-md-6">
                        <div className="slider-content">
                          <h3>welcome to green forest</h3>
                          <h2>save the world</h2>
                          <p>By Planting Tree Tomorrow!</p>
                          <div className="slider-btn">
                            <a href="#" className="btn btn-default">
                              join now
                            </a>
                            <a href="donate.html" className="btn btn-default">
                              donate now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="left carousel-control carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="right carousel-control carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
    {/* End Slider Section */}
    {/* Start About Greenforest Section */}
    <section className="bg-about-greenforest">
      <div className="container">
        <div className="row">
          <div className="about-greenforest">
            <div className="row">
              <div className="col-lg-8">
                <div className="about-greenforest-content">
                  <h2>about greenforest</h2>
                  <p>
                    <span>
                      Globaly eenable turnkey aplcations interndent awesome
                      andbenefisa tional awesome ascenarios exceptional
                      scenarios awesome theme strategies.
                    </span>
                  </p>
                  <p>
                    Globally eenable turnkey applications via interdependent
                    awesome andbenefitsa theme are awesome Uniquely formulate
                    impacful bandwidth with client centered creative
                    ianitiatives Interively productivate vertcal paradigms
                    before resource maximg convergence. Efciey diseminate
                    mtidisciplinary mindshare after clientcentered creative
                    theme experienvertcal paradigms before resource maximg
                    convergence. Efciey diseminate mindshare clientcentered
                    creative theme experiences.
                  </p>
                  <a href="#" className="btn btn-default">
                    join now
                  </a>
                  <a href="#" className="btn btn-default">
                    donate now
                  </a>
                </div>
                {/* .about-greenforest-content */}
              </div>
              {/* .col-lg-8 */}
              <div className="col-lg-4">
                <div className="about-greenforest-img">
                  <img
                    src="assets/images/about-greenforet-img.jpg"
                    alt="about-greenforet-img"
                    className="img-responsive"
                  />
                </div>
                {/* .about-greenforest-img */}
              </div>
              {/* .col-md-4 */}
            </div>
          </div>
          {/* .about-greenforest */}
        </div>
        {/* .row */}
      </div>
      {/* .container */}
    </section>
    {/* End About Greenforest Section */}
    {/* Start Recent Project Section */}
    <section className="bg-recent-project">
      <div className="container">
        <div className="row">
          <div className="recent-project">
            <div className="section-header">
              <h2>recent project</h2>
              <p>
                Professionally mesh enterprise wide imperatives without world
                class paradigms.Dynamically deliver ubiquitous leadership
                awesome skills.
              </p>
            </div>
            {/* .section-header */}
            <div id="filters" className="button-group ">
              <button className="button is-checked" data-filter="*">
                show all
              </button>
              <button className="button" data-filter=".cat-1">
                environment
              </button>
              <button className="button" data-filter=".cat-2">
                recycling
              </button>
              <button className="button" data-filter=".cat-3">
                ecology
              </button>
              <button className="button" data-filter=".cat-4">
                climate
              </button>
            </div>
            <div
              className="portfolio-items"
              style={{ position: "relative", height: "1911.5px",display:"flex" }}
            >
              <div
                className="item cat-1"
                data-category="transition"
                style={{ position: "absolute", left: 0, top: 0 }}
              >
                <div className="item-inner">
                  <div className="portfolio-img">
                    <div className="overlay-project" />
                    {/* .overlay-project */}
                    <img
                      src="assets/images/recent-project-img-1.jpg"
                      alt="recent-project-img-1"
                    />
                    <ul className="project-link-option">
                      <li className="project-link">
                        <a href="project_single.html">
                          <i className="fa fa-link" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="project-search">
                        <a
                          href="assets/images/recent-project-img-1.jpg"
                          data-rel="lightcase:myCollection"
                        >
                          <i className="fa fa-search-plus" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /.portfolio-img */}
                  <div className="recent-project-content">
                    <h4>
                      <a href="project_single.html">Sustainable Agriculture</a>
                    </h4>
                    <p>
                      By :{" "}
                      <span>
                        <a href="#">Green Forest</a>
                      </span>
                    </p>
                  </div>
                  {/* .latest-port-content */}
                </div>
                {/* .item-inner */}
              </div>
              {/* .items */}
              <div
                className="item cat-2 "
                data-category="metalloid"
                style={{ position: "absolute", left: 0, top: 324 }}
              >
                <div className="item-inner">
                  <div className="portfolio-img">
                    <div className="overlay-project" />
                    {/* .overlay-project */}
                    <img
                      src="assets/images/recent-project-img-2.jpg"
                      alt="recent-project-img-2"
                    />
                    <ul className="project-link-option">
                      <li className="project-link">
                        <a href="project_single.html">
                          <i className="fa fa-link" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="project-search">
                        <a
                          href="assets/images/recent-project-img-2.jpg"
                          data-rel="lightcase:myCollection"
                        >
                          <i className="fa fa-search-plus" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /.portfolio-img */}
                  <div className="recent-project-content">
                    <h4>
                      <a href="project_single.html">Helping Young Planting</a>
                    </h4>
                    <p>
                      By :{" "}
                      <span>
                        <a href="#">Green Forest</a>
                      </span>
                    </p>
                  </div>
                  {/* .latest-port-content */}
                </div>
                {/* .item-inner */}
              </div>
              {/* .items */}
              <div
                className="item cat-3 "
                data-category="post-transition"
                style={{ position: "absolute", left: 0, top: 649 }}
              >
                <div className="item-inner">
                  <div className="portfolio-img">
                    <div className="overlay-project" />
                    {/* .overlay-project */}
                    <img
                      src="assets/images/recent-project-img-3.jpg"
                      alt="recent-project-img-3"
                    />
                    <ul className="project-link-option">
                      <li className="project-link">
                        <a href="project_single.html">
                          <i className="fa fa-link" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="project-search">
                        <a
                          href="assets/images/recent-project-img-3.jpg"
                          data-rel="lightcase:myCollection"
                        >
                          <i className="fa fa-search-plus" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /.portfolio-img */}
                  <div className="recent-project-content">
                    <h4>
                      <a href="project_single.html">Need Solar Panels</a>
                    </h4>
                    <p>
                      By :{" "}
                      <span>
                        <a href="#">Green Forest</a>
                      </span>
                    </p>
                  </div>
                  {/* .latest-port-content */}
                </div>
                {/* .item-inner */}
              </div>
              {/* .items */}
              <div
                className="item cat-2"
                data-category="post-transition"
                style={{ position: "absolute", left: 0, top: 955 }}
              >
                <div className="item-inner">
                  <div className="portfolio-img">
                    <div className="overlay-project" />
                    {/* .overlay-project */}
                    <img
                      src="assets/images/recent-project-img-4.jpg"
                      alt="recent-project-img-4"
                    />
                    <ul className="project-link-option">
                      <li className="project-link">
                        <a href="project_single.html">
                          <i className="fa fa-link" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="project-search">
                        <a
                          href="assets/images/recent-project-img-4.jpg"
                          data-rel="lightcase:myCollection"
                        >
                          <i className="fa fa-search-plus" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /.portfolio-img */}
                  <div className="recent-project-content">
                    <h4>
                      <a href="project_single.html">Save The Ozone Layer</a>
                    </h4>
                    <p>
                      By :{" "}
                      <span>
                        <a href="#">Green Forest</a>
                      </span>
                    </p>
                  </div>
                  {/* .latest-port-content */}
                </div>
                {/* .item-inner */}
              </div>
              {/* .items */}
              <div
                className="item cat-4"
                data-category="transition"
                style={{ position: "absolute", left: 0, top: 1280 }}
              >
                <div className="item-inner">
                  <div className="portfolio-img">
                    <div className="overlay-project" />
                    {/* .overlay-project */}
                    <img
                      src="assets/images/recent-project-img-5.jpg"
                      alt="recent-project-img-5"
                    />
                    <ul className="project-link-option">
                      <li className="project-link">
                        <a href="project_single.html">
                          <i className="fa fa-link" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="project-search">
                        <a
                          href="assets/images/recent-project-img-5.jpg"
                          data-rel="lightcase:myCollection"
                        >
                          <i className="fa fa-search-plus" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /.portfolio-img */}
                  <div className="recent-project-content">
                    <h4>
                      <a href="project_single.html">Save Water From Polution</a>
                    </h4>
                    <p>
                      By :{" "}
                      <span>
                        <a href="#">Green Forest</a>
                      </span>
                    </p>
                  </div>
                  {/* .latest-port-content */}
                </div>
                {/* .item-inner */}
              </div>
              {/* .items */}
              <div
                className="item cat-1"
                data-category="alkali"
                style={{ position: "absolute", left: 0, top: 1605 }}
              >
                <div className="item-inner">
                  <div className="portfolio-img">
                    <div className="overlay-project" />
                    {/* .overlay-project */}
                    <img
                      src="assets/images/recent-project-img-6.jpg"
                      alt="recent-project-img-6"
                    />
                    <ul className="project-link-option">
                      <li className="project-link">
                        <a href="project_single.html">
                          <i className="fa fa-link" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="project-search">
                        <a
                          href="assets/images/recent-project-img-6.jpg"
                          data-rel="lightcase:myCollection"
                        >
                          <i className="fa fa-search-plus" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* /.portfolio-img */}
                  <div className="recent-project-content">
                    <h4>
                      <a href="project_single.html">Make Plants Alive</a>
                    </h4>
                    <p>
                      By :{" "}
                      <span>
                        <a href="#">Green Forest</a>
                      </span>
                    </p>
                  </div>
                  {/* .latest-port-content */}
                </div>
                {/* .item-inner */}
              </div>
              {/* .items */}
            </div>
            {/* .isotope-items */}
          </div>
          {/* .recent-project */}
        </div>
        {/* .row */}
      </div>
      {/* .container */}
    </section>
    {/* End Recent Project Section */}
    {/* Start Count Section */}
    <section className="bg-count2-section">
      <div className="count-overlay">
        <div className="container">
          <div className="row">
            <div className="count-option">
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="count-items">
                    <i className="flaticon-internet" />
                    <span className="counter" data-to={25} data-speed={1500}>
                      25
                    </span>
                    <span>+</span>
                    <h4>GLOBALIZATION WORK</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="count-items">
                    <i className="flaticon-man" />
                    <span className="counter" data-to={750} data-speed={1500}>
                      750
                    </span>
                    <span>+</span>
                    <h4>HAPPY DONATORS</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="count-items">
                    <i className="flaticon-rocket-launch" />
                    <span className="counter" data-to={250} data-speed={1500}>
                      250
                    </span>
                    <h4>SUCCESS MISSION</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="count-items">
                    <i className="flaticon-people" />
                    <span className="counter" data-to={1000} data-speed={1500}>
                      1,000
                    </span>
                    <h4>VOLUNTEER REACHED</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Count Section */}
    {/* Start Service Style2 Section */}
    <section className="bg-servicesstyle2-section">
      <div className="container">
        <div className="row">
          <div className="our-services-option">
            <div className="section-header">
              <h2>what we do</h2>
              <p>
                Professionally mesh enterprise wide imperatives without world
                class paradigms.Dynamically deliver ubiquitous leadership
                awesome skills.
              </p>
            </div>
            {/* .section-header */}
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="our-services-box">
                  <div className="our-services-items">
                    <i className="flaticon-greenhouse" />
                    <div className="our-services-content">
                      <h4>
                        <a href="service_single.html">Young Planting</a>
                      </h4>
                      <p>
                        Credibly utcost efective an expertise and web enabled
                        proces that improvements Completely seamless channels{" "}
                      </p>
                      <a href="service_single.html">
                        read more
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                    {/* .our-services-content */}
                  </div>
                  {/* .our-services-items */}
                </div>
                {/* .our-services-box */}
              </div>
              {/* .col-md-4 */}
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="our-services-box">
                  <div className="our-services-items">
                    <i className="flaticon-technology" />
                    <div className="our-services-content">
                      <h4>
                        <a href="service_single.html">Solar Panels</a>
                      </h4>
                      <p>
                        Credibly utcost efective an expertise and web enabled
                        proces that improvements Completely seamless channels{" "}
                      </p>
                      <a href="service_single.html">
                        read more
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                    {/* .our-services-content */}
                  </div>
                  {/* .our-services-items */}
                </div>
                {/* .our-services-box */}
              </div>
              {/* .col-md-4 */}
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="our-services-box">
                  <div className="our-services-items">
                    <i className="flaticon-light-bulb" />
                    <div className="our-services-content">
                      <h4>
                        <a href="service_single.html">Wind Energy</a>
                      </h4>
                      <p>
                        Credibly utcost efective an expertise and web enabled
                        proces that improvements Completely seamless channels{" "}
                      </p>
                      <a href="service_single.html">
                        read more
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                    {/* .our-services-content */}
                  </div>
                  {/* .our-services-items */}
                </div>
                {/* .our-services-box */}
              </div>
              {/* .col-md-4 */}
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="our-services-box">
                  <div className="our-services-items">
                    <i className="flaticon-recycling-symbol" />
                    <div className="our-services-content">
                      <h4>
                        <a href="service_single.html">Recycling</a>
                      </h4>
                      <p>
                        Credibly utcost efective an expertise and web enabled
                        proces that improvements Completely seamless channels{" "}
                      </p>
                      <a href="service_single.html">
                        read more
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                    {/* .our-services-content */}
                  </div>
                  {/* .our-services-items */}
                </div>
                {/* .our-services-box */}
              </div>
              {/* .col-md-4 */}
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="our-services-box">
                  <div className="our-services-items">
                    <i className="flaticon-sprout" />
                    <div className="our-services-content">
                      <h4>
                        <a href="service_single.html">Saving Forests</a>
                      </h4>
                      <p>
                        Credibly utcost efective an expertise and web enabled
                        proces that improvements Completely seamless channels{" "}
                      </p>
                      <a href="service_single.html">
                        read more
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                    {/* .our-services-content */}
                  </div>
                  {/* .our-services-items */}
                </div>
                {/* .our-services-box */}
              </div>
              {/* .col-md-4 */}
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="our-services-box">
                  <div className="our-services-items">
                    <i className="flaticon-droplet" />
                    <div className="our-services-content">
                      <h4>
                        <a href="service_single.html">Water Refining</a>
                      </h4>
                      <p>
                        Credibly utcost efective an expertise and web enabled
                        proces that improvements Completely seamless channels{" "}
                      </p>
                      <a href="service_single.html">
                        read more
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                    {/* .our-services-content */}
                  </div>
                  {/* .our-services-items */}
                </div>
                {/* .our-services-box */}
              </div>
              {/* .col-md-4 */}
            </div>
            {/* .row */}
          </div>
          {/* .our-services-option */}
        </div>
        {/* .row */}
      </div>
      {/* .container */}
    </section>
    {/* End Service Style2 Section */}
    {/* Start Focus Cause Section */}
    <section className="bg-focus-cause-section2">
      <div className="container">
        <div className="row">
          <div className="focus-cause">
            <div className="section-header">
              <h2>Focused Causes</h2>
              <p>
                Professionally mesh enterprise wide imperatives without world
                class paradigms.Dynamically deliver ubiquitous leadership
                awesome skills.
              </p>
            </div>
            {/* .section-header */}
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="cause-items">
                  <a href="campaign_single.html">
                    <img
                      src="assets/images/cause-img-1.jpg"
                      alt="cause-img-1"
                      className="img-responsive"
                    />
                  </a>
                  <div className="cause-content">
                    <div className="price-title">
                      <div className="price-left">
                        <h5>
                          Raised:<span>$25.000</span>
                        </h5>
                      </div>
                      {/* .price-left */}
                      <div className="price-right">
                        <h5>
                          Raised:<span>$50.000</span>
                        </h5>
                      </div>
                      {/* .price-left */}
                    </div>
                    {/* .price-title */}
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success progress-bar-striped"
                        role="progressbar"
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "50%" }}
                      ></div>
                      {/* .progress-bar */}
                    </div>
                    {/* .progress */}
                    <h4>
                      <a href="campaign_single.html">Sustainable Agriculture</a>
                    </h4>
                    <p>
                      Credibly iplement interopriable that a just Continually
                      cultivate awesome team.
                    </p>
                    <a href="donate.html" className="btn btn-default">
                      donate Now
                    </a>
                  </div>
                  {/* .cause-content */}
                </div>
                {/* .cause-items */}
              </div>
              {/* .col-md-4 */}
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="cause-items">
                  <a href="campaign_single.html">
                    <img
                      src="assets/images/cause-img-2.jpg"
                      alt="cause-img-2"
                      className="img-responsive"
                    />
                  </a>
                  <div className="cause-content">
                    <div className="price-title">
                      <div className="price-left">
                        <h5>
                          Raised:<span>$25.000</span>
                        </h5>
                      </div>
                      {/* .price-left */}
                      <div className="price-right">
                        <h5>
                          Raised:<span>$50.000</span>
                        </h5>
                      </div>
                      {/* .price-left */}
                    </div>
                    {/* .price-title */}
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success progress-bar-striped"
                        role="progressbar"
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "50%" }}
                      ></div>
                      {/* .progress-bar */}
                    </div>
                    {/* .progress */}
                    <h4>
                      <a href="campaign_single.html">Helping Young Planting</a>
                    </h4>
                    <p>
                      Credibly iplement interopriable that a just Continually
                      cultivate awesome team.
                    </p>
                    <a href="donate.html" className="btn btn-default">
                      donate Now
                    </a>
                  </div>
                  {/* .cause-content */}
                </div>
                {/* .cause-items */}
              </div>
              {/* .col-md-4 */}
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="cause-items">
                  <a href="campaign_single.html">
                    <img
                      src="assets/images/cause-img-3.jpg"
                      alt="cause-img-3"
                      className="img-responsive"
                    />
                  </a>
                  <div className="cause-content">
                    <div className="price-title">
                      <div className="price-left">
                        <h5>
                          Raised:<span>$25.000</span>
                        </h5>
                      </div>
                      {/* .price-left */}
                      <div className="price-right">
                        <h5>
                          Raised:<span>$50.000</span>
                        </h5>
                      </div>
                      {/* .price-left */}
                    </div>
                    {/* .price-title */}
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success progress-bar-striped"
                        role="progressbar"
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "50%" }}
                      ></div>
                      {/* .progress-bar */}
                    </div>
                    {/* .progress */}
                    <h4>
                      <a href="campaign_single.html">Make Plants Alive</a>
                    </h4>
                    <p>
                      Credibly iplement interopriable that a just Continually
                      cultivate awesome team.
                    </p>
                    <a href="donate.html" className="btn btn-default">
                      donate Now
                    </a>
                  </div>
                  {/* .cause-content */}
                </div>
                {/* .cause-items */}
              </div>
              {/* .col-md-4 */}
            </div>
            {/* .row */}
          </div>
          {/* .focus-cause */}
        </div>
        {/* .row */}
      </div>
      {/* .container */}
    </section>
    {/* End Focus Cause Section */}
    {/* Start campaian video Section */}
    <section className="bg-compaian-video">
      <div className="compaian-video-overlay">
        <div className="container">
          <div className="row">
            <div className="compaian-video">
              <a
                href="https://www.youtube.com/embed/imVlGxbHxEo"
                data-rel="lightcase:myCollection"
              >
                <img
                  src="assets/images/video-icon.png"
                  alt="video-icon"
                />
              </a>
              <h3>WATCH OUR LATEST CAMPAIGN VIDEO</h3>
            </div>
            {/* .compaian-video */}
          </div>
          {/* .row */}
        </div>
        {/* .container */}
      </div>
      {/* .compaian-video-overlay */}
    </section>
    {/* End campaian video Section */}
    {/* Start Collection Se Section */}
    <section className="bg-collection-section">
      <div className="container">
        <div className="row">
          <div className="collection-option">
            <div className="section-header">
              <h2>NEW COLLECTION</h2>
              <p>
                Professionally mesh enterprise wide imperatives without world
                class paradigms.Dynamically deliver ubiquitous leadership
                awesome skills.
              </p>
            </div>
            {/* .section-header */}
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="collection-items">
                  <div className="collection-img">
                    <div className="collection-overlay" />
                    <img
                      src="assets/images/collection-img-1.jpg"
                      alt="collection-img-1"
                    />
                    <ul className="collection-icon">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-cart-plus" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/images/collection-img-1.jpg"
                          data-rel="lightcase:myCollection"
                        >
                          <i className="fa fa-search" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* .collection-img */}
                  <div className="collection-content">
                    <h4>
                      <a href="shop_single.html">Product Text Here</a>
                    </h4>
                    <h5>$150.00</h5>
                    <ul className="star-icon">
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* .collection-content */}
                </div>
                {/* .collection-items */}
              </div>
              {/* .col-lg-3 */}
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="collection-items">
                  <div className="collection-img">
                    <div className="collection-overlay" />
                    <img
                      src="assets/images/collection-img-2.jpg"
                      alt="collection-img-2"
                    />
                    <ul className="collection-icon">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-cart-plus" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/images/collection-img-2.jpg"
                          data-rel="lightcase:myCollection"
                        >
                          <i className="fa fa-search" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* .collection-img */}
                  <div className="collection-content">
                    <h4>
                      <a href="shop_single.html">Product Text Here</a>
                    </h4>
                    <h5>$150.00</h5>
                    <ul className="star-icon">
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* .collection-content */}
                </div>
                {/* .collection-items */}
              </div>
              {/* .col-lg-3 */}
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="collection-items">
                  <div className="collection-img">
                    <div className="collection-overlay" />
                    <img
                      src="assets/images/collection-img-3.jpg"
                      alt="collection-img-3"
                    />
                    <ul className="collection-icon">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-cart-plus" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/images/collection-img-3.jpg"
                          data-rel="lightcase:myCollection"
                        >
                          <i className="fa fa-search" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* .collection-img */}
                  <div className="collection-content">
                    <h4>
                      <a href="shop_single.html">Product Text Here</a>
                    </h4>
                    <h5>$150.00</h5>
                    <ul className="star-icon">
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* .collection-content */}
                </div>
                {/* .collection-items */}
              </div>
              {/* .col-lg-3 */}
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="collection-items">
                  <div className="collection-img">
                    <div className="collection-overlay" />
                    <img
                      src="assets/images/collection-img-4.jpg"
                      alt="collection-img-4"
                    />
                    <ul className="collection-icon">
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-cart-plus" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/images/collection-img-4.jpg"
                          data-rel="lightcase:myCollection"
                        >
                          <i className="fa fa-search" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* .collection-img */}
                  <div className="collection-content">
                    <h4>
                      <a href="shop_single.html">Product Text Here</a>
                    </h4>
                    <h5>$150.00</h5>
                    <ul className="star-icon">
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-star" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* .collection-content */}
                </div>
                {/* .collection-items */}
              </div>
              {/* .col-lg-3 */}
            </div>
            {/* .row */}
          </div>
          {/* .collection-option */}
        </div>
        {/* .row */}
      </div>
      {/* .container */}
    </section>
    {/* End Collection Section */}
    {/* Start Upcoming Events Section */}
    <section className="bg-upcoming-events">
      <div className="container">
        <div className="row">
          <div className="upcoming-events">
            <div className="section-header">
              <h2>upcoming events</h2>
              <p>
                Professionally mesh enterprise wide imperatives without world
                class paradigms.Dynamically deliver ubiquitous leadership
                awesome skills.
              </p>
            </div>
            {/* .section-header */}
            <div className="row">
              <div className="col-lg-6">
                <div className="event-items">
                  <div className="event-img">
                    <a href="event_single.html">
                      <img
                        src="assets/images/upcoming-events-img-1.jpg"
                        alt="upcoming-events-img-1"
                        className="img-responsive"
                      />
                    </a>
                    <div className="date-box">
                      <h3>24</h3>
                      <h5>july</h5>
                    </div>
                    {/* .date-box */}
                  </div>
                  {/* .event-img */}
                  <div className="events-content">
                    <h3>
                      <a href="event_single.html">
                        Completely enable and before brcks
                      </a>
                    </h3>
                    <ul className="meta-post">
                      <li>
                        <i className="fa fa-clock-o" aria-hidden="true" />{" "}
                        8:30am - 5:30pm
                      </li>
                      <li>
                        <i className="flaticon-placeholder" /> Sahera Tropical
                        Center Dhaka
                      </li>
                    </ul>
                    <p>
                      Uniquely initiate out ofthe-box channels vis and vis
                      multidisciplnary Credbly orcahestrate granular scenarios
                      for forward manufactured Assertively negotiate multimedia
                      based total linkage rather.
                    </p>
                    <a href="event_single.html" className="btn btn-default">
                      join now
                    </a>
                  </div>
                  {/* .events-content */}
                </div>
                {/* .events-items */}
              </div>
              {/* .col-lg-6 */}
              <div className="col-lg-6">
                <div className="event-items">
                  <div className="event-img">
                    <a href="event_single.html">
                      <img
                        src="assets/images/upcoming-events-img-2.jpg"
                        alt="upcoming-events-img-2"
                        className="img-responsive"
                      />
                    </a>
                    <div className="date-box">
                      <h3>29</h3>
                      <h5>july</h5>
                    </div>
                    {/* .date-box */}
                  </div>
                  {/* .event-img */}
                  <div className="events-content">
                    <h3>
                      <a href="event_single.html">
                        Completely enable and before brcks
                      </a>
                    </h3>
                    <ul className="meta-post">
                      <li>
                        <i className="fa fa-clock-o" aria-hidden="true" />{" "}
                        8:30am - 5:30pm
                      </li>
                      <li>
                        <i className="flaticon-placeholder" /> Sahera Tropical
                        Center Dhaka
                      </li>
                    </ul>
                    <p>
                      Uniquely initiate out ofthe-box channels vis and vis
                      multidisciplnary Credbly orcahestrate granular scenarios
                      for forward manufactured Assertively negotiate multimedia
                      based total linkage rather.
                    </p>
                    <a href="event_single.html" className="btn btn-default">
                      join now
                    </a>
                  </div>
                  {/* .events-content */}
                </div>
                {/* .events-items */}
              </div>
              {/* .col-lg-6 */}
            </div>
            {/* .row */}
          </div>
          {/* .upcoming-events */}
        </div>
        {/* .row */}
      </div>
      {/* .container */}
    </section>
    {/* End Upcoming Events Section */}
    {/* Start Sponsors Section */}
    <section className="bg-sponsors-section">
      <div className="container">
        <div className="row">
          <div className="sponsors-option">
            <div className="section-header">
              <h2>top sponsors</h2>
              <p>
                Professionally mesh enterprise wide imperatives without world
                class paradigms.Dynamically deliver ubiquitous leadership
                awesome skills.
              </p>
            </div>
            {/* .section-header */}
            <div className="sponsors-container swiper-container-horizontal">
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide swiper-slide-active"
                  style={{ width: 257, marginRight: 10 }}
                >
                  <div className="sopnsors-items">
                    <a href="#">
                      <img
                        src="assets/images/sponsors-img-1.jpg"
                        alt="sponsors-img-1"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  {/* .sponsors-items */}
                </div>
                {/* .swiper-slide */}
                <div
                  className="swiper-slide swiper-slide-next"
                  style={{ width: 257, marginRight: 10 }}
                >
                  <div className="sopnsors-items">
                    <a href="#">
                      <img
                        src="assets/images/sponsors-img-2.jpg"
                        alt="sponsors-img-2"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  {/* .sponsors-items */}
                </div>
                {/* .swiper-slide */}
                <div
                  className="swiper-slide"
                  style={{ width: 257, marginRight: 10 }}
                >
                  <div className="sopnsors-items">
                    <a href="#">
                      <img
                        src="assets/images/sponsors-img-3.jpg"
                        alt="sponsors-img-3"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  {/* .sponsors-items */}
                </div>
                {/* .swiper-slide */}
                <div
                  className="swiper-slide"
                  style={{ width: 257, marginRight: 10 }}
                >
                  <div className="sopnsors-items">
                    <a href="#">
                      <img
                        src="assets/images/sponsors-img-4.jpg"
                        alt="sponsors-img-4"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  {/* .sponsors-items */}
                </div>
                {/* .swiper-slide */}
                <div
                  className="swiper-slide"
                  style={{ width: 257, marginRight: 10 }}
                >
                  <div className="sopnsors-items">
                    <a href="#">
                      <img
                        src="assets/images/sponsors-img-1.jpg"
                        alt="sponsors-img-1"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  {/* .sponsors-items */}
                </div>
                {/* .swiper-slide */}
                <div
                  className="swiper-slide"
                  style={{ width: 257, marginRight: 10 }}
                >
                  <div className="sopnsors-items">
                    <a href="#">
                      <img
                        src="assets/images/sponsors-img-2.jpg"
                        alt="sponsors-img-2"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  {/* .sponsors-items */}
                </div>
                {/* .swiper-slide */}
                <div
                  className="swiper-slide"
                  style={{ width: 257, marginRight: 10 }}
                >
                  <div className="sopnsors-items">
                    <a href="#">
                      <img
                        src="assets/images/sponsors-img-3.jpg"
                        alt="sponsors-img-3"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  {/* .sponsors-items */}
                </div>
                {/* .swiper-slide */}
              </div>
              {/* .swiper-wrapper */}
            </div>
            {/* .sponsors-container */}
          </div>
          {/* .sponsors-option */}
        </div>
        {/* .row */}
      </div>
      {/* .container */}
    </section>
    {/* End Sponsors Section */}
    {/* Start Footer Section */}
    <footer>
      <div className="bg-footer-top">
        <div className="container">
          <div className="row">
            <div className="footer-top">
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="footer-widgets">
                    <div className="widgets-title">
                      <h3>About us</h3>
                    </div>
                    {/* .widgets-title */}
                    <div className="widgets-content">
                      <p>
                        Distily enable team driven services through extensive is
                        a relatonships platforms with interactive content.
                        Enthusiastically scale effective.
                      </p>
                    </div>
                    {/* .widgets-content */}
                    <div className="address-box">
                      <ul className="address">
                        <li>
                          <i className="fa fa-home" aria-hidden="true" />
                          <span>New Chokoya Road, USA.</span>
                        </li>
                        <li>
                          <i className="fa fa-phone" aria-hidden="true" />
                          <span>+8801 923 970 698.</span>
                        </li>
                        <li>
                          <i className="fa fa-envelope-o" aria-hidden="true" />
                          <span>Contact@admin.com</span>
                        </li>
                        <li>
                          <i className="fa fa-globe" aria-hidden="true" />
                          <span>Emai@admin.com</span>
                        </li>
                      </ul>
                    </div>
                    {/* .address */}
                  </div>
                  {/* .footer-widgets */}
                </div>
                {/* .col-lg-3 */}
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="footer-widgets">
                    <div className="widgets-title">
                      <h3>Latest News</h3>
                    </div>
                    {/* .widgets-title */}
                    <ul className="latest-news">
                      <li>
                        <span className="thumbnail-img">
                          <img
                            src="assets/images/small-bog-img-1.jpg"
                            alt="small-bog-img-1"
                            className="img-responsive"
                          />
                        </span>
                        <div className="thumbnail-content">
                          <h5>
                            <a href="blog_single.html">
                              Corem psum dolr them amectetuer adipiscing...
                            </a>
                          </h5>
                          <span className="post-date">04 February 2017</span>
                        </div>
                        {/* .thumbnail-content */}
                      </li>
                      <li>
                        <span className="thumbnail-img">
                          <img
                            src="assets/images/small-bog-img-2.jpg"
                            alt="small-bog-img-2"
                            className="img-responsive"
                          />
                        </span>
                        <div className="thumbnail-content">
                          <h5>
                            <a href="blog_single.html">
                              Mirum est notare quam littera gothica nunc...
                            </a>
                          </h5>
                          <span className="post-date">28 January 2017</span>
                        </div>
                        {/* .thumbnail-content */}
                      </li>
                      <li>
                        <span className="thumbnail-img">
                          <img
                            src="assets/images/small-bog-img-3.jpg"
                            alt="small-bog-img-3"
                            className="img-responsive"
                          />
                        </span>
                        <div className="thumbnail-content">
                          <h5>
                            <a href="blog_single.html">
                              Corem psum dolr them amectetuer adipiscing...
                            </a>
                          </h5>
                          <span className="post-date">03 January 2017</span>
                        </div>
                        {/* .thumbnail-content */}
                      </li>
                    </ul>
                  </div>
                  {/* .footer-widgets */}
                </div>
                {/* .col-lg-3 */}
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="footer-widgets">
                    <div className="widgets-title">
                      <h3>Twitter Widget</h3>
                    </div>
                    {/* .widgets-title */}
                    <ul className="twitter-widget">
                      <li>
                        <div className="twitter-icon">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </div>
                        <div className="twitter-content">
                          <h5>
                            Raritas etiam processus a theme dynamicus sequitur{" "}
                            <a href="#">http://admin@gmail.com</a>
                          </h5>
                          <span className="post-date">03 January 2017</span>
                        </div>
                        {/* .twitter-content */}
                      </li>
                      <li>
                        <div className="twitter-icon">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </div>
                        <div className="twitter-content">
                          <h5>
                            Duis autem vel eum <a href="#">#iriure</a>dolor in
                            hendrerit in vulputate{" "}
                          </h5>
                          <span className="post-date">8 months ago</span>
                        </div>
                        {/* .twitter-content */}
                      </li>
                      <li>
                        <div className="twitter-icon">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </div>
                        <div className="twitter-content">
                          <h5>
                            <a href="#">@frankdoe</a> am liber tempor cum soluta
                            nobis eleifend
                          </h5>
                          <span className="post-date">03 January 2017</span>
                        </div>
                        {/* .twitter-content */}
                      </li>
                    </ul>
                  </div>
                  {/* .footer-widgets */}
                </div>
                {/* .col-lg-3 */}
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="footer-widgets">
                    <div className="widgets-title">
                      <h3>Recent Photos</h3>
                    </div>
                    {/* .widgets-title */}
                    <div className="footer-instagram">
                      <a href="#">
                        <img
                          src="assets/images/footer-instagram-img-1.jpg"
                          alt="footer-instagram-img-1"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/footer-instagram-img-2.jpg"
                          alt="footer-instagram-img-2"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/footer-instagram-img-3.jpg"
                          alt="footer-instagram-img-3"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/footer-instagram-img-4.jpg"
                          alt="footer-instagram-img-4"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/footer-instagram-img-5.jpg"
                          alt="footer-instagram-img-5"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/footer-instagram-img-6.jpg"
                          alt="footer-instagram-img-6"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/footer-instagram-img-7.jpg"
                          alt="footer-instagram-img-7"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/footer-instagram-img-8.jpg"
                          alt="footer-instagram-img-8"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/footer-instagram-img-9.jpg"
                          alt="footer-instagram-img-9"
                        />
                      </a>
                    </div>
                    {/* .footer-instagram */}
                  </div>
                  {/* .footer-widgets */}
                </div>
                {/* .col-lg-3 */}
              </div>
              {/* .row */}
            </div>
            {/* .footer-top */}
          </div>
          {/* .row */}
        </div>
        {/* .container */}
      </div>
      {/* .bg-footer-top */}
      <div className="bg-footer-bottom">
        <div className="container">
          <div className="row">
            <div className="footer-bottom">
              <div className="copyright-txt">
                <p>
                  © 2017. Designer By{" "}
                  <a href="#" title="Al-Amin(Web Designer)">
                    LabArtisan
                  </a>
                </p>
              </div>
              {/* .copyright-txt */}
              <div className="social-box">
                <ul className="social-icon-rounded">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-vimeo" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-pinterest-p" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* .social-box */}
            </div>
            {/* .footer-bottom */}
          </div>
          {/* .row */}
        </div>
        {/* .container */}
      </div>
      {/* .bg-footer-bottom */}
    </footer>
    {/* End Footer Section */}
    {/* Start Scrolling */}
    <div className="scroll-img" style={{ display: "block" }}>
      <i className="fa fa-angle-up" aria-hidden="true" />
    </div>
    {/* End Scrolling */}
  </div>
</>

  )
}

export default GreenForest