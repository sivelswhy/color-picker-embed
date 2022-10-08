// browserify src/index.js -o src/browser.js


// const iziToast = require('izitoast')

function metaTagsColors(color) {


  function title(){
    // const meta = document.createElement('meta');
    // meta.name = `title`;
    // meta.content = `Hex color vizualiser`;
    // document.getElementsByTagName('head')[0].appendChild(meta);

    // const fbTitle = document.createElement('meta')
    // fbTitle.property = "og:url" //doesn't work
    // fbTitle.content = "https://color-picker-embed.vercel.app/"
    // document.getElementsByTagName('head')[0].appendChild(fbTitle);
    // <meta property="og:url" content="https://metatags.io/"></meta>
  }

title()
}
metaTagsColors('#12345')
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
    window.getSelection().selectAllChildren(str)
    navigator.clipboard.writeText(str.innerText).then(function() {
      alert(`I've successfully copied this URL :\n\n${str.innerText}`)
    }, function(err) {
      alert(`Bip Bioup :  I couldn't achieve in the task to copy this url. Here's the error that i ran to :\n\n${err}`)
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

  const textcopy = document.getElementById('textcopy')
  
  textcopy.innerHTML = "<i class=\"fa-solid fa-arrow-down\"></i> Here's the link that let's you transfer this color : <i class=\"fa-sharp fa-solid fa-arrow-down\"></i>"
  
  copylink.innerHTML = `<a>${window.location}</a>`


});

window.onload = function () {
  let urlParams = new URLSearchParams(window.location.search);
  let color = decodeURIComponent(urlParams.get("color"));
  document.body.style.backgroundColor = color;
  document.getElementById('colorInput').defaultValue = color

  if (urlParams.get('color') !== null) {
    const copylink = document.getElementById('copylink')

    copylink.innerHTML = `<a>${window.location}</a>`

  } else if (!urlParams.get('color')){
    const textcopy = document.getElementById('textcopy')
    textcopy.innerHTML = ""
    copylink.innerHTML = ""
  };
};



