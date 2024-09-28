<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Chamber of Commerce Directory Page">
    <meta name="author" content="Your Name">
    <meta property="og:title" content="Chamber of Commerce Directory">
    <meta property="og:type" content="website">
    <meta property="og:image" content="images/chamber-logo.png">
    <meta property="og:url" content="https://yourdomain.com/chamber/directory.html">
    <title>Chamber Directory</title>
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/styles.css">
    <script src="js/script.js" defer></script>
</head>

<body>
    <header>
        <h1>Chamber of Commerce Directory</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="directory.html" class="active">Directory</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="view-toggle">
            <button id="grid-view">Grid View</button>
            <button id="list-view">List View</button>
        </section>
        <section id="directory">
            <div id="members-container"></div>
        </section>
    </main>

    <footer>
        <p>&copy; <span id="currentyear"></span> Your Name, Your City/State</p>
        <p id="lastModified"></p>
    </footer>
</body>

</html>
