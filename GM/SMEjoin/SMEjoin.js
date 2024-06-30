let screens = [
  {
    title: "Hello there!\nJoin us to get started",
    inputs: [],
    nextLabel: "Join",
  },
  {
    title: "Personal information",
    inputs: [
      {
        type: "text",
        label: "First Name",
        placeholder: "Noor",
        id: "firstName",
        required: true,
        min: 1,
        max: 30,
        setCustomValidity: "Please enter a valid name",
      },
      {
        type: "text",
        label: "Last Name",
        placeholder: "Hadid",
        id: "lastName",
        required: true,
        min: 1,
        max: 30,
        setCustomValidity: "Please enter a valid name",
      },
      {
        type: "text",
        label: "Email",
        placeholder: "name@example.com",
        id: "email",
        required: true,
        max: 100,

        pattern: "[^@s]+@[^@s]+.[^@s]+",

        setCustomValidity: "Please enter a valid email",
      },
    ],
  },
  {
    title: "Business name",
    inputs: [
      {
        type: "text",
        label: "Business Name",
        placeholder: "SME",
        id: "businessName",
        required: true,
        min: 1,
        max: 100,
        setCustomValidity: "Please enter a valid name",
      },
    ],
  },
  {
    title: "Business Location",
    inputs: [
      {
        type: "select",
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
      },
    ],
  },
  {
    title: "Business Industry",
    inputs: [
      {
        type: "select",
        label: "Choose Industry/Sector",
        id: "industry",
        options: [
          "Agriculture and Natural Resources",
          "Arts, Entertainment, and Media",
          "Manufacturing and Construction",
          "Financial Services",
          "Education and Healthcare",
          "Technology and Communications",
          "Retail and Consumer Services",
          "Professional and Business Services",
          "Government and Non-Profit",
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
        type: "select",
        label: "Choose Business Stage",
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
        type: "select",
        label: "Choose Business Size",
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
    title: "Purpose of Funding",
    inputs: [
      {
        type: "select",
        label: "Choose Purpose of Funding",
        id: "purpose",
        options: [
          "Product Development",
          "Marketing",
          "Expansion",
          "Research & Development",
          "Operational Costs",
        ],
        required: true,
      },
    ],
  },
  {
    title: "Previous Funding Received",
    inputs: [
      {
        type: "select",
        label: "Choose Previous Funding Received",
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
    title: "Key Products/Services Offered",
    inputs: [
      {
        type: "text",
        label: "Key Products/Services Offered",
        placeholder: "Social App",
        id: "products",
        required: true,
        min: 1,
        max: 200,
        setCustomValidity: "Please enter a valid description",
      },
    ],
  },
];

screens = [
  {
    title: "Welcome! Let's get started",
    inputs: [],
    nextLabel: "Begin",
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
        type: "select",
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
        type: "select",
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
          "Professional and Business Services",
          "Government and Non-Profit",
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
        type: "select",
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
        type: "select",
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
        type: "select",
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
        type: "select",
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
    let inpiutContainer = document.createElement("div");
    inpiutContainer.classList.add("input");
    if (input.required) inpiutContainer.classList.add("required");
    //add pattern attribute

    form.appendChild(inpiutContainer);
    let label = document.createElement("label");
    label.innerText = input.label;
    inpiutContainer.appendChild(label);
    let element;
    if (input.type === "text") {
      element = document.createElement("input");
      element.type = "text";
      element.placeholder = input.placeholder;
    } else if (input.type === "select") {
      element = document.createElement("select");
      //set size to number of options
      element.size = input.options.length;
      for (let option of input.options) {
        let optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.innerText = option;
        element.appendChild(optionElement);
      }
    }
    element.id = input.id;
    //set required attribute
    if (input.required) element.required = true;
    if (input.pattern) element.setAttribute("pattern", input.pattern);
    if (input.min) element.setAttribute("minlength", input.min);
    if (input.max) element.setAttribute("maxlength", input.max);

    inpiutContainer.appendChild(element);
  }
  //create submit button (defualt label next)
  let button = document.createElement("input");
  button.type = "submit";
  button.value = screen.nextLabel || "Next";
  form.appendChild(button);

  form.onsubmit = function (event) {
    event.preventDefault();

    for (let input of screen.inputs) {
      data[input.id] = document.getElementById(input.id).value;
    }

    currentScreen++;

    if (currentScreen === screens.length) displayLastScreen();
    else displayCurrentScreen();
  };

  //focuse on first input
  form.elements[0].focus();
}

//start showing the first screen
displayCurrentScreen();

// function displayLastScreen() {
//   let screenElm = document.getElementById("screen");
//   screenElm.innerHTML = "";
//   let title = document.createElement("h1");
//   title.innerText = `Thank you for joining us!
//   ${data.firstName} ${data.lastName}
//   `;
//   screenElm.appendChild(title);
//   let list = document.createElement("ul");
//   screenElm.appendChild(list);
//   for (let key in data) {
//     let listItem = document.createElement("li");
//     listItem.innerHTML = `<b>${key}</b>: ${data[key]}`;
//     list.appendChild(listItem);
//   }
// }

function displayLastScreen() {
  let screenElm = document.getElementById("screen");
  screenElm.innerHTML = "";

  let title = document.createElement("h1");
  title.innerText = "Business Summary";
  screenElm.appendChild(title);

  let summary = document.createElement("p");
  summary.innerHTML = generateSummary();
  screenElm.appendChild(summary);
}

function generateSummary() {
  let summary = `${
    data.businessName
  } is a ${data.stage.toLowerCase()} business located in ${
    data.country
  }, operating in the ${
    data.industry
  } sector. As a ${data.size.toLowerCase()} enterprise, the company is seeking funding for ${data.purpose.toLowerCase()}.`;

  summary += ` Specializing in ${data.products}, ${
    data.businessName
  } has previously received funding from ${
    data.funding === "None" ? "no external sources" : data.funding.toLowerCase()
  }.`;

  if (data.stage === "Idea Stage" || data.stage === "Startup Stage") {
    summary += ` As a ${data.stage.toLowerCase()} venture, ${
      data.businessName
    } represents an emerging player in the ${
      data.industry
    } market, with potential for significant growth and innovation.`;
  } else {
    summary += ` With its established presence in the ${
      data.industry
    } sector, ${
      data.businessName
    } is well-positioned to leverage additional funding to ${data.purpose.toLowerCase()} and further strengthen its market position.`;
  }

  return summary;
}
