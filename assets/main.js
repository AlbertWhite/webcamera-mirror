var scanner, scanner_inner;

scanner = new Instascan.Scanner({
  video: document.getElementById('preview-background')
});

scanner_inner = new Instascan.Scanner({
  video: document.getElementById('preview')
});

scanner.addListener('scan', function(content) {
  return console.log(content);
});

scanner_inner.addListener('scan', function(content) {
  return console.log(content);
});

Instascan.Camera.getCameras().then(function(cameras) {
  if (cameras.length > 0) {
    return scanner.start(cameras[0]);
  } else {
    return console.error('No cameras found.');
  }
})["catch"](function(e) {
  return console.error(e);
});

Instascan.Camera.getCameras().then(function(cameras) {
  if (cameras.length > 0) {
    return scanner_inner.start(cameras[0]);
  } else {
    return console.error('No cameras found.');
  }
})["catch"](function(e) {
  return console.error(e);
});

