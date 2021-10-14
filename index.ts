const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener("input", (event) => {
  const input = event.currentTarget as HTMLInputElement;

  console.log(input.value);
});
