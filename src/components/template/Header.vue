<template>
    <div class="body-header sticky-md-top">
        <div class="container-fluid">
            <div class="d-flex justify-content-between">
                <!-- Header:: Brand icon -->
                <a class="navbar-brand d-flex align-items-center color-900" href="/Cypress">
                    <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect class="fill-secondary" x="1.5" y="4.5" width="27" height="27" rx="13.5" />
                        <rect class="fill-primary" x="13.5" y="1.5" width="33" height="33" rx="16.5" stroke="white"
                            stroke-width="3" />
                    </svg>
                    <span class="h4 mb-0 fw-bold ps-2">avio</span>
                </a>
                <!-- Header:: Menu and Mega menu link -->
                <div class="menu-link flex-fill">
                    <!-- Start:: dashboard link -->
                    <div class="dropdown menu-apps active">
                        <a href="#" class="btn btn-link dropdown-toggle after-none" data-bs-toggle="dropdown">
                            <svg class="mx-1" xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor"
                                viewBox="0 0 16 16">
                                <path class="fill-secondary"
                                    d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z">
                                </path>
                                <path class="fill-muted" fill-rule="evenodd"
                                    d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z">
                                </path>
                            </svg>
                            <span>Dashboard</span>
                        </a>

                    </div>


                </div>
                <!-- Header:: icon and user profile -->
                <ul class="navbar-right d-flex align-items-center mb-0 list-unstyled">
                    <!-- start: quick light dark -->
                    <li>
                        <a class="nav-link quick-light-dark" href="#">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-secondary"
                                    d="M16.589 11.8505C15.1096 12.3407 11.2811 11.5703 10.1035 10.3446C8.926 9.11893 8.62407 5.69285 9.52383 4.49635C10.4236 3.29985 13.926 2.68117 15.5021 3.16561C17.0782 3.65004 18.7992 5.9555 18.9804 7.40297C19.1615 8.85044 18.0685 11.3602 16.589 11.8505C15.1096 12.3407 11.2811 11.5703 10.1035 10.3446L16.589 11.8505Z" />
                                <path class="fill-muted"
                                    d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z">
                                </path>
                                <path class="fill-muted"
                                    d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z">
                                </path>
                            </svg>
                        </a>
                    </li>
                    <!-- start: main search -->
                    <li>
                        <a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#main_search">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-secondary"
                                    d="M19.8765 6.43047C18.7214 5.14266 5.68328 3.32801 4.2308 4.2529C2.77831 5.17778 8.55395 11.6168 11.1616 11.9798C13.7692 12.3427 21.0316 7.71828 19.8765 6.43047C18.7214 5.14266 5.68328 3.32801 4.2308 4.2529Z" />
                                <path class="fill-muted"
                                    d="M14.6775 12.93C15.8879 11.2784 16.43 9.23062 16.1954 7.19644C15.9608 5.16226 14.9668 3.29168 13.4122 1.95892C11.8577 0.626155 9.85721 -0.070492 7.81107 0.00834944C5.76493 0.0871909 3.824 0.935706 2.37661 2.38414C0.929213 3.83257 0.0820868 5.7741 0.00470953 7.8203C-0.0726677 9.86649 0.62541 11.8665 1.95928 13.4201C3.29316 14.9737 5.16445 15.9663 7.1988 16.1995C9.23314 16.4326 11.2805 15.8891 12.9313 14.6775H12.93C12.9675 14.7275 13.0075 14.775 13.0525 14.8213L17.865 19.6338C18.0994 19.8683 18.4174 20.0001 18.749 20.0003C19.0805 20.0004 19.3986 19.8688 19.6331 19.6344C19.8677 19.4 19.9995 19.082 19.9997 18.7504C19.9998 18.4189 19.8682 18.1008 19.6338 17.8663L14.8213 13.0538C14.7766 13.0085 14.7285 12.9667 14.6775 12.9288V12.93ZM15 8.125C15 9.02784 14.8222 9.92184 14.4767 10.756C14.1312 11.5901 13.6248 12.348 12.9864 12.9864C12.348 13.6248 11.5901 14.1312 10.756 14.4767C9.92186 14.8222 9.02786 15 8.12502 15C7.22219 15 6.32819 14.8222 5.49408 14.4767C4.65996 14.1312 3.90207 13.6248 3.26366 12.9864C2.62526 12.348 2.11885 11.5901 1.77335 10.756C1.42785 9.92184 1.25002 9.02784 1.25002 8.125C1.25002 6.30164 1.97435 4.55296 3.26366 3.26364C4.55298 1.97433 6.30166 1.25 8.12502 1.25C9.94839 1.25 11.6971 1.97433 12.9864 3.26364C14.2757 4.55296 15 6.30164 15 8.125V8.125Z" />
                            </svg>
                        </a>
                    </li>

                    <!-- start: User dropdown-menu -->
                    <li>
                        <div class="dropdown morphing scale-left user-profile mx-lg-3 mx-2">
                            <a class="nav-link dropdown-toggle rounded-circle after-none p-0" href="#" role="button"
                                data-bs-toggle="dropdown">
                                <img class="avatar lg img-thumbnail rounded-circle shadow"
                                    src="@/assets/img/profile_av.png" alt="">
                            </a>
                            <div class="dropdown-menu border-0 rounded-4 shadow p-0">
                                <div class="card w240 overflow-hidden">
                                    <div class="card-body">
                                        <h6 class="card-title mb-0">Allie Grater</h6>
                                        <p class="text-muted">alliegrater@avio.com</p>
                                        <a href="auth-signin.html"
                                            class="btn bg-secondary text-light text-uppercase w-100">Sign out</a>
                                    </div>
                                    <div class="list-group m-2">
                                        <a class="list-group-item list-group-item-action border-0"
                                            href="page-profile.html"><i class="w30 fa fa-user"></i>Profile & account</a>
                                        <a class="list-group-item list-group-item-action border-0"
                                            href="account-settings.html"><i class="w30 fa fa-gear"></i>Settings</a>
                                        <a class="list-group-item list-group-item-action border-0"
                                            href="page-support-ticket.html"><i class="w30 fa fa-tag"></i>Support
                                            Ticket</a>
                                        <a class="list-group-item list-group-item-action border-0"
                                            href="page-teamsboard.html"><i class="w30 fa fa-users"></i>Manage team</a>
                                        <a class="list-group-item list-group-item-action border-0" href="#"><i
                                                class="w30 fa fa-calendar"></i>My Events</a>
                                        <a class="list-group-item list-group-item-action border-0"
                                            href="account-billing.html"><i class="w30 fa fa-credit-card"></i>Billing</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>
