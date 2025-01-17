function init() {
    let html = `
        <div class="top-section">
            <a href="../../index.html" class="back-icon">
                <img src="../../assets/images/arrow-back.svg">
            </a>
        </div>
        <div class="content">
            <div class="lesson-title">Phát âm</div>
            <div class="parts">
                <a href="1-gioi-thieu/gioi-thieu.html">
                    <div class="part">
                        <div class="logo-part">
                            <img src="../../assets/images/light-bulb.svg">
                        </div>
                        <div class="title-part">
                            Giới thiệu
                        </div>
                        <div class="arrow-right">
                            <img src="../../assets/images/arrow-right.svg">
                        </div>
                    </div>
                </a>
    
                <a onclick="hocamtiet1()">
                    <div class="part">
                        <div class="logo-part">
                            <img src="../../assets/images/light-bulb.svg">
                        </div>
                        <div class="title-part">
                            Học âm tiết (1)
                        </div>
                        <div class="arrow-right">
                            <img src="../../assets/images/arrow-right.svg">
                        </div>
                    </div>
                </a>
            </div>
        </div>
    `
    document.querySelector('.display')
        .innerHTML = html;
}

init();

function hocamtiet1() {
    const numPage = 14;
    let currPage = 1;
    let html = 
}

