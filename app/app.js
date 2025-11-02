import { changePage } from "../model/model.js";

// listeners
function initListeners() {}

// page routing function
function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  changePage(pageID);
}

// start routing on hash change
function initRouting() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(() => {
  initRouting();
  initListeners();
});
