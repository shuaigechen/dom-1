const div = dom.create('<div>newDiv</div>');
console.log(div);

dom.after(test, div);

const div3 = dom.create('<div id="parent"></div>');

dom.wrap(test, div3);

dom.attr(test, 'title', 'Hi, I am shuaige')

const title = dom.attr(test, 'title')
console.log(`title: ${title}`)



dom.style(test, { border: '1px solid red', color: 'blue' })
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')