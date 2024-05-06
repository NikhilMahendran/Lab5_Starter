window.addEventListener('DOMContentLoaded', init);

function init() {
  var hornselect = document.querySelector("#horn-select");
  var hornimage = document.getElementsByTagName("img").item(0);
  var audio = document.getElementsByTagName("audio").item(0);
  const confetti = new JSConfetti()
  var volcontrol = document.getElementById("volume-controls");
  var volslider = volcontrol.getElementsByTagName("input").item(0);
  var volimage = volcontrol.getElementsByTagName("img").item(0);

  hornselector.addEventListener("change", (event) => {
    switch(hornselector.selectedIndex){
        case 1:
        hornimage.setAttribute("src", "assets/images/air-horn.svg");
        hornimage.setAttribute("alt", "No image selected");
        audio.setAttribute("src","assets/audio/air-horn.mp3");
        break;
      case 2:
        hornimage.setAttribute("src", "assets/images/car-horn.svg");
        hornimage.setAttribute("alt", "car horn");
        audio.setAttribute("src","assets/audio/car-horn.mp3");
        break;
      case 3:
        hornimage.setAttribute("src", "assets/images/party-horn.svg");
        hornimage.setAttribute("alt", "party horn");
        audio.setAttribute("src","assets/audio/party-horn.mp3");
        break;
      default:
        hornimage.setAttribute("src", "assets/images/no-image.png");
        hornimage.setAttribute("alt", "No image selected");
        audio.setAttribute("src","");
        break;
    }
  });

  audio.volume = volslider.value/100;

  volslider.addEventListener("input", (event) => {
    if (volslider.value == 0) {
      volimage.setAttribute("src", "assets/icons/volume-level-0.svg");
    } else if (volslider.value < 33) {
      volimage.setAttribute("src", "assets/icons/volume-level-1.svg");
    } else if (volslider.value < 67) {
      volimage.setAttribute("src", "assets/icons/volume-level-2.svg");
    } else {
      volimage.setAttribute("src", "assets/icons/volume-level-3.svg");
    }
    audio.volume = volslider.value/100;
  });


  var play_sound = document.getElementsByTagName("Button").item(0);
  play_sound.addEventListener('click', (event) => {
      audio.play();
      if (hornselect.selectedIndex == 3) {
        confetti.addConfetti()
      }
    }
  );
}
        
}
