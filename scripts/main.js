const roadMap = [
    {
        name: "Phát âm",
        id: "phatam",
        logo: "assets/images/phat-am.svg",
        level: 3,
        state: "unlock",
        url: "lessons/1-phat-am/phat-am.html"
    }
]

const currRoadMap = roadMap;

displayHome();

function displayHome() {
    let html = ``;
    currRoadMap.forEach((cell) => {
        html += `
            <div class="lesson">
                <a href="${cell.url}">
                    <div class="lesson-logo">
                        <div class="process-circle">
                        <div>
                        <img src="${cell.logo}">
                    </div>
                </a>
                <span>${cell.name}</span>
            <div>
        `
    });
    document.querySelector('.roadmap')
        .innerHTML = html;
}