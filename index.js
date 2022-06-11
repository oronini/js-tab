(()=> {
  const $dom = document;
  const $tab = $dom.getElementById('js-tab');
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $contents = $tab.querySelectorAll('[data-content]');
  const ACTIVE_CLASS = 'is-active';
  const navLen = $nav.length
  
  const init = ()=> {
    $contents[0].style.display = 'block';
  };
  init();
  
  
  const handleClick = (e)=> {
    e.preventDefault();
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    let index = 0;
    while (index < navLen) {
      $contents[index].style.display = 'none';
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++
    }

    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
    $nav[targetVal].classList.add(ACTIVE_CLASS);
  };

  let index = 0;
  while (index < navLen) {
    $nav[index].addEventListener('click', (e)=> handleClick(e))
    index++
  };

})();

