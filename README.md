<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Course home page for Web and Computer Programming certificate">
    <meta name="author" content="Your Name">
    <title>WDD 231 - Course Home Page</title>
    <link rel="stylesheet" href="./css/styles.css"> <!-- 경로를 명확히 설정 -->
    <script src="./js/script.js" defer></script>
</head>
<body>
    <header>
        <h1>Course Home Page</h1>
        <nav>
            <ul>
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="chamber.html">Chamber</a></li>
                <li><a href="https://github.com/yourgithubusername" target="_blank">GitHub Profile</a></li>
                <li><a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section>
            <h2>Certificate Overview</h2>
            <p>This section describes the Web and Computer Programming certificate.</p>
        </section>

        <section id="course-list">
            <h2>Course List</h2>
            <button onclick="filterCourses('all')">All Courses</button>
            <button onclick="filterCourses('WDD')">WDD Courses</button>
            <button onclick="filterCourses('CSE')">CSE Courses</button>
            <div id="courses-container"></div>
        </section>

        <section>
            <h2>Total Credits</h2>
            <p id="total-credits"></p>
        </section>
    </main>

    <footer>
        <p>&copy; <span id="currentyear"></span> Your Name, Your State/Country</p>
        <p id="lastModified"></p>
    </footer>
</body>
</html>
