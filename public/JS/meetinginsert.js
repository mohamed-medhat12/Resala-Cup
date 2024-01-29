async function file_get_contents(uri, callback) {
  let res = await fetch(uri),
    ret = await res.text();
  return callback ? callback(ret) : ret; // a Promise() actually.
}

function submitMeet() {
  var meetingDate = document.getElementById("meetingDate").value;
  var title = document.getElementById("meetingTitle").value;
  var ma7dr = document.getElementById("ma7dr").value;
  var branch = localStorage.getItem("branch");
  // You can add additional logic here, such as sending the feedback to a server.
  var url ="https://script.google.com/macros/s/AKfycbymF1VfS2-fqkfehBanLhvAcOSm-3ReNXie8tTkUxIvkTvDMbA2OdebFnhuF7FuQ3ra/exec?sdata=";
  const dash = ",";
  var temp = encodeURIComponent(meetingDate+dash+branch + dash + title + dash + ma7dr);
  var newUrl = url + temp;
  file_get_contents(newUrl, console.log);
  // For demonstration purposes, we'll log the feedback to the console.

  // You can also reset the form if needed.
  document.getElementById("feedbackForm").reset();
  const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

  async function delayedGreeting() {
    await sleep(1000);
    location.reload();
  }

  delayedGreeting();
}
