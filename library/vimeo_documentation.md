https://github.com/vimeo/player.js/#vimeo-player-api

Бібліотека Vimeo надає розширений функціонал для взаємодії з відео-платформою Vimeo, що дозволяє інтегрувати функції відео на вашому веб-сайті або додатку. Вона дозволяє керувати відео-програвачем, здійснювати різноманітні дії з відео, взаємодіяти з подіями відтворення та отримувати різні метадані про відео.

Vimeo Player API

Розмір покриття npm:

Вступ Vimeo Player API дозволяє вам взаємодіяти з та контролювати вбудований
відеопрогравач Vimeo.

Установка Ви можете встановити Vimeo Player API через npm:

bash

npm install @vimeo/player

Або ви можете посилатися на актуальну версію нашого CDN:

html

<script src="https://player.vimeo.com/api/player.js"></script>

Попередження: при використанні з RequireJS необхідно динамічно завантажувати
скрипт через систему завантаження RequireJS.

Документація RequireJS

Початок роботи Щоб контролювати відеопрогравач Vimeo, вам потрібен програвач для
управління. Є кілька способів отримати програвач:

1. Існуючий програвач Вже маєте програвач на сторінці? Передайте елемент
   конструктору Vimeo.Player і готові.

html

<iframe src="https://player.vimeo.com/video/76979871?h=8272103f6e" width="640" height="360" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>

<script src="https://player.vimeo.com/api/player.js"></script>
<script>
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
</script>

2. Створення з ідентифікатором відео або URL Ви можете використовувати
   бібліотеку, щоб вона створила вбудування для вас. Вам потрібен порожній
   елемент і ідентифікатор відео або URL vimeo.com (і необов'язкові параметри
   вбудування).

html

<div id="made-in-ny"></div>

<script src="https://player.vimeo.com/api/player.js"></script>
<script>
    const options = {
        id: 59777392,
        width: 640,
        loop: true
    };

    const player = new Vimeo.Player('made-in-ny', options);

    player.setVolume(0);

    player.on('play', function() {
        console.log('played the video!');
    });
</script>

3. Автоматично з атрибутами HTML Коли бібліотека завантажується, вона сканує
   вашу сторінку на предмет елементів з атрибутами Vimeo. Кожен елемент повинен
   мати принаймні атрибут data-vimeo-id або data-vimeo-url для автоматичного
   створення вбудування. Ви також можете додавати атрибути для будь-яких
   параметрів вбудування, які починаються з data-vimeo (наприклад,
   data-vimeo-portrait="false").

html

<div data-vimeo-id="19231868" data-vimeo-width="640" id="handstick"></div>
<div data-vimeo-url="https://player.vimeo.com/video/76979871?h=8272103f6e" id="playertwo"></div>

<script src="https://player.vimeo.com/api/player.js"></script>
<script>
    // Якщо ви хочете контролювати вбудовання, вам потрібно створити об'єкт Player.
    // Ви можете передати або <div>, або <iframe>, створений всередині div.
    const handstickPlayer = new Vimeo.Player('handstick');
    handstickPlayer.on('play', function() {
        console.log('played the handstick video!');
    });

    const playerTwoPlayer = new Vimeo.Player('playertwo');
    playerTwoPlayer.on('play', function() {
        console.log('played the player 2.0 video!');
    });
</script>

Підтримка браузера Бібліотека Player API підтримується в IE 11+, Chrome,
Firefox, Safari та Opera.

Міграція з Froogaloop Використовуєте нашу стару бібліотеку Froogaloop? Дивіться
документацію щодо міграції за деталями про оновлення вашого коду для
використання цієї бібліотеки.

Використання з модульним збирачем Якщо ви використовуєте модульний збирач, такий
як webpack або rollup, експортований об'єкт буде конструктором Player (на
відміну від браузера, де він прикріплюється до window.Vimeo):

javascript

import Player from '@vimeo/player';

const player = new Player('handstick', { id: 19231868, width: 640 });

player.on('play', function() { console.log('played the video!'); });

 Аналогічно,
якщо ви використовуєте RequireJS в браузері, він також імпортуватиме конструктор
Player безпосередньо:

html

<iframe src="https://player.vimeo.com/video/76979871?h=8272103f6e" width="640" height="360" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>

<script>
    require(['https://player.vimeo.com/api/player.js'], function (Player) {
        const iframe = document.querySelector('iframe');
        const player = new Player(iframe);

        player.on('play', function() {
            console.log('played the video!');
        });
    });
</script>

# Зміст

1. [Створення програвача](#створення-програвача)
2. [Параметри вбудовування](#параметри-вбудовування)
3. [Методи](#методи)
   - [on](#on)
   - [off](#off)
   - [loadVideo](#loadvideo)
   - [ready](#ready)
   - [enableTextTrack](#enabletexttrack)
   - [disableTextTrack](#disabletexttrack)
   - [pause](#pause)
   - [play](#play)
   - [unload](#unload)
   - [destroy](#destroy)
   - [requestFullscreen](#requestfullscreen)
   - [exitFullscreen](#exitfullscreen)
   - [getFullscreen](#getfullscreen)
   - [requestPictureInPicture](#requestpictureinpicture)
   - [exitPictureInPicture](#exitpictureinpicture)
   - [getPictureInPicture](#getpictureinpicture)
   - [remotePlaybackPrompt](#remoteplaybackprompt)
   - [getRemotePlaybackAvailability](#getremoteplaybackavailability)
   - [getRemotePlaybackState](#getremoteplaybackstate)
   - [getAutopause](#getautopause)
   - [setAutopause](#setautopause)
   - [getBuffered](#getbuffered)
   - [getChapters](#getchapters)
   - [getCurrentChapter](#getcurrentchapter)
   - [getColor](#getcolor)
   - [getColors](#getcolors)
   - [setColor](#setcolor)
   - [setColors](#setcolors)
   - [addCuePoint](#addcuepoint)
   - [removeCuePoint](#removecuepoint)
   - [getCuePoints](#getcuepoints)
   - [getCurrentTime](#getcurrenttime)
   - [setCurrentTime](#setcurrenttime)
   - [getDuration](#getduration)
   - [getEnded](#getended)
   - [getLoop](#getloop)
   - [setLoop](#setloop)
   - [getMuted](#getmuted)
   - [setMuted](#setmuted)
   - [getPaused](#getpaused)
   - [getPlaybackRate](#getplaybackrate)
   - [setPlaybackRate](#setplaybackrate)
   - [getPlayed](#getplayed)
   - [getSeekable](#getseekable)
   - [getSeeking](#getseeking)
   - [getTextTracks](#gettexttracks)
   - [getVideoEmbedCode](#getvideoembedcode)
   - [getVideoId](#getvideoid)
   - [getVideoTitle](#getvideotitle)
   - [getVideoWidth](#getvideowidth)
   - [getVideoHeight](#getvideoheight)
   - [getVideoUrl](#getvideourl)
   - [getVolume](#getvolume)
   - [setVolume](#setvolume)
   - [setTimingSrc](#settimingsrc)
   - [getQualities](#getqualities)
   - [getQuality](#getquality)
   - [setQuality](#setquality)
   - [getCameraProps](#getcameraprops)
   - [setCameraProps](#setcameraprops)
4. [Події](#події)
   - [play](#play-event)
   - [playing](#playing-event)
   - [pause](#pause-event)
   - [ended](#ended-event)
   - [timeupdate](#timeupdate-event)
   - [progress](#progress-event)
   - [seeking](#seeking-event)
   - [seeked](#seeked-event)
   - [texttrackchange](#texttrackchange-event)
   - [chapterchange](#chapterchange-event)
   - [cuechange](#cuechange-event)
   - [cuepoint](#cuepoint-event)
   - [volumechange](#volumechange-event)
   - [playbackratechange](#playbackratechange-event)
   - [bufferstart](#bufferstart-event)
   - [bufferend](#bufferend-event)
   - [error](#error-event)
   - [loaded](#loaded-event)
   - [durationchange](#durationchange-event)
   - [fullscreenchange](#fullscreenchange-event)
   - [qualitychange](#qualitychange-event)
   - [camerachange](#camerachange-event)
   - [resize](#resize-event)
   - [enterpictureinpicture](#enterpictureinpicture-event)
   - [leavepictureinpicture](#leavepictureinpicture-event)
   - [remoteplaybackavailabilitychange](#remoteplaybackavailabilitychange-event)
   - [remoteplaybackconnecting](#remoteplaybackconnecting-event)
   - [remoteplaybackconnect](#remoteplaybackconnect-event)
   - [remoteplaybackdisconnect](#remoteplaybackdisconnect-event)
   - [interactivehotspotclicked](#interactivehotspotclicked-event)
   - [interactiveoverlaypanelclicked](#interactiveoverlaypanelclicked-event)

Методи on Опис: Додає обробник події до програвача.

Приклад:

javascript

player.on('play', function() { console.log('Video is
playing'); }); 

off Опис: Видаляє обробник події з програвача.

Приклад:

javascript Copy code function handlePlay() { console.log('Video is playing'); }

player.on('play', handlePlay);

// Later, remove the event listener player.off('play', handlePlay); loadVideo
Опис: Завантажує відео за вказаним ідентифікатором.

Приклад:

javascript Copy code player.loadVideo(123456789).then(function() {
console.log('Video loaded successfully'); }).catch(function(error) {
console.error('Error loading video:', error); }); ready Опис: Викликається, коли
програвач готовий до використання.

Приклад:

javascript Copy code player.ready().then(function() { console.log('Player is
ready'); }).catch(function(error) { console.error('Error:', error); });
enableTextTrack Опис: Увімкнення текстової доріжки.

Приклад:

javascript Copy code player.enableTextTrack('en').then(function() {
console.log('Text track enabled'); }).catch(function(error) {
console.error('Error:', error); }); disableTextTrack Опис: Вимкнення текстової
доріжки.

Приклад:

javascript Copy code player.disableTextTrack().then(function() {
console.log('Text track disabled'); }).catch(function(error) {
console.error('Error:', error); }); pause Опис: Призупиняє відтворення відео.

Приклад:

javascript Copy code player.pause().then(function() { console.log('Video
paused'); }).catch(function(error) { console.error('Error:', error); }); play
Опис: Запускає відтворення відео.

Приклад:

javascript Copy code player.play().then(function() { console.log('Video
playing'); }).catch(function(error) { console.error('Error:', error); }); unload
Опис: Розвантажує відео та прибирає всі дані відтворення.

Приклад:

javascript Copy code player.unload().then(function() { console.log('Video
unloaded'); }).catch(function(error) { console.error('Error:', error); });
destroy Опис: Знищує програвач.

Приклад:

javascript Copy code player.destroy().then(function() { console.log('Player
destroyed'); }).catch(function(error) { console.error('Error:', error); });
requestFullscreen Опис: Запит на відображення відео в повноекранному режимі.

Приклад:

javascript Copy code player.requestFullscreen().then(function() {
console.log('Fullscreen mode activated'); }).catch(function(error) {
console.error('Error:', error); }); exitFullscreen Опис: Вихід з повноекранного
режиму.

Приклад:

javascript Copy code player.exitFullscreen().then(function() {
console.log('Fullscreen mode exited'); }).catch(function(error) {
console.error('Error:', error); }); getFullscreen Опис: Перевіряє, чи
знаходиться відео в повноекранному режимі.

Приклад:

javascript Copy code player.getFullscreen().then(function(isFullscreen) {
console.log('Fullscreen mode:', isFullscreen); }).catch(function(error) {
console.error('Error:', error); }); requestPictureInPicture Опис: Запит на
відтворення відео в режимі картинка-в-картинці.

Приклад:

javascript Copy code player.requestPictureInPicture().then(function() {
console.log('Picture-in-Picture mode activated'); }).catch(function(error) {
console.error('Error:', error); }); exitPictureInPicture Опис: Вихід з режиму
картинка-в-картинці.

Приклад:

javascript Copy code player.exitPictureInPicture().then(function() {
console.log('Picture-in-Picture mode exited'); }).catch(function(error) {
console.error('Error:', error); }); getPictureInPicture Опис: Перевіряє, чи
знаходиться відео в режимі картинка-в-картинці.

Приклад:

javascript Copy code player.getPictureInPicture().then(function(isPiP) {
console.log('Picture-in-Picture mode:', isPiP); }).catch(function(error) {
console.error('Error:', error); }); remotePlaybackPrompt Опис: Запит користувача
на розпочаток відтворення на віддаленому пристрої.

Приклад:

javascript Copy code player.remotePlaybackPrompt().then(function() {
console.log('Remote playback prompt displayed'); }).catch(function(error) {
console.error('Error:', error); }); getRemotePlaybackAvailability Опис:
Перевіряє доступність віддаленого відтворення.

Приклад:

javascript Copy code
player.getRemotePlaybackAvailability().then(function(availability) {
console.log('Remote playback availability:', availability);
}).catch(function(error) { console.error('Error:', error); });
getRemotePlaybackState Опис: Отримує стан віддаленого відтворення.

Приклад:

javascript Copy code player.getRemotePlaybackState().then(function(state) {
console.log('Remote playback state:', state); }).catch(function(error) {
console.error('Error:', error); }); getAutopause Опис: Отримує поточне значення
автопаузи.

Приклад:

javascript Copy code player.getAutopause().then(function(autopause) {
console.log('Autopause:', autopause); }).catch(function(error) {
console.error('Error:', error); }); setAutopause Опис: Встановлює значення
автопаузи.

Приклад:

javascript Copy code player.setAutopause(true).then(function(autopause) {
console.log('Autopause set to true'); }).catch(function(error) {
console.error('Error:', error); }); getBuffered Опис: Отримує інформацію про
буферизовані частини відео.

Приклад:

javascript Copy code player.getBuffered().then(function(bufferedRanges) {
console.log('Buffered ranges:', bufferedRanges); }).catch(function(error) {
console.error('Error:', error); }); getChapters Опис: Отримує список розділів
відео.

Приклад:

javascript Copy code player.getChapters().then(function(chapters) {
console.log('Chapters:', chapters); }).catch(function(error) {
console.error('Error:', error); }); getCurrentChapter Опис: Отримує поточний
розділ відео.

Приклад:

javascript Copy code player.getCurrentChapter().then(function(currentChapter) {
console.log('Current chapter:', currentChapter); }).catch(function(error) {
console.error('Error:', error); }); getColor Опис: Отримує поточний колір
програвача.

Приклад:

javascript Copy code player.getColor().then(function(color) {
console.log('Current player color:', color); }).catch(function(error) {
console.error('Error:', error); }); getColors Опис: Отримує всі кольори
програвача.

Приклад:

javascript Copy code player.getColors().then(function(colors) {
console.log('Player colors:', colors); }).catch(function(error) {
console.error('Error:', error); }); setColor Опис: Встановлює колір програвача.

Приклад:

javascript Copy code player.setColor('red').then(function(color) {
console.log('Player color set to red'); }).catch(function(error) {
console.error('Error:', error); }); setColors Опис: Встановлює кольори
програвача.

Приклад:

javascript Copy code player.setColors(['#ff0000', '#00ff00',
'#0000ff']).then(function(colors) { console.log('Player colors set
successfully'); }).catch(function(error) { console.error('Error:', error); });
addCuePoint Опис: Додає точку перехіду до відео.

Приклад:

javascript Copy code player.addCuePoint(30, { customKey: 'customValue'
}).then(function(id) { console.log('Cue point added with ID:', id);
}).catch(function(error) { console.error('Error:', error); }); removeCuePoint
Опис: Видаляє точку перехіду з відео.

Приклад:

javascript Copy code
player.removeCuePoint('09ecf4e4-b587-42cf-ad9f-e666b679c9ab').then(function(id)
{ console.log('Cue point removed successfully'); }).catch(function(error) {
console.error('Error:', error); }); getCuePoints Опис: Отримує всі точки
переходу відео.

Приклад:

javascript Copy code player.getCuePoints().then(function(cuePoints) {
console.log('Cue points:', cuePoints); }).catch(function(error) {
console.error('Error:', error); }); getCurrentTime Опис: Отримує поточний час
відтворення в секундах.

Приклад:

javascript 

player.getCurrentTime()
.then(function(time) {console.log('Current time:', time); })
.catch(function(error) {console.error('Error:', error); }); 

setCurrentTime 
Опис: Встановлює поточний часвідтворення в секундах.

Приклад:

javascript 
player.setCurrentTime(30).then(function(time) {
console.log('Current time set to 30 seconds'); }).catch(function(error) {
console.error('Error:', error); }); 


getDuration Опис: Отримує тривалість відео в
секундах.

Приклад:

javascript Copy code player.getDuration().then(function(duration) {
console.log('Video duration:', duration); }).catch(function(error) {
console.error('Error:', error); }); getEnded Опис: Перевіряє, чи завершилося
відтворення відео.

Приклад:

javascript Copy code player.getEnded().then(function(ended) { console.log('Video
ended:', ended); }).catch(function(error) { console.error('Error:', error); });
getLoop Опис: Перевіряє, чи увімкнено повторення відео.

Приклад:

javascript Copy code player.getLoop().then(function(loop) { console.log('Loop:',
loop); }).catch(function(error) { console.error('Error:', error); }); setLoop
Опис: Встановлює значення повторення відео.

Приклад:

javascript Copy code player.setLoop(true).then(function(loop) {
console.log('Loop set to true'); }).catch(function(error) {
console.error('Error:', error); }); getMuted Опис: Перевіряє, чи увімкнено
заглушення звуку.

Приклад:

javascript Copy code player.getMuted().then(function(muted) {
console.log('Muted:', muted); }).catch(function(error) { console.error('Error:',
error); }); setMuted Опис: Встановлює значення заглушення звуку.

Приклад:

javascript Copy code player.setMuted(true).then(function(muted) {
console.log('Muted set to true'); }).catch(function(error) {
console.error('Error:', error); }); getPaused Опис: Перевіряє, чи зупинено
відтворення відео.

Приклад:

javascript Copy code player.getPaused().then(function(paused) {
console.log('Paused:', paused); }).catch(function(error) {
console.error('Error:', error); }); getPlaybackRate Опис: Отримує поточний темп
відтворення відео.

Приклад:

javascript Copy code player.getPlaybackRate().then(function(rate) {
console.log('Playback rate:', rate); }).catch(function(error) {
console.error('Error:', error); }); setPlaybackRate Опис: Встановлює значення
темпу відтворення відео.

Приклад:

javascript Copy code player.setPlaybackRate(1.5).then(function(rate) {
console.log('Playback rate set to 1.5'); }).catch(function(error) {
console.error('Error:', error); }); getPlayed Опис: Отримує інформацію про
частини відео, які були відтворені.

Приклад:

javascript Copy code player.getPlayed().then(function(playedRanges) {
console.log('Played ranges:', playedRanges); }).catch(function(error) {
console.error('Error:', error); }); getSeekable Опис: Отримує інформацію про
можливість перемотки відео.

Приклад:

javascript Copy code player.getSeekable().then(function(seekableRanges) {
console.log('Seekable ranges:', seekableRanges); }).catch(function(error) {
console.error('Error:', error); }); getSeeking Опис: Перевіряє, чи відео
знаходиться в стані перемотки.

Приклад:

javascript Copy code player.getSeeking().then(function(seeking) {
console.log('Seeking:', seeking); }).catch(function(error) {
console.error('Error:', error); }); getTextTracks Опис: Отримує список текстових
доріжок відео.

Приклад:

javascript Copy code player.getTextTracks().then(function(tracks) {
console.log('Text tracks:', tracks); }).catch(function(error) {
console.error('Error:', error); }); getVideoEmbedCode Опис: Отримує вбудований
код відео.

Приклад:

javascript Copy code player.getVideoEmbedCode().then(function(embedCode) {
console.log('Video embed code:', embedCode); }).catch(function(error) {
console.error('Error:', error); }); getVideoId Опис: Отримує ідентифікатор
відео.

Приклад:

javascript Copy code player.getVideoId().then(function(videoId) {
console.log('Video ID:', videoId); }).catch(function(error) {
console.error('Error:', error); }); getVideoTitle Опис: Отримує заголовок відео.

Приклад:

javascript Copy code player.getVideoTitle().then(function(title) {
console.log('Video title:', title); }).catch(function(error) {
console.error('Error:', error); }); getVideoWidth Опис: Отримує ширину відео.

Приклад:

javascript Copy code player.getVideoWidth().then(function(width) {
console.log('Video width:', width); }).catch(function(error) {
console.error('Error:', error); }); getVideoHeight Опис: Отримує висоту відео.

Приклад:

javascript Copy code player.getVideoHeight().then(function(height) {
console.log('Video height:', height); }).catch(function(error) {
console.error('Error:', error); }); getVideoUrl Опис: Отримує URL-адресу відео.

Приклад:

javascript Copy code player.getVideoUrl().then(function(url) {
console.log('Video URL:', url); }).catch(function(error) {
console.error('Error:', error); }); getVolume Опис: Отримує поточний рівень
гучності.

Приклад:

javascript Copy code player.getVolume().then(function(volume) {
console.log('Volume:', volume); }).catch(function(error) {
console.error('Error:', error); }); setVolume Опис: Встановлює рівень гучності.

Приклад:

javascript Copy code player.setVolume(0.5).then(function(volume) {
console.log('Volume set to 0.5'); }).catch(function(error) {
console.error('Error:', error); }); setTimingSrc Опис: Встановлює джерело часу.

Приклад:

javascript Copy code
player.setTimingSrc('https://example.com/timing.json').then(function() {
console.log('Timing source set successfully'); }).catch(function(error) {
console.error('Error:', error); }); getQualities Опис: Отримує доступні якості
відео.

Приклад:

javascript Copy code player.getQualities().then(function(qualities) {
console.log('Available video qualities:', qualities); }).catch(function(error) {
console.error('Error:', error); }); getQuality Опис: Отримує поточну якість
відео.

Приклад:

javascript Copy code player.getQuality().then(function(quality) {
console.log('Current video quality:', quality); }).catch(function(error) {
console.error('Error:', error); }); setQuality Опис: Встановлює якість відео.

Приклад:

javascript Copy code player.setQuality('1080p').then(function() {
console.log('Video quality set to 1080p'); }).catch(function(error) {
console.error('Error:', error); }); getCameraProps Опис: Отримує властивості
камери.

Приклад:

javascript Copy code player.getCameraProps().then(function(props) {
console.log('Camera properties:', props); }).catch(function(error) {
console.error('Error:', error); }); setCameraProps Опис: Встановлює властивості
камери.

Приклад:

javascript Copy code player.setCameraProps({ facingMode: 'user'
}).then(function() { console.log('Camera properties set successfully');
}).catch(function(error) { console.error('Error:', error); });

Події play-event Опис: Спрацьовує, коли відео починає відтворення.

Приклад:

javascript Copy code player.on('play', function() { console.log('Відео почало
відтворення'); }); playing-event Опис: Спрацьовує, коли відео продовжує
відтворення після паузи або завершення буферизації.

Приклад:

javascript Copy code player.on('playing', function() { console.log('Відео
продовжує відтворення'); }); pause-event Опис: Спрацьовує, коли відео призупиняє
відтворення.

Приклад:

javascript Copy code player.on('pause', function() { console.log('Відео було
призупинено'); }); ended-event Опис: Спрацьовує, коли відео доходить до кінця.

Приклад:

javascript

player.on('ended', function() { console.log('Відео
завершило відтворення'); });

 timeupdate-event Опис: Спрацьовує, коли час
відтворення відео змінюється під час відтворення.

Приклад:

javascript Copy code player.on('timeupdate', function() { console.log('Час
відтворення відео змінився'); }); 

progress-event Опис: Спрацьовує, коли буфер
відтворення відео змінюється під час відтворення.

Приклад:

javascript Copy code player.on('progress', function() { console.log('Буфер
відтворення відео змінився'); }); seeking-event Опис: Спрацьовує, коли
користувач розпочинає пошук відео.

Приклад:

javascript Copy code player.on('seeking', function() { console.log('Користувач
почав пошук відео'); }); seeked-event Опис: Спрацьовує, коли пошук відео
завершено.

Приклад:

javascript Copy code player.on('seeked', function() { console.log('Пошук відео
завершено'); }); texttrackchange-event Опис: Спрацьовує, коли змінюється тексти
відео.

Приклад:

javascript Copy code player.on('texttrackchange', function() {
console.log('Змінився текст відео'); }); chapterchange-event Опис: Спрацьовує,
коли відбувається зміна розділу відео.

Приклад:

javascript Copy code player.on('chapterchange', function() {
console.log('Змінився розділ відео'); }); cuechange-event Опис: Спрацьовує, коли
змінюється відомості про куєпоінт.

Приклад:

javascript Copy code player.on('cuechange', function() { console.log('Змінився
куєпоінт відео'); }); cuepoint-event Опис: Спрацьовує, коли досягнутий куєпоінт.

Приклад:

javascript Copy code player.on('cuepoint', function() { console.log('Досягнутий
куєпоінт відео'); }); volumechange-event Опис: Спрацьовує, коли змінюється
рівень гучності.

Приклад:

javascript Copy code player.on('volumechange', function() { console.log('Змінено
рівень гучності'); }); playbackratechange-event Опис: Спрацьовує, коли
змінюється швидкість відтворення відео.

Приклад:

javascript Copy code player.on('playbackratechange', function() {
console.log('Змінено швидкість відтворення відео'); }); bufferstart-event Опис:
Спрацьовує, коли починається буферизація відео.

Приклад:

javascript Copy code player.on('bufferstart', function() { console.log('Почалась
буферизація відео'); }); bufferend-event Опис: Спрацьовує, коли завершується
буферизація відео.

Приклад:

javascript Copy code player.on('bufferend', function() {
console.log('Закінчилась буферизація відео'); }); error-event Опис: Спрацьовує,
коли відбувається помилка під час відтворення відео.

Приклад:

javascript Copy code player.on('error', function() { console.log('Сталась
помилка відтворення відео'); }); loaded-event Опис: Спрацьовує, коли відео
завантажено та готове до відтворення.

Приклад:

javascript Copy code player.on('loaded', function() { console.log('Відео
завантажено та готове до відтворення'); }); durationchange-event Опис:
Спрацьовує, коли змінюється тривалість відео.

Приклад:

javascript Copy code player.on('durationchange', function() {
console.log('Змінилась тривалість відео'); }); fullscreenchange-event Опис:
Спрацьовує, коли стан повноекранного режиму змінюється.

Приклад:

javascript Copy code player.on('fullscreenchange', function() {
console.log('Стан повноекранного режиму змінився'); }); qualitychange-event
Опис: Спрацьовує, коли змінюється якість відео.

Приклад:

javascript Copy code player.on('qualitychange', function() {
console.log('Змінилась якість відео'); }); camerachange-event Опис: Спрацьовує,
коли змінюється камера (для відеовідгуків тощо).

Приклад:

javascript Copy code player.on('camerachange', function() {
console.log('Змінилась камера'); }); resize-event Опис: Спрацьовує, коли розмір
відео змінюється.

Приклад:

javascript Copy code player.on('resize', function() { console.log('Змінився
розмір відео'); }); enterpictureinpicture-event Опис: Спрацьовує, коли відео
входить в режим картинка-у-картинці.

Приклад:

javascript Copy code player.on('enterpictureinpicture', function() {
console.log('Відео увійшло в режим картинка-у-картинці'); });
leavepictureinpicture-event Опис: Спрацьовує, коли відео виходить з режиму
картинка-у-картинці.

Приклад:

javascript Copy code player.on('leavepictureinpicture', function() {
console.log('Відео вийшло з режиму картинка-у-картинці'); });
remoteplaybackavailabilitychange-event Опис: Спрацьовує, коли доступність
віддаленого відтворення змінюється.

Приклад:

javascript Copy code player.on('remoteplaybackavailabilitychange', function() {
console.log('Змінилась доступність віддаленого відтворення'); });
remoteplaybackconnecting-event Опис: Спрацьовує, коли відбувається спроба
підключення до віддаленого відтворення.

Приклад:

javascript Copy code player.on('remoteplaybackconnecting', function() {
console.log('Відбувається спроба підключення до віддаленого відтворення'); });
remoteplaybackconnect-event Опис: Спрацьовує, коли підключено до віддаленого
відтворення.

Приклад:

javascript Copy code player.on('remoteplaybackconnect', function() {
console.log('Підключено до віддаленого відтворення'); });
remoteplaybackdisconnect-event Опис: Спрацьовує, коли відключено від віддаленого
відтворення.

Приклад:

javascript Copy code player.on('remoteplaybackdisconnect', function() {
console.log('Відключено від віддаленого відтворення'); });
interactivehotspotclicked-event Опис: Спрацьовує, коли користувач клікає на
інтерактивний гарячий піктограми.

Приклад:

javascript Copy code player.on('interactivehotspotclicked', function() {
console.log('Користувач клікнув на інтерактивний гарячий піктограми'); });
interactiveoverlaypanelclicked-event Опис: Спрацьовує, коли користувач клікає на
інтерактивну панель накладання.

Приклад:

javascript Copy code player.on('interactiveoverlaypanelclicked', function() {
console.log('Користувач клікнув на інтерактивну панель накладання'); });
