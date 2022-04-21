const description = [
  "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo.png",
  "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo1.png",
  "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo10.png",
  "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo12.png",
  "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo2.png",
  "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo3.png",
  "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo4.png",
  "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo5.png",
  "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo6.png",
  "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo7.png",
  "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo8.png",
  "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo9.png"
];

const size = description.length;
const magic = Math.floor(size * Math.random());
document.getElementById("img-bg").src = description[magic];
