<template>
  <div class="footer-contents">
    <div id="red" class="footer">
      <div id="secondApp" class="footer">
        <div class="contain">
          <div class="col">
            <h1>Company</h1>
            <ul>
              <li>
                <a href="Evenidontknow-eidk-team.html">Our Team</a>
              </li>
              <li>
                <a href="eidk-mission.html">Mission</a>
              </li>
              <li>
                <a target="_blank" href="https://angel.co/evenidontknow_com">Careers</a>
              </li>
              <li>
                <a href="contactus.html">Contact</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <h1>Products</h1>
            <ul>
              <li>
                <a href="Android-Tutorials-Eidk.html">AndroidTutorials</a>
              </li>
              <li>
                <a href="Python-tutorials-eidk.html">Python Tutorials</a>
              </li>
              <li>
                <a href="Eidk-online-classes.html">Android Classes</a>
              </li>
              <li>
                <a href="Eidk-online-classes.html">Python Classes</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <h1>Links</h1>
            <ul>
              <li>
                <a href="donate-us-evenidontknow.html">Donate Us</a>
              </li>
              <li>
                <a href="SiteMap.html">Site Map</a>
              </li>
              <li>
                <a href="privacy.html">Privacy</a>
              </li>
              <li>
                <a href="Terms.html">Terms</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <h1>Support</h1>
            <ul>
              <li>
                <a style="color: #fff;" href="donate-us-evenidontknow.html">
                  <img
                    alt="DONTE-EIDK-EVENIDONTKNOW"
                    src="../assets/images/donate.png"
                    width="140px"
                    height="60px"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div class="col social">
            <h1>Social</h1>
            <ul class="social-media">
              <li>
                <a href="https://www.facebook.com/Evenidontknow" target="_blank">
                  <img src="../assets/images/facebook2.svg" width="32" style="width: 32px;" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/evenidontknw" target="_blank">
                  <img src="../assets/images/twitter.svg" width="32" style="width: 32px;" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/evenidontknow_com/" target="_blank">
                  <img src="../assets/images/instagram.svg" width="32" style="width: 32px;" />
                </a>
              </li>
              <li>
                <a href="https://github.com/evenidontknow" target="_blank">
                  <img src="../assets/images/githubwhite.png" width="32" style="width: 32px;" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.footer-container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
}
.welcome {
  max-width: 100px;
  margin-left: 10px;
  padding: 0 10px;
}
.welcome-profile {
  float: left;
  width: fit-content;
  border-radius: 50%;
  shape-outside: circle();
  margin: 2rem;
  position: relative;
}
.welcome img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  filter: drop-shadow(0 1px 5px rgba(37, 37, 37, 0.5));
}
.message-content {
  margin: 0 0 20px 20px;
  flex-grow: 1;
  position: relative;
  border: 1px solid #e7e7e7;
  padding: 20px;
  border-radius: 5px;
}
.message-header {
  margin-right: 80px;
  font-weight: 600;
  margin-bottom: 10px;
}
.option-container {
  margin-top: 20px;
  text-align: center;
  display: flex;
  flex-direction: row;
}
.row {
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.goal-option {
  text-decoration: none;
  font-size: 1rem;
  padding: 10px;
  margin: 5px 5px 0;
  flex-grow: 1;
}
.goal-option:not(.dismissible):first-of-type:hover {
  color: #008100;
  border-color: #008100;
}
.message-content::after,
.message-content::before {
  left: 0;
  top: 25px;
  border: solid transparent;
  height: 0;
  width: 0;
  content: " ";
  position: absolute;
}
.message-content::after {
  border-right-color: #fff;
  margin-left: -19px;
  border-width: 10px;
}

.message-content::before {
  margin-left: -20px;
  border-right-color: #e7e7e7;
  border-width: 10px;
}
#red {
  border-top: solid #ffd342;
  border-width: 15px;
  background: #2e2e2e;
}
.footer {
  width: 100%;
  position: absolute;
  height: auto;
  background-color: #070617;
}
.contain {
  width: 1200px;
  margin: 0 auto;
}
.footer .col {
  /* width: 190px; */
  text-align: left;
  height: auto;
  float: left;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 0px 20px 20px 20px;
}
.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}
.footer .col h1 {
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-size: 15px;
  line-height: 17px;
  padding: 20px 0px 5px 15px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.25em;
}
.footer .col ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.footer .col ul li {
  color: #999999;
  font-size: 14px;
  font-family: inherit;
  font-weight: bold;
  padding: 5px 0px 5px 15px;
  cursor: pointer;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
}
.footer a {
  color: #999999;
  font-size: 14px;
  font-family: inherit;
  font-weight: bold;
  padding: 5px 0px 5px 0px;
  cursor: pointer;
  transition: 0.2s;
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  text-decoration: none !important;
}
.social-media {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.footer-contents {
  position: relative;
}
</style>