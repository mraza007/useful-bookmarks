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

let bookmarkList = bookmarks;

const storedBookmarks = localStorage.getItem("bookmarks");
if (typeof storedBookmarks !== 'undefined' && storedBookmarks !== null) {
  bookmarkList = JSON.parse(storedBookmarks);
}

var dataSource = bookmarkList
  .map(x => ({
    title: x.title,
    link: x.link,
    tags: (x.tags || [])
      .filter(tag => tag.length > 0)
      .map(x => `<span class='tag is-info'>${x}</span>`)
      .join(''),
  }));

var userList = new List('bookmarks', options, dataSource);

function toggleModal() {
  console.log("togglemodal");
  var element = document.getElementById("bookmark-form-modal");
  console.log(element.classList.contains("is-active"));
  if (element.classList.contains("is-active")) {
    element.classList.remove("is-active"); 
  } else {
    element.classList.add("is-active"); 
  }
}

function saveBookmark() {
  const link = document.getElementById("link").value;
  const title = document.getElementById("title").value;
  const tags = document.getElementById("tags").value;

  if (link && title) {
    let htmlTags = "";

    if (tags) {
      htmlTags = tags.split(",")
        .filter(tag => tag.length > 0)
        .map(x => `<span class='tag is-info'>${x}</span>`)
        .join('');
    }

    const bookmark = {
      title,
      link,
      tags: htmlTags,
    }
    
    userList.add(bookmark);
    bookmarkList.push({
      title,
      link,
      tags: tags.split(",").filter(tag => tag.length > 0),
    });
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkList));
    closeModal();
  }
}

function clearForm() {
  document.getElementById("link").value = "";
  document.getElementById("title").value = "";
  document.getElementById("tags").value = "";
}

function closeModal() {
  clearForm();
  document.getElementById("bookmark-form-modal").classList.remove("is-active");
}