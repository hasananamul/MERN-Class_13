/**
 *
 * Team member section script start
 */

let team_form = document.getElementById("team_form");
let sub_btn = document.querySelector("#sub_btn");

team_form.addEventListener("submit", function (prevent) {
  prevent.preventDefault();

  let dev_name = document.querySelector('input[name="name"]');
  let dev_gmail = document.querySelector('input[name="img"]').value;
  let dev_gender = document.querySelector('input[name="gender"]').value;
  let dev_skill = document.querySelectorAll('input[type="checkbox"]:checked');
  console.log(dev_name, dev_skill, dev_gmail, dev_gender);
});
