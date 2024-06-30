let screens = [
  {
    title: "Join us at Grow more\n\n",
    inputs: [],
    nextLabel: "Let's get started",
  },
  {
    title: "Personal Information",
    inputs: [
      {
        type: "text",
        label: "First Name",
        placeholder: "Noor",
        id: "firstName",
        required: true,
        min: 1,
        max: 30,
        setCustomValidity: "Please enter your first name",
      },
      {
        type: "text",
        label: "Last Name",
        placeholder: "Hadid",
        id: "lastName",
        required: true,
        min: 1,
        max: 30,
        setCustomValidity: "Please enter your last name",
      },
      {
        type: "text",
        label: "Email Address",
        placeholder: "john.doe@example.com",
        id: "email",
        required: true,
        max: 100,
        pattern: "[^@\\s]+@[^@\\s]+\\.[^@\\s]+",
        setCustomValidity: "Please enter a valid email address",
      },
    ],
  },
  {
    title: "Business Name",
    inputs: [
      {
        type: "text",
        label: "Business Name",
        placeholder: "Acme Corporation",
        id: "businessName",
        required: true,
        min: 1,
        max: 100,
        setCustomValidity: "Please enter your business name",
      },
    ],
  },
  {
    title: "Business Location",
    inputs: [
      {
        type: "radio",
        label: "Country",
        id: "country",
        options: [
          "Saudi Arabia",
          "United Arab Emirates",
          "Kuwait",
          "Qatar",
          "Bahrain",
          "Oman",
        ],
        required: true,
      },
    ],
  },
  {
    title: "Industry/Sector",
    inputs: [
      {
        type: "radio",
        label: "Choose your industry",
        id: "industry",
        options: [
          "Agriculture and Natural Resources",
          "Arts, Entertainment, and Media",
          "Manufacturing and Construction",
          "Financial Services",
          "Education and Healthcare",
          "Technology and Communications",
          "Retail and Consumer Services",
          //"Professional and Business Services",
          //"Government and Non-Profit",
          "Transportation and Utilities",
        ],
        required: true,
      },
    ],
  },
  {
    title: "Business Stage",
    inputs: [
      {
        type: "radio",
        label: "Current stage of your business",
        id: "stage",
        options: [
          "Idea Stage",
          "Startup Stage",
          "Growth Stage",
          "Mature Stage",
        ],
        required: true,
      },
    ],
  },
  {
    title: "Business Size",
    inputs: [
      {
        type: "radio",
        label: "Number of Employees",
        id: "size",
        options: [
          "1-10 Employees",
          "11-50 Employees",
          "51-200 Employees",
          "201-500 Employees",
          "500+ Employees",
        ],
        required: true,
      },
    ],
  },
  {
    title: "Key Products/Services",
    inputs: [
      {
        type: "text",
        label: "Describe your main offerings",
        placeholder: "e.g., Mobile app for social networking",
        id: "products",
        required: true,
        min: 1,
        max: 200,
        setCustomValidity: "Please describe your key products or services",
      },
    ],
  },
  {
    title: "Previous Funding",
    inputs: [
      {
        type: "radio",
        label: "Previous Funding Sources",
        id: "funding",
        options: [
          "None",
          "Friends and Family",
          "Angel Investors",
          "Venture Capital",
          "Bank Loan",
          "Crowdfunding",
        ],
        required: true,
      },
    ],
  },
  {
    title: "Funding Purpose",
    inputs: [
      {
        type: "radio",
        label: "Primary purpose for seeking funding",
        id: "purpose",
        options: [
          "Product Development",
          "Marketing and Sales",
          "Business Expansion",
          "Research & Development",
          "Operational Costs",
        ],
        required: true,
      },
    ],
  },
];

let currentScreen = 0;
let data = {};

function displayCurrentScreen() {
  let screen = screens[currentScreen];
  let screenElm = document.getElementById("screen");
  screenElm.innerHTML = "";
  let form = document.createElement("form");
  screenElm.appendChild(form);
  let title = document.createElement("h1");
  title.innerText = screen.title;
  form.appendChild(title);
  for (let input of screen.inputs) {
    let inputContainer = document.createElement("div");
    inputContainer.classList.add("input");
    if (input.required) inputContainer.classList.add("required");
    form.appendChild(inputContainer);
    let label = document.createElement("label");
    label.innerText = input.label;
    inputContainer.appendChild(label);

    if (input.type === "text") {
      let element = document.createElement("input");
      element.type = "text";
      element.placeholder = input.placeholder;
      element.id = input.id;
      if (input.required) element.required = true;
      if (input.pattern) element.setAttribute("pattern", input.pattern);
      if (input.min) element.setAttribute("minlength", input.min);
      if (input.max) element.setAttribute("maxlength", input.max);
      inputContainer.appendChild(element);
    } else if (input.type === "radio") {
      let radioContainer = document.createElement("div");
      radioContainer.classList.add("radio-group");
      inputContainer.appendChild(radioContainer);
      for (let option of input.options) {
        let radioWrapper = document.createElement("div");
        radioWrapper.classList.add("radio-wrapper");
        let radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = input.id;
        radioInput.value = option;
        radioInput.id = `${input.id}-${option
          .replace(/\s+/g, "-")
          .toLowerCase()}`;
        if (input.required) radioInput.required = true;
        let radioLabel = document.createElement("label");
        radioLabel.innerText = option;
        radioLabel.setAttribute("for", radioInput.id);
        radioWrapper.appendChild(radioInput);
        radioWrapper.appendChild(radioLabel);
        radioContainer.appendChild(radioWrapper);
      }
    }
  }

  // Create a button element instead of an input[type="submit"]
  let button = document.createElement("button");
  button.type = "submit";
  button.textContent = screen.nextLabel || "Next";
  form.appendChild(button);

  form.onsubmit = function (event) {
    event.preventDefault();

    for (let input of screen.inputs) {
      if (input.type === "text") {
        data[input.id] = document.getElementById(input.id).value;
      } else if (input.type === "radio") {
        data[input.id] = document.querySelector(
          `input[name="${input.id}"]:checked`
        ).value;
      }
    }

    currentScreen++;

    if (currentScreen === screens.length) displayLastScreen();
    else displayCurrentScreen();
  };

  if (form.elements.length > 0) {
    form.elements[0].focus();
  }
}

function displayLastScreen() {
  let screenElm = document.getElementById("screen");
  screenElm.innerHTML = "";

  let title = document.createElement("h2");
  title.innerText = "All done!\n\nHere is you business Summary:";
  screenElm.appendChild(title);

  let summary = document.createElement("p");
  summary.innerHTML = generateSummary();
  screenElm.appendChild(summary);
}

function generateSummary() {
  const companyInfo = `<b>${
    data.businessName
  }</b> is a <b>${data.stage.toLowerCase()}</b> <b>${data.size.toLowerCase()}</b> business in the <b>${
    data.industry
  }</b> sector, based in <b>${
    data.country
  }</b>.<br><br>The company specializes in <b>${
    data.products
  }</b> and is currently seeking funding to <b>${data.purpose.toLowerCase()}</b>. ${
    data.businessName
  } has ${
    data.funding === "None"
      ? "not received any external funding"
      : `previously secured funding from <b>${data.funding.toLowerCase()}</b>`
  }.`;

  const stageSpecificInfo =
    data.stage === "Idea Stage" || data.stage === "Startup Stage"
      ? `As an emerging player in the <b>${data.industry}</b> market, ${data.businessName} shows significant potential for growth and innovation.`
      : `With its established presence in the <b>${data.industry}</b> sector, ${
          data.businessName
        } is well-positioned to leverage additional funding to <b>${data.purpose.toLowerCase()}</b> and further strengthen its market position.`;

  return `${companyInfo}<br><br>${stageSpecificInfo}`;
}
// Start showing the first screen
displayCurrentScreen();
