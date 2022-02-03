function startKing() {
  const searchNumber = 150;
  function countLosesNWins() {
    const loses = document.getElementsByClassName("item-wrap is-lose");
    const wins = document.getElementsByClassName("item-wrap is-win");

    return {
      loses: loses.length,
      wins: wins.length,
    };
  }

  function checkLabel() {
    const gamecontrol = document.getElementsByClassName("game-control-switch");
    const { children } = gamecontrol[0];

    children[1].click();
  }

  function search(value) {
    const betsNumber =
      document.getElementsByClassName("game-form")[0].children[1].children[1]
        .children[0];
    betsNumber.value = value;
    betsNumber.dispatchEvent(new Event("change", { bubbles: true }));
    betsNumber.dispatchEvent(new Event("blur", { bubbles: true }));
  }

  function inputStopOnWin() {
    const betOnWin =
      document.getElementsByClassName("game-form")[0].children[0].children[1]
        .children[0];
    betOnWin.value = "0.00000001";
    betOnWin.dispatchEvent(new Event("change", { bubbles: true }));
    betOnWin.dispatchEvent(new Event("blur", { bubbles: true }));
  }

  function inputAmount(value) {
    const betOnWin =
      document.getElementsByClassName("game-form")[0].children[0].children[1]
        .children[0];
    betOnWin.value = value;
    betOnWin.dispatchEvent(new Event("change", { bubbles: true }));
    betOnWin.dispatchEvent(new Event("blur", { bubbles: true }));
  }

  function payout(value) {
    const payout =
      document.getElementsByClassName("payout-inputs")[0].children[0]
        .children[1].children[0];
    payout.value = value;
    payout.dispatchEvent(new Event("change", { bubbles: true }));
    payout.dispatchEvent(new Event("blur", { bubbles: true }));
  }

  function startSearch() {
    const button = document.getElementsByClassName("bet-button");
    button[0].click();
  }

  function setForms() {
    checkLabel();
    search(searchNumber);
    inputStopOnWin();
    inputAmount(0);
    payout(100);
    startSearch();
  }

  setForms();
  const bets = countLosesNWins();
  console.log(`loses ${bets.loses} wins ${bets.wins}`);
}

function TestClick() {
  alert("Limbo King started");

  chrome.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      // target: { tabId: tab.id, allFrames: true },
      function: startKing, // files or function, both do not work.
    });
  });
}

document
  .getElementById("TestButton")
  .addEventListener("click", () => TestClick());
