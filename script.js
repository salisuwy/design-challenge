$(document).ready(function () {
  $("#btn-newsletter").on("click", function () {
    $("#modal").show();
  });

  $("#backdrop").on("click", function () {
    $("#modal").hide();
  });

  $("#modal-close").on("click", function () {
    $("#modal").hide();
  });

  $("#modal-form").submit(function (e) {
    e.preventDefault();
    const fullName = $("#fullName");
    const email = $("#email");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let isFormValid = true;

    fullName.removeClass("error");
    email.removeClass("error");

    if (fullName.val().trim().length == 0) {
      fullName.addClass("error");
      isFormValid = false;
    }
    if (!emailPattern.test(email.val().trim())) {
      email.addClass("error");
      isFormValid = false;
    }

    if (!isFormValid) {
      return;
    }

    // send data to server
    const formData = $(this).serializeArray();
    alert("Form submitted");
    // clear form entries
    // show message

    // close modal
    setTimeout(function () {
      $("#modal").hide();
    }, 2000);
  });
});
