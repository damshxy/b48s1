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

  let projectPreviewCard = {
    projectName,
    startDate,
    endDate,
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
                    <p>Duration: ${projectData[i].startDate} | ${projectData[i].endDate}</p>
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
