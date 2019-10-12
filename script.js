var options = {
  valueNames: [
    'title',
    { name: 'link', attr: 'href' },
    'tags',
  ],
  item: `
    <div class="card">
      <div class="card-content">
        <h4><a class="title link"></a></h4>
        <div class="tags"></div>
      </div>
    </div>
  `.trim()
};

var dataSource = bookmarks
  .map(x => ({
    title: x.title,
    link: x.link,
    tags: (x.tags || [])
      .map(x => `<span class='tag is-info'>${x}</span>`)
      .join(''),
  }));

var userList = new List('bookmarks', options, dataSource);