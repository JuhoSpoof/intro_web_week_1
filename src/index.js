if (document.readyState !== "loading") {
  //console.log("Document is ready");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    //  console.log("Document is ready after waiting");
    initializeCode();
  });
}

function initializeCode() {
  const myButton = document.getElementById("my-button");
  const myHeader = document.getElementById("my-header");
  const addData = document.getElementById("add-data");

  myButton.addEventListener("click", function () {
    console.log("hello world");
    //console.log(myHeader.innerHTML);
    myHeader.innerHTML = "My notebook";
  });

  addData.addEventListener("click", function () {
    const ulText = document.getElementById("ul-text");
    let newLi = document.createElement("li");

    //newLi.innerText = "hello mister Li";
    //ulText.appendChild(newLi);

    newLi.innerText = document.getElementById("text-area").value;
    ulText.appendChild(newLi);
  });
}
