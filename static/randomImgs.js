const description = [
  "https://raw.githubusercontent.com/buenavistalab/buena-vista-lab/master/assets/t1.png",
  "https://raw.githubusercontent.com/buenavistalab/buena-vista-lab/master/assets/t2.png",
  "https://raw.githubusercontent.com/buenavistalab/buena-vista-lab/master/assets/t3.png",
  "https://raw.githubusercontent.com/buenavistalab/buena-vista-lab/master/assets/t4.png",
  "https://raw.githubusercontent.com/buenavistalab/buena-vista-lab/master/assets/t5.png",
  "https://raw.githubusercontent.com/buenavistalab/buena-vista-lab/master/assets/t6.png"
];

const size = description.length;
const magic = Math.floor(size * Math.random());
document.getElementById("img-bg").src = description[magic];
