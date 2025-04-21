document.getElementById("to-ingestion").addEventListener("click", function () {
  document.getElementById("data-source").classList.add("hidden");
  document.getElementById("data-ingestion").classList.remove("hidden");
});

document.getElementById("to-storage").addEventListener("click", function () {
  document.getElementById("data-ingestion").classList.add("hidden");
  document.getElementById("data-storage").classList.remove("hidden");
});

document.getElementById("to-analytics").addEventListener("click", function () {
  document.getElementById("data-storage").classList.add("hidden");
  document.getElementById("analytics").classList.remove("hidden");
});

document
  .getElementById("to-consumption")
  .addEventListener("click", function () {
    document.getElementById("analytics").classList.add("hidden");
    document.getElementById("data-consumption").classList.remove("hidden");
  });
