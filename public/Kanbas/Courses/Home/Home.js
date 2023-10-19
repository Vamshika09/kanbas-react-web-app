function Home() {
    return(`<html>
    <head>
      <link rel="stylesheet" href="../../../style.css" />
      <link rel="stylesheet" href="/Kanbas/KanbasNavigation/index.css" />
      <link rel="stylesheet" href="/Kanbas/Courses/CourseNavigation/index.css" />
      <link rel="stylesheet" href="/lib/font-awesome/css/font-awesome.css" />
      <link rel="stylesheet" href="/lib/bootstrap/bootstrap.min.css" />
      <link rel="stylesheet" href="../Modules/index.css" />
      <link rel="stylesheet" href="../CourseStatusNavigation/index.css" />
    </head>
    <body class="wd-flex-row-container">
      <div class="wd-flex-grow-1 d-none d-md-block wd-kanbas-navigation">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ahCyAshjeeV4vRiyexgcIkbwtkQX7YgaYQ&usqp=CAU"
        />
        <ul>
          <li>
            <a href="/Kanbas/Account/Profile/screen.html">
              <i class="fa fa-regular fa-user"></i>
              Account
            </a>
          </li>
          <li>
            <a href="/Kanbas/Dashboard/screen.html">
              <i class="fa fa-tachometer" aria-hidden="true"></i>
              Dashboard
            </a>
          </li>
          <li  class="wd-active">
            <a href="/Kanbas/Courses/Home/screen.html">
              <i class="fa fa-solid fa-book"></i>
              Courses
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-calendar-o" aria-hidden="true"></i>
              Calendar
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-inbox" aria-hidden="true"></i>
              Inbox
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-clock-o" aria-hidden="true"></i>
              History
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-video-camera" aria-hidden="true"></i>
              Studio
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-solid fa-arrow-right" aria-hidden="true"></i>
              Commons</a
            >
          </li>
          <li>
            <a href="#" class=".wd-kanbas-navigation-small-icons">
              <i class="fa fa-question-circle-o" aria-hidden="true"></i>
              Help
            </a>
          </li>
        </ul>
      </div>
      <div class="wd-flex-grow-7 wd-flex-column-container">
      class="text-decoration-none"
        <div class="wd-breadcrumb d-none d-sm-block d-md-none bg-dark">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
            <div class="breadcrumb d-flex justify-content-between align-items-center">
              <li>
                <a href="#"
                  ><i class="fa fa-bars text-white" aria-hidden="true"></i
                ></a>
              </li>
              <div>
                <li class="breadcrumb-item text-white text-center">
                  <a href="#">CS4450.12631.202410</a>
                </li>
                <li
                  class="breadcrumb-item text-white text-center"
                  aria-current="page"
                >
                  Home
                </li>
              </div>
              <li>
                <a href="/Kanbas/KanbasNavigation/smallScreen.html"><i class="fa fa-chevron-down text-white" aria-hidden="true"></i>
                </a>
              </li>
            </div>
          </nav>
        </div>
        <div class="wd-flex-row-container">
          <div class="wd-flex-grow-1 d-none d-md-block">
            <ul class="wd-course-navigation">
              <li class="wd-active">
                <a href="/Kanbas/Courses/Home/screen.html">Home</a>
              </li>
              <li><a href="#">Modules</a></li>
              <li><a href="#">Piazza</a></li>
              <li><a href="#">Zoom Meetings</a></li>
              <li>
                <a
                  href="/Kanbas/Courses/Assignments/AssignmentsScreen/screen.html"
                  >Assignments</a
                >
              </li>
              <li><a href="#">Quizzes</a></li>
              <li><a href="/Kanbas/Courses/Grades/screen.html">Grades</a></li>
              <li><a href="#">People</a></li>
              <li><a href="#">Panopto Video</a></li>
              <li><a href="#">Discussions</a></li>
              <li><a href="#">Announcements</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Files</a></li>
              <li><a href="#">Rubrics</a></li>
              <li><a href="#">Outcomes</a></li>
              <li><a href="#">Collaborations</a></li>
              <li><a href="#">Syllabus</a></li>
              <li>
                <a href="/Kanbas/Courses/Settings/CourseDetails/screen.html"
                  >Settings</a
                >
              </li>
            </ul>
          </div>
          <div class="wd-flex-grow-6 wd-module-list">
            <div class="wd-buttons-section justify-content-end">
              <button type="button" class="btn btn-secondary btn-sm">
                Collapse All
              </button>
              <button type="button" class="btn btn-secondary btn-sm">
                View Progress
              </button>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle btn-sm"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Publish All
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Publish All</a></li>
                  <li>
                    <a class="dropdown-item" href="#"
                      >Publish all items and modules</a
                    >
                  </li>
                  <li><a class="dropdown-item" href="#">Unpublish</a></li>
                </ul>
              </div>
              <button type="button" class="btn btn-danger btn-sm">
                <i class="fa fa-plus" aria-hidden="true"></i>
                Module
              </button>
              <button type="button" class="btn btn-secondary btn-sm">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </button>
            </div>
            <hr />
            <ul class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action list-group-item-secondary d-flex justify-content-between"
                >Week 0 - INTRO
                <div>
                  <i
                    class="fa fa-check-circle text-success"
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action d-flex justify-content-between"
                >LEARNING OBJECTIVES
                <div>
                  <i
                    class="fa fa-check-circle text-success"
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action pl-5 d-flex justify-content-between"
                >Introduction to the course
                <div>
                  <i
                    class="fa fa-check-circle text-success"
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action pl-5 d-flex justify-content-between"
                >Learn what web dev is
                <div>
                  <i
                    class="fa fa-check-circle text-success"
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action pl-5 d-flex justify-content-between"
                >Creating a development environment
                <div>
                  <i
                    class="fa fa-check-circle text-success"
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action d-flex justify-content-between"
                >READING
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action wd-change-padding pl-5 d-flex justify-content-between"
                >Full Stack Developer - Chapter 1
                <div>
                  <i
                    class="fa fa-check-circle text-success"
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action wd-change-padding pl-5 d-flex justify-content-between"
                >Full Stack Developer - Chapter 2
                <div>
                  <i
                    class="fa fa-check-circle text-success"
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
              </a>
            </ul>
          </div>
          <div class="wd-flex-grow-1 d-none d-lg-block wd-course-status">
            <div>
              <h5>Course Status</h5>
              <button type="button" class="btn btn-secondary btn-sm" disabled>
                <i class="fa fa-ban" aria-hidden="true"></i>
                Unpublish
              </button>
              <button type="button" class="btn btn-success btn-sm" disabled>
                <i
                  class="fa fa-check-circle text-success-o"
                  aria-hidden="true"
                ></i>
                Publish
              </button>
            </div>
            <div class="wd-course-status-buttons">
              <ul class="wd-flex-column-container">
                <button type="button" class="btn btn-secondary">
                  <i class="fa fa-file-o" aria-hidden="true"></i>
                  Importing Existing Content
                </button>
                <button type="button" class="btn btn-secondary">
                  <i class="fa fa-file-o" aria-hidden="true"></i>
                  Importing from Commons
                </button>
                <button type="button" class="btn btn-secondary">
                  <i class="fa fa-home" aria-hidden="true"></i>
                  Choose Home Page
                </button>
                <button type="button" class="btn btn-secondary">
                  <i class="fa fa-ban" aria-hidden="true"></i>
                  View Course Steam
                </button>
                <button type="button" class="btn btn-secondary">
                  <i class="fa fa-bullhorn" aria-hidden="true"></i>
                  New Announcement
                </button>
                <button type="button" class="btn btn-secondary">
                  <i class="fa fa-signal" aria-hidden="true"></i>
                  New Analytics
                </button>
                <button type="button" class="btn btn-secondary">
                  <i class="fa fa-bell-o" aria-hidden="true"></i>
                  View Course Notifications
                </button>
              </ul>
            </div>
            <div>
              <h6><strong>To Do</strong></h6>
              <hr />
              <div class="p-3">
                <a href="#" class="text-danger"
                  ><strong>Grade A1 - ENV + HTML</strong></a
                >
                <p><small>100 points | Sept 18 at 15:59pm</small></p>
              </div>
            </div>
            <div>
              <div class="wd-flex-row-container justify-content-between">
                <h6><strong>Coming Up</strong></h6>
                <a href="#" class="text-danger">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i>
                  View Calendar
                </a>
              </div>
              <hr />
              <div>
                <div class="wd-flex-row-container p-3">
                  <i class="fa fa-calendar-o py-1" aria-hidden="true"></i>
                  <div class="px-3">
                    <a href="#" class="text-danger"><strong>Lecture</strong></a>
                    <p class="mb-0"><small>CS4550.3456.234535</small></p>
                    <p><small>Sept 18 at 15:59pm</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>`)
}

export default Home;