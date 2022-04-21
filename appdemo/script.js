var colorTheme = 1;
var logoIcon = document.querySelectorAll(".logo-icon");
var showLogoText = 0;
var logoText = document.querySelectorAll(".logo-text");

function changeColor() {
  if (colorTheme == 1) {
    /* Red Theme */
    colorTheme = 2;
    document.documentElement.style.setProperty('--main-color', '#F8653A');
    document.documentElement.style.setProperty('--body-color', '#FDDBD1');
    logoIcon.forEach(a=>a.className = "fa fa-pie-chart logo-icon");
  }
  else if (colorTheme == 2) {
    /* Green Theme */
    document.documentElement.style.setProperty('--main-color', '#17C3B2');
    document.documentElement.style.setProperty('--body-color', '#CCF2EE');
    logoIcon.forEach(a=>a.className = "fa fa-area-chart logo-icon");
    colorTheme = 3;
  }
  else if (colorTheme == 3) {
    /* Yellow Theme */
    colorTheme = 4;
    document.documentElement.style.setProperty('--main-color', '#F2A750');
    document.documentElement.style.setProperty('--body-color', '#FBE7D0');
    logoIcon.forEach(a=>a.className = "fa fa-balance-scale logo-icon");
  }
  else if (colorTheme == 4) {
    /* Blue Theme */
    colorTheme = 1;
    document.documentElement.style.setProperty('--main-color', '#3FA4C9');
    document.documentElement.style.setProperty('--body-color', '#D5EBF3');
    logoIcon.forEach(a=>a.className = "fa fa-bar-chart logo-icon");
    /* Toogle Logo Text */
    if (showLogoText == 0) {
      logoText.forEach(a=>a.style.display = "block");
      showLogoText = 1;
    } else {
      logoText.forEach(a=>a.style.display = "none");
      showLogoText = 0;
    }
  }
}

$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});

/* LOG IN / LOG OUT */

var loginPg = document.getElementById("login-pg");
var appPg = document.getElementById("app");

function enter() {
  loginPg.style.display = "none";
  appPg.style.display = "flex";
}
function leave() {
  loginPg.style.display = "flex";
  appPg.style.display = "none";
}

var sideBarOpen = 1;
function toogleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var sidebarToogler = document.getElementById("toogle-sidebar");
  if (sideBarOpen == 1) {
    sidebar.style.flex = "0 0 3.75rem";
    sidebarToogler.style.transform = "scaleX(-1)";
    sideBarOpen = 0;
  } else {
    sidebar.style.flex = null;
    sidebarToogler.style.transform = null;
    sideBarOpen = 1;
  }
}

/* MAIN MENU LINKS */

var overviewLink = document.getElementById("overview-link");
var overviewPage = document.getElementById("overview-pg");
var administrationLink = document.getElementById("administration-link");
var administrationPage = document.getElementById("administration-pg");
var logisticsLink = document.getElementById("logistics-link");
var permissionsLink = document.getElementById("permissions-link");
var userSettingsPage = document.getElementById("usersettings-pg");

function closeAllPgs() {
  overviewLink.className = "";
  overviewPage.style.display = "none";
  administrationLink.className = "";
  administrationPage.style.display = "none";
  logisticsLink.className= "";
  permissionsLink.className= "";
  userSettingsPage.style.display = "none";
}

function goToOverview() {
  closeAllPgs();
  overviewLink.className = "active";
  overviewPage.style.display = "flex";
}

function goToAministration() {
  closeAllPgs();
  administrationLink.className = "active";
  administrationPage.style.display = "flex";
}

function goToLogistics() {
  closeAllPgs();
  logisticsLink.className = "active";
}

function goToPermissions() {
  closeAllPgs();
  permissionsLink.className = "active";
}

function goToUserSettings() {
  closeAllPgs();
  userSettingsPage.style.display = "flex";
}

/* ADMINISTRATION SIDEBAR LINKS */

var userManagementLink = document.getElementById("usermanagement-link");
var userManagementTab = document.getElementById("usermanagement-tab");
var rolesPermissionsLink = document.getElementById("rolespermissions-link");
var rolesPermissionsTab = document.getElementById("rolespermissions-tab");
var settingsLink = document.getElementById("settings-link");
var settingsTab = document.getElementById("settings-tab");
var loremIpsumLink = document.getElementById("loremipsum-link");
var loremIpsumTab = document.getElementById("loremipsum-tab");

function hideAllContent() {
  userManagementLink.className = "";
  userManagementTab.style.display = "none";
  rolesPermissionsLink.className = "";
  rolesPermissionsTab.style.display = "none";
  settingsLink.className = "";
  settingsTab.style.display = "none";
  loremIpsumLink.className = "";
  loremIpsumTab.style.display = "none";
}

function goToUsermanagement() {
  hideAllContent();
  userManagementLink.className = "active";
  userManagementTab.style.display = "flex";
}

function goToRolespermissions() {
  hideAllContent();
  rolesPermissionsLink.className = "active";
  rolesPermissionsTab.style.display = "flex";
}

function goToSettings() {
  hideAllContent();
  settingsLink.className = "active";
  settingsTab.style.display = "flex";
}

function goToLoremipsum() {
  hideAllContent();
  loremIpsumLink.className = "active";
  loremIpsumTab.style.display = "flex";
}

/* Admin Page Switcher Preview */


var swOne = document.getElementById("switch-one");
var swTwo = document.getElementById("switch-two");

function switchOne() {
  swOne.className = "switch-button active";
  swTwo.className = "switch-button";
}

function switchTwo() {
  swOne.className = "switch-button";
  swTwo.className = "switch-button active";
}
