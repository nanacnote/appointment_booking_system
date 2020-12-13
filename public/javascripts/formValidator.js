// feedback string on invalid input
const errorFeedback = {
  "address-line1": "Please enter address",
  "address-line2": "Optional field",
  city: "Please enter city",
  dob: "DOB is required",
  email: "invalid email entered",
  ethnicity: "Please select option",
  first: "valid firstname required",
  gender: "Please select option",
  last: "valid lastname required",
  password: "try again min 8 char 1 letter 1 number",
  phone: "invalid UK number",
  "post-code": "invalid UK postcode",
};

// validation schema for each field
const validate = {
  "address-line1": (str) => isRequired(str),
  "address-line2": () => true,
  city: (str) => isRequired(str),
  dob: (str) => isRequired(str),
  email: (str) => validateEmail(str),
  ethnicity: (str) => isRequired(str),
  first: (str) => isRequired(str),
  gender: (str) => isRequired(str),
  last: (str) => isRequired(str),
  password: (str) => validatePassword(str),
  phone: (str) => validatePhone(str),
  "post-code": (str) => validatePostcode(str),
};

function validatePostcode(str) {
  // valid uk postcode
  const regex = /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/;
  return regex.test(String(str).toLowerCase());
}

function validateEmail(str) {
  // valid email shape
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(str).toLowerCase());
}

function validatePassword(str) {
  // Minimum eight characters, at least one letter and one number
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(String(str).toLowerCase());
}

function validatePhone(str) {
  // valid uk landline and mobile numbers
  const regex = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
  return regex.test(String(str).toLowerCase());
}

function isRequired(str) {
  // checks if there is an entry
  return !!str.length;
}

/**
 * handles prompting user when invalid input is entered
 *
 * @param {object} inputDictionary object with input name as key and boolean as value based on if it passed validation
 */
function errorAlert(inputDictionary) {
  let counter = 0;
  const dictArray = Object.entries(inputDictionary);
  dictArray.forEach(([input, isValid]) => {
    if (isValid) {
      $(`.${input}-error-feedback`)
        .removeClass("input-error")
        .addClass("input-success")
        .text("*valid input");
      counter += 1;
    } else {
      $(`.${input}-error-feedback`)
        .removeClass("input-success")
        .addClass("input-error")
        .text(`${errorFeedback[input]}`);
    }
  });
  return counter === dictArray.length;
}

/**
 * handles form data validation
 *
 * @param {string} formId the ID of the form requesting user input validation
 */
function formValidator(formId) {
  if (formId !== "register") return true;

  let data = {};
  const formData = $(`.${formId}-form-data`).serializeArray();

  $(formData).each(function (index, obj) {
    data[obj.name] = validate[obj.name](obj.value);
  });

  data = { ethnicity: false, gender: false, ...data };

  return errorAlert(data);
}
