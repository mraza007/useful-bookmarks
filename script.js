var options = {
  valueNames: [
    'title',
    { name: 'link', attr: 'href' }
  ],
  item: `
    <li class="list-group-item">
      <h3><a class="title link"></a></h3>
    </li>
  `.trim()
};

var userList = new List('bookmarks', options, bookmarks);