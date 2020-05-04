<template>
  <div class="container">
    <div id="1" data-image="~/assets/images/IMG_0379.JPG" data-audio></div>
    <div id="2" data-image="~/assets/images/IMG_0380.JPG" data-audio></div>
    <div id="3" data-image="~/assets/images/IMG_0381.JPG" data-audio></div>
    <div id="main-image">
      <audio class="audio-player" v-on:hover="playAudio" data-audio="~/assets/audio/ChicagoBulls.mp3">
      <source src="~/assets/audio/ChicagoBulls.mp3"></source>
      </audio>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    playAudio: function(e) {
      let audio = this.dataset.audio;
      if (audio) {
        let player = new Audio(audio);
        player.play();
        this.addEventListener("mouseleave", function(player) {
          player.end();
        });
      }
    },
    endAudio: function(e) {}
  }
};
</script>

<style lang="scss">
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
  background-image: url("~assets/images/IMG_0379.JPG");
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

.audio-player {
  width: 30vw;
  height: 30vh;
  cursor: pointer;
}
</style>
