let onClick = (event) => {
    let chooseButtons = document.getElementsByClassName("choose-buttons");
    for (let item of chooseButtons) {
        item.removeAttribute("onclick");
    }

    switch (event.target.id) {
        case "new-car":
            userAnswer("Yeni araç almak istiyorum");
            break;
        case "service":
            userAnswer("Servis randevusu almak istiyorum");
            break;
        case "used-car":
            userAnswer("2. el araç almak istiyorum");
            break;
        case "others":
            userAnswer("Diğer konular");
            break;
        default:
            console.log("hata");
    }

    setTimeout(() => {
        botAnswer(event.target.id);
    }, 1000);
}

let userAnswer = (text) => {
    let answer = document.createElement("div");
    answer.className = "user-answers";
    answer.innerHTML = text;
    document.getElementById("main-content").appendChild(answer);
}

let botAnswer = (content) => {
    let botAnswerMain = document.createElement("div");
    botAnswerMain.className = "question-bubble";
    let botIcon = document.createElement("img");
    botIcon.src = "./assets/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.rsquare.w1200.jpg"
    botAnswerMain.appendChild(botIcon);
    let botAnswerBubble = document.createElement("div");
    botAnswerBubble.innerHTML = content;
    botAnswerBubble.className = "speech-bubble";
    let onlineButton = document.createElement("button");
    onlineButton.className = "choose-buttons";
    onlineButton.innerHTML = "Online Randevu";
    let supportButton = document.createElement("button");
    supportButton.className = "choose-buttons";
    supportButton.innerHTML = "Canlı Görüşme";
    let buttonList = document.createElement("div");
    buttonList.className = "button-list";

    switch (content) {
        case "new-car":
            botAnswerBubble.innerHTML = "Yeni araç işleminize online olarak devam edebilirsiniz";
            break;
        case "service":
            botAnswerBubble.innerHTML = "Servis randevusu işleminize online olarak devam edebilirsiniz";
            break;
        case "used-car":
            botAnswerBubble.innerHTML = "2. el araç alma işleminize online olarak devam edebilirsiniz";
            break;
        case "others":
            botAnswerBubble.innerHTML = "Diğer konular da nasıl yardımcı olabiliriz";
            break;
        default:
            console.log("hatalı hata");

    }
    botAnswerMain.appendChild(botAnswerBubble);
    buttonList.appendChild(supportButton);
    buttonList.appendChild(onlineButton);
    document.getElementById("main-content").appendChild(botAnswerMain);
    document.getElementById("main-content").appendChild(buttonList);

    supportButton.onclick = () => {
        chooseButtons = document.getElementsByClassName("choose-buttons");
        for (let item of chooseButtons) {
            item.disabled = true;
        }
        let botsAnswer = document.createElement("div");
        botsAnswer.className = "question-bubble";
        let botIcons = document.createElement("img");
        botIcons.src = "./assets/download.png"
        botsAnswer.appendChild(botIcons);
        let botBubble = document.createElement("div");
        botBubble.innerHTML = "Merhaba ben Ahmet nasıl yardımcı olabilirim ?";
        botBubble.className = "speech-bubble";
        botsAnswer.appendChild(botBubble);
        document.getElementById("main-content").appendChild(botsAnswer);
    }

    onlineButton.onclick = () => {
        chooseButtons = document.getElementsByClassName("choose-buttons");
        console.log(chooseButtons);
        for (let item of chooseButtons) {
            item.disabled = true;
        }

        let botsAnswer = document.createElement("div");
        botsAnswer.className = "question-bubble";
        let botIcons = document.createElement("img");
        botIcons.src = "./assets/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.rsquare.w1200.jpg"
        botsAnswer.appendChild(botIcons);
        let botBubble = document.createElement("div");
        botBubble.innerHTML = "Aradığınız detayları sitemizde bulabilirsiniz";
        botBubble.className = "speech-bubble";
        botsAnswer.appendChild(botBubble);
        document.getElementById("main-content").appendChild(botsAnswer);
    }
}

let userInput = document.getElementById("user-input",);
userInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addUserInput();
    }
}
);

let addUserInput = () => {

    userInput = document.getElementById("user-input");
    userAnswer(userInput.value);
    userInput.value = "";
}

