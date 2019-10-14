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
    category: x.category,
    tags: (x.tags || [])
      .filter(tag => tag.length > 0)
      .map(x => `<span class='tag is-info'>${x}</span>`)
      .join(''),
  }));

// categories and categoryHeaders are order-sensitive

var categories = [
  "dev",
  "languages",
  "algorithms",
  "web",
  "os",
  "unixcli",
  "mobile",
  "ml",
  "security",
  "assembly",
  "hardware",
  "documentation",
  "maths",
  "misc",
  "personal"
]

var categoryHeaders = [
  "Dev Environment and DevOps",
  "Languages",
  "Algorithms",
  "Web Developement",
  "Operating Systems",
  "Unix and CLI",
  "Mobile",
  "Machine Learning and AI",
  "Security",
  "Assembly",
  "Hardware",
  "Documentation and Text Formatting",
  "Mathematics",
  "Misc.",
  "Personal"
]


// Get target element to add category elements to it
let target = document.getElementsByClassName("container")[1];
// Get list element to clone it
let el = document.getElementById("bookmarks");


categories.forEach(function(category, index, arr) {
  // Create new element for the category
  let clonedListElement = el.cloneNode(true);
  let categoryID = "bookmarks-" + category; // bookmarks-web
  clonedListElement.setAttribute("id", categoryID);
  clonedListElement.firstElementChild.innerText = categoryHeaders[index];
  target.appendChild(clonedListElement);

  // filter entries from main bookmarks list
  let filteredList = dataSource.filter(dsElement => dsElement.category === category);
  let newList = new List(categoryID, options, filteredList);

  // removing the ones we categorized
  dataSource = dataSource.filter(dsElement => dsElement.category !== category);
});


// Adding leftover categories into an undefined category
var clonedListElement = el.cloneNode(true);
var categoryID = "bookmarks-leftover";
clonedListElement.setAttribute("id", categoryID);
clonedListElement.firstElementChild.innerText = "Uncategorized";
target.appendChild(clonedListElement);
var newList = new List(categoryID, options, dataSource);


// Remove the initial list which we were cloning from
el.remove();