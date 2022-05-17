function readMoreChapter1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1"); 
  var btnText = document.getElementById("myBtn1"); 

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Let's Read"; 
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "Hope you enjoyed";
      moreText.style.display = "inline";
  }
}
const countEl = document.getElementById("count");
      countvisits();

      function countvisits() {
        fetch('https://api.countapi.xyz/update/LOST/wow/?amount=1')
          .then((res) => res.json())
          .then((res) => {
            countEl.innerHTML = res.value;
          });
      }