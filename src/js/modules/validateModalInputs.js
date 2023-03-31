const validateOpenModal = (trigger, state, openModal) => {
  function addWarningMessage() {

    let statusMessage = document.createElement("div");
    statusMessage.classList.add("status");
    statusMessage.textContent = "Не все характеристики введеньі";

    trigger.parentNode.appendChild(statusMessage);
  }

  function removeWarningMessage() {
    const status = trigger.parentNode.querySelector(".status");
    if (status) 
        status.remove();
  }

  const dataAttribute = trigger.getAttribute("data-sbm");
  let canOpen = true;
  removeWarningMessage();

  switch (dataAttribute) {
    case "popup_calc":
      if (!state.form) state.form = 0;

      canOpen = state.width && state.height;
      break;
    case "popup_calc_profile":
      if (!state.type) state.type = "tree";
      canOpen = state.type && state.profile;
      break;
  }

  canOpen ? openModal() : addWarningMessage();
};

export default validateOpenModal;
