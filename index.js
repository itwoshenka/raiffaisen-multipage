chatLocationData = {
    accountName: "demo",
    domain: "demo.spitch.chat",
    location: "Raiffeisen"
  };
  function changeScript(){
    sessionStorage.locValue='FAQKanton';
    chatLocationData.location=sessionStorage.locValue;
  };
  function videoValidator(){
    if(sessionStorage.locValue){
        chatLocationData.location=sessionStorage.locValue;
    }
    else{
        chatLocationData.location="Raiffeisen";
    }
  }
  (function () {
      var d = document.createElement("script");
      d.type = "text/javascript";
      d.src = "https://demo.spitch.chat/js/button.js";
      document.getElementsByTagName("head")[0].appendChild(d);
  })();
  function onYouTubeIframeAPIReady() {
      player = new YT.Player('videoContainer', {
          height: '300',
          width: '500',
          videoId: 'OP2vT9cwaVU',
          events: {
              'onStateChange': changeScript
          }
      });
  }

  function onPlayerStateChange(event) {

    if (event.data == YT.PlayerState.PLAYING) {
       alert('video started');
       playing = true;
      }

    else if(event.data == YT.PlayerState.PAUSED){
          alert('video paused');
          playing = false;
     }
}