const emptyProject = () => {
  let projectName = document.getElementById("projectName").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-image").value;

  if (projectName == "") {
    return alert("Project Name cant empty");
  } else if (startDate == "") {
    return alert("When did you start this project");
  } else if (endDate == "") {
    return alert("Whent did you end this project");
  } else if (description == "") {
    return alert("Please describe this project");
  } else if (image == "") {
    return alert("Please input your image project");
  }
};

const projectData = [];

function postProject(event) {
  event.preventDefault();

  let projectName = document.getElementById("projectName").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-image").files;

  const nodeIcon = ' <i class="fa-brands fa-node-js"></i>';
  const reactIcon = '<i class="fa-brands fa-react"></i>';
  const golangIcon = '<i class="fa-brands fa-golang"></i>';
  const jsIcon = '<i class="fa-brands fa-square-js"></i>';

  let nodeChecked = document.getElementById("nodeCheck").checked
    ? nodeIcon
    : "";
  let reactChecked = document.getElementById("reactCheck").checked
    ? reactIcon
    : "";
  let golangChecked = document.getElementById("goCheck").checked
    ? golangIcon
    : "";
  let jsChecked = document.getElementById("jsCheck").checked ? jsIcon : "";

  image = URL.createObjectURL(image[0]);

  let timeDistance = getDistanceTime()

  let projectPreviewCard = {
    projectName,
    startDate,
    endDate,
    timeDistance,
    description,
    nodeChecked,
    reactChecked,
    golangChecked,
    jsChecked,
    image,
  };

  projectData.push(projectPreviewCard);
  console.log(projectData);
  renderProject();
};

function renderProject() {
  document.getElementById("cardProject").innerHTML = "";

  for (let i = 0; i < projectData.length; i++) {
    let formattedStartDate = formatDate(projectData[i].startDate);
    let formattedEndDate = formatDate(projectData[i].endDate);

    document.getElementById("cardProject").innerHTML += `
        <div class="cardProject" id="cardProject">
                <div class="imgCard">
                    <img src="${projectData[i].image}" />
                </div>
                <div class="title">
                    <a href="detailProject.html">
                        <h3>${projectData[i].projectName}</h3>
                    </a>
                </div>
                <div class="duration">
                    <p class="durationDate">Start - End : ${formattedStartDate} | ${formattedEndDate}</p>
                    <p class="durationTime">Duration : ${projectData[i].timeDistance}</p>
                </div>
                <div class="content">
                    <p>${projectData[i].description}</p>
                </div>
                <div class="tech">
                     ${projectData[i].nodeChecked}
                     ${projectData[i].reactChecked}
                     ${projectData[i].golangChecked}
                     ${projectData[i].jsChecked}
                </div>
                <div class="buttons">
                    <button type="button">Edit</button>
                    <button type="button">Delete</button>
                </div>
            </div>`;
  }
};


 function getDistanceTime() {
  const milliesecond = 1000
  const second = 3600
  const day = 24
  const week = 7
  const month = 30
  const year = 12


   let startDate = new Date(document.getElementById("input-start-date").value);
   let endDate = new Date(document.getElementById("input-end-date").value);
   let distance = new Date(endDate) - new Date(startDate);
   let days = Math.floor(distance / (milliesecond * second * day));
   let weeks = Math.floor(distance / (milliesecond * second * day * week));
   let months = Math.floor(distance / (milliesecond * second * day * month));
   let years = Math.floor(distance / (milliesecond * second * day * month * year));

   if (years == 1) {
     return `${years} year`;
   } else if (years > 0) {
     return `${years} years`;
   } else if (months == 1) {
     return `${months} month`;
   } else if (months > 0) {
     return `${months} months`;
   } else if (weeks == 1) {
     return `${weeks} week`;
   } else if (weeks > 0) {
     return `${weeks} weeks`;
   } else if (days == 1) {
     return `${days} day`;
   } else if (days > 0) {
     return `${days} days`
   }
 }

 function formatDate(dateString) {
   const monthsName = [
     "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December",
   ];

   const date = new Date(dateString);
   const monthIndex = date.getMonth();
   const monthName = monthsName[monthIndex];

   const day = date.getDate();
   const year = date.getFullYear();

   return `${monthName} ${day}, ${year}`;
 }