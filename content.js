if (event.target.classList.contains("ql-editor")) {
  const parentForm = event.target.closest(".comments-comment-texteditor");

  if (parentForm && !parentForm.classList.contains("buttons-appended")) {
    // add appended class to add buttons only on the first event trigger
    parentForm.classList.add("buttons-appended");

    // create and append engage button
    let engageBtn = document.createElement("button");
    engageBtn.classList.add("rounded-button");
    engageBtn.innerText = "🤝 Engage";

    parentForm.appendChild(engageBtn);

    engageBtn.addEventListener("click", function (event) {
      processButtonClicked(event, "engage", parentForm);
    });
  } else {
    console.log(
      "No parent with the class 'comments-comment-texteditor' found for the focused element."
    );
  }
}
