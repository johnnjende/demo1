export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes"> */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=yes"
      />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="Jimish Gajjar" name="developer" />
      <link
        rel="icon"
        href="images/logoNebulaBlack.svg"
        type="image/png"
        sizes="80x80"
      />
      <title>Nebula</title>
      {/* Plugin Css */}
      <link rel="stylesheet" href="assets/css/plugins.css" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="assets/css/main.css" />
      <link href="assets/fonts/TiemposHeadline-Light.otf" rel="stylesheet" />
      <link href="assets/fonts/TiemposHeadline-Regular.otf" rel="stylesheet" />
      <link href="assets/fonts/TiemposHeadline-Semibold.otf" rel="stylesheet" />
      {/*  Pre Loader  */}
      {/* <div style="height: 100vh !important;"> */}
      {/* <div class="loader-cent"> */}
      <div id="loader"></div>
      {/* </div> */}
      {/* </div> */}
      <div id="pagepiling" className="pilling-page">
        {/*   Header Start */}
        <header>
          {/* <div class="logo-area">
              <a href="#hero" class="logo">
                  <img class="img-responsive" align="center" src="images/logoNebulaReduit.svg" alt="" style="height:100px;">
              </a>
          </div> */}
          <div className="header-info-area">
            <a className="overlay-menu-toggler rightClass" href="#Contact">
              Contact Us
            </a>
            {/* <a class="overlay-menu-toggler " href="https://www.google.com" target="blank">Blog</a> */}
            <a className="overlay-menu-toggler " href="#" target="blank">
              Blog
            </a>
          </div>
        </header>
        {/*   Header End   */}
        {/*  Section 1  */}
        <section
          id="AnAward"
          className="section "
          data-navigation-tooltip=" Innovation "
        >
          <header>
            <div className="logo-area">
              <a href="#hero" className="logo">
                <img
                  className="img-responsive"
                  align="center"
                  src="images/nebulaFontNoirPetit.svg"
                  alt=""
                  style={{ height: 100 }}
                />
              </a>
            </div>
          </header>
          <div className="display-table">
            <div className="display-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="border-small montserrat">
                      An Innovation &amp; Excellence company
                    </div>
                    <h2 className="tiempos font-90">
                      Empowering Businesses
                      <br />
                      Through Transformative
                      <br />
                      Cloud Solutions.
                    </h2>
                    <div className="montserrat">
                      Our team of seasoned experts specialize in providing
                      comprehensive cloud consulting services, delivering tailored
                      strategies and implementation plans to drive your digital
                      transformation.
                    </div>
                  </div>
                </div>
              </div>
              <div align="center">
                {/* Right Side Bar */}
                <a href="#Adaptive" id="down-errow">
                  <i className="go-down">
                    <svg
                      className="  "
                      version="1.1"
                      viewBox="0 0 10 30"
                      height={30}
                      width={30}
                      style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "1.41421"
                      }}
                    >
                      <defs />
                      <g id="scroll">
                        <path
                          d="M3.684,26.563l0,-16.792c0,-0.568 0.472,-1.028 1.053,-1.028c0.54,0 0.985,0.397 1.045,0.908l0.007,0.12l0,16.792l1.947,-1.63c0.441,-0.369 1.106,-0.319 1.484,0.112c0.35,0.398 0.333,0.982 -0.019,1.36l-0.095,0.09l-3.684,3.086c-0.361,0.303 -0.88,0.328 -1.268,0.076l-0.102,-0.076l-3.684,-3.086c-0.442,-0.369 -0.493,-1.019 -0.115,-1.45c0.35,-0.398 0.943,-0.471 1.379,-0.19l0.106,0.078l1.946,1.63Zm1.053,-26.563c-2.035,0 -3.684,1.612 -3.684,3.6c0,1.988 1.649,3.6 3.684,3.6c2.035,0 3.684,-1.612 3.684,-3.6c0,-1.988 -1.649,-3.6 -3.684,-3.6Zm0,2.057c0.872,0 1.579,0.691 1.579,1.543c0,0.852 -0.707,1.543 -1.579,1.543c-0.872,0 -1.579,-0.691 -1.579,-1.543c0,-0.852 0.707,-1.543 1.579,-1.543Z"
                          style={{ fill: "black" }}
                        />
                      </g>
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*  Section 1  */}
        {/*  Section 2  */}
        <section
          id="Adaptive"
          className="section section-black pp-scrollablea"
          data-navigation-tooltip="Strategic"
        >
          <header>
            <div className="logo-area">
              <a href="#hero" className="logo">
                <img
                  className="img-responsive"
                  align="center"
                  src="images/nebulaFontBlancPetit.svg"
                  alt=""
                  style={{ height: 100 }}
                />
              </a>
            </div>
          </header>
          <div className="display-table">
            <div className="display-content">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <div className="border-small montserrat">
                      Strategic Guidance
                    </div>
                    <h2 className="tiempos font-40" style={{ marginTop: "10%" }}>
                      Successful Cloud Adoption Requires <br />a Well-defined
                      Strategy
                    </h2>
                    <br />
                    <div className="montserrat">
                      <span className="block montserrat">
                        Our team works closely with you to develop a customized
                        roadmap, ensuring that your cloud initiatives align with
                        your organizational goals, scalability needs, and cost
                        considerations.
                      </span>
                    </div>
                  </div>
                  {/* <div class="col-md-12">
                              <img class="img-responsive rp-img extraMargin" align="center" src="images/page1.svg"
                                  alt="" style="height:500px; width: 500px;" >
                          </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Section 2  */}
        {/*  Section 3  */}
        <section
          id="Methdology"
          className="section pp-scrollablea"
          data-navigation-tooltip="Clouds"
        >
          <header>
            <div className="logo-area">
              <a href="#hero" className="logo">
                <img
                  className="img-responsive"
                  align="center"
                  src="images/nebulaFontNoirPetit.svg"
                  alt=""
                  style={{ height: 100 }}
                />
              </a>
            </div>
          </header>
          <div className="display-table">
            <div className="display-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="border-small montserrat">Supported Clouds</div>
                    <h2 className="tiempos font-40" style={{ marginTop: "10%" }}>
                      AWS, Azure, Salesforce &amp; <br />
                      Google Cloud
                    </h2>
                    <br />
                    <div className="montserrat">
                      <span className="block montserrat">
                        Our consultants possess deep knowledge and hands-on
                        experience with a wide range of cloud platforms and
                        services. We stay at the forefront of cloud innovations,
                        enabling us to provide cutting-edge solutions that align
                        with your unique business requirements. Whether a startup or
                        Fortune 500, we are here to help.
                      </span>
                    </div>
                  </div>
                  {/* <div class="col-md-12">
                              <img class="img-responsive rp-img" align="center" src="images/page2.svg" alt="">
                          </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Section 3  */}
        {/*  Section 4  */}
        <section
          id="ProcessOriented"
          className="section pp-scrollablea section-black"
          data-navigation-tooltip="Services about Cloud Strategy "
        >
          <header>
            <div className="logo-area">
              <a href="#hero" className="logo">
                <img
                  className="img-responsive"
                  align="center"
                  src="images/nebulaFontBlancPetit.svg"
                  alt=""
                  style={{ height: 100 }}
                />
              </a>
            </div>
          </header>
          <div className="display-table">
            <div className="display-content">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <div className="border-small montserrat">Our Services</div>
                    <h2 className="tiempos font-40" style={{ marginTop: "10%" }}>
                      Cloud Strategy Development
                    </h2>
                    <br />
                    <div className="montserrat">
                      <span className="block montserrat">
                        We assess your business objectives and IT infrastructure,
                        crafting a comprehensive cloud strategy tailored to your
                        needs. Our experts help you choose the right cloud model
                        (public, private, or hybrid), identify optimal cloud
                        services, and outline a roadmap for successful adoption.
                      </span>
                    </div>
                  </div>
                  {/* <div class="col-md-12">
                              <img class="img-responsive rp-img" align="center" src="images/page3.svg" alt="">
                          </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Section 4  */}
        {/*  Section 5  */}
        <section
          id="Methodologytwo"
          className="section pp-scrollablea"
          data-navigation-tooltip="Services about Cloud Migration "
        >
          <header>
            <div className="logo-area">
              <a href="#hero" className="logo">
                <img
                  className="img-responsive"
                  align="center"
                  src="images/nebulaFontNoirPetit.svg"
                  alt=""
                  style={{ height: 100 }}
                />
              </a>
            </div>
          </header>
          <div className="display-table">
            <div className="display-content">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <div className="border-small montserrat">Our Services</div>
                    <h2 className="tiempos font-40" style={{ marginTop: "10%" }}>
                      Cloud Migration and Deployment
                    </h2>
                    <br />
                    <div className="montserrat">
                      <span className="block montserrat">
                        We guide you through the entire migration process, from
                        planning and data transfer to application refactoring and
                        deployment.
                      </span>
                    </div>
                  </div>
                  {/* <div class="col-md-12">
                              <img class="img-responsive rp-img" align="center" src="images/page4.svg" alt="">
                          </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Section 5  */}
        {/*  Section 6  */}
        <section
          id="Iterative"
          className="section pp-scrollablea section-black"
          data-navigation-tooltip="Services about cloud Architecture"
        >
          <header>
            <div className="logo-area">
              <a href="#hero" className="logo">
                <img
                  className="img-responsive"
                  align="center"
                  src="images/nebulaFontBlancPetit.svg"
                  alt=""
                  style={{ height: 100 }}
                />
              </a>
            </div>
          </header>
          <div className="display-table">
            <div className="display-content">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <div className="border-small montserrat">Our Services</div>
                    <h2 className="tiempos font-40" style={{ marginTop: "10%" }}>
                      Cloud Infrastructure Architecture
                    </h2>
                    <br />
                    <div className="montserrat">
                      <span className="block montserrat">
                        We design and implement scalable and resilient cloud
                        architectures, leveraging the best cloud services and
                        solutions. Our experts optimize resource utilization,
                        implement automation, and ensure fault tolerance, enabling
                        your business to scale effortlessly.
                      </span>
                    </div>
                  </div>
                  {/* <div class="col-md-12">
                              <img class="img-responsive rp-img" align="center" src="images/page5.svg" alt="">
                          </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Section 7  */}
        {/*  Section 8  */}
        <section
          id="Methodologytwo1"
          className="section pp-scrollablea"
          data-navigation-tooltip="Services about Cloud Cost Optimization "
        >
          <header>
            <div className="logo-area">
              <a href="#hero" className="logo">
                <img
                  className="img-responsive"
                  align="center"
                  src="images/nebulaFontNoirPetit.svg"
                  alt=""
                  style={{ height: 100 }}
                />
              </a>
            </div>
          </header>
          <div className="display-table">
            <div className="display-content">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <div className="border-small montserrat">Our Services</div>
                    <h2 className="tiempos font-40" style={{ marginTop: "10%" }}>
                      Cloud Cost Optimization
                    </h2>
                    <br />
                    <div className="montserrat">
                      <span className="block montserrat">
                        We help you optimize your cloud spending, identifying
                        cost-saving opportunities and implementing effective
                        strategies to maximize your return on investment.
                      </span>
                    </div>
                  </div>
                  {/* <div class="col-md-12">
                              <img class="img-responsive rp-img" align="center" src="images/cloudCost.png" alt="">
                          </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Section 9  */}
        {/*  Section 10 */}
        <section
          id="Iterative1"
          className="section pp-scrollablea section-black"
          data-navigation-tooltip="Services about Cloud Security"
        >
          <header>
            <div className="logo-area">
              <a href="#hero" className="logo">
                <img
                  className="img-responsive"
                  align="center"
                  src="images/nebulaFontBlancPetit.svg"
                  alt=""
                  style={{ height: 100 }}
                />
              </a>
            </div>
          </header>
          <div className="display-table">
            <div className="display-content">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <div className="border-small montserrat">Our Services</div>
                    <h2 className="tiempos font-40" style={{ marginTop: "10%" }}>
                      Cloud Security and Governance
                    </h2>
                    <br />
                    <div className="montserrat">
                      <span className="block montserrat">
                        We prioritize the security of your cloud environment. Our
                        consultants conduct thorough assessments, implement robust
                        security controls, and establish governance frameworks to
                        protect your data and meet regulatory requirements.
                      </span>
                    </div>
                  </div>
                  {/*  <div class="col-md-12">
                              <img class="img-responsive rp-img" align="center" src="images/page7.svg" alt="">
                          </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Section 11 */}
        {/*  Section 12 */}
        <section
          id="Methodologytwo3"
          className="section pp-scrollablea"
          data-navigation-tooltip="Services about Cloud Managed Services  "
        >
          <header>
            <div className="logo-area">
              <a href="#hero" className="logo">
                <img
                  className="img-responsive"
                  align="center"
                  src="images/nebulaFontNoirPetit.svg"
                  alt=""
                  style={{ height: 100 }}
                />
              </a>
            </div>
          </header>
          <div className="display-table">
            <div className="display-content">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <div className="border-small montserrat">Our Services</div>
                    <h2 className="tiempos font-40" style={{ marginTop: "10%" }}>
                      Cloud Managed Services
                    </h2>
                    <br />
                    <div className="montserrat">
                      <span className="block montserrat">
                        We offer ongoing management and support for your cloud
                        infrastructure. From monitoring and performance optimization
                        to troubleshooting and updates, our experts ensure your
                        cloud environment operates at peak efficiency while you
                        focus on your core business.
                      </span>
                    </div>
                  </div>
                  {/* <div class="col-md-12">
                              <img class="img-responsive rp-img" align="center" src="images/page8.svg" alt="">
                          </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Section 13 */}
        {/*  Section 14 */}
        <section
          id="Iterative2"
          className="section pp-scrollablea section-black"
          data-navigation-tooltip="Services about Agile Project Management"
        >
          <header>
            <div className="logo-area">
              <a href="#hero" className="logo">
                <img
                  className="img-responsive"
                  align="center"
                  src="images/nebulaFontBlancPetit.svg"
                  alt=""
                  style={{ height: 100 }}
                />
              </a>
            </div>
          </header>
          <div className="display-table">
            <div className="display-content">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <div className="border-small montserrat">Our Services</div>
                    <h2 className="tiempos font-40" style={{ marginTop: "10%" }}>
                      Agile Project Management
                    </h2>
                    <br />
                    <div className="montserrat">
                      <span className="block montserrat">
                        We provide expert Agile project management services,
                        assisting you in project planning, backlog management,
                        sprint execution, and stakeholder engagement. Our Agile
                        project managers ensure projects are delivered on time,
                        within budget, and to the highest quality standards.
                      </span>
                    </div>
                  </div>
                  {/* <div class="col-md-12">
                              <img class="img-responsive rp-img" align="center" src="images/page9.svg" alt="">
                          </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Section 13 */}
        {/*  Section 14 */}
        <section
          id="Contact"
          className="section pp-scrollablea section-black"
          data-navigation-tooltip="Say hi"
        >
          <header>
            <div className="logo-area">
              <a href="#hero" className="logo">
                <img
                  className="img-responsive"
                  align="center"
                  src="images/nebulaFontBlancPetit.svg"
                  alt=""
                  style={{ height: 100 }}
                />
              </a>
            </div>
          </header>
          <div className="display-table">
            <div className="display-content">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="border-small montserrat">Say hi,</div>
                    <h2 className="tiempos font-40" style={{ marginTop: "10%" }}>
                      Working on something cool?
                    </h2>
                    <h2 className="tiempos font-40" style={{ marginBottom: "5%" }}>
                      Great, we want to help!
                    </h2>
                    <div className="montserrat">
                      Fill out the form and let the fun begin.
                      <br />
                      {/*  Fort
                                  Lauderdale<br>
                                  2755 E Oakland Park Blvd #301 */}
                      {/* <br>Fort Lauderdale, FL 33306 */}
                      Houston Texas
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div id="returnMsg" className="hiddennMsg">
                      Test Yadav
                    </div>
                    <form
                      id="contactForm"
                      method="post"
                      style={{ marginTop: "20%" }}
                    >
                      <div className="form-group" id="error_msg" />
                      <div className="floating-label-group">
                        <input
                          type="email"
                          name="email"
                          id="email-input"
                          className="form-control"
                          autoComplete="off"
                          autofocus=""
                          required=""
                        />
                        <label className="floating-label">Email</label>
                      </div>
                      <div className="floating-label-group">
                        <input
                          type="text"
                          name="name"
                          id="name-input"
                          className="form-control"
                          autoComplete="off"
                          autofocus=""
                          required=""
                        />
                        <label className="floating-label">Name</label>
                      </div>
                      <div className="floating-label-group">
                        <input
                          type="text"
                          name="message"
                          id="message-input"
                          className="form-control"
                          autoComplete="off"
                          autofocus=""
                          required=""
                        />
                        <label className="floating-label">Message</label>
                      </div>
                      <button
                        id="submit_btn"
                        onclick="submitToAPI(event)"
                        className="btn btn-default default-bt"
                      >
                        SUBMIT
                      </button>
                      {/* <button id="submit_btn" type="submit" class="btn btn-default default-bt">SUBMIT</button> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Section 8  */}
      </div>
      {/*  JavaScripts  */}
      {/*   */}
      {/*  Plugin Js  */}
      {/*  Custom JS  */}￼
      {/* Contact UsBlog
        An award-winning digital products and services agency
        We build really cool stuff
        with technology.
        Very Big Things helps innovative companies bring exceptional digital
        products to market. Whether a startup or Fortune 500, we are here to help.
        Adaptive
        Agile at Scale
        We guides our clients to cultivate capabilities that enable them to identify the most important initiatives or opportunities and to respond in a timely, effective, and sustainable way. We help companies change the game by using Agile principles to successfully respond to and learn from external events, to innovate technically and organizationally, and to plan and execute new courses of action.
        ￼
        Methdology
        Agile at Scale
        We guides our clients to cultivate capabilities that enable them to identify the most important initiatives or opportunities and to respond in a timely, effective, and sustainable way. We help companies change the game by using Agile principles to successfully respond to and learn from external events, to innovate technically and organizationally, and to plan and execute new courses of action.
        ￼
        Process Oriented
        Agile process reviews and adherence checks
        We help our clients to implement the best agile practice according to their business needs with proper process review and adherence check. This will always increase the product quality. It provides a unique opportunity for clients or customers to be involved throughout the project.
        ￼
        Methodology
        SCRUM and KANBAN implementation
        Provide SCRUM process support to clients, overlooking the entire implementation process for an agreed upon number of sprints, along with our advisory services. We also provide the full range of kanban process support to clients, helping them managing the creation of products with an emphasis on continual delivery while not overburdening the development team.
        ￼
        Iterative
        Incremental Change
        Agile is a step-by-step approach to a truly transformational change in how your business operates. We teach teams how to set priorities based on business values. Properly implemented, Incremental change in Agile can enable you to handle competition, react quickly to changing market conditions and continuously incorporate customer feedback. This help in early and predictable delivery.
        ￼
        Process Oriented
        Agile process reviews and adherence checks
        We help our clients to implement the best agile practice according to their business needs with proper process review and adherence check. This will always increase the product quality. It provides a unique opportunity for clients or customers to be involved throughout the project.
        ￼ */}
    </>
  );
}
