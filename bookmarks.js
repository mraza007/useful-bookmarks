const bookmarks = [
    {
        "title": "Learn OpenCV ( C++ / Python )",
        "link": "https://www.learnopencv.com/",
        "tags": [ "C++", "python", "OpenCV" ],
        "category": "languages"
    },
    {
        "title": "StartUp Ideas",
        "link": "https://unawaz.github.io/stochastic-hill-climbing/tasks/",
        "tags": [ "startup", "ideas", "OpenCV" ]
    },
    {
        "title": "Fullstack React Native Book - The Complete Guide to React Native",
        "link": "https://www.fullstackreact.com/react-native/",
        "tags": [ "react" ],
        "category": "web"
    },
    {
        "title": "build-linux/README.md at master · MichielDerhaeg/build-linux",
        "link": "https://github.com/MichielDerhaeg/build-linux/blob/master/README.md",
        "category": "unixcli"
    },
    {
        "title": "Compilers 101 – Overview and Lexer – Xojo Blog",
        "link": "https://blog.xojo.com/2017/12/06/compilers-101-overview-and-lexer/",
        "category": "misc"
    },
    {
        "title": "linalg.pdf",
        "link": "http://www.seas.upenn.edu/~cis515/linalg.pdf",
        "tags": [ "mathematics" ],
        "category": "maths"
    },
    {
        "title": "Introduction to C Programming - Table of Contents",
        "link": "https://www.le.ac.uk/users/rjm1/cotter/index.htm",
        "category": "languages"
    },
    {
        "title": "Awesome Python",
        "link": "https://awesome-python.com/",
        "tags": [ "python" ],
        "category": "languages"
    },
    {
        "title": "Git Cheatsheet",
        "link": "http://www.ndpsoftware.com/git-cheatsheet.html#loc=stash;",
        "tags": [ "git" ],
        "category": "dev"
    },
    {
        "title": "wikiPython – Python (3.5+), Raspberry Pi, RPi.GPIO, and tkinter",
        "link": "http://www.wikipython.com/",
        "tags": [ "python" ],
        "category": "languages"
    },
    {
        "title": "Watch and Code®",
        "link": "https://watchandcode.com/",
        "category": "misc"
    },
    {
        "title": "How to turn your side project into an open source project - Reaktor",
        "link": "https://www.reaktor.com/blog/how-to-turn-your-side-project-into-an-open-source-project/?utm_source=DigitalOcean_Newsletter",
        "category": "dev"
    },
    {
        "title": "How to Build Android ROMs on Ubuntu 16.04 | DigitalOcean",
        "link": "https://www.digitalocean.com/community/tutorials/how-to-build-android-roms-on-ubuntu-16-04?utm_medium=email&utm_source=IaaN&utm_campaign=01182018",
        "category": "mobile"
    },
    {
        "title": "Solarian Programmer | My programming ramblings",
        "link": "https://solarianprogrammer.com/",
        "category": "misc"
    },
    {
        "title": "C/C++ Programming for Hackers: Part 1 (Introduction) « Null Byte :: WonderHowTo",
        "link": "https://null-byte.wonderhowto.com/how-to/c-c-programming-for-hackers-part-1-introduction-0162213/",
        "category": "security"
    },
    {
        "title": "Temperature log - Introduction | Raspberry Pi Projects",
        "link": "https://projects.raspberrypi.org/en/projects/temperature-log",
        "category": "hardware"
    },
    {
        "title": "Short, instructional screencast video tutorials for web developers on @eggheadio",
        "link": "https://egghead.io/",
        "category": "web"
    },
    {
        "title": "lib4dev",
        "link": "http://www.lib4dev.com/topics/python?p=3&s=stars",
        "category": "languages"
    },
    {
        "title": "Using git-flow to automate your git branching workflow",
        "link": "https://jeffkreeftmeijer.com/git-flow/",
        "category": "dev"
    },
    {
        "title": "cs103x-notes.pdf",
        "link": "https://web.stanford.edu/class/cs103x/cs103x-notes.pdf",
        "category": "maths"
    },
    {
        "title": "Artikel",
        "link": "https://michael.stapelberg.de/posts/",
        "category": "unixcli"
    },
    {
        "title": "Problem Solving with Algorithms and Data Structures using Python — Problem Solving with Algorithms and Data Structures",
        "link": "https://interactivepython.org/runestone/static/pythonds/index.html",
        "category": "languages"
    },
    {
        "title": "Deploying a New Python Package to Pypi – Developers Area",
        "link": "http://devarea.com/deploying-a-new-python-package-to-pypi/",
        "category": "languages"
    },
    {
        "title": "#rice - list o' resources",
        "link": "https://rizonrice.github.io/resources",
        "category": ""
    },
    {
        "title": "Lex Fridman | MIT",
        "link": "https://lexfridman.com/",
        "category": ""
    },
    {
        "title": "Learn React for free | Scrimba.com",
        "link": "https://scrimba.com/g/glearnreact",
        "category": "web"
    },
    {
        "title": "TextBlob and Sentiment Analysis — Python – Rahul Vaish – Medium",
        "link": "https://medium.com/@rahulvaish/textblob-and-sentiment-analysis-python-a687e9fabe96",
        "category": "languages"
    },
    {
        "title": "Devhints — TL;DR for developer documentation",
        "link": "https://devhints.io/",
        "category": "documentation"
    },
    {
        "title": "Best Vim Tips | Vim Tips Wiki | FANDOM powered by Wikia",
        "link": "http://vim.wikia.com/wiki/Best_Vim_Tips",
        "category": "unixcli"
    },
    {
        "title": "Write your Own Virtual Machine",
        "link": "https://justinmeiners.github.io/lc3-vm/",
        "category": "misc"
    },
    {
        "title": "Ten simple rules for documenting scientific software",
        "link": "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1006561",
        "category": "documentation"
    },
    {
        "title": "HowToBeAProgrammer.pdf",
        "link": "https://www.doc.ic.ac.uk/~susan/475/HowToBeAProgrammer.pdf",
        "category": ""
    },
    {
        "title": "Programmer Competency Matrix | Sijin Joseph",
        "link": "https://sijinjoseph.com/programmer-competency-matrix/",
        "category": ""
    },
    {
        "title": "Want to build something fun? Here’s a list of sample web app ideas.",
        "link": "https://medium.freecodecamp.org/want-to-build-something-fun-heres-a-list-of-sample-web-app-ideas-b991bce0ed9a",
        "category": "web"
    },
    {
        "title": "thinking-forth-color.pdf",
        "link": "https://1scyem2bunjw1ghzsf1cjwwn-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/thinking-forth-color.pdf",
        "category": ""
    },
    {
        "title": "Find the best online programming courses & tutorials - Hackr.io",
        "link": "https://hackr.io/",
        "category": "algorithms"
    },
    {
        "title": "The Scientist & Engineer's Guide to Digital Signal Processing, 1999 | Education | Analog Devices",
        "link": "https://www.analog.com/en/education/education-library/scientist_engineers_guide.html",
        "category": "hardware"
    },
    {
        "title": "Must Read CS Books For Self Self-Taught Programmers | Hacker News",
        "link": "https://news.ycombinator.com/item?id=2414280",
        "category": "algorithms"
    },
    {
        "title": "Awesome C/C++",
        "link": "http://fffaraz.github.io/awesome-cpp/",
        "category": "languages"
    },
    {
        "title": "Building Beautiful Command Line Interfaces with Python",
        "link": "https://codeburst.io/building-beautiful-command-line-interfaces-with-python-26c7e1bb54df",
        "category": "unixcli"
    },
    {
        "title": "How To Setup a Firewall with UFW on an Ubuntu and Debian Cloud Server | DigitalOcean",
        "link": "https://www.digitalocean.com/community/tutorials/how-to-setup-a-firewall-with-ufw-on-an-ubuntu-and-debian-cloud-server",
        "category": "security"
    },
    {
        "title": "How To Set Up Django with Postgres, Nginx, and Gunicorn on Ubuntu 18.04 | DigitalOcean",
        "link": "https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18-04",
        "category": "web"
    },
    {
        "title": "Dashboard | Stanford Lagunita",
        "link": "https://lagunita.stanford.edu/dashboard",
        "category": ""
    },
    {
        "title": "The Architecture of Open Source Applications",
        "link": "http://aosabook.org/en/",
        "category": ""
    },
    {
        "title": "Jessie Frazelle's Blog: Books I Recommend",
        "link": "https://blog.jessfraz.com/post/books/",
        "category": "misc"
    },
    {
        "title": "Machine Learning - Data Scientist Path",
        "link": "https://aws.amazon.com/training/learning-paths/machine-learning/data-scientist/",
        "category": "ml"
    },
    {
        "title": "Manning | Catalog",
        "link": "https://www.manning.com/catalog#section-68",
        "category": ""
    },
    {
        "title": "explainshell.com - match command-line arguments to their help text",
        "link": "https://www.explainshell.com/",
        "category": ""
    },
    {
        "title": "natUIve",
        "link": "https://natuive.net/#home",
        "category": ""
    },
    {
        "title": "PyImageSearch - Be awesome at OpenCV, Python, deep learning, and computer vision",
        "link": "https://www.pyimagesearch.com/",
        "category": "ml"
    },
    {
        "title": "Practice Python",
        "link": "http://www.practicepython.org/",
        "category": "languages"
    },
    {
        "title": "Neural networks and deep learning",
        "link": "http://neuralnetworksanddeeplearning.com/",
        "category": "ml"
    },
    {
        "title": "The Python Graph Gallery – Visualizing data – with Python",
        "link": "https://python-graph-gallery.com/",
        "category": "ml"
    },
    {
        "title": "Why Python? | Linux Journal",
        "link": "http://www.linuxjournal.com/article/3882",
        "category": "languages"
    },
    {
        "title": "Why Is Python So Popular? - Dice Insights",
        "link": "https://insights.dice.com/2016/06/01/why-is-python-so-popular/",
        "category": "languages"
    },
    {
        "title": "Circuit Basics - Raspberry Pi",
        "link": "http://www.circuitbasics.com/raspberry-pi/",
        "category": "hardware"
    },
    {
        "title": "Projects | Rototron",
        "link": "https://www.rototron.info/projects/",
        "category": "hardware"
    },
    {
        "title": "video | plus.maths.org",
        "link": "https://plus.maths.org/content/category/tags/video",
        "category": "maths"
    },
    {
        "title": "Pi Temperature Monitor | Rototron",
        "link": "https://www.rototron.info/projects/pi-temperature-monitor/",
        "category": "hardware"
    },
    {
        "title": "About - Project Euler",
        "link": "https://projecteuler.net/",
        "category": "algorithms"
    },
    {
        "title": "Raspberry Pi Temperature Sensor: Build a DS18B20 Circuit",
        "link": "https://pimylifeup.com/raspberry-pi-temperature-sensor/",
        "category": "hardware"
    },
    {
        "title": "Get Started with Frontend CSS Frameworks using Python and Django",
        "link": "https://www.jamesstone.com/python-css-frameworks/",
        "category": "web"
    },
    {
        "title": "Related Projects",
        "link": "https://software-carpentry.org/join/projects/",
        "category": ""
    },
    {
        "title": "inventwithpython.com",
        "link": "http://inventwithpython.com/",
        "category": "languages"
    },
    {
        "title": "AI Shack - Tutorials for OpenCV, computer vision, deep learning, image processing, neural networks and artificial intelligence.",
        "link": "http://www.aishack.in/tutorials/",
        "category": "ml"
    },
    {
        "title": "Best Python Resources for Beginners and Professionals | Python Tips",
        "link": "https://pythontips.com/2013/09/01/best-python-resources/",
        "category": "languages"
    },
    {
        "title": "The Invent with Python Blog -",
        "link": "https://inventwithpython.com/blog/",
        "category": "languages"
    },
    {
        "title": "Django model data types",
        "link": "https://www.webforefront.com/django/modeldatatypesandvalidation.html",
        "category": "web"
    },
    {
        "title": "Boot Up the Geek",
        "link": "https://www.bootupthegeek.com/hacking_tutorials",
        "category": "misc"
    },
    {
        "title": "Django Tutorial Part 6: Generic list and detail views - Learn web development | MDN",
        "link": "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Generic_views",
        "category": "web"
    },
    {
        "title": "Teach Yourself Computer Science",
        "link": "https://teachyourselfcs.com/",
        "category": "algorithms"
    },
    {
        "title": "Javascript Char Codes (Key Codes) - Cambia Research",
        "link": "https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes",
        "category": "web"
    },
    {
        "title": "uiGradients - Beautiful colored gradients",
        "link": "https://uigradients.com/#Titanium",
        "category": "web"
    },
    {
        "title": "NavNav - 90+ Responsive Navigation Bar Menu Tutorials, Examples, and Demos (CSS, jQuery, JavaScript)",
        "link": "http://navnav.co/resources",
        "category": "web"
    },
    {
        "title": "Challenges & Solutions for Your Responsive Navigation",
        "link": "http://blog.teamtreehouse.com/challenges-solutions-responsive-navigation",
        "category": "web"
    },
    {
        "title": "A survival guide for Unix beginners",
        "link": "http://matt.might.net/articles/basic-unix/",
        "category": "unixcli"
    },
    {
        "title": "Getting to Know the Command Line | David Baumgold",
        "link": "https://www.davidbaumgold.com/tutorials/command-line/",
        "category": "unixcli"
    },
    {
        "title": "How to set up the perfect modern dev environment on Windows - Charged",
        "link": "https://char.gd/",
        "category": "dev"
    },
    {
        "title": "My Complete Front End Web Development Setup – Tania Rascia",
        "link": "https://www.taniarascia.com/my-front-end-web-development-setup/#text-editor--ide",
        "category": "web"
    },
    {
        "title": "ProgrammableWeb - APIs, Mashups and the Web as Platform",
        "link": "https://www.programmableweb.com/",
        "category": "web"
    },
    {
        "title": "request/request: 🏊🏾 Simplified HTTP request client.",
        "link": "https://github.com/request/request",
        "category": "web"
    },
    {
        "title": "25 Useful Basic Commands of APT-GET and APT-CACHE for Package Management",
        "link": "https://www.tecmint.com/useful-basic-commands-of-apt-get-and-apt-cache-for-package-management/",
        "category": "unixcli"
    },
    {
        "title": "What is SFTP, and how do I use it to transfer files?",
        "link": "https://kb.iu.edu/d/akqg",
        "category": "unixcli"
    },
    {
        "title": "Daniel Miessler :: information security, technology, and humans",
        "link": "https://danielmiessler.com/",
        "category": "security"
    },
    {
        "title": "PY4E - Python for Everybody",
        "link": "https://www.py4e.com/",
        "category": "languages"
    },
    {
        "title": "Basic Finance: Introduction | Finance and Python",
        "link": "http://www.financeandpython.com/BasicFinance/1/3.html",
        "category": "maths"
    },
    {
        "title": "Top 10 video tutorials to learn Python - Top Zenith",
        "link": "http://www.topzenith.com/2017/04/top-10-video-tutorials-to-learn-python.html",
        "category": "languages"
    },
    {
        "title": "The Hitchhiker's Guide to Python! — The Hitchhiker's Guide to Python",
        "link": "http://docs.python-guide.org/en/latest/",
        "category": "languages"
    },
    {
        "title": "Tech Blog",
        "link": "http://tech.marksblogg.com/",
        "category": "misc"
    },
    {
        "title": "Formal Languages - Computer Science Field Guide",
        "link": "http://www.csfieldguide.org.nz/en/chapters/formal-languages.html",
        "category": "algorithms"
    },
    {
        "title": "What every computer science major should know",
        "link": "http://matt.might.net/articles/what-cs-majors-should-know/",
        "category": "misc"
    },
    {
        "title": "Pythonista Tools",
        "link": "http://pythonista-tools.github.io/Pythonista-Tools/",
        "category": "languages"
    },
    {
        "title": "Typographic Sites - A Gallery of Typographic Site Designs via CSS Design Awards",
        "link": "http://www.cssdesignawards.com/website-gallery?feature=typographic&page=3",
        "category": "web"
    },
    {
        "title": "Responsive Web Design Patterns | This Is Responsive",
        "link": "http://bradfrost.github.io/this-is-responsive/patterns.html#navigation",
        "category": "web"
    },
    {
        "title": "CSS Transition (CSS Animations Series Part 1) - YouTube",
        "link": "https://www.youtube.com/watch?v=8kK-cA99SA0",
        "category": "web"
    },
    {
        "title": "Portfolio One Page Websites - Page 10 of 276",
        "link": "https://onepagelove.com/gallery/portfolio/page/10",
        "category": "web"
    },
    {
        "title": "Full-Screen Pushing Navigation in CSS and jQuery | CodyHouse",
        "link": "https://codyhouse.co/gem/full-screen-pushing-navigation/",
        "category": "web"

    },
    {
        "title": "Python Programming Tutorials",
        "link": "https://pythonprogramming.net/game-development-tutorials/",
        "category": "languages"
    },
    {
        "title": "Posts tagged \"ssh\" - SaltyCrane Blog",
        "link": "https://www.saltycrane.com/blog/tag/ssh/",
        "category": "security"
    },
    {
        "title": "How to Think Like a Computer Scientist",
        "link": "http://greenteapress.com/thinkcpp/",
        "category": "misc"
    },
    {
        "title": "Online CS Courses - Computer Science",
        "link": "https://www.computerscienceonline.org/courses/",
        "category": "algorithms"
    },
    {
        "title": "Rosetta Code",
        "link": "http://rosettacode.org/wiki/Rosetta_Code",
        "category": "algorithms"
    },
    {
        "title": "A Deeper Inspection Into Compilation And Interpretation",
        "link": "https://dev.to/vaidehijoshi/a-deeper-inspection-into-compilation-and-interpretation-8bp",
        "category": "assembly"
    },
    {
        "title": "Trying to understand blockchain by making one!",
        "link": "https://dev.to/damcosset/trying-to-understand-blockchain-by-making-one-ce4",
        "category": ""
    },
    {
        "title": "Must have extensions for VS Code (according to me)",
        "link": "https://dev.to/chrisvasqm/must-have-extensions-for-vs-code-according-to-me-dho",
        "category": "dev"
    },
    {
        "title": "computer-science/README.md at master · ossu/computer-science",
        "link": "https://github.com/ossu/computer-science/blob/master/README.md",
        "category": "misc"
    },
    {
        "title": "Structure and Interpretation of Computer Programs",
        "link": "https://mitpress.mit.edu/sicp/full-text/book/book.html",
        "category": "misc"
    },
    {
        "title": "Learn Startup, starting a business, Mobile Development and Design with Node.js, Angular.js, React.js, Python, MongoDB, HTML5, CSS3, JavaScript, PHP, mobile app development, Responsive Web Design, Maketing",
        "link": "https://school.geekwall.in/javascript",
        "category": "web"
    },
    {
        "title": "WebRTC Tutorial for Beginners | Web Code Geeks - 2017",
        "link": "https://www.webcodegeeks.com/web-development/webrtc-tutorial-beginners/",
        "category": "web"
    },
    {
        "title": "A list of artificial intelligence tools you can use today–– for personal use",
        "link": "https://lyr.ai/artificial-intelligence-for-personal-use/",
        "category": "ml"
    },
    {
        "title": "You Might Not Need jQuery",
        "link": "http://youmightnotneedjquery.com/",
        "category": "web"
    },
    {
        "title": "Interview Questions | CareerCup",
        "link": "https://careercup.com/page",
        "category": "algorithms"
    },
    {
        "title": "We All Face Rejection.",
        "link": "https://rejected.us/",
        "category": "misc"
    },
    {
        "title": "Introduction to Statistical Learning",
        "link": "http://www-bcf.usc.edu/~gareth/ISL/",
        "category": "maths"
    },
    {
        "title": "Learning Paradigms - Types of Learning (Abu-Mostafa)",
        "link": "http://work.caltech.edu/library/014.html",
        "category": ""
    },
    {
        "title": "1309.0238v1.pdf",
        "link": "https://arxiv.org/pdf/1309.0238v1.pdf",
        "category": ""
    },
    {
        "title": "Six reasons why I recommend scikit-learn - O'Reilly Media",
        "link": "https://www.oreilly.com/ideas/six-reasons-why-i-recommend-scikit-learn",
        "category": ""
    },
    {
        "title": "numpy.pdf",
        "link": "https://sites.engineering.ucsb.edu/~shell/che210d/numpy.pdf",
        "category": "languages"
    },
    {
        "title": "Complete Guide to Topic Modeling - NLP-FOR-HACKERS",
        "link": "https://nlpforhackers.io/topic-modeling/",
        "category": "ml"
    },
    {
        "title": "CSE512: Data Visualization",
        "link": "https://courses.cs.washington.edu/courses/cse512/16sp/",
        "category": "ml"
    },
    {
        "title": "Things you can do with Python and POV-Ray - del( self )",
        "link": "http://zulko.github.io/blog/2014/11/13/things-you-can-do-with-python-and-pov-ray/",
        "category": ""
    },
    {
        "title": "Destroy All Software",
        "link": "https://www.destroyallsoftware.com/screencasts",
        "category": "misc"
    },
    {
        "title": "python - No matching distribution found for tkinter - Stack Overflow",
        "link": "https://stackoverflow.com/questions/41267709/no-matching-distribution-found-for-tkinter",
        "category": "languages"
    },
    {
        "title": "postgresql - input file appears to be a text format dump. Please use psql - Stack Overflow",
        "link": "https://stackoverflow.com/questions/40632228/input-file-appears-to-be-a-text-format-dump-please-use-psql",
        "category": "dev"
    },
    {
        "title": "How to Delete Commit History in Github – TecAdmin",
        "link": "https://tecadmin.net/delete-commit-history-in-github/",
        "category": "dev"
    },
    {
        "title": "js background changer",
        "link": "https://codepen.io/Fotonmoton/pen/bpoZpM",
        "category": "web"
    },
    {
        "title": "A tmux Crash Course",
        "link": "https://robots.thoughtbot.com/a-tmux-crash-course",
        "category": "unixcli"
    },
    {
        "title": "TimeComplexity - Python Wiki",
        "link": "https://wiki.python.org/moin/TimeComplexity",
        "category": "algorithms"
    },
    {
        "title": "How To Use Arch Linux Package Management | DigitalOcean",
        "link": "https://www.digitalocean.com/community/tutorials/how-to-use-arch-linux-package-management",
        "category": "os"
    },
    {
        "title": "Vimwiki by vimwiki",
        "link": "https://vimwiki.github.io/",
        "category": "unixcli"
    },
    {
        "title": "List of applications/Documents - ArchWiki",
        "link": "https://wiki.archlinux.org/index.php/List_of_applications/Documents#Presentations",
        "category": "os"
    },
    {
        "title": "Pacman Tips - Manjaro Linux",
        "link": "https://wiki.manjaro.org/index.php?title=Pacman_Tips",
        "category": ""
    },
    {
        "title": "Hacker Tools · hacker tools",
        "link": "https://hacker-tools.github.io/",
        "category": "security"
    },
    {
        "title": "Vim Videos - Flarfnoogins",
        "link": "http://derekwyatt.org/vim/tutorials/index.html",
        "category": "unixcli"
    },
    {
        "title": "Wallpaper Cave",
        "link": "https://wallpapercave.com/",
        "category": "web"
    },
    {
        "title": "Arch Linux: Much Faster Boot Time",
        "link": "https://leedev.org/arch-linux-much-faster-boot-time/",
        "category": "os"
    },
    {
        "title": "The really big list of really interesting Open Source projects.",
        "link": "https://medium.com/@likid_geimfari/the-list-of-interesting-open-source-projects-2daaa2153f7c",
        "category": "misc"
    },
    {
        "title": "Learning Kubernetes Locally via Minikube on Manjaro/Archlinux",
        "link": "https://www.howtoforge.com/learning-kubernetes-locally-via-minikube-on-linux-manjaro-archlinux/",
        "category": "dev"
    },
    {
        "title": "How to Build and push Docker Image to the Docker Hub Repository – The Geek Diary",
        "link": "https://www.thegeekdiary.com/how-to-build-and-push-docker-image-to-the-docker-hub-repository/",
        "category": "dev"
    },
    {
        "title": "SpaceVim - Like spacemacs, but for vim - Golang 中国",
        "link": "https://golangtc.com/t/5873c7b0b09ecc2e1800010a",
        "category": "unixcli"
    },
    {
        "title": "Generating Beautiful PDF from Markdown with Pandoc and Sublime Text - jdhao's blog",
        "link": "https://jdhao.github.io/2019/05/30/markdown2pdf_pandoc/",
        "category": "documentation"
    },
    {
        "title": "LaTeX - Wikibooks, open books for an open world",
        "link": "https://en.wikibooks.org/wiki/LaTeX",
        "category": "documentation"
    },
    {
        "title": "How To Remove Docker Images, Containers, and Volumes | DigitalOcean",
        "link": "https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes",
        "category": "dev"
    },
    {
        "title": "Official Kali Linux Docker Images | Kali Linux",
        "link": "https://www.kali.org/news/official-kali-linux-docker-images/",
        "category": "security"
    },
    {
        "title": "Kali Linux In a Docker Container - Airman - Medium",
        "link": "https://medium.com/@airman604/kali-linux-in-a-docker-container-5a06311624eb",
        "category": "security"
    },
    {
        "title": "Installing and Using Ranger, a Terminal File Manager, on a Ubuntu VPS | DigitalOcean",
        "link": "https://www.digitalocean.com/community/tutorials/installing-and-using-ranger-a-terminal-file-manager-on-a-ubuntu-vps",
        "category": "unixcli"
    },
    {
        "title": "Regex Tutorial—From Regex 101 to Advanced Regex",
        "link": "https://www.rexegg.com/",
        "category": "unixcli"
    },
    {
        "title": "CSE512-Text.key - CSE512-Text.pdf",
        "link": "https://courses.cs.washington.edu/courses/cse512/16sp/lectures/CSE512-Text.pdf",
        "category": ""
    },
    {
        "title": "Physically Based Rendering: From Theory to Implementation",
        "link": "https://pbrt.org/",
        "category": ""
    },
    {
        "title": "The Hitchhiker’s Guide to Python! — The Hitchhiker's Guide to Python",
        "link": "https://docs.python-guide.org/",
        "category": "languages"
    },
    {
        "title": "Report - Google Docs",
        "link": "https://docs.google.com/document/d/1jDYHFsakg0J-5G_RPppXOT0UX3tjf8D7ZBiPgmDGbQo/edit#",
        "category": "personal"
    },
    {
        "title": "Portfolio One Page Websites - Page 261 of 276",
        "link": "https://onepagelove.com/gallery/portfolio/page/261",
        "category": "web"
    },
    {
        "title": "How to set up the perfect modern dev environment on Windows - Charged",
        "link": "https://char.gd/blog/2017/how-to-set-up-the-perfect-modern-dev-environment-on-windows",
        "category": "dev"
    },
    {
        "title": "Pipenv & Virtual Environments — The Hitchhiker's Guide to Python",
        "link": "http://docs.python-guide.org/en/latest/dev/virtualenvs/",
        "category": "languages"
    }
];

// for nodejs
if ((typeof process !== 'undefined') && (process.release.name === 'node'))
  module.exports = bookmarks;
