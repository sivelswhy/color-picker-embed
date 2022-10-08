// browserify src/index.js -o src/browser.js


// const iziToast = require('izitoast')

function metaTagsColors(color) {


  function title(){
    const meta = document.createElement('meta');
    meta.name = `title`;
    meta.content = `Hex color vizualiser`;
    document.getElementsByTagName('head')[0].appendChild(meta);
    const fbTitle = document.createElement('meta')
    fbTitle.setAttribute('property', 'og:title')
    fbTitle.content = "Hex color vizualiser"
    document.getElementsByTagName('head')[0].appendChild(fbTitle);
    const twtTitle = document.createElement('meta')
    twtTitle.setAttribute('property', 'twitter:title')
    twtTitle.content = "Hex color vizualiser"
    document.getElementsByTagName('head')[0].appendChild(twtTitle);
  }

  function description() {
    const primary = document.createElement('meta');
    primary.name = `description`;
    primary.content = `Here's the privew of the color "${color}"`;
    document.getElementsByTagName('head')[0].appendChild(primary);
    const fbDesc = document.createElement('meta');
    fbDesc.setAttribute('property', 'og:description')
    fbDesc.content = `Here's the privew of the color "${color}"`
    document.getElementsByTagName('head')[0].appendChild(fbDesc);
    const twtDesc = document.createElement('meta');
    twtDesc.setAttribute('property', 'twitter:description')
    twtDesc.content = `Here's the privew of the color "${color}"`
    document.getElementsByTagName('head')[0].appendChild(twtDesc);
  }
  function link() {
    const fbUrl = document.createElement('meta');
    fbUrl.setAttribute('property', 'og:url')
    fbUrl.content = `https://color-picker-embed.vercel.app/"`
    document.getElementsByTagName('head')[0].appendChild(fbUrl);
    const twtUrl = document.createElement('meta');
    twtUrl.setAttribute('property', 'twitter:url')
    twtUrl.content = `https://color-picker-embed.vercel.app/"`
    document.getElementsByTagName('head')[0].appendChild(twtUrl);
  }
  function image() {
    let linkColor = color.substring(0,1)
    console.log(linkColor)
    const fbImage = document.createElement('meta');
    fbImage.setAttribute('property', 'og:image')
    fbImage.content = `https://singlecolorimage.com/get/${color}/400xifra100"`
    document.getElementsByTagName('head')[0].appendChild(fbImage);
    const twtImage = document.createElement('meta');
    twtImage.setAttribute('property', 'twitter:image')
    twtImage.content = `https://singlecolorimage.com/get/${color}/400xifra100"`
    document.getElementsByTagName('head')[0].appendChild(twtImage);
  }
title()
description()
link()
image()
}
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

const colorInput = document.getElementById("colorInput");

colorInput.addEventListener("change", (event) => {
  const colorHex = event.target.value;
  document.body.style.backgroundColor = colorHex;
  metaTagsColors(colorHex)
  setUrlParam(colorHex);
  const copylink = document.getElementById('copylink')

  const textcopy = document.getElementById('textcopy')
  
  textcopy.innerHTML = "<p><i class=\"fa-solid fa-arrow-down\"></i> Here's the link that let's you transfer this color : <i class=\"fa-sharp fa-solid fa-arrow-down\"></i></p> "
  
  copylink.innerHTML = `<a>${window.location}</a>`


});

window.onload = function () {
  let urlParams = new URLSearchParams(window.location.search);
  let color = decodeURIComponent(urlParams.get("color"));
  document.body.style.backgroundColor = color;
  document.getElementById('colorInput').defaultValue = color

  if (urlParams.get('color') !== null) {
    const copylink = document.getElementById('copylink')

    const textcopy = document.getElementById('textcopy')
    metaTagsColors(color)
    textcopy.innerHTML = "<p><i class=\"fa-solid fa-arrow-down\"></i> Here's the link that let's you transfer this color : <i class=\"fa-sharp fa-solid fa-arrow-down\"></i></p> "
    copylink.innerHTML = `<a>${window.location}</a>`

  } else if (!urlParams.get('color')){
    const textcopy = document.getElementById('textcopy')
    textcopy.innerHTML = ""
    copylink.innerHTML = ""
  };
};



