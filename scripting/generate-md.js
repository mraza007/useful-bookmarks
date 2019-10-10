const bookmarks = require('../bookmarks');

// write headings
console.log('# useful-bookmarks')
console.log('#### This repo is dedicated to list of useful bookmarks that I bookmarked when discovering something new or while learning programming')
console.log('');

// write bookmarks
bookmarks.forEach(bookmark => {
  if (bookmark.tags && bookmark.tags.length) {
    console.log(`- [${bookmark.title}](${bookmark.link})  `);
    console.log('  tags: ' + bookmark.tags.map(x => `\`${x}\``).join(', '));
  } else {
    console.log(`- [${bookmark.title}](${bookmark.link})`);
  }
});