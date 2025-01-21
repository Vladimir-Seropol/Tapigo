function showScreen(screenNumber) {
    document.querySelectorAll("div[id^='screen-']").forEach((screen) => {
      screen.classList.add("hidden");
    });
    document.getElementById(`screen-${screenNumber}`).classList.remove("hidden");
  }
  