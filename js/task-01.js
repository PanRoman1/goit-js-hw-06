const itemsEl = document.querySelectorAll('.item');
console.log('Number of categories: ', itemsEl.length);

itemsEl.forEach(item => {
  const titleEl = item.querySelector('h2');
  const listEl = item.querySelector('ul');

  console.log('Category: ', titleEl.textContent);
  console.log('Elements: ', listEl.children.length);
});