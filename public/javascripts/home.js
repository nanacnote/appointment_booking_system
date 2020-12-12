/**
 * handles API form post request
 *
 * @param {string} formId
 */
function postAgent(formId) {
  $.ajax({
    type: "POST",
    url: `/api?formId=${formId}`,
    data: $(`.${formId}-form-data`).serialize(),
    beforeSend: function () {
      if (formId === "login") return;
      $(`.form-success-error`).addClass("d-flex");
    },
    success: function (data) {
      if (formId === "login") {
        $(".book-form").children().toggleClass("d-block d-none");
        return;
      }
      $(".form-async-spinner").toggleClass("d-flex d-none");
      $(`.${formId}-form-success`).addClass("d-flex");

      $(".success-feedback-data").text(data.first || data.timeSlot);
    },
    error: function () {
      if (formId === "login") {
        $(".login-error-feedback").text("*invalid login credentials");
        return;
      }
      $(".form-async-spinner").toggleClass("d-flex d-none");
      $(`.${formId}-form-error`).addClass("d-flex");
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
 *
 * @param {string} formId
 */
function displayForm(formId) {
  $(".form-button").attr("disabled", false);
  $(".form-wrapper").removeClass("d-flex").addClass("d-none");

  $(`.${formId}-form-button`).attr("disabled", true);
  $(`.${formId}-form`).addClass("d-flex");

  $("#register-form-carousel").carousel(0);
  $("#register-form-carousel").carousel("pause");
  highlightSelection(".register-form-pagination", 0);
}

/**
 * handles user logic logic
 */
function loginTrigger(event) {
  event.preventDefault();
  const credentials = $(".login-form-data").serialize();
  postAgent("login");
}

/**
 * handles feedback alert on form submission
 *
 * @param {string} elementId
 * @param {string} formId
 */
function submitForm(event, formId) {
  event.preventDefault();
  $(".form-wrapper").removeClass("d-flex").addClass("d-none");
  postAgent(formId);
}

/**
 * handles appointment date selection
 */
function selectDate() {
  $(".calendar-date-open").on("click", function () {
    $(".calendar-time").slideDown();

    const children = $(".time-slot-input");

    const date = $(this).text();
    const month = $(this).data("month");
    const time = Object.values($(this).data("time"));

    children.each(function () {
      $(this)
        .find("input")
        .val(`${date} ${month.month} ${time[children.index(this)]}`);
      $(this).find("label").text(time[children.index(this)]);
    });
  });
}

/**
 * cancels appointment date selection
 */
function cancelBooking() {
  $(".calendar-time").slideUp();
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
 * handles home slideshow css styling
 * @param {number} index
 */
function bgSlideShowCss(index) {
  $("#home").css({
    "background-image": "url('/images/backgrounds/bg-" + index + ".png')",
  });
}

/**
 * handles background image pagination selector
 *
 * @param {number} index
 */
function slideNextBgImage(index) {
  highlightSelection(".pagination", index);
  bgSlideShowCss(index);
  if (index === 3) index = 0;
}

/**
 * triggers background image slideshow
 */
function startBgSlideShow() {
  let index = 0;
  highlightSelection(".pagination", 2);
  setInterval(() => {
    highlightSelection(".pagination", index);
    bgSlideShowCss(index);
    index += 1;
    if (index === 3) index = 0;
  }, 30000);
}

$(document).ready(() => {
  startBgSlideShow();
  selectDate();

  // prevent carousel from sliding on touch screen
  $("#register-form-carousel").on("slid.bs.carousel", function (e) {
    $("#register-form-carousel").carousel("pause");
  });
});
