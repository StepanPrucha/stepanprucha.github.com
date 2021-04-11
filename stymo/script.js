/* Hide and show Navbar when scrolling */
var navBar = document.getElementById("nav-bar");
var previousScroll = 0;
var timer;
var toogler = document.getElementById("toogler");


window.onscroll = function () {
  var currentScroll = window.scrollY;
  document.getElementById("tell-current").innerHTML = currentScroll;
}
/*
window.onscroll = function () {
  var currentScroll = window.scrollY;
  document.getElementById("tell-current").innerHTML = currentScroll;
  if (currentScroll > 100) {
    if (previousScroll - currentScroll < 0) {
      navBar.style.top = "-2.75em"; // NAV HEIGHT
    } else {
      navBar.style.top = "0";
    }
    previousScroll = currentScroll;
    clearTimeout(timer);
    timer = setTimeout(reset, 10000);
  }
/*  if (currentScroll > 1000) {
    toogler.className = "toogler toogler-buy";
    toogler.innerHTML = "Buy";
  } else {
    toogler.className = "toogler";
    toogler.innerHTML = "Menu";
  } 
};
function reset() {
  navBar.style.top = null;
} */

/* Toogle Menu */
var menu = document.getElementById("menu");
var body = document.getElementById("body");
var menuOpen = 0;
function hideMenu() {
  menu.style.transition = null;
  menu.style.right = null;
  menu.style.opacity = null;
  body.style.overflow = null;
  toogler.className = "toogler"
  toogler.innerHTML = "Menu";
  menuOpen = 0;
}
function toogleMenu() {
  if (menuOpen == 1) {
    hideMenu();
  } else {
    menu.style.transition = "0.5s opacity";
    menu.style.right = "0";
    menu.style.opacity = "1";
    body.style.overflow = "hidden";
    toogler.className = "toogler toogler-close";
    toogler.innerHTML = "Close";
    menuOpen = 1;
  }
}

/* Select quantity and calulate the price */
function calc() {
  var quantity = document.getElementById("quantity").value;
  var total = document.getElementById("total");
  var price = 89;
  var multi = quantity * price;
  total.innerHTML = multi;
}

/* Fake HTML change */
var home = document.getElementById("html-home-page");
var login = document.getElementById("html-login");
var checkout = document.getElementById("html-checkout");
var success = document.getElementById("html-success");
var account = document.getElementById("html-account");
var orders = document.getElementById("html-orders");
var recommend = document.getElementById("html-recommend");
var faq = document.getElementById("html-faq");
var contact = document.getElementById("html-contact");
function goHome() {
  home.style.display = null;
  window.scrollTo(0, 0);
  login.style.display = null;
  checkout.style.display = null;
  success.style.display = null;
  account.style.display = null;
  orders.style.display = null;
  recommend.style.display = null;
  faq.style.display = null;
  contact.style.display = null;
  toogler.style.display = null;
  navBar.style.justifyContent = null;
  hideMenu();
}
function goToLogin() {
  if (loggedIn == 1) {
    logOut();
  } else {
    goHome();
    home.style.display = "none";
    login.style.display = "flex";
    toogler.style.display = "none";
    navBar.style.justifyContent = "center";
  }
}
function goToAccount() {
  goHome();
  home.style.display = "none";
  if (loggedIn == 1){
    account.style.display = "flex";
    
    /* Alert Message*/
    alert.innerHTML = "Login successful.";
    alert.style.display = "flex";
    clearTimeout(timerTwo);
    timerTwo = setTimeout(hideAlert, 5000);
  } else {
    login.style.display = "flex"; 
  }
}
function goToRecommend() {
  goHome();
  home.style.display = "none";
  if (loggedIn == 1){
    recommend.style.display = "flex";
  } else {
    login.style.display = "flex"; 
  }
}
function goToOrders() {
  goHome();
  home.style.display = "none";
  if (loggedIn == 1){
    orders.style.display = "flex";
  } else {
    login.style.display = "flex"; 
  }
}


/* Log in + Log out */
var loggedIn = 0;
var loginLink = document.getElementById("login-link");
function logIn() {
  loginLink.innerHTML = "Log out (Stepan Prucha)";
  loggedIn = 1;
  goToAccount();
}
function logOut() {
  loginLink.innerHTML = "Log in";
  loggedIn = 0;
  goHome();
  hideMenu();
}

/* Checkboxes */
var timerTwo;
var alert = document.getElementById("alert");
function hideAlert() {
  alert.style.display = null;
}
function subscribeNews() {
  var x = document.getElementById("subscribe-newsletter");
  if (x.className == "box box-checkbox checked") {
    x.className = "box box-checkbox";

    /* Alert Message*/
    alert.innerHTML = "Unsubscribed.";
    alert.style.display = "flex";
    clearTimeout(timerTwo);
    timerTwo = setTimeout(hideAlert, 5000);
  } else {
    x.className = "box checkbox-row checked";
    /* Alert */
    alert.innerHTML = "Subscribed.";
    alert.style.display = "flex";
    clearTimeout(timerTwo);
    timerTwo = setTimeout(hideAlert, 5000);
  }
}
function displayPriceWithTax() {
  var y = document.getElementById("display-price-with-tax");
  if (y.className == "box box-checkbox checked") {
    y.className = "box box-checkbox";
    /* Alert */
    alert.innerHTML = "Prices without tax.";
    alert.style.display = "flex";
    clearTimeout(timerTwo);
    timerTwo = setTimeout(hideAlert, 5000);
  } else {
    y.className = "box box-checkbox checked";
    /* Alert */
    alert.innerHTML = "Prices with tax.";
    alert.style.display = "flex";
    clearTimeout(timerTwo);
    timerTwo = setTimeout(hideAlert, 5000);
  }
}
function invoiceIsSame() {
  var z = document.getElementById("invoice-is-same");
  if (z.className == "box box-checkbox checked") {
    z.className = "box box-checkbox";
  } else {
    z.className = "box box-checkbox checked";
  }
}
/* Copy Links */
function copyLink() {
  /* Alert */
  alert.innerHTML = "Link copied.";
  alert.style.display = "flex";
  clearTimeout(timerTwo);
  timerTwo = setTimeout(hideAlert, 5000);
}
function copyID() {
  /* Alert */
  alert.innerHTML = "ID copied.";
  alert.style.display = "flex";
  clearTimeout(timerTwo);
  timerTwo = setTimeout(hideAlert, 5000);
}