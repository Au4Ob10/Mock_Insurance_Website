// JS Code for index.html

const carPolicy = {
  h1: "Auto Insurance",
  p: "For almost 30 years, we've given you the car protection you deserve.  Policies start at just $800/year.  Drivers save an average of 10% when they switch to AIC Insurance.",
  img: "./images/carimage.jpg",
};

const homePolicy = {
  h1: "Homeowner's Insurance",
  p: "Our home insurance plans cover floods, power outages,and many more. Owning a house can be stressful.  With AIC Insurance, we can help protect your valuable assets.",
  img: "./images/homephoto.jpg",
};

const condoPolicy = {
  h1: "Condo Insurance",
  p: "We got you covered for any unfortunate events.  Our plans cover power outages, vandalism, and floods.  Peace of mind is valuable, get AIC and get the protection you deserve.",
  img: "./images/condophoto.jpg",
};

const aptmtPolicy = {
  h1: "Renter's Insurance",
  p: "Renter's insurance covers many of your needs including theft and wind damage. We help protect your living space.  Our trusted team members will assist you with any inquiries.",
  img: "./images/apartmentphoto.jpg",
};

let planButtons =
  document.getElementsByClassName("insButtonContainer")[0].children;

const insPlanWindow = document.querySelector(".insPlanWindow");

function planTextDisplay({ h1, p, img }) {
  const planHeading = document.querySelector(".planHeading");
  planHeading.textContent = h1;
  const planBody = document.querySelector(".planBody");
  planBody.textContent = p;
  const planImg = document.querySelector(".planImg");
  planImg.src = `${img}`;
}

for (let i = 0; i <= 3; i++) {
  planButtons[i].onmouseover = function () {
    this.style.backgroundColor = "#ECECEC";
  };
  planButtons[i].onmouseout = function () {
    this.style.backgroundColor = "white";
  };

  planButtons[i].onclick = function () {
    if (i === 0) {
      planTextDisplay(carPolicy);
    } else if (i === 1) {
      planTextDisplay(homePolicy);
    } else if (i === 2) {
      planTextDisplay(condoPolicy);
    } else {
      planTextDisplay(aptmtPolicy);
    }

    insPlanWindow.style.visibility = "visible";
  };
}

document.onkeydown = function (currentKey) {
  if (currentKey.key == "Escape") {
    insPlanWindow.style.visibility = "hidden";
  }
};

const closeBtn = document.getElementById("closeBtn");

closeBtn.onclick = function () {
  insPlanWindow.style.visibility = "hidden";
};

const loginButton = document.querySelector("#loginBtn");

loginButton.onclick = function () {
  prompt("Username or Email", "");
  prompt("Password", "");
  alert("Welcome!");
};
