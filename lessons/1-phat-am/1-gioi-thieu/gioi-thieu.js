const numPage = 5;
let currPage = Number(localStorage.getItem('idpage1')) || 1;
console.log(localStorage.getItem('idpage1'));
addClick();
displayPageIndex();
displayContent();

function displayPageIndex() {
    document.querySelector('.page-index')
        .innerHTML = `Page ${currPage} / ${numPage}`
}

function addClick() {
    document.querySelector('.left-page-btn')
        .addEventListener('click', () => {
            if (currPage > 1) {
                currPage -= 1;
                displayPageIndex();
                displayContent();
            }
            localStorage.setItem('idpage1', currPage);
        });
    document.querySelector('.right-page-btn')
        .addEventListener('click', () => {
            if (currPage < numPage) {
                currPage += 1;
                displayPageIndex();
                displayContent();
            }
            localStorage.setItem('idpage1', currPage);
        });
}

function readText(text) {
    if (text !== '') {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN'; // Đặt ngôn ngữ
        const voices = speechSynthesis.getVoices(); // Danh sách giọng nói có sẵn
        utterance.voice = voices.filter(voice => voice.lang === 'zh-CN')[0]; // Chọn giọng nói
        speechSynthesis.speak(utterance);
    }
}

function displayContent() {
    let html;
    document.querySelector('.display')
        .innerHTML = '';
    console.log(`currPage: ${currPage}`);
    switch(currPage) {
        case 1:
            html = `
                <h1 class="id001">Pinyin</h1>
                <span class="id002">Là hệ thống phiên âm (bính âm) sử dụng chữ cái 
                Latinh để biểu thị cách phát âm các chữ Hán trong tiếng Hán phổ 
                thông</span>
            `;
            document.querySelector('.display')
                .innerHTML = html;
            break;
        case 2:
            html = `
                <span class="id003">Chữ Hán của "八" (Bát) và phiên âm</span>
                <div class="id004">
                    <span class="id005">bā →</span>
                    <div class="id006">Đây là Pinyin</div>
                </div>
                <div class="id004">
                    <span class="id005">八 →</span>
                    <div class="id006">Đây là chữ Hán</div>
                </div>
                <p class="id007">Trong tiếng Hán, mỗi chữ Hán có một pinyin tương ứng. 
                    Mỗi một <span class="green">pinyin</span> biểu thị cách
                    phát âm của một <span class="green">chữ Hán</span></p>
            `;
            document.querySelector('.display')
                .innerHTML = html;
            break;
        case 3:
            html = `
                <p class="id008">Một <span class="green">âm tiết cơ bản trong tiếng Hán được tạo thành bởi 
                ba thành phần: <span class="green">Thanh mẫu, vận mẫu và thanh điệu</span>
                </span>. Hãy nhấn vào từng phần để biết thêm chi tiết.</span></p>
                <div class="id009">
                    <img class="id010" src="../../../assets/images/sound-btn.png"
                        onclick="readText('八');">
                    <span class="id011">b ā</span>
                </div>
            `;
            document.querySelector('.display')
                .innerHTML = html;
            break;
        case 4:
            html = `
                <h1 class="id012">Vận mẫu</h1>
                <p class="id013">Trong tiếng Hán có tổng cộng <span class="green">35 vận 
                    mẫu</span>, gồm 6 vận mẫu đơn, 29 vận mẫu kép</p>
                <table>
                    <tr>
                        <td>a</td>
                        <td>o</td>
                        <td>e</td>
                        <td>i</td>
                        <td>u</td>
                        <td>ü</td>
                    </tr>
                    <tr>
                        <td>ai</td>
                        <td>ou</td>
                        <td>ei</td>
                        <td>ia</td>
                        <td>ua</td>
                        <td>üe</td>
                    </tr>
                    <tr>
                        <td>ao</td>
                        <td>ong</td>
                        <td>en</td>
                        <td>iao</td>
                        <td>uai</td>
                        <td>üan</td>
                    </tr>
                    <tr>
                        <td>an</td>
                        <td></td>
                        <td>eng</td>
                        <td>ian</td>
                        <td>uan</td>
                        <td>ün</td>
                    </tr>
                    <tr>
                        <td>ang</td>
                        <td></td>
                        <td>er</td>
                        <td>iang</td>
                        <td>uang</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>ie</td>
                        <td>uo</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>iu</td>
                        <td>ui</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>in</td>
                        <td>un</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>ing</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>iong</td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            `;
            document.querySelector('.display')
                .innerHTML = html;
            break;
        case 5:
            html = `
                <h1 class="id016">Thanh mẫu</h1>
                <p class="id017">Trong tiếng Hán có tổng cộng <span class="green">23 thanh 
                    mẫu</span>.</p>
                <table>
                    <tr>
                        <td>b</td>
                        <td>p</td>
                        <td>m</td>
                        <td>f</td>
                    </tr>
                    <tr>
                        <td>d</td>
                        <td>t</td>
                        <td>n</td>
                        <td>l</td>
                    </tr>
                    <tr>
                        <td>g</td>
                        <td>k</td>
                        <td>h</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>j</td>
                        <td>q</td>
                        <td>x</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>z</td>
                        <td>c</td>
                        <td>s</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>zh</td>
                        <td>ch</td>
                        <td>sh</td>
                        <td>r</td>
                    </tr>
                    <tr>
                        <td>y</td>
                        <td>w</td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            `;
        document.querySelector('.display')
            .innerHTML = html;
        break;
    }
}


