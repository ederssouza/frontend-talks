function showCurrentTime() {
  const now = new Date();

  setTimeout(() => {
    console.log(now.toJSON());
  }, 2000);
}

function sayHello() {
  console.log("Hello!!!");
}

showCurrentTime();
sayHello();
