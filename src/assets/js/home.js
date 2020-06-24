import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCTab } from "@material/tab";

// Instantiation
const topAppBarElement = document.querySelector(".mdc-top-app-bar");
const topAppBar = new MDCTopAppBar(topAppBarElement);

const tab = new MDCTab(document.querySelector(".mdc-tab"));