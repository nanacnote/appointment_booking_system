/**
 * handles responsive nav menu open
 */
function openNavDrawer() {
  if ($(".nav-drawer").hasClass("d-none")) {
    $(".nav-drawer").removeClass("d-none").addClass("d-flex");
  }
}

/**
 * handles responsive nav menu close
 */
function closeNavDrawer() {
  if ($(".nav-drawer").hasClass("d-flex")) {
    $(".nav-drawer").removeClass("d-flex").addClass("d-none");
  }
}

/**
 * handles which form to display
 */
function displayForm(params) {
  switch (params) {
    case "register":
      $(".register-form").removeClass("d-none").addClass("d-flex");
      break;

    default:
      break;
  }
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

function slideNextBgImage(index) {
  highlightSelection(".pagination", index);
  $("body").css({
    "background-image": "url('/images/backgrounds/bg-" + index + ".png')",
  });
  if (index === 3) index = 0;
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

let count = 0;

$(document).ready(
  // handles background slide show
  setInterval(() => {
    slideNextBgImage(count);
    count += 1;
    if (count === 3) count = 0;
  }, 30000)
);
