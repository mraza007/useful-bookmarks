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
    category: x.category,
    tags: (x.tags || [])
      .map(x => `<span class='tag is-info'>${x}</span>`)
      .join(''),
  }));

var languages = dataSource.filter(x => x.category === "languages");
var web = dataSource.filter(x => x.category === "web");
dataSource = dataSource.filter(x => x.category === undefined);

var userList = new List('bookmarks', options, dataSource);
var userListLanguages = new List('bookmarks-languages', options, languages);
var userListWeb = new List('bookmarks-web', options, web);

// Sections to add:
//
// Security
// Assembly
// Dev Environment and DevOps
// Operating Systems
// Unix and CLI
// Web
// Programming Languageses
//    Python
// Documentation and Text Formatting
//    PDF from markdown
//    latex
// Hardware
//    Raspberry pi stuff
// Misc.
// Personal
//    There was one document on Google Drive