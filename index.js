function addingEventListener() {
  const input = document.getElementById('input');

  function clickAlert() {
    alert('Yooooooo!');
  }

  input.addEventListener('click', clickAlert);
}

addingEventListener();