<!-- Start of header section
            ============================================= -->
<template>
  <header id="header-eight" class="main-header-eight">
    <div class="appheader-content">
      <div class="site-logo float-left">
        <a href="#"
          ><img src="../assets/img/app-landing/logo/logo1.png" alt=""
        /></a>
      </div>
      <nav class="navigation-eight ul-li ">
        <ul>
          <li><a class="nav-link" href="index.html">Home</a></li>
          <li><a class="nav-link" href="#feature-eight">Features</a></li>
          <li><a class="nav-link" href="#eg-how-work">How to Play</a></li>
          <li><a class="nav-link" href="#ei-appdownload">Download App</a></li>
          <li><a class="nav-link" href="#ei-faq">FAQ</a></li>
          <li><a class="nav-link" href="#ei-screenshots">Screenshots</a></li>
          <!--                        <li class="dropdown">
                                                    <a href="#">Blog</a>
                                                    <ul class="dropdown-menu clearfix">
                                                        <li><a target="_blank" href="blog.html">Blog Page</a></li>
                                                        <li><a target="_blank" href="blog-single.html">Blog Details</a></li>
                                                    </ul>
                                                </li>-->
        </ul>
      </nav>
      <!--                <div class="h-eight-social ul-li float-right clearfix">
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                        <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                                <div class="sign-up-btn-eight text-center float-right clearfix">
                                    <a href="#">sign In</a>
                                </div>-->
    </div>
    <!-- /desktop-menu -->
    <!--<div class="appi-ei-mobile_menu relative-position">
      <div class="appi-ei-mobile_menu_button appi-ei-open_mobile_menu">
        <i class="fas fa-bars"></i>
      </div>
      <div class="appi-ei-mobile_menu_wrap">
        <div class="mobile_menu_overlay appi-ei-open_mobile_menu"></div>
        <div class="appi-ei-mobile_menu_content">
          <div class="appi-ei-mobile_menu_close appi-ei-open_mobile_menu">
            <i class="far fa-times-circle"></i>
          </div>
          <div class="m-brand-logo text-center">
            <img src="assets/img/app-landing/logo/f-logo.png" alt="" />
          </div>
          <nav class="appi-ei-mobile-main-navigation  clearfix ul-li">
            <ul id="main-nav" class="navbar-nav text-capitalize clearfix">
              <li><a class="nav-link" href="index.html">Home</a></li>
              <li><a class="nav-link" href="#feature-eight">Features</a></li>
              <li><a class="nav-link" href="#eg-how-work">How to Play</a></li>
              <li>
                <a class="nav-link" href="#ei-appdownload">Download App</a>
              </li>
              <li><a class="nav-link" href="#ei-faq">FAQ</a></li>
              <li>
                <a class="nav-link" href="#ei-screenshots">Screenshots</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>-->
    <Burger />

    <Sidebar class="appi-ei-mobile_menu_content">
      <img src="../assets/img/app-landing/logo/f-logo.png" alt="" />
      <div class="appi-ei-mobile-main-navigation  clearfix ul-li">
        <ul
          id="main-nav"
          class="navbar-nav text-capitalize clearfix sidebar-panel-nav"
        >
          <li><a class="nav-link" href="index.html">Home</a></li>
          <li><a class="nav-link" href="#feature-eight">Features</a></li>
          <li><a class="nav-link" href="#eg-how-work">How to Play</a></li>
          <li><a class="nav-link" href="#ei-appdownload">Download App</a></li>
          <li><a class="nav-link" href="#ei-faq">FAQ</a></li>
          <li><a class="nav-link" href="#ei-screenshots">Screenshots</a></li>
          <!--                                <li class="dropdown">
                                                                    <a href="#">Blog</a>
                                                                    <ul class="dropdown-menu clearfix">
                                                                        <li><a target="_blank" href="blog.html">Blog Page</a></li>
                                                                        <li><a target="_blank" href="blog-single.html">Blog Details</a></li>
                                                                    </ul>
                                                                </li>-->
        </ul>
      </div>
    </Sidebar>
    <!-- /mobile-menu -->
  </header>
</template>

<script>
import Burger from "../components/Menu/Burger";
import Sidebar from "../components/Menu/Sidebar";

export default {
  components: {
    // HelloWorld,
    Burger,
    Sidebar,
  },
};
</script>

<style scoped>
.burger-icon {
  position: absolute;
  right: 15px;
  top: 25px;
}
</style>
