<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  width:100%;
  height:100%;
}

.mybody {
		background: #edece4;
		padding: 0px;
		margin: 0px;
		width: 100%;
		height: 100%;
	}



.el-aside {
		width: 217px;
		height: 100%;
    background: #fff;
    border-right: 1px solid #D7D7D7;
	}

.el-header {
		height: 60px !important;
		background-color: rgb(49, 49, 49) !important;
		position: relative;
	}
.col-md-10{
		position: relative;
		padding-left: 120px !important;
		padding-right: 0px !important;
		width: 90% !important;
	}

.el-main {
    background: #fff;
		position: relative;
		padding-top: 0cm;
		padding-left: 8px;
		padding-right: 0px;
  }

.el-menu-item{
    background: #eeeeee;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    padding-left: 23px !important;
}
.el-submenu__title{
    font-family:Lato !important;
    color: #4f5865 !important;
    font-size: 15px !important; 
    border-bottom: 1px solid #D7D7D7 !important;
    line-height: 44px !important;
    height: 44px !important;
    font-weight: 300;
    padding-left: 8px !important;
}
.el-submenu__title:focus, .el-submenu__title:hover{
    outline: 0 ;
    color: #ad4067 ;
    background: #eeeeee ;
    border-bottom: 1px solid #ad4067 ;
}
.el-submenu.is-active i,.el-submenu:focus i,.el-submenu:hover i,.el-submenu.is-opened i{
    outline: 0 ;
    color: #ad4067 ;
}
.el-submenu i{
    margin-right: 0px !important;
}
.el-submenu.is-opened{
    outline: 0 ;
    color: #ad4067 ;
    background: #eeeeee ;
}
.el-submenu.is-active span,.el-submenu:focus span,.el-submenu:hover span,.el-submenu.is-opened span{
    outline: 0 ;
    color: #ad4067 ;
}
.el-menu-item{
    font-family:Lato !important;
    color: #737B83 ;
    font-size: 14px !important; 
    border-bottom: 1px solid #D7D7D7 ;
    line-height: 35px !important;
    height: 35px !important;
}
.el-menu-item:hover,.el-menu-item.is-active,.el-menu-item:focus{
    outline: 0 ;
    color: #ad4067 ;
    background: #eeeeee ;
    border-bottom: 1px solid #ad4067 ;
}


.col-lg-8.col-md-12 {
    line-height: 1.85;
    font-size: 18px;
    padding: 8px;
    font-family: 'Lato', sans-serif !important;
    
}
.panel-body h1 {
    height: 2;
    line-height: 2;
    margin-top: 0px
}
.col-lg-offset-6.toc{
    height: 2;
    line-height: 2;
    font-size: 17px;
}

.cse {
    margin-top: 20px;
    padding-right: 20px;
}


/* Import fonts */
@import url(//fonts.googleapis.com/css?family=Lato:300,400,700,900,300italic,400italic,700italic,900italic);

/* ******************************
 For the github btn
****************************** */

.github-btn {
  font-size: 11px;
}
.github-btn,
.github-btn .btn {
  font-weight: bold;
}
.github-btn .btn-default {
    text-shadow: 0 1px 0 #fff;
    background-image: -webkit-gradient(linear, left 0%, left 100%, from(#ffffff), to(#e0e0e0));
    background-image: -webkit-linear-gradient(top, #ffffff, 0%, #e0e0e0, 100%);
    background-image: -moz-linear-gradient(top, #ffffff 0%, #e0e0e0 100%);
    background-image: linear-gradient(to bottom, #ffffff 0%, #e0e0e0 100%);
    background-repeat: repeat-x;
    border-color: #dbdbdb;
    border-color: #ccc;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#ffe0e0e0', GradientType=0);
}

.github-btn .btn-default:hover, .github-btn .btn-default:focus {
    background-color: #e0e0e0;
    background-position: 0 -15px;
    color: #333;
    border-color: #adadad;
}

.nav-github {
    width: 325px;
}
 .nav-github > span {
     padding-right: 0.5em;
 }

 .icon-github {
    display: inline-block;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
 }

 .github-watchers .icon-github:before{
      content: "\f005";
 }

 .github-forks .icon-github:before{
      content: "\f126";
 }

.gh-count{
  padding: 2px 5px 3px 4px;
  color: #555;
  text-decoration: none;
  text-shadow:0 1px 0 #fff;
  white-space:nowrap;
  cursor:pointer;
  border-radius:3px;
  position:relative;
  display:none;
  margin-left:4px;
  background-color:#fafafa;
  border:1px solid #d4d4d4;
}

.gh-count:hover,.gh-count:focus{color:#4183c4;text-decoration: none;}
.gh-count:before,.gh-count:after{content:' ';position:absolute;display:inline-block;width:0;height:0;border-color:transparent;border-style:solid}
.gh-count:before{top:50%;left:-3px;margin-top:-4px;border-width:4px 4px 4px 0;border-right-color:#fafafa}
.gh-count:after{top:50%;left:-4px;z-index:-1;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#d4d4d4}

thead {
    font-weight: bold;
}

table {
    width: 99%;
}
td {
    width: 60%;
}


h1, h2, h3 {
    margin-top: .8em;
    margin-bottom: .7em;
}

pre code {
    font-size: 15px !important;
    font-family: 'Courier New', monospace;
}

body {
    color: #353b44;
    background: #edece4;
    font-family: 'Lato', sans-serif;
    padding: 0px !important;
    margin: 0px !important;
    font-size:16px !important;
    font-weight: 300;
}

h1,h2,h3,h4,h5{
    font-weight: 400;
}


h1[id]:before, h2[id]:before, h3[id]:before, h4[id]:before, h5[id]:before {
    display: block;
    content: " ";
    margin-top: -75px;
    height: 75px;
    visibility: hidden;
}

label{
    font-weight: 300;
}

.sidebar-menu .fa {
    width: 30px;
    text-align: center;
}

a, a:hover, a:focus {
    text-decoration: none;
    outline: none;
    outline: 0;
}


.panel-body a {
    line-height: 1.1;
    display: inline-block;
}
.panel-body a:after {
  display: block;
  content: "";
  height: 1px;
  width: 0%;
  background-color: #ad4067;
  -webkit-transition: width 0.5s ease;
  -moz-transition: width 0.5s ease;
  -ms-transition: width 0.5s ease;
  transition: width 0.5s ease;
}

.panel-body a:hover:after, .panel-body a:focus:after {
    width: 100%;
}

input:focus, textarea:focus { outline: none; }
*:focus {outline: none;}
::selection {
    background: #ad4067;
    color: #fff;
}
::-moz-selection {
    background: #ad4067;
    color: #fff;
}

#container {
    width: 100%;
    height: 100%;
}

#main-content {
    margin-left: 200px;
    line-height: 1.8;
    font-size: 19px;
}

.header {
    min-height: 60px;
    padding: 0 10px;
}
.header {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1002;
    text-align:center;
}


.black-bg {
    background: rgba(20,20,20,0.9);
    border-bottom: 1px solid #f1f2f7;
}

.wrapper {
    display: inline-block;
    margin-top: 60px;
    padding: 0px 15px 15px 0px;
    width: 100%;
}

a.logo {
    font-size: 22px;
    font-weight: 300;
    color: #8E8E93;
    float: left;
    margin-top: 10px;
    text-transform: uppercase;
}

a.logo:hover, a.logo:focus {
    text-decoration: none;
    outline: none;
}

h1.top-menu {
    margin-top: -5px;
}
.title-row {
    margin-top: 15px;
    margin-left: 16px;
    color: #EEE;
}
.notification-row {
    float: right;
    margin-top: 15px;
    margin-left: 65px;
}


.top-nav  {
    margin-top: 15px;
}

/*--sidebar toggle---*/

.toggle-nav {
    float: left;
    padding-right: 5px;
    margin-top: 20px;
    cursor: pointer;
    color: gray;
}

.toggle-nav .icon-reorder {
    cursor: pointer;
    display: inline-block;
    font-size: 20px;
}


@-webkit-keyframes square {
  0% { background-position: 0 0; }
  25% { background-position: 100% 0; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0 100%; }
  100% { background-position: 0 0; }
}

@-ms-keyframes square {
  0% { background-position: 0 0; }
  25% { background-position: 100% 0; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0 100%; }
  100% { background-position: 0 0; }
}

@keyframes square {
  0% { background-position: 0 0; }
  25% { background-position: 100% 0; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0 100%; }
  100% { background-position: 0 0; }
}

.navigation {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0;
    max-width: 150px;
    min-width: 90px;
    width:100%;
    min-height:1200px;
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    font-size: 6em;
    color: rgba(0,0,0,0.5);
    text-align: center;
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease;
}

.navigation.next {
    right:0;
}


.navigation:hover {
    background-color: rgba(0,0,0,0.1);
}

/* Google Custom Search box */

input.gsc-input,
.gsc-input-box,
.gsc-input-box-hover,
.gsc-input-box-focus,
.gsc-search-button,
.gsc-inline-block {
  box-sizing: content-box;
  line-height: normal;
}

.gsc-control-cse {
  padding: 0.1em 0 0.5em 1em !important;
  width: 16em !important;
  float: right;
}

input.gsc-search-button-v2 {
  padding: 6px 12px !important;
}

.gsc-search-box-tools .gsc-search-box .gsc-input {
  padding-right: 1px !important;
}

/* Styled keypress from Wikipedia */

kbd {
  border: 1px solid #aaa;
  -moz-border-radius: 0.2em;
  -webkit-border-radius: 0.2em;
  border-radius: 0.2em;
  -moz-box-shadow: 0.1em 0.2em 0.2em #ddd;
  -webkit-box-shadow: 0.1em 0.2em 0.2em #ddd;
  box-shadow: 0.1em 0.2em 0.2em #ddd;
  background-color: #f9f9f9;
  background-image: -moz-linear-gradient(top, #eee, #f9f9f9, #eee);
  background-image: -o-linear-gradient(top, #eee, #f9f9f9, #eee);
  background-image: -webkit-linear-gradient(top, #eee, #f9f9f9, #eee);
  background-image: linear-gradient(to bottom, #eee, #f9f9f9, #eee);
  padding: 0.1em 0.3em;
  font-family: inherit;
  font-size: 0.85em;
}

/* For the table used in overview/configuration */

table.table {
  margin: 1em 0;
}

.table-bordered th,
.table-bordered td {
  border: 2px solid #ddd;
  padding: 0 0.5em;
}

td.purpose-title {
  text-align: right;
  vertical-align: top;
  border-right: 0;
  padding-right: 0.5em;
  font-weight: bold;
}

td.purpose-description {
  border-left: 0;
}

/* For definitions of variables */

dl {
    margin: 1em;
    border-bottom: 1px solid #ccc;
}

dt {
    float: left;
    clear: left;
    width: 9.5em;
    margin: 0.125em;
    padding: 2px 4px;
}

dd {
    padding: 0.2em 0 0.2em 10em;
    border-top: 1px solid #ccc;
}

/* Prevent linebreak right after an icon */
#main-content .fa {
  display: inline;
}

/* Logo for FreeBSD until Font Awesome adds it, see https://github.com/FortAwesome/Font-Awesome/issues/1116 */
i.freebsd-19px:before {
  content: url(/img/freebsd-19px.svg);
  vertical-align: -7%;
}

/* Responsive videos */
.video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    margin: 20px 0;
}

.video-container iframe,
.video-container object,
.video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Google custom search */
.cse {
    margin-top: 20px;
    padding-right: 20px;
}


/* Table of contents */

.toc ul { list-style: none; margin: 0; padding: 0 5px;  }
.toc ul li { display: inline; }
#TableOfContents > ul > li > ul > li > ul li { margin-right: 8px; }
#TableOfContents > ul > li > ul > li > a, #TableOfContents > ul > li > a   { font-weight: bold; background-color: #eeeeee; padding: 0 10px; margin: 0 2px; }
#TableOfContents > ul > li > ul > li > a { font-style: italic; }
.toc.compact ul > li > ul > li > ul  { display: none; }

#toc {
    position:fixed;
    background-color: rgba(64, 103, 173, 0.2);
    padding: 10px 50px 10px 20px;
    top: 70px;
    bottom: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 30%;
}


@media(max-width:1200px) {
    .toc {
        display: none;
    }
}



/*!
 * Bootstrap v3.0.0
 *
 * Copyright 2013 Twitter, Inc
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world by @mdo and @fat.
 */
/*! normalize.css v2.1.0 | MIT License | git.io/normalize */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
video {
  display: inline-block;
}
html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
body {
  margin: 0;
}
a:focus {
  outline: thin dotted;
}
a:active,
a:hover {
  outline: 0;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
b,
strong {
  font-weight: bold;
}
dfn {
  font-style: italic;
}
hr {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
}
mark {
  background: #ff0;
  color: #000;
}
code,
kbd,
pre,
samp {
  font-family: monospace, serif;
  font-size: 1em;
}
pre {
  white-space: pre-wrap;
}
q {
  quotes: "\201C" "\201D" "\2018" "\2019";
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
img {
  border: 0;
}
figure {
  margin: 0;
}
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
legend {
  border: 0;
  padding: 0;
}
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
}
button,
input {
  line-height: normal;
}
button,
select {
  text-transform: none;
}
button {
  -webkit-appearance: button;
  cursor: pointer;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
textarea {
  overflow: auto;
  vertical-align: top;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
@media print {
  * {
    text-shadow: none !important;
    color: #000 !important;
    background: transparent !important;
    box-shadow: none !important;
  }
  a,
  a:visited {
    text-decoration: underline;
  }
  a[href]:after {
    content: " (" attr(href) ")";
  }
a[href^="javascript:"]:after,
  a[href^="#"]:after {
    content: "";
  }
  pre,
  blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  @page  {
    margin: 2cm .5cm;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
}
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  font-family: Lato;
  font-size: 14px;
  line-height: 1.428571429;
  color: #2b2b2b;
  background-color: #ffffff;
}
input,
button,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button,
input,
textarea {
  background-image: none;
}
a {
  color: #ad4067;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #ad4067;
  text-decoration: underline;
}
a:focus {
  outline: thin dotted #333;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
img {
  vertical-align: middle;
}
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #f7f7f7;
}
p {
  margin: 0 0 10px;
}
.lead {
  margin-bottom: 20px;
  font-size: 16.099999999999998px;
  font-weight: 200;
  line-height: 1.4;
}
@media (min-width: 768px) {
  .lead {
    font-size: 21px;
  }
}
small {
  font-size: 85%;
}
cite {
  font-style: normal;
}
.text-center {
  text-align: center;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Lato;
  font-weight: 400;
  line-height: 1.1;
}
h1,
h2,
h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}
h4,
h5,
h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}
h1 {
  font-size: 36px;
}
h2 {
  font-size: 30px;
}
h3 {
  font-size: 24px;
}
h4 {
  font-size: 18px;
}
h5 {
  font-size: 14px;
}
h6 {
  font-size: 12px;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;
}
ul ul {
  margin-bottom: 0;
}
.list-inline {
  padding-left: 0;
  list-style: none;
}
.list-inline > li {
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
}
dl {
  margin-bottom: 20px;
}
dt,
dd {
  line-height: 1.428571429;
}
dt {
  font-weight: bold;
}
dd {
  margin-left: 0;
}
@media (min-width: 768px) {
}
blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  border-left: 5px solid #f7f7f7;
}
blockquote p {
  font-size: 17.5px;
  font-weight: 300;
  line-height: 1.25;
}
q:before,
q:after,
blockquote:before,
blockquote:after {
  content: "";
}
address {
  display: block;
  margin-bottom: 20px;
  font-style: normal;
  line-height: 1.428571429;
}
code,
pre {
  font-family: Lato;
}
code {
  padding: 2px 4px;
  font-size: 90%;
  color: #395c9b;
  background-color: #f9f2f4;
  white-space: nowrap;
  border-radius: 4px;
}

pre code {
    padding: 0;
    font-size: inherit;
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
    border: 0;
}

pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.428571429;
  word-break: break-all;
  word-wrap: break-word;
  color: #2b2b2b;
  background-color: #f5f5f5;
  border: 1px solid #cccccc;
  border-radius: 4px;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
.container:before,
.container:after {
  content: " ";
  /* 1 */

  display: table;
  /* 2 */

}
.container:after {
  clear: both;
}
.container:before,
.container:after {
  content: " ";
  /* 1 */

  display: table;
  /* 2 */

}
.container:after {
  clear: both;
}
.row {
  margin-left: -15px;
  margin-right: -15px;
}
.row:before,
.row:after {
  content: " ";
  /* 1 */

  display: table;
  /* 2 */

}
.row:after {
  clear: both;
}
.row:before,
.row:after {
  content: " ";
  /* 1 */

  display: table;
  /* 2 */

}
.row:after {
  clear: both;
}
.col-md-1,
.col-md-6,
.col-md-10,
.col-md-12 {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 768px) {
  .container {
    max-width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 970px;
  }
  .col-md-1,
  .col-md-6,
  .col-md-10 {
    float: left;
  }
  .col-md-1 {
    width: 8.333333333333332%;
  }
  .col-md-6 {
    width: 50%;
  }
  .col-md-10 {
    width: 83.33333333333334%;
  }
  .col-md-12 {
    width: 100%;
  }
  .col-md-offset-1 {
    margin-left: 8.333333333333332%;
  }
  .col-md-offset-3 {
    margin-left: 25%;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}
table {
  max-width: 100%;
  background-color: transparent;
}
/* TP: tidier table start; */
/*th {
  text-align: left;
}*/
td, th {
  text-align: left;
  border: 1px solid #999;
  padding: 0.6rem;
  font-size: 80%;
}
/* TP: tidier table end */
@media (max-width: 768px) {
}
fieldset {
  padding: 0;
  margin: 0;
  border: 0;
}
legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
  font-size: 21px;
  line-height: inherit;
  color: #2b2b2b;
  border: 0;
  border-bottom: 1px solid #c7c7cc;
}
label {
  display: inline-block;
  margin-bottom: 5px;
  font-weight: bold;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  height: auto;
}
.form-control:-ms-input-placeholder {
  color: #d7d7d7;
}
.form-control::-webkit-input-placeholder {
  color: #d7d7d7;
}
@media (min-width: 768px) {
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.428571429;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  font-weight: 300;
  -webkit-transition: all 0.15s;
  -moz-transition: all 0.15s;
  transition: all 0.15s;
}


.btn:focus {
  /*outline: thin dotted #333;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;*/
  outline: none;
}
.btn:hover,
.btn:focus {
  color: #2b2b2b;
  text-decoration: none;
}
.btn-default {
  color: #2b2b2b;
  background-color: #ffffff;
  border-color: #c7c7cc;
}
.btn-default:hover,
.btn-default:focus,
.btn-default:active {
  color: #ffffff;
  background-color: #9e9e9e;
  border-color: #9e9e9e;
}
.btn-default:active {
  background-image: none;
}
.btn-primary {
  color: #ffffff;
  background-color: #007aff;
  border-color: #007aff;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
  color: #007aff;
  border-color: #007aff;
  background: #fff;
  z-index: -1;  
}
.btn-success {
  color: #ffffff;
  background-color: #4cd964;
  border-color: #4cd964;
}
.btn-success:hover,
.btn-success:focus,
.btn-success:active {
  color: #4cd964;
  border-color: #4cd964;
  background: #fff;
  z-index: -1;  
}
.btn-success:active {
  background-image: none;  
  outline: none;
}
.btn-info {
  color: #ffffff;
  background-color: #34aadc;
  border-color: #34aadc;
}
.btn-info:hover,
.btn-info:focus,
.btn-info:active {
  color: #34aadc;
  border-color: #34aadc;
  background: #fff;
  z-index: -1;  
}
.btn-info:active {
  background-image: none;
}
.btn-lg {
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
}
.btn-xs {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
.btn-xs {
  padding: 1px 5px;
}
.nav {
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
.nav:before,
.nav:after {
  content: " ";
  /* 1 */

  display: table;
  /* 2 */

}
.nav:after {
  clear: both;
}
.nav:before,
.nav:after {
  content: " ";
  /* 1 */

  display: table;
  /* 2 */

}
.nav:after {
  clear: both;
}
@media (min-width: 768px) {
}
@media (max-width: 767px) {
}
@media (min-width: 768px) {
}
@media (min-width: 768px) {
}
@media (min-width: 768px) {
}
@media (max-width: 767px) {
}
@media (max-width: 767px) {
}
@media screen and (min-width: 768px) {
}
@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@-moz-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@-o-keyframes progress-bar-stripes {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 40px 0;
  }
}
@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
.panel {
  margin-bottom: 20px;
  background-color: #ffffff;
  border: 0px solid transparent;  
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.panel-body {
  padding: 15px;
}
.panel-body:before,
.panel-body:after {
  content: " ";
  /* 1 */

  display: table;
  /* 2 */

}
.panel-body:after {
  clear: both;
}
.panel-body:before,
.panel-body:after {
  content: " ";
  /* 1 */

  display: table;
  /* 2 */

}
.panel-body:after {
  clear: both;
}
@media screen and (min-width: 768px) {
}
.carousel {
  position: relative;
}
.carousel-inner {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.carousel-inner > .item {
  display: none;
  position: relative;
  -webkit-transition: 0.6s ease-in-out left;
  transition: 0.6s ease-in-out left;
}
.carousel-inner > .active {
  display: block;
}
.carousel-inner > .active {
  left: 0;
}
.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  z-index: 15;
  width: 60%;
  margin-left: -30%;
  padding-left: 0;
  list-style: none;
  text-align: center;
}
.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  cursor: pointer;
}
.carousel-indicators .active {
  margin: 0;
  width: 12px;
  height: 12px;
  background-color: #ffffff;
}
@media screen and (min-width: 768px) {
  .carousel-indicators {
    bottom: 20px;
  }
}
.pull-right {
  float: right !important;
}
@-ms-viewport {
  width: device-width;
}
@media screen and (max-width: 400px) {
  @-ms-viewport {
    width: 320px;
  }
}

.hidden-xs {
  display: block !important;
}

@media (max-width: 767px) {
  .hidden-xs {
    display: none !important;
  }
}

.col-xs-1,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
}
.col-xs-1,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9,
.col-xs-10,
.col-xs-11 {
  float: left;
}
.col-xs-1 {
  width: 8.333333333333332%;
}
.col-xs-2 {
  width: 16.666666666666664%;
}
.col-xs-3 {
  width: 25%;
}
.col-xs-4 {
  width: 33.33333333333333%;
}
.col-xs-5 {
  width: 41.66666666666667%;
}
.col-xs-6 {
  width: 50%;
}
.col-xs-7 {
  width: 58.333333333333336%;
}
.col-xs-8 {
  width: 66.66666666666666%;
}
.col-xs-9 {
  width: 75%;
}
.col-xs-10 {
  width: 83.33333333333334%;
}
.col-xs-11 {
  width: 91.66666666666666%;
}
.col-xs-12 {
  width: 100%;
}
@media (min-width: 768px) {
  .container {
    max-width: 750px;
  }
  .col-sm-1,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-10,
  .col-sm-11 {
    float: left;
  }
  .col-sm-1 {
    width: 8.333333333333332%;
  }
  .col-sm-2 {
    width: 16.666666666666664%;
  }
  .col-sm-3 {
    width: 25%;
  }
  .col-sm-4 {
    width: 33.33333333333333%;
  }
  .col-sm-5 {
    width: 41.66666666666667%;
  }
  .col-sm-6 {
    width: 50%;
  }
  .col-sm-7 {
    width: 58.333333333333336%;
  }
  .col-sm-8 {
    width: 66.66666666666666%;
  }
  .col-sm-9 {
    width: 75%;
  }
  .col-sm-10 {
    width: 83.33333333333334%;
  }
  .col-sm-11 {
    width: 91.66666666666666%;
  }
  .col-sm-12 {
    width: 100%;
  }
  .col-sm-push-1 {
    left: 8.333333333333332%;
  }
  .col-sm-push-2 {
    left: 16.666666666666664%;
  }
  .col-sm-push-3 {
    left: 25%;
  }
  .col-sm-push-4 {
    left: 33.33333333333333%;
  }
  .col-sm-push-5 {
    left: 41.66666666666667%;
  }
  .col-sm-push-6 {
    left: 50%;
  }
  .col-sm-push-7 {
    left: 58.333333333333336%;
  }
  .col-sm-push-8 {
    left: 66.66666666666666%;
  }
  .col-sm-push-9 {
    left: 75%;
  }
  .col-sm-push-10 {
    left: 83.33333333333334%;
  }
  .col-sm-push-11 {
    left: 91.66666666666666%;
  }
  .col-sm-pull-1 {
    right: 8.333333333333332%;
  }
  .col-sm-pull-2 {
    right: 16.666666666666664%;
  }
  .col-sm-pull-3 {
    right: 25%;
  }
  .col-sm-pull-4 {
    right: 33.33333333333333%;
  }
  .col-sm-pull-5 {
    right: 41.66666666666667%;
  }
  .col-sm-pull-6 {
    right: 50%;
  }
  .col-sm-pull-7 {
    right: 58.333333333333336%;
  }
  .col-sm-pull-8 {
    right: 66.66666666666666%;
  }
  .col-sm-pull-9 {
    right: 75%;
  }
  .col-sm-pull-10 {
    right: 83.33333333333334%;
  }
  .col-sm-pull-11 {
    right: 91.66666666666666%;
  }
  .col-sm-offset-1 {
    margin-left: 8.333333333333332%;
  }
  .col-sm-offset-2 {
    margin-left: 16.666666666666664%;
  }
  .col-sm-offset-3 {
    margin-left: 25%;
  }
  .col-sm-offset-4 {
    margin-left: 33.33333333333333%;
  }
  .col-sm-offset-5 {
    margin-left: 41.66666666666667%;
  }
  .col-sm-offset-6 {
    margin-left: 50%;
  }
  .col-sm-offset-7 {
    margin-left: 58.333333333333336%;
  }
  .col-sm-offset-8 {
    margin-left: 66.66666666666666%;
  }
  .col-sm-offset-9 {
    margin-left: 75%;
  }
  .col-sm-offset-10 {
    margin-left: 83.33333333333334%;
  }
  .col-sm-offset-11 {
    margin-left: 91.66666666666666%;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 970px;
  }
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11 {
    float: left;
  }
  .col-md-1 {
    width: 8.333333333333332%;
  }
  .col-md-2 {
    width: 16.666666666666664%;
  }
  .col-md-3 {
    width: 25%;
  }
  .col-md-4 {
    width: 33.33333333333333%;
  }
  .col-md-5 {
    width: 41.66666666666667%;
  }
  .col-md-6 {
    width: 50%;
  }
  .col-md-7 {
    width: 58.333333333333336%;
  }
  .col-md-8 {
    width: 66.66666666666666%;
  }
  .col-md-9 {
    width: 75%;
  }
  .col-md-10 {
    width: 83.33333333333334%;
  }
  .col-md-11 {
    width: 91.66666666666666%;
  }
  .col-md-12 {
    width: 100%;
  }
  .col-md-push-0 {
    left: auto;
  }
  .col-md-push-1 {
    left: 8.333333333333332%;
  }
  .col-md-push-2 {
    left: 16.666666666666664%;
  }
  .col-md-push-3 {
    left: 25%;
  }
  .col-md-push-4 {
    left: 33.33333333333333%;
  }
  .col-md-push-5 {
    left: 41.66666666666667%;
  }
  .col-md-push-6 {
    left: 50%;
  }
  .col-md-push-7 {
    left: 58.333333333333336%;
  }
  .col-md-push-8 {
    left: 66.66666666666666%;
  }
  .col-md-push-9 {
    left: 75%;
  }
  .col-md-push-10 {
    left: 83.33333333333334%;
  }
  .col-md-push-11 {
    left: 91.66666666666666%;
  }
  .col-md-pull-0 {
    right: auto;
  }
  .col-md-pull-1 {
    right: 8.333333333333332%;
  }
  .col-md-pull-2 {
    right: 16.666666666666664%;
  }
  .col-md-pull-3 {
    right: 25%;
  }
  .col-md-pull-4 {
    right: 33.33333333333333%;
  }
  .col-md-pull-5 {
    right: 41.66666666666667%;
  }
  .col-md-pull-6 {
    right: 50%;
  }
  .col-md-pull-7 {
    right: 58.333333333333336%;
  }
  .col-md-pull-8 {
    right: 66.66666666666666%;
  }
  .col-md-pull-9 {
    right: 75%;
  }
  .col-md-pull-10 {
    right: 83.33333333333334%;
  }
  .col-md-pull-11 {
    right: 91.66666666666666%;
  }
  .col-md-offset-0 {
    margin-left: 0;
  }
  .col-md-offset-1 {
    margin-left: 8.333333333333332%;
  }
  .col-md-offset-2 {
    margin-left: 16.666666666666664%;
  }
  .col-md-offset-3 {
    margin-left: 25%;
  }
  .col-md-offset-4 {
    margin-left: 33.33333333333333%;
  }
  .col-md-offset-5 {
    margin-left: 41.66666666666667%;
  }
  .col-md-offset-6 {
    margin-left: 50%;
  }
  .col-md-offset-7 {
    margin-left: 58.333333333333336%;
  }
  .col-md-offset-8 {
    margin-left: 66.66666666666666%;
  }
  .col-md-offset-9 {
    margin-left: 75%;
  }
  .col-md-offset-10 {
    margin-left: 83.33333333333334%;
  }
  .col-md-offset-11 {
    margin-left: 91.66666666666666%;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11 {
    float: left;
  }
  .col-lg-1 {
    width: 8.333333333333332%;
  }
  .col-lg-2 {
    width: 16.666666666666664%;
  }
  .col-lg-3 {
    width: 25%;
  }
  .col-lg-4 {
    width: 33.33333333333333%;
  }
  .col-lg-5 {
    width: 41.66666666666667%;
  }
  .col-lg-6 {
    width: 50%;
  }
  .col-lg-7 {
    width: 58.333333333333336%;
  }
  .col-lg-8 {
    width: 66.66666666666666%;
  }
  .col-lg-9 {
    width: 75%;
  }
  .col-lg-10 {
    width: 83.33333333333334%;
  }
  .col-lg-11 {
    width: 91.66666666666666%;
  }
  .col-lg-12 {
    width: 100%;
  }
  .col-lg-push-0 {
    left: auto;
  }
  .col-lg-push-1 {
    left: 8.333333333333332%;
  }
  .col-lg-push-2 {
    left: 16.666666666666664%;
  }
  .col-lg-push-3 {
    left: 25%;
  }
  .col-lg-push-4 {
    left: 33.33333333333333%;
  }
  .col-lg-push-5 {
    left: 41.66666666666667%;
  }
  .col-lg-push-6 {
    left: 50%;
  }
  .col-lg-push-7 {
    left: 58.333333333333336%;
  }
  .col-lg-push-8 {
    left: 66.66666666666666%;
  }
  .col-lg-push-9 {
    left: 75%;
  }
  .col-lg-push-10 {
    left: 83.33333333333334%;
  }
  .col-lg-push-11 {
    left: 91.66666666666666%;
  }
  .col-lg-pull-0 {
    right: auto;
  }
  .col-lg-pull-1 {
    right: 8.333333333333332%;
  }
  .col-lg-pull-2 {
    right: 16.666666666666664%;
  }
  .col-lg-pull-3 {
    right: 25%;
  }
  .col-lg-pull-4 {
    right: 33.33333333333333%;
  }
  .col-lg-pull-5 {
    right: 41.66666666666667%;
  }
  .col-lg-pull-6 {
    right: 50%;
  }
  .col-lg-pull-7 {
    right: 58.333333333333336%;
  }
  .col-lg-pull-8 {
    right: 66.66666666666666%;
  }
  .col-lg-pull-9 {
    right: 75%;
  }
  .col-lg-pull-10 {
    right: 83.33333333333334%;
  }
  .col-lg-pull-11 {
    right: 91.66666666666666%;
  }
  .col-lg-offset-0 {
    margin-left: 0;
  }
  .col-lg-offset-1 {
    margin-left: 8.333333333333332%;
  }
  .col-lg-offset-2 {
    margin-left: 16.666666666666664%;
  }
  .col-lg-offset-3 {
    margin-left: 25%;
  }
  .col-lg-offset-4 {
    margin-left: 33.33333333333333%;
  }
  .col-lg-offset-5 {
    margin-left: 41.66666666666667%;
  }
  .col-lg-offset-6 {
    margin-left: 50%;
  }
  .col-lg-offset-7 {
    margin-left: 58.333333333333336%;
  }
  .col-lg-offset-8 {
    margin-left: 66.66666666666666%;
  }
  .col-lg-offset-9 {
    margin-left: 75%;
  }
  .col-lg-offset-10 {
    margin-left: 83.33333333333334%;
  }
  .col-lg-offset-11 {
    margin-left: 91.66666666666666%;
  }
}
</style>

