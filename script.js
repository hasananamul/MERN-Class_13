// const box = document.querySelector(".box");
// const h2 = document.createElement("h2");
// const p = document.createElement("p");
// const a = document.createElement("a");
// const plus = document.querySelector(".fa-plus");
// plus.addEventListener("click", () => {
//   box.insertAdjacentHTML(
//     "beforeend",
//     (text = document.createTextNode =
//       `<p>This is p tag <i class='fa fa-minus'></i></p>`)
//   );
// });
// const minus = document.querySelector(".fa-minus");
// h2.innerText = "My name is hasan anamul";
// h2.classList.add("text-primary");
// h2.classList.add("text-center");
// p.innerText =
//   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, at!";
// p.classList.add("text-center");
// a.innerText = "Sign up";
// a.classList.add("btn");
// a.classList.add("btn-primary");
// a.classList.add("w-50");
// a.classList.add("d-block");
// a.classList.add("m-auto");
// a.draggable = true;
// h2.draggable = true;
// p.draggable = true;
// box.append(h2);
// box.append(p);
// box.append(a);
// console.log(h2);
// console.log(p);
// console.log(a);

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let msg = document.querySelector(".card-body .msg");
  let form_result = document.querySelector(".card-body .form_result");
  let skill_div = document.querySelector(".card-body .skill");
  let name = form.querySelector(".form #name");
  let email = form.querySelector(".form #email");
  let uname = form.querySelector(".form #uname");
  let location = form.querySelector("#location");
  let ckeck_box = document.querySelectorAll(
    ".chec_box_div input[type='checkbox']:checked"
  );
  let radio = document.querySelector(".radio_div input[type='radio']:checked");
  let skill_list = "";
  for (let i = 0; i < ckeck_box.length; i++) {
    skill = ckeck_box[i].value;
    skill_list += skill + " ";
  }
  console.log(skill_list);
  if (
    name.value == "" ||
    email.value == "" ||
    uname == "" ||
    location.value == "" ||
    radio.value == "" ||
    ckeck_box.value == ""
  ) {
    msg.innerHTML = alert("All field are required");
  } else {
    msg.innerHTML = alert("Data are stable", "success");
    form_result.innerHTML = ` <p class='alert alert-primary mt-3'> Hi ${name.value} you are a ${radio.value}. Your skill  is ${skill_list}</p>`;
  }
});

/**
 * real digital watch
 */

setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let mint = date.getMinutes();
  let scend = date.getSeconds();
  let day_date = date.getDate();
  let day_name = date.getDay();
  let month_name = date.getMonth();
  function zero(time) {
    return time <= 9 ? "0" + time : time;
  }
  let ampm = document.querySelector(".time_box .ampm");
  ampm.innerHTML = hour > 12 ? "PM" : "AM";
  hour = hour > 12 ? hour - 12 : hour;
  hour = hour == 0 ? 1 : hour;
  let day_names = ["Sun", "Mon", "Twe", "Wed", "Thu", "Fri", "Sat"];
  let month_names = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  time_box = document.querySelector(".time_box");
  time_box.querySelector(".time_box .day").innerHTML = day_names[day_name];
  time_box.querySelector(".time_box .h").innerHTML = zero(hour) + ":";
  time_box.querySelector(".time_box .m").innerHTML = zero(mint);
  time_box.querySelector(".time_box .s").innerHTML = zero(scend);
  time_box.querySelector(".time_box .today").innerHTML = zero(day_date);
  time_box.querySelector(".time_box .month").innerHTML =
    month_names[month_name];
}, 1000);

/*
 *Counter and progress bar Start
 */
let progress_bar = document.querySelector(".progress_bar");
let input = document.querySelector("#input");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let counter = document.querySelector(".counter");
let curent_value;
/**
 * Start button click function
 */
start.addEventListener("click", function () {
  let input_value = +input.value;
  curent_value = input_value;
  let count_fun = setInterval(() => {
    counter.innerHTML = `<h1>${curent_value}</h1>`;
    curent_value == 0 ? clearInterval(count_fun) : curent_value--;
    progress_bar.style.width = `${(curent_value * 100) / input_value}%`;
    console.log(input_value);
    console.log(curent_value);
    /**
     * Stop button click function
     */
    stop.addEventListener("click", function () {
      count = 0;
      clearInterval(count_fun);
      counter.innerHTML = `<h1>${count}</h1>`;
    });
  }, 1000);
  input.value = "";
});

/**
 * To do list items
 */
let list_group = document.querySelector(".list-group");
let add_btn = document.getElementById("add_btn");
let add_input = document.getElementById("add_input");

add_btn.addEventListener("click", function () {
  if (add_input.value == "") {
  } else {
    let list = document.createElement("li");
    list.className = "list-group-item bg-light mb-2";
    list.innerText = add_input.value;
    list_group.append(list);
    add_input.value = "";
  }
});
