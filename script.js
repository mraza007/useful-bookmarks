var options = {
  valueNames: [
    'title',
    { name: 'link', attr: 'href' }
  ],
  item: `
    <li class="list-item list-group-item">
      <h4><a class="title link"></a></h4>
    </li>
  `.trim()
};

var userList = new List('bookmarks', options, bookmarks);