/**
 * handles form post request
 *
 * @param {string} params
 */
function postAgent(params) {
  $.ajax({
    type: "POST",
    url: `/api?formId=${params}`,
    data: $(`.${params}-form-data`).serialize(),
    success: function (data) {
      $(".form-success").children().removeClass("d-flex").addClass("d-none");
      $($(".form-success").children().get(1)).addClass("d-flex");
      $(".user-name").text(data.first);
    },
  });
}

/**
 * handles responsive nav menu open/close
 */
function toggleNavDrawer() {
  $(".nav-drawer").toggleClass("d-none d-flex");
  $($(".nav-drawer").first()).hasClass("d-none")
    ? $(".nav-drawer-wrapper").slideDown()
    : $(".nav-drawer-wrapper").slideUp();
}

/**
 * handles which form to display
 */
function displayForm(event, params) {
  $(event.target).attr("disabled", true);
  console.log(event.target);
  $(".form-wrapper").removeClass("d-flex").addClass("d-none");
  switch (params) {
    case "register":
      $(".register-form").removeClass("d-none").addClass("d-flex");
      highlightSelection(".register-form-pagination", 0);
      break;

    default:
      break;
  }
}

/**
 * handles feedback alert on form submission
 */
function submitForm(event, params) {
  event.preventDefault();
  postAgent(params);
  $(".form-wrapper").removeClass("d-flex").addClass("d-none");
  switch (params) {
    case "register":
      $(".form-success").addClass("d-flex");
      break;

    default:
      break;
  }
}

/**
 * highlights a selection with styles defined below
 *
 * @param {string} elementId
 * @param {number} counter
 */
function highlightSelection(elementId, counter) {
  $(elementId).css({
    transform: "scale(1)",
    "border-color": "var(--complementary-color-light)",
  });
  $($(elementId).get(counter)).css({
    transform: "scale(1.25)",
    "border-color": "var(--complementary-color)",
  });
}

/**
 * handles the form slide on next button press or pagination button pressed
 *
 * @param {string} formId
 * @param {number} index
 * @param {boolean} paginator
 */
function slideNextForm(formId, index, paginator = false) {
  highlightSelection(".register-form-pagination", index);
  paginator ? $(formId).carousel(index) : $(formId).carousel("next");
  $(formId).carousel("pause");
}

/**
 * handles background image pagination selector
 *
 * @param {number} index
 */
function slideNextBgImage(index) {
  highlightSelection(".pagination", index);
  $("body").css({
    "background-image": "url('/images/backgrounds/bg-" + index + ".png')",
  });
  if (index === 3) index = 0;
}

/**
 * triggers background image slideshow
 */
function startBgSlideShow() {
  let count = 0;
  highlightSelection(".pagination", 2);
  setInterval(() => {
    highlightSelection(".pagination", count);
    $("body").css({
      "background-image": "url('/images/backgrounds/bg-" + count + ".png')",
    });
    count += 1;
    if (count === 3) count = 0;
  }, 30000);
}

$(document).ready(() => {
  startBgSlideShow();
});
