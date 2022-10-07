// browserify src/index.js -o src/browser.js


// const iziToast = require('izitoast')

function test() {
  var meta = document.createElement("meta");
  meta.httpEquiv = "X-UA-Compatible";
  meta.content = "IE=edgeeeeeeeee";
  document.getElementsByTagName("head")[0].appendChild(meta);
}
test();

function setUrlParam(value) {
  let svalue = value;
//   svalue = svalue.slice(1, 100);
 svalue = encodeURIComponent(value)
  const urlParams = new URLSearchParams(window.location.search);

  urlParams.set("color", svalue);

  // window.location.search = urlParams;
  window.history.replaceState(null, null, `?color=${svalue}`);
}
function copy() {
    let urlParams = new URLSearchParams(window.location.search);
    let str = document.getElementById('copylink')
    console.log(str)
    window.getSelection().selectAllChildren(str)
    navigator.clipboard.writeText(str.innerText).then(function() {
      alert(`J'ai bien copié le texte suivant :\n\n${str.innerText}`)
    }, function(err) {
      alert(`Bip Bioup :  Je n'ai pas pu copier le texte et j'ai reçu l'erreur suivante :\n\n${err}`)
    });
}
    
    
    /*.then(function() {*/
    //     iziToast.show({
    //         message: 'The URL has been copied',
    //         color: 'green',
    //         position: 'topCenter',
    //         iconUrl:'https://img.icons8.com/fluency/344/checkmark.png',
    //         closeOnClick:'true',
    //         timeout: 2000,
    //       })
    // }).catch((error) => {
    //     iziToast.show({
    //         message: 'I Could not copy the URL to your clipboard !',
    //         color: 'red',
    //         position: 'topCenter',
    //         iconUrl:'https://img.icons8.com/fluency/344/multiply.png',
    //         closeOnClick:'true',
    //         timeout: 2000,
    //       })
    // })
// }

const colorInput = document.getElementById("colorInput");

colorInput.addEventListener("change", (event) => {
  const colorHex = event.target.value;
  document.body.style.backgroundColor = colorHex;
  setUrlParam(colorHex);
  const copylink = document.getElementById('copylink')

  copylink.innerHTML = `<br><br><a>${window.location}</a>`


});

window.onload = function () {
  let urlParams = new URLSearchParams(window.location.search);
  let color = decodeURIComponent(urlParams.get("color"));
  if (color) {
    document.body.style.backgroundColor = color;
    document.getElementById('colorInput').defaultValue = color
    const copylink = document.getElementById('copylink')

    copylink.innerHTML = `<br><br><a onclick="">${window.location}</a>`
  } else return;
};



