const appElement = document.getElementById('app-body');

const animationTime = 3000;
//const AllMessageleLength = textArray.length;

var interval = 0;

//------------------------------------------
function buildMessage() {
  var thisMessageNumber = interval + 1;

  if(interval === textArray.length) {
    location.reload();
  }

    var thisMessage = textArray[interval++];
    var thisMessageContend = thisMessage.message;

    appElement.innerHTML = `<div class="pagination" id="pagination">
                        ${thisMessageNumber}/${textArray.length}
                      </div>
                      <div class="app-message">
                        ${thisMessageContend}
                      </div>`;
}
buildMessage();
//------------------------------------------

function Timer(callback, delay) {
    var timerId, start, remaining = delay;

    this.pause = function() {
        window.clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    var resume = function() {
        start = new Date();
        timerId = window.setTimeout(function() {
            remaining = delay;
            resume();
            callback();
        }, remaining);
    };

    this.resume = resume;

    this.resume();
}

//------------------------------------------

var timer = new Timer(function() {
    buildMessage();
}, animationTime);

//------------------------------------------
function stop() {

  timer.pause();

  if (appElement.classList)
  appElement.classList.add('app-body-touch');
  else
  appElement.className += ' ' + 'app-body-touch';
}

function run() {

  timer.resume();

  if (appElement.classList)
  appElement.classList.remove('app-body-touch');
  else
  appElement.className = appElement.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

//------------------------------------------

appElement.addEventListener("mousedown", stop);
appElement.addEventListener("mouseup", run);
appElement.addEventListener("touchstart", stop);
appElement.addEventListener("touchend", run);
