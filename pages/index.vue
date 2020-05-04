<template>
  <div class="container">
    <img
      id="1"
      class="hide"
      src="/images/IMG_0379.JPG"
    />
    <img
      id="2"
      class="hide"
      src="/images/IMG_0380.JPG"
    />
    <img
      id="3"
      class="hide"
      src="/images/IMG_0381.JPG"
    />
    <div id="main-image" style>
      <div id="audio-player" v-on:mouseover="playAudio" v-on:mouseleave="endAudio" data-audio="1">
        <audio id="player-1" class="player" src="/audio/ChicagoBulls.mp3" preload="auto" controls>
          <source src="~assets/audio/ChicagoBulls.mp3"></source>
        </audio>
        <audio id="player-2" class="player" src="/audio/TravisScott.mp3" preload="auto" controls>
          <source src="~assets/audio/TravisScott.mp3"></source>
        </audio>
        <audio id="player-3" class="player" src="/audio/MambaOut.mp3" preload="auto" controls>
          <source src="~assets/audio/MambaOut.mp3"></source>
        </audio>
      </div>
      <button id="select-random" v-on:click="selectRandom" class="random">Random</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    playAudio: function(e) {
      const playerNumber = document.getElementById('audio-player').dataset.audio;
      const audioPlayer = document.getElementById(`player-${playerNumber}`);
      audioPlayer.play();
    },
    endAudio: function(e) {
      const playerNumber = document.getElementById('audio-player').dataset.audio;
      const audioPlayer = document.getElementById(`player-${playerNumber}`);
      audioPlayer.pause();
    },
    selectRandom: function(e) {
      e.preventDefault;
      let randNum = Math.floor(Math.random() * 3) + 1,
        selectImage = document.getElementById(randNum).src,
        mainImage = document.getElementById("main-image"),
        audioPlayer = document.getElementById("audio-player"),
        playerNumber = document.getElementById('audio-player').dataset.audio;;
      // if (randNum == playerNumber) {
      //   selectRandom()
      // } else {
        mainImage.style.backgroundImage = `url(${selectImage})`;
        audioPlayer.dataset.audio = randNum;
      // }
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&display=swap');

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

#main-image {
  background-image: url("/images/IMG_0379.JPG");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

#audio-player {
  width: 40vw;
  height: 40vh;
  cursor: pointer;
}

.player {
  display: none;
}

.random {
  position: absolute;
  background: transparent;
  bottom: 10vh;
  font-size: 1.5em;
  color: black;
  width: 200px;
  padding: 10px;
  border-radius: 50px;
  border: none;
  font-family: 'Montserrat', sans-serif;
}
.random:hover{
  transition: 0.8s ease-in-out;
  background: rgba($color: #ffffff, $alpha: 0.7);
  transform: scale(1.3);
}

.hide {
  display: none;
}
</style>
