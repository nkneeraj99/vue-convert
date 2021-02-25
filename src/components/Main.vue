<template>
  <div>
    <!-- Start of Banner section
            ============================================= -->
    <section id="eight-banner" class="eight-banner-section position-relative">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="eight-banner-content">
              <div class="banner-content-box appeight-headline pera-content">
                <h1 class="cd-headline clip is-full-width">
                  Play Online Fantasy Cricket!

                  <vue-typer
                    :text="['#Favourite11', 'Khelo & Jeeto!', 'win amount']"
                    :repeat="Infinity"
                    :shuffle="false"
                    initial-action="erasing"
                    :pre-type-delay="70"
                    :type-delay="70"
                    :pre-erase-delay="1900"
                    :erase-delay="100"
                    erase-style="backspace"
                    :erase-on-complete="true"
                    caret-animation="smooth"
                  ></vue-typer>
                </h1>
                <!--                                <P>SaaSio is the best software platform for running an internet business. </P>-->
                <div class="ei-banner-btn">
                  <a href="app_updater/Favourite11.apk"
                    ><i class="fas fa-download"></i> Download Now</a
                  >
                  <!--                                    <a href="#"><span>or</span> try it for free</a>-->
                </div>
                <!--                                <div class="ei-banner-review pera-content ul-li">
                                                                    <ul>
                                                                        <li><i class="fas fa-star"></i></li>
                                                                        <li><i class="fas fa-star"></i></li>
                                                                        <li><i class="fas fa-star"></i></li>
                                                                        <li><i class="fas fa-star"></i></li>
                                                                        <li><i class="fas fa-star"></i></li>
                                                                    </ul>
                                                                    <p>(based on <span>1,256 task</span> reviews)</p>
                                                                </div>-->
              </div>
              <u-animate-container>
                <div class="ei-banner-mbl-mockup wow fadeInRight">
                  <u-animate
                    name="fadeInRight"
                    delay="600ms"
                    duration="1500ms"
                    :iteration="1"
                    :offset="0"
                    animateClass="animated"
                    :begin="false"
                  >
                    <img
                      src="../assets/img/app-landing/mockup/bm1.png"
                      alt=""
                    />
                  </u-animate>
                </div>
              </u-animate-container>
            </div>
          </div>
        </div>
      </div>
      <div class="waveWrapper waveAnimation">
        <div class="waveWrapperInner bgTop">
          <div class="wave waveTop"></div>
        </div>
        <div class="waveWrapperInner bgMiddle">
          <div class="wave waveMiddle"></div>
        </div>
        <div class="waveWrapperInner bgBottom">
          <div class="wave waveBottom"></div>
        </div>
      </div>
    </section>
    <!-- End of Banner section
            ============================================= -->

    <!-- Start of Featured  section
            ============================================= -->
    <section id="feature-eight" class="feature-eight-section position-relative">
      <div class="container">
        <div
          class="eight-section-title appeight-headline pera-content text-center"
        >
          <span class="eg-title-tag">
            Fetaured services
            <i class="square-shape"><i></i><i></i> <i></i> <i></i> </i>
          </span>
          <h2>Favourite11 Fantasy <span>Features</span></h2>
          <!--                    <p>As a SAAS web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</p>-->
        </div>
        <!-- /title -->

        <div class="eight-feature-content">
          <div class="row justify-content-md-center">
            <div class="col-lg-3 col-md-6  wow fadeInUp">
              <u-animate-container>
                <u-animate
                  name="fadeInUp"
                  delay="0ms"
                  duration="1500ms"
                  :iteration="1"
                  :offset="0"
                  animateClass="animated"
                  :begin="false"
                >
                  <div class="eight-feature-box text-center position-relative">
                    <div class="feature-icon8 position-relative">
                      <i class="flaticon-logo"></i>
                      <span class="ei-icon-bg"></span>
                    </div>
                    <div class="feature-text8 appeight-headline pera-content">
                      <h3>Fast Withdrawal</h3>
                      <p>
                        Faster withdrawal experience through IMPS. Check Paytm
                        Withdrawal too.
                      </p>
                    </div>
                    <div class="ei-feature-more">
                      <a href="#"><i class="fas fa-plus"></i></a>
                    </div>
                  </div>
                </u-animate>
              </u-animate-container>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeFromUp">
              <u-animate-container>
                <u-animate
                  name="fadeInUp"
                  delay="300ms"
                  duration="1500ms"
                  :iteration="1"
                  :offset="0"
                  animateClass="animated"
                  :begin="false"
                >
                  <div class="eight-feature-box text-center position-relative">
                    <div class="feature-icon8 position-relative">
                      <i class="flaticon-computer"></i>
                      <span class="ei-icon-bg"></span>
                    </div>
                    <div class="feature-text8 appeight-headline pera-content">
                      <h3>Refer & Earn</h3>
                      <p>
                        Refer your friends and Get instant Rs. 100 cash bonus.
                      </p>
                    </div>
                    <div class="ei-feature-more">
                      <a href="#"><i class="fas fa-plus"></i></a>
                    </div>
                  </div>
                </u-animate>
              </u-animate-container>
            </div>
            <div
              class="col-lg-3 col-md-6 wow fadeFromUp"
              data-wow-delay="900ms"
              data-wow-duration="1500ms"
            >
              <u-animate-container>
                <u-animate
                  name="fadeInUp"
                  delay="900ms"
                  duration="1500ms"
                  :iteration="1"
                  :offset="0"
                  animateClass="animated"
                  :begin="false"
                >
                  <div class="eight-feature-box text-center position-relative">
                    <div class="feature-icon8 position-relative">
                      <i class="flaticon-pen-tool"></i>
                      <span class="ei-icon-bg"></span>
                    </div>
                    <div class="feature-text8 appeight-headline pera-content">
                      <h3>Playing & Not Playing</h3>
                      <p>Before 30 mints you can see the match reports.</p>
                    </div>
                    <div class="ei-feature-more">
                      <a href="#"><i class="fas fa-plus"></i></a>
                    </div>
                  </div>
                </u-animate>
              </u-animate-container>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeFromUp">
              <u-animate-container>
                <u-animate
                  name="fadeInUp"
                  delay="1200ms"
                  duration="1500ms"
                  :iteration="1"
                  :offset="0"
                  animateClass="animated"
                  :begin="false"
                >
                  <div class="eight-feature-box text-center position-relative">
                    <div class="feature-icon8 position-relative">
                      <i class="flaticon-layers"></i>
                      <span class="ei-icon-bg"></span>
                    </div>
                    <div class="feature-text8 appeight-headline pera-content">
                      <h3>Instant Withdrawal</h3>
                      <p>
                        Get instant withdrawal with in 30 minutes after match
                        finished.
                      </p>
                    </div>
                    <div class="ei-feature-more">
                      <a href="#"><i class="fas fa-plus"></i></a>
                    </div>
                  </div>
                </u-animate>
              </u-animate-container>
            </div>
          </div>
        </div>
      </div>
      <div class="ei-feature-shape">
        <img src="../assets/img/app-landing/shape/f-shape1.png" alt="" />
      </div>
    </section>

    <!--============================================= -->

    <!-- Start of Fun fact   section
            ============================================= -->
    <section id="fun-fact" class="eg-fun-fact-section position-relative">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="eg-funfact-content clearfix position-relative">
              <div
                class="eg-fun-fact-mockup wow fadeFromLeft"
                v-wow
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <u-animate-container>
                  <u-animate
                    name="fadeFromLeft"
                    delay="300ms"
                    duration="1500ms"
                    :iteration="1"
                    :offset="0"
                    animateClass="animated"
                    :begin="false"
                  >
                    <div class="main-mockup">
                      <img
                        src="../assets/img/app-landing/mockup/fmu1.png"
                        alt=""
                      />
                    </div>
                  </u-animate>
                </u-animate-container>
                <!--                                <div class="fn-shape fn-shape-item1" data-parallax='{"y" : 50}'><img src="assets/img/app-landing/mockup/fmu2.png" alt=""></div>
                                                                <div class="fn-shape fn-shape-item2" data-parallax='{"y" : 60}'><img src="assets/img/app-landing/mockup/fmu3.png" alt=""></div>
                                                                <div class="fn-shape fn-shape-item3" data-parallax='{"x" : -50}'><img src="assets/img/app-landing/shape/fc1.png" alt=""></div>
                                                                <div class="fn-shape fn-shape-item4" data-parallax='{"x" : -40}'><img src="assets/img/app-landing/shape/fc2.png" alt=""></div>-->
              </div>
              <div
                class="eg-funfact-text float-right wow fadeFromRight"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <u-animate-container>
                  <u-animate
                    name="fadeFromRight"
                    delay="300ms"
                    duration="1500ms"
                    :iteration="1"
                    :offset="0"
                    animateClass="animated"
                    :begin="false"
                  >
                    <div
                      class="eight-section-title appeight-headline pera-content text-left"
                    >
                      <span class="eg-title-tag">
                        Fun facts
                        <i class="square-shape"><i></i><i></i><i></i><i></i></i
                      ></span>
                      <h2>
                        India's Trusted Gaming Platform
                        <!--                                        <span>funfacts for clients.</span>-->
                      </h2>
                      <!--                                    <p>As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</p>-->
                    </div>
                  </u-animate>
                </u-animate-container>
                <!-- /title -->
                <u-animate-container>
                  <u-animate
                    name="fadeFromRight"
                    delay="300ms"
                    duration="1500ms"
                    :iteration="1"
                    :offset="0"
                    animateClass="animated"
                    :begin="false"
                  >
                    <div class="fun-fact-counter position-relative clearfix">
                      <div class="eg-counter-number pera-content text-center">
                        <!--<span class="odometer" data-count="20 Lakh">00</span>-->
                        <VueJsCounter
                          class="odometer"
                          start="0"
                          end="20"
                          duration="5000"
                          thousand=""
                        >
                          <strong>+</strong></VueJsCounter
                        >

                        <!-- <strong>+</strong>-->
                        <p>Winning Distributed</p>
                      </div>

                      <div class="eg-counter-number pera-content text-center">
                        <!--<span class="odometer" data-count="2000">00</span
                        ><strong>+</strong>-->
                        <VueJsCounter
                          class="odometer"
                          start="0"
                          end="2000"
                          duration="5000"
                          thousand=""
                        >
                          <strong>+</strong></VueJsCounter
                        >
                        <p>Active users</p>
                      </div>
                      <div class="eg-counter-number pera-content text-center">
                        <!-- <span class="odometer" data-count="5000">00</span
                        ><strong>+</strong>-->
                        <VueJsCounter
                          class="odometer"
                          start="0"
                          end="5000"
                          duration="5000"
                          thousand=""
                        >
                          <strong>+</strong></VueJsCounter
                        >
                        <p>Downloads done</p>
                      </div>
                      <div class="eg-counter-number pera-content text-center">
                        <!-- <span class="odometer" data-count="2500">00</span
                        ><strong>+</strong>-->
                        <VueJsCounter
                          class="odometer"
                          start="0"
                          end="2500"
                          duration="5000"
                          thousand=""
                        >
                          <strong>+</strong></VueJsCounter
                        >
                        <p>5 stars ratings</p>
                      </div>
                    </div>
                  </u-animate>
                </u-animate-container>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fn-bg-shape position-absolute">
        <img src="../assets/img/app-landing/shape/fns1.png" alt="" />
      </div>
    </section>
    <!-- End of Fun fact  section
            ============================================= -->

    <!-- Start of How work  section
            ============================================= -->
    <section id="eg-how-work" class="eg-how-work-section position-relative">
      <div class="how-work-bg-shape position-absolute">
        <img src="../assets/img/app-landing/shape/hws.png" alt="" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <u-animate-container>
              <u-animate
                name="fadeFromUp"
                delay="300ms"
                duration="1500ms"
                :iteration="1"
                :offset="0"
                animateClass="animated"
                :begin="false"
              >
                <div
                  class="ei-how-work-content-item wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div
                    class="eight-section-title appeight-headline pera-content text-left"
                  >
                    <span class="eg-title-tag">
                      How to play?<i class="square-shape"
                        ><i></i><i></i><i></i><i></i
                      ></i>
                    </span>
                    <h2>
                      This app is working by
                      <span>some steps!</span>
                    </h2>
                  </div>
                  <!-- /title -->
                  <div id="how-workscrollbar" class="how-work-scroller">
                    <vue-scroll>
                      <div class="eg-how-work-content">
                        <div class="eg-how-work-icon-text position-relative">
                          <span class="scroller-no">1</span>
                          <div class="eg-how-work-icon float-left text-center">
                            <i class="flaticon-verified-user"></i>
                          </div>
                          <div
                            class="eg-how-work-text appeight-headline pera-content"
                          >
                            <h3>Select the Match</h3>
                            <p>Select the match you want to participate in.</p>
                          </div>
                        </div>
                        <div class="eg-how-work-icon-text position-relative">
                          <span class="scroller-no">2</span>
                          <div class="eg-how-work-icon float-left text-center">
                            <i class="flaticon-download"></i>
                          </div>
                          <div
                            class="eg-how-work-text appeight-headline pera-content"
                          >
                            <h3>Create your Team</h3>
                            <p>
                              Use your game skills and pick the right players.
                            </p>
                          </div>
                        </div>
                        <div class="eg-how-work-icon-text position-relative">
                          <span class="scroller-no">3</span>
                          <div class="eg-how-work-icon float-left text-center">
                            <i class="flaticon-corporate-identity"></i>
                          </div>
                          <div
                            class="eg-how-work-text appeight-headline pera-content"
                          >
                            <h3>Join Contest</h3>
                            <p>
                              Choose any contest as per your budget and win
                              amount.
                            </p>
                          </div>
                        </div>
                        <div class="eg-how-work-icon-text position-relative">
                          <span class="scroller-no">4</span>
                          <div class="eg-how-work-icon float-left text-center">
                            <i class="flaticon-text"></i>
                          </div>
                          <div
                            class="eg-how-work-text appeight-headline pera-content"
                          >
                            <h3>Watch your winning</h3>
                            <p>See Leaderboard for your winner ranking.</p>
                          </div>
                        </div>
                      </div>
                    </vue-scroll>
                  </div>
                </div>
              </u-animate>
            </u-animate-container>
          </div>
          <div class="col-lg-5">
            <div
              class="how-work-mockup position-relative wow fadeInUp"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <u-animate-container>
                <u-animate
                  name="fadeFromUp"
                  delay="600ms"
                  duration="1500ms"
                  :iteration="1"
                  :offset="0"
                  animateClass="animated"
                  :begin="false"
                >
                  <div class="hw-mockup-img">
                    <img
                      src="../assets/img/app-landing/mockup/blank-copy.gif"
                      alt=""
                    />
                  </div>
                  <div
                    class="hw-shape1 position-absolute"
                    data-parallax='{"x" : 40}'
                  >
                    <img src="../assets/img/app-landing/shape/fc1.png" alt="" />
                  </div>
                  <div
                    class="hw-shape2 position-absolute"
                    data-parallax='{"x" : -30}'
                  >
                    <img src="../assets/img/app-landing/shape/fc2.png" alt="" />
                  </div>
                </u-animate>
              </u-animate-container>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End  of How work  section
            ============================================= -->

    <!-- Start of App Download  section
            ============================================= -->
    <section
      id="ei-appdownload"
      class="ei-appdownload-section position-relative"
      data-background="assets/img/app-landing/background/appbg1.png"
    >
      <div class="container">
        <div class="ei-appdownload-content">
          <div class="row">
            <div class="col-lg-6">
              <div
                class="ei-app-mockup-img  wow fadeFromRight"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <img src="../assets/img/app-landing/mockup/amu1.png" alt="" />
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="ei-app-down-text wow fadeFromLeft"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div
                  class="eight-section-title appeight-headline pera-content text-left"
                >
                  <span class="eg-title-tag">
                    App Download<i class="square-shape"
                      ><i></i><i></i><i></i><i></i
                    ></i>
                  </span>
                  <h2>
                    This app is available for
                    <span>your smart phone.</span>
                  </h2>
                  <p>Get Rs.100 Cash bonus for Referring a friend.</p>
                </div>
                <!-- /title -->
                <div class="app-down-btn">
                  <a href="app_updater/Favourite11.apk"
                    ><img src="../assets/img/app-landing/shape/btn1.png" alt=""
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="ei-appdownloaad-shape app-shape1"
        data-parallax='{"y" : -100}'
      >
        <img src="../assets/img/app-landing/background/apps1.png" alt="" />
      </div>
      <div
        class="ei-appdownloaad-shape app-shape2"
        data-parallax='{"x" : -120}'
      >
        <img src="../assets/img/app-landing/background/apps2.png" alt="" />
      </div>
      <div
        class="ei-appdownloaad-shape app-shape3"
        data-parallax='{"y" : -100}'
      >
        <img src="../assets/img/app-landing/background/apps3.png" alt="" />
      </div>
    </section>
    <!-- End of App Download section
            ============================================= -->

    <!-- Start of Faq section
            ============================================= -->
    <section id="ei-faq" class="ei-faq-section position-relative">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="ei-faq-content">
              <div class="ei-title-faq pera-content">
                <div class="row">
                  <div class="col-md-6">
                    <div
                      class="eight-section-title appeight-headline pera-content text-left"
                    >
                      <span class="eg-title-tag">
                        Frequently asked Question<i class="square-shape"
                          ><i></i><i></i> <i></i><i></i
                        ></i>
                      </span>
                      <h2>Learn about features <span>from FAQ!</span></h2>
                    </div>
                  </div>
                  <!--                                    <div class="col-md-6">
                                                                            <p>As a SAAS web crawler expert, I help organizations  to the expanding significance of internet promoting.</p>
                                                                        </div>-->
                </div>
              </div>
              <!-- /title -->
              <div class="ei-faq-queans">
                <div class="accordion" id="accordionExample">
                  <div class="ei-faq">
                    <div class="ei-faq-header" id="headingOne">
                      <button
                        class=""
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-controls="collapseOne"
                      >
                        What is Fantasy Cricket?
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      class="collapse show"
                      data-parent="#accordionExample"
                    >
                      <div class="ei-faq-body">
                        Fantasy cricket is an online game where a user can
                        create a virtual team consisting of real cricket
                        players. The players can be chosen from the upcoming
                        match and points are scored depending on how the
                        selected players perform in that real-life match. The
                        higher your team scores, the better are your chances of
                        winning.
                      </div>
                    </div>
                  </div>
                  <div class="ei-faq">
                    <div class="ei-faq-header" id="headingtwo">
                      <button
                        class="collapsed"
                        data-toggle="collapse"
                        data-target="#collapsetwo"
                        aria-controls="collapsetwo"
                      >
                        How to play Fantasy Cricket?
                      </button>
                    </div>
                    <div
                      id="collapsetwo"
                      class="collapse"
                      data-parent="#accordionExample"
                    >
                      <div class="ei-faq-body">
                        Playing fantasy cricket on gamezy is very easy. Just
                        follow the steps below.
                        <ul>
                          <li>Select the match that you wish to play</li>
                          <li>Join one of the many contests</li>
                          <li>Create your team</li>
                          <li>Win money and withdraw your cash</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="ei-faq">
                    <div class="ei-faq-header" id="headingthree">
                      <button
                        class="collapsed"
                        data-toggle="collapse"
                        data-target="#collapsethree"
                        aria-controls="collapsethree"
                      >
                        Which players to select?
                      </button>
                    </div>
                    <div
                      id="collapsethree"
                      class="collapse"
                      data-parent="#accordionExample"
                    >
                      <div class="ei-faq-body">
                        Check the pitch report. Check whether it is batting or
                        bowling pitch. If it is batting pitch then select more
                        batsman in the team and if it is a bowling pitch, then
                        choose more bowlers in the team. Check players
                        performance from previous match and records of players
                        on playing pitch. Depending on all these factors you can
                        select players for your team.
                      </div>
                    </div>
                  </div>
                  <div class="ei-faq">
                    <div class="ei-faq-header" id="headingfour">
                      <button
                        class="collapsed"
                        data-toggle="collapse"
                        data-target="#collapsefour"
                        aria-controls="collapsefour"
                      >
                        Will I be able to withdraw money
                      </button>
                    </div>
                    <div
                      id="collapsefour"
                      class="collapse"
                      data-parent="#accordionExample"
                    >
                      <div class="ei-faq-body">
                        Yes, the money that you win from the contest can be
                        withdrawn and transferred to your bank account. The
                        minimum amount that can be withdrawn is Rs.25 and
                        maximum is Rs. 2,00,000. You can even join the contest
                        for next match using the amount and win more. You cannot
                        withdraw any amount from your bonus wallet. The bonus
                        amount can be used only to join the contest and play the
                        game. So once you earn money by winning in the contest,
                        the money can be transferred but not referral bonus
                        amount.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span class="ei-faq-shape fq-shape-style1" data-parallax='{"x" : 50}'
        ><img src="../assets/img/app-landing/shape/fq-shape1.png" alt=""
      /></span>
      <span class="ei-faq-shape fq-shape-style2"
        ><img src="../assets/img/app-landing/shape/fq-shape2.png" alt=""
      /></span>
      <span class="ei-faq-shape fq-shape-style3"
        ><img src="../assets/img/app-landing/shape/fq-shape3.png" alt=""
      /></span>
      <span class="ei-faq-shape fq-shape-style4" data-parallax='{"y" : 60}'
        ><img src="../assets/img/app-landing/shape/fq-shape4.png" alt=""
      /></span>
      <span class="ei-faq-shape fq-shape-style5"
        ><img src="../assets/img/app-landing/shape/fq-shape5.png" alt=""
      /></span>
      <span class="ei-faq-shape fq-shape-style6"
        ><img src="../assets/img/app-landing/shape/fq-shape6.png" alt=""
      /></span>
      <span class="ei-faq-shape fq-shape-style8"
        ><img src="../assets/img/app-landing/shape/fq-shape8.png" alt=""
      /></span>
      <span class="ei-faq-shape fq-shape-style7"
        ><img src="../assets/img/app-landing/shape/fq-shape7.png" alt=""/><img
          src="../assets/img/app-landing/shape/fq-shape7.png"
          alt=""/>
        <img src="../assets/img/app-landing/shape/fq-shape7.png" alt=""
      /></span>
    </section>

    <!-- End of Faq section
            ============================================= -->

    <!-- Start of screen-shoot section
            ============================================= -->
    <section
      id="ei-screenshots"
      class="ei-screenshots-section position-relative"
    >
      <div class="container">
        <div
          class="eight-section-title appeight-headline pera-content text-center"
        >
          <span class="eg-title-tag">
            App screenshots
            <i class="square-shape"> <i></i><i></i><i></i><i></i></i
          ></span>
          <h2>App screenshots <span>know properly</span></h2>
          <p>
            As a SAAS web crawler expert, I help organizations adjust to the
            expanding significance of internet promoting.
          </p>
        </div>
        <!-- /title -->

        <div
          class="row ei-appScreenshotCarousel-container swiper-container swiper-container-3d"
        >
          <div class="ei-screen-mobile-image"></div>
          <swiper class="swiper" :options="swiperOption" ref="swiper">
            <swiper-slide class="swiper-slide1"></swiper-slide>
            <swiper-slide class="swiper-slide2"></swiper-slide>
            <swiper-slide class="swiper-slide3"></swiper-slide>
            <swiper-slide class="swiper-slide4"></swiper-slide>
            <swiper-slide class="swiper-slide5"></swiper-slide>
            <swiper-slide class="swiper-slide6"></swiper-slide>
            <!--                        <div class="swiper-slide" style="background-image:url(assets/img/app-landing/screenshoot/search.png)"></div>-->
            <swiper-slide class="swiper-slide7"></swiper-slide>
            <swiper-slide class="swiper-slide8"></swiper-slide>
            <swiper-slide class="swiper-slide9"></swiper-slide>
            <swiper-slide class="swiper-slide10"></swiper-slide>
            <swiper-slide class="swiper-slide11"></swiper-slide>
            <!--                        <div class="swiper-slide" style="background-image:url(assets/img/app-landing/screenshoot/search.png)"></div>-->
          </swiper>
          <!-- Add Arrows -->
        </div>
        <!-- Navigations -->

        <div class="banner-navigation">
          <div class="swiper-pagination" slot="pagination"></div>

          <div class="swiper-button-prev" slot="button-prev" @click="prev()">
            <span class="fas fa-chevron-left"></span>
          </div>
          <div class="swiper-button-next" slot="button-prev" @click="next()">
            <span class="fas fa-chevron-right"></span>
          </div>
        </div>
      </div>
      <div class="screenshoot-vector screenshoot-shape1 position-absolute">
        <img src="../assets/img/app-landing/shape/ss-shape1.png" alt="" />
      </div>
      <div class="screenshoot-vector screenshoot-shape2 position-absolute">
        <img src="../assets/img/app-landing/shape/ss-shape2.png" alt="" />
      </div>
    </section>
    <!-- End of screen-shoot section
            ============================================= -->

    <!-- Start of Testimonial section
         ============================================= -->
    <section
      id="ei-testimonial"
      class="ei-testimonial-section position-relative"
      data-background="assets/img/app-landing/background/tbg.jpg"
    >
      <div class="container">
        <div
          class="eight-section-title appeight-headline pera-content text-center"
        >
          <span class="eg-title-tag">
            Testimonials<i class="square-shape">
              <i></i><i></i><i></i><i></i>
            </i>
          </span>
          <h2>Client’s <span>review.</span></h2>
          <!--                    <p>As a SAAS web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</p>-->
        </div>
        <!-- /title -->
        <div class="ei-testimonial-content">
          <div id="testimonial-scroller" class="testimonial-scroller-area ">
            <carousel
              :nav="false"
              :dots="false"
              :items="2"
              :margin="120"
              :loop="true"
              :responsive="{
                0: { items: 1, nav: false },
                600: { items: 2, nav: false },
              }"
            >
              <div class="ei-testimonial-img-text position-relative">
                <div class="test--quote-icon">
                  <i class="fas fa-quote-right"></i>
                </div>
                <div class="ei-testimonial-img float-left text-center">
                  <img
                    src="../assets/img/app-landing/testimonial/boy1.png"
                    alt=""
                  />
                </div>
                <div class="ei-testimonial-text">
                  <div
                    class="ei-testimonial-name appeight-headline pera-content"
                  >
                    <h3>Ankur Agrawal</h3>
                    <span>Senior Director</span>
                  </div>
                  <p>
                    As a die-hard cricket fan, I practically kept track of all
                    sorts of news on players, teams and tournaments.
                  </p>
                  <div class="ei-testi-rate ul-li clearfix">
                    <ul>
                      <li><i class="fas fa-star"></i></li>
                      <li><i class="fas fa-star"></i></li>
                      <li><i class="fas fa-star"></i></li>
                      <li><i class="fas fa-star"></i></li>
                      <li><i class="fas fa-star"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="ei-testimonial-img-text position-relative">
                <div class="test--quote-icon">
                  <i class="fas fa-quote-right"></i>
                </div>
                <div class="ei-testimonial-img float-left text-center">
                  <img
                    src="../assets/img/app-landing/testimonial/boy2.png"
                    alt=""
                  />
                </div>
                <div class="ei-testimonial-text">
                  <div
                    class="ei-testimonial-name appeight-headline pera-content"
                  >
                    <h3>Anurag Saxsena</h3>
                    <span>Marketing Head</span>
                  </div>
                  <p>
                    “ Thanks to Favourite11. Main ₹ 50000 jit gaya. Experience
                    on play11 is good and I'm happy with your service.
                  </p>
                  <div class="ei-testi-rate ul-li clearfix">
                    <ul>
                      <li><i class="fas fa-star"></i></li>
                      <li><i class="fas fa-star"></i></li>
                      <li><i class="fas fa-star"></i></li>
                      <li><i class="fas fa-star"></i></li>
                      <li><i class="fas fa-star"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="ei-testimonial-img-text position-relative">
                <div class="test--quote-icon">
                  <i class="fas fa-quote-right"></i>
                </div>
                <div class="ei-testimonial-img float-left text-center">
                  <img
                    src="../assets/img/app-landing/testimonial/boy3.png"
                    alt=""
                  />
                </div>
                <div class="ei-testimonial-text">
                  <div
                    class="ei-testimonial-name appeight-headline pera-content"
                  >
                    <h3>Ankit Singh</h3>
                    <span>Games Developer</span>
                  </div>
                  <p>
                    My experience with Favourite11 platform has been great.
                    Their tagline which says “Kheloge Nahi Toh Jeetoge Kaise?’
                    Is a perfect fit.
                  </p>
                  <div class="ei-testi-rate ul-li clearfix">
                    <ul>
                      <li><i class="fas fa-star"></i></li>
                      <li><i class="fas fa-star"></i></li>
                      <li><i class="fas fa-star"></i></li>
                      <li><i class="fas fa-star"></i></li>
                      <li><i class="fas fa-star"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
            </carousel>
          </div>
        </div>
      </div>
      <!--<div class="testimonial-floatingimg testimonial-float-img1 ul-li-block">
        <ul>
          <li>
            <img src="../assets/img/app-landing/testimonial/tf1.html" alt="" />
          </li>
          <li>
            <img src="../assets/img/app-landing/testimonial/tf3.html" alt="" />
          </li>
          <li>
            <img src="../assets/img/app-landing/testimonial/tst1.html" alt="" />
          </li>
          <li>
            <img src="../assets/img/app-landing/testimonial/tst2.html" alt="" />
          </li>
        </ul>
      </div>
      <div class="testimonial-floatingimg testimonial-float-img2 ul-li-block">
        <ul>
          <li>
            <img src="../assets/img/app-landing/testimonial/tf1.html" alt="" />
          </li>
          <li>
            <img src="../assets/img/app-landing/testimonial/tf3.html" alt="" />
          </li>
          <li>
            <img src="../assets/img/app-landing/testimonial/tst1.html" alt="" />
          </li>
          <li>
            <img src="../assets/img/app-landing/testimonial/tst2.html" alt="" />
          </li>
        </ul>
      </div>-->
    </section>
    <!-- End of Testimonial section
         ============================================= -->

    <!-- Start of Partner  section
           ============================================= -->

    <section id="ei-partner" class="ei-partner-section">
      <div class="container">
        <div class="ei-partner-content">
          <carousel
            :nav="false"
            :dots="false"
            :items="4"
            :margin="20"
            :loop="true"
            :responsive="{
              0: { items: 3, nav: false, margin: 50 },
              600: { items: 4, nav: false },
            }"
          >
            <!-- <div id="ei-partner-slide" class="partner-slide-area owl-carousel">-->
            <div class="partner-img">
              <img src="../assets/img/app-landing/partner/p1.png" alt="" />
            </div>
            <div class="partner-img">
              <img src="../assets/img/app-landing/partner/p2.png" alt="" />
            </div>
            <div class="partner-img">
              <img src="../assets/img/app-landing/partner/p3.png" alt="" />
            </div>
            <div class="partner-img">
              <img src="../assets/img/app-landing/partner/p4.png" alt="" />
            </div>

            <div class="partner-img">
              <img src="../assets/img/app-landing/partner/p2.png" alt="" />
            </div>
            <div class="partner-img">
              <img src="../assets/img/app-landing/partner/p3.png" alt="" />
            </div>
            <!-- </div>-->
          </carousel>

          <!--<carousel>
            <template slot="prev"><span class="prev">prev</span></template>

            <template slot="next"><span class="next">next</span></template>
          </carousel>-->

          <div class="ei-partner-text appeight-headline pera-content">
            <div class="ei-partner-icon text-center float-left">
              <i class="fas fa-gem"></i>
            </div>
            <h4>Trusted by 12,000 Users!</h4>
            <p>We have more than 12000+ trusted Users in India.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- End  of Partner  section
           ============================================= -->

    <!-- Start of Newslatter  section
           ============================================= -->
    <section id="ei-newslatter" class="ei-newslatter-section position-relative">
      <div class="ei-newslatter-box position-relative">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="ei-newslatter-contnet appeight-headline pera-content">
                <h3>Download Mobile App by<span> SMS!</span></h3>
                <div class="ei-newslatter-form position-relative">
                  <form action="#">
                    <input
                      class="phone"
                      name="phone"
                      type="phone"
                      placeholder="Enter mobile number!"
                    />
                    <div class="nws-button position-absolute text-capitalize">
                      <button class="hover-btn" type="submit" value="Submit">
                        Get App Link!
                      </button>
                    </div>
                    <p>
                      * Your phone number will be fully secure . We don’t share!
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ei-news-vector1 position-absolute">
          <img src="../assets/img/app-landing/shape/n-shape1.png" alt="" />
        </div>
        <div class="ei-news-vector2 position-absolute">
          <img src="../assets/img/app-landing/shape/n-shape2.png" alt="" />
        </div>
        <div
          class="ei-news-vector3 position-absolute"
          data-parallax='{"x" : 50}'
        >
          <img src="../assets/img/app-landing/shape/n-shape3.png" alt="" />
        </div>
      </div>
      <div class="ei-newslatter-mockup">
        <img src="../assets/img/app-landing/mockup/n-mockup.png" alt="" />
      </div>
    </section>
  </div>

  <!-- End of Newslatter  section
           ============================================= -->
</template>

<script>
import carousel from "vue-owl-carousel";
import Vue from "vue";
import { VueTyper } from "vue-typer";
import vuescroll from "vuescroll/dist/vuescroll-native";
// import the css file
import "vuescroll/dist/vuescroll.css";
Vue.use(vuescroll);

import VueWow from "vue-wow";
Vue.use(VueWow);
import { UAnimateContainer, UAnimate } from "vue-wow";

// import VueAwesomeSwiper from "vue-awesome-swiper";
// const { swiper, swiperSlide } = VueAwesomeSwiper;
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import VueJsCounter from "vue-js-counter";

export default {
  //   name: "swiper-example-3d-coverflow",
  title: "3D Coverflow effect",
  components: {
    VueTyper,
    UAnimateContainer,
    UAnimate,
    Swiper,
    SwiperSlide,
    carousel,
    VueJsCounter,
  },

  data() {
    return {
      rail: {
        background: "rgb(233,233,243)",
      },

      swiperOption: {
        slidesPerView: 4,
        // spaceBetween: 30,
        // freeMode: true,
        effect: "coverflow",
        loop: true,
        centeredSlides: true,
        initialSlide: 3,
        keyboardControl: true,
        // mousewheelControl: false,
        lazyLoading: true,
        // nextButton: ".swiper-button-next",
        // prevButton: ".swiper-button-prev",
        coverflowEffect: {
          rotate: 5,
          stretch: 200,
          depth: 350,
          modifier: 2.5,
          slideShadows: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  methods: {
    prev() {
      this.$refs.swiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.swiper.$swiper.slideNext();
    },
  },
};
</script>

<style scoped>
.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide1 {
  background-image: url(https://i.ibb.co/42w2PVY/screenshot03.png);
}

.swiper-slide2 {
  background-image: url(https://i.ibb.co/54tD5J2/screenshot01.png);
}

.swiper-slide3 {
  background-image: url(https://i.ibb.co/JxX0VWZ/screenshot02.png);
}

.swiper-slide4 {
  background-image: url(https://i.ibb.co/42w2PVY/screenshot03.png);
}

.swiper-slide5 {
  background-image: url(https://i.ibb.co/Ny9wbbP/screenshot04.png);
}

.swiper-slide5 {
  background-image: url(https://i.ibb.co/4PhsvHc/screenshot05.png);
}

.swiper-slide6 {
  background-image: url(https://i.ibb.co/9ZjyzXW/screenshot06.png);
}

.swiper-slide7 {
  background-image: url(https://i.ibb.co/kmMTLqj/slider-01.jpg);
}

.swiper-slide8 {
  background-image: url(https://i.ibb.co/JxX0VWZ/screenshot02.png);
}

.swiper-slide9 {
  background-image: url(https://i.ibb.co/54tD5J2/screenshot01.png);
}

.swiper-slide10 {
  background-image: url(https://i.ibb.co/42w2PVY/screenshot03.png);
}

.swiper-slide11 {
  background-image: url(https://i.ibb.co/Ny9wbbP/screenshot04.png);
}

.partner-img {
  max-width: 130px;
  width: 100%;
  margin-bottom: 20px;
}

#ei-testimonial {
  background: url(../assets/img/app-landing/background/tbg.jpg);
}

.swiper-button-next:after,
.swiper-button-prev:after {
  content: "";
  display: flex;
  align-items: center;
}
</style>

// https://i.ibb.co/hWLSt1c/mobile-1.png //
https://i.ibb.co/54tD5J2/screenshot01.png //
https://i.ibb.co/JxX0VWZ/screenshot02.png //
https://i.ibb.co/42w2PVY/screenshot03.png //
https://i.ibb.co/Ny9wbbP/screenshot04.png //
https://i.ibb.co/4PhsvHc/screenshot05.png //
https://i.ibb.co/9ZjyzXW/screenshot06.png //
https://i.ibb.co/kmMTLqj/slider-01.jpg
