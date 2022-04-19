var colorTheme = 1;
var icon = document.getElementById("logo-icon");
var icon2 = document.getElementById("logo-icon-2");
function changeColor() {
  if (colorTheme == 1) {
    document.documentElement.style.setProperty('--main-color', '#F8AF3A');
    document.documentElement.style.setProperty('--body-color', '#FDECD1');
    icon.className = "fa fa-pie-chart logo-icon";
    icon2.className = "fa fa-pie-chart logo-icon";
    colorTheme = 2;
  }
  else if (colorTheme == 2) {
    document.documentElement.style.setProperty('--main-color', '#3FA4C9');
    document.documentElement.style.setProperty('--body-color', '#D9EDF4');
    icon.className = "fa fa-area-chart logo-icon";
    icon2.className = "fa fa-area-chart logo-icon";
    colorTheme = 3;
  }
  else if (colorTheme == 3) {
    document.documentElement.style.setProperty('--main-color', '#17C3B2');
    document.documentElement.style.setProperty('--body-color', '#D5F4F1');
    icon.className = "fa fa-bar-chart logo-icon";
    icon2.className = "fa fa-bar-chart logo-icon";
    colorTheme = 1;
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
    sidebar.style.width = "3.75rem";
    sidebarToogler.style.transform = "scaleX(-1)";
    sideBarOpen = 0;
  } else {
    sidebar.style.width = null;
    sidebarToogler.style.transform = null;
    sideBarOpen = 1;
  }
}

/* MAIN MENU LINKS */

var overviewLink = document.getElementById("overview-link");
var administrationLink = document.getElementById("administration-link");
var logisticsLink = document.getElementById("logistics-link");
var permissionsLink = document.getElementById("permissions-link");

function deactiveLinks() {
  overviewLink.className = "";
  administrationLink.className = "";
  logisticsLink.className= "";
  permissionsLink.className= "";
}

function goToOverview() {
  deactiveLinks();
  overviewLink.className = "active";
}

function goToAministration() {
  deactiveLinks();
  administrationLink.className = "active";
}

function goToLogistics() {
  deactiveLinks();
  logisticsLink.className = "active";
}

function goToPermissions() {
  deactiveLinks();
  permissionsLink.className = "active";
}

/* SIDEBAR LINKS */

var userManagementLink = document.getElementById("usermanagement-link");
var rolesPermissionsLink = document.getElementById("rolespermissions-link");
var settingsLink = document.getElementById("settings-link");
var loremIpsumLink = document.getElementById("loremipsum-link");

function deactiveSidebarLinks() {
  userManagementLink.className = "";
  rolesPermissionsLink.className = "";
  settingsLink.className= "";
  loremIpsumLink.className= "";
}

function goToUsermanagement() {
  deactiveSidebarLinks();
  userManagementLink.className = "active";
}

function goToRolespermissions() {
  deactiveSidebarLinks();
  rolesPermissionsLink.className = "active";
}

function goToSettings() {
  deactiveSidebarLinks();
  settingsLink.className = "active";
}

function goToLoremipsum() {
  deactiveSidebarLinks();
  loremIpsumLink.className = "active";
}