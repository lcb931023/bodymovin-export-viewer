var svgContainer = document.querySelector('#svgContainer');
var input = document.querySelector('#input-file');

function handleInputChange() {
  if (!input.files) return;
  if (!input.files[0]) return;
  var jsonFile = input.files[0];
  var reader = new FileReader();
  reader.onload = function(e) {
    try {
      var animationData = JSON.parse(e.target.result);
      movebody(animationData);
    } catch (e) {
      handleError(e);
    }
  };
  reader.onerror = handleError;
  reader.readAsText(jsonFile);
}
function movebody(data) {
  svgContainer.innerHTML = '';
  bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: true,
    animationData: data
  });
}
function handleError(err) {
  alert(err);
}
input.addEventListener('change', handleInputChange);
