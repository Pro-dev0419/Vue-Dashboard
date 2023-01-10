
<script setup>
import PageHeader from "../components/template/Header.vue";
import PageFooter from "../components/template/Footer.vue";
</script>
<script>
export default {
    created() {
        document.title = "Search";
    },
    data: () => ({

    }),
    mounted() {
        let recaptchaScript2 = document.createElement('script')
        recaptchaScript2.setAttribute('src', '/src/assets/js/search-fancybox.js')
        document.head.appendChild(recaptchaScript2)
    },
    methods: {

    }
}
</script>
<template>
    <div class="avio">
        <PageHeader />
        <div class="page-search collapse" id="main_search">
            <div class="container-fluid">
                <div class="py-4">
                    <div class="main-search px-3 flex-fill">
                        <input class="form-control" type="text" placeholder="Enter your search key word">
                        <div class="card shadow rounded-4 search-result slidedown">
                            <div class="card-body">
                                <small class="text-uppercase text-muted">Recent searches</small>
                                <div class="d-flex flex-wrap align-items-start mt-2 mb-4">
                                    <a class="small rounded py-1 px-2 m-1 fw-normal bg-primary text-white" href="#">HRMS
                                        Admin</a>
                                    <a class="small rounded py-1 px-2 m-1 fw-normal bg-secondary text-white"
                                        href="#">Hospital Admin</a>
                                    <a class="small rounded py-1 px-2 m-1 fw-normal bg-info text-white"
                                        href="./app-project.html">Project</a>
                                    <a class="small rounded py-1 px-2 m-1 fw-normal bg-dark text-white"
                                        href="./app-social.html">Social App</a>
                                    <a class="small rounded py-1 px-2 m-1 fw-normal bg-danger text-white"
                                        href="#">University Admin</a>
                                </div>
                                <small class="text-uppercase text-muted">Suggestions</small>
                                <div class="card list-group list-group-flush list-group-custom mt-2">
                                    <a class="list-group-item list-group-item-action text-truncate"
                                        href=".//docs/doc-helperclass.html">
                                        <div class="fw-bold">Helper Class</div>
                                        <small class="text-muted">Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.</small>
                                    </a>
                                    <a class="list-group-item list-group-item-action text-truncate"
                                        href=".//docs/element-daterange.html">
                                        <div class="fw-bold">Date Range Picker</div>
                                        <small class="text-muted">There are many variations of passages of Lorem Ipsum
                                            available</small>
                                    </a>
                                    <a class="list-group-item list-group-item-action text-truncate"
                                        href=".//docs/element-imageinput.html">
                                        <div class="fw-bold">Image Input</div>
                                        <small class="text-muted">It is a long established fact that a reader will be
                                            distracted</small>
                                    </a>
                                    <a class="list-group-item list-group-item-action text-truncate"
                                        href=".//docs/plugin-table.html">
                                        <div class="fw-bold">DataTables for jQuery</div>
                                        <small class="text-muted">Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.</small>
                                    </a>
                                    <a class="list-group-item list-group-item-action text-truncate"
                                        href=".//docs/doc-setup.html">
                                        <div class="fw-bold">Development Setup</div>
                                        <small class="text-muted">Contrary to popular belief, Lorem Ipsum is not simply
                                            random text.</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Start:: breadcrumb, btn action, and quick tab bar -->
        <div class="page-header pattern-bg">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mb-2">
                        <ol class="breadcrumb mb-2">
                            <li class="breadcrumb-item"><a href="../index.html">Avio</a></li>
                            <li class="breadcrumb-item active" aria-current="page">search page</li>
                        </ol>
                        <div class="d-flex justify-content-between align-items-center">
                            <h1 class="h2 mb-md-0 text-white fw-light">search page</h1>
                            <div class="page-action">
                                <!-- btn:: create new project -->
                                <button class="btn d-none d-sm-inline-flex rounded-pill" data-bs-toggle="modal"
                                    data-bs-target="#create_project" type="button">
                                    <span class="me-1 d-none d-lg-inline-block">Create</span>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0C7.23206 0 7.45462 0.0921874 7.61872 0.256282C7.78281 0.420376 7.875 0.642936 7.875 0.875V6.125H13.125C13.3571 6.125 13.5796 6.21719 13.7437 6.38128C13.9078 6.54538 14 6.76794 14 7C14 7.23206 13.9078 7.45462 13.7437 7.61872C13.5796 7.78281 13.3571 7.875 13.125 7.875H7.875V13.125C7.875 13.3571 7.78281 13.5796 7.61872 13.7437C7.45462 13.9078 7.23206 14 7 14C6.76794 14 6.54538 13.9078 6.38128 13.7437C6.21719 13.5796 6.125 13.3571 6.125 13.125V7.875H0.875C0.642936 7.875 0.420376 7.78281 0.256282 7.61872C0.0921874 7.45462 0 7.23206 0 7C0 6.76794 0.0921874 6.54538 0.256282 6.38128C0.420376 6.21719 0.642936 6.125 0.875 6.125H6.125V0.875C6.125 0.642936 6.21719 0.420376 6.38128 0.256282C6.54538 0.0921874 6.76794 0 7 0V0Z"
                                            fill="white" />
                                    </svg>
                                </button>
                                <!-- btn:: Filter -->
                                <div class="btn-group">
                                    <button type="button" class="btn dropdown-toggle after-none rounded-pill"
                                        data-bs-toggle="dropdown">
                                        <span class="me-1 d-none d-lg-inline-block">Filter</span>
                                        <svg width="13" height="15" viewBox="0 0 13 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0 1.00018C0 0.867575 0.0526784 0.740398 0.146447 0.64663C0.240215 0.552862 0.367392 0.500183 0.5 0.500183H12.5C12.6326 0.500183 12.7598 0.552862 12.8536 0.64663C12.9473 0.740398 13 0.867575 13 1.00018V3.00018C13 3.12349 12.9544 3.24244 12.872 3.33418L8.5 8.19218V13.0002C8.49992 13.1051 8.46685 13.2073 8.40547 13.2924C8.3441 13.3774 8.25752 13.441 8.158 13.4742L5.158 14.4742C5.08287 14.4992 5.00288 14.506 4.9246 14.4941C4.84632 14.4821 4.772 14.4518 4.70775 14.4055C4.6435 14.3592 4.59116 14.2983 4.55504 14.2279C4.51893 14.1574 4.50006 14.0794 4.5 14.0002V8.19218L0.128 3.33418C0.0456082 3.24244 2.21504e-05 3.12349 0 3.00018V1.00018ZM1 1.50018V2.80818L5.372 7.66618C5.45439 7.75792 5.49998 7.87688 5.5 8.00018V13.3062L7.5 12.6402V8.00018C7.50002 7.87688 7.54561 7.75792 7.628 7.66618L12 2.80818V1.50018H1Z"
                                                fill="white" />
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu border-0 shadow">
                                        <li><a class="dropdown-item" href="#">Today</a></li>
                                        <li><a class="dropdown-item" href="#">Yesterday</a></li>
                                        <li><a class="dropdown-item" href="#">Last 7 Days</a></li>
                                        <li><a class="dropdown-item" href="#">Last 30 Days</a></li>
                                        <li><a class="dropdown-item" href="#">This Month</a></li>
                                        <li><a class="dropdown-item" href="#">Last Month</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Custom Range</a></li>
                                    </ul>
                                </div>
                                <!-- btn:: more action -->
                                <div class="btn-group">
                                    <button type="button" class="btn dropdown-toggle after-none rounded-pill"
                                        data-bs-toggle="dropdown">
                                        <svg viewBox="0 0 16 16" width="16px" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2 10H5C5.26522 10 5.51957 10.1054 5.70711 10.2929C5.89464 10.4804 6 10.7348 6 11V14C6 14.2652 5.89464 14.5196 5.70711 14.7071C5.51957 14.8946 5.26522 15 5 15H2C1.73478 15 1.48043 14.8946 1.29289 14.7071C1.10536 14.5196 1 14.2652 1 14V11C1 10.7348 1.10536 10.4804 1.29289 10.2929C1.48043 10.1054 1.73478 10 2 10ZM11 1H14C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V5C15 5.26522 14.8946 5.51957 14.7071 5.70711C14.5196 5.89464 14.2652 6 14 6H11C10.7348 6 10.4804 5.89464 10.2929 5.70711C10.1054 5.51957 10 5.26522 10 5V2C10 1.73478 10.1054 1.48043 10.2929 1.29289C10.4804 1.10536 10.7348 1 11 1ZM11 10C10.7348 10 10.4804 10.1054 10.2929 10.2929C10.1054 10.4804 10 10.7348 10 11V14C10 14.2652 10.1054 14.5196 10.2929 14.7071C10.4804 14.8946 10.7348 15 11 15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V11C15 10.7348 14.8946 10.4804 14.7071 10.2929C14.5196 10.1054 14.2652 10 14 10H11ZM11 0C10.4696 0 9.96086 0.210714 9.58579 0.585786C9.21071 0.960859 9 1.46957 9 2V5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H14C14.5304 7 15.0391 6.78929 15.4142 6.41421C15.7893 6.03914 16 5.53043 16 5V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0L11 0ZM2 9C1.46957 9 0.960859 9.21071 0.585786 9.58579C0.210714 9.96086 0 10.4696 0 11L0 14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H5C5.53043 16 6.03914 15.7893 6.41421 15.4142C6.78929 15.0391 7 14.5304 7 14V11C7 10.4696 6.78929 9.96086 6.41421 9.58579C6.03914 9.21071 5.53043 9 5 9H2ZM9 11C9 10.4696 9.21071 9.96086 9.58579 9.58579C9.96086 9.21071 10.4696 9 11 9H14C14.5304 9 15.0391 9.21071 15.4142 9.58579C15.7893 9.96086 16 10.4696 16 11V14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H11C10.4696 16 9.96086 15.7893 9.58579 15.4142C9.21071 15.0391 9 14.5304 9 14V11Z"
                                                fill="white"></path>
                                            <path class="fill-secondary"
                                                d="M0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V5C0 5.53043 0.210714 6.03914 0.585786 6.41421C0.960859 6.78929 1.46957 7 2 7H5C5.53043 7 6.03914 6.78929 6.41421 6.41421C6.78929 6.03914 7 5.53043 7 5V2C7 1.46957 6.78929 0.960859 6.41421 0.585786C6.03914 0.210714 5.53043 0 5 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786Z">
                                            </path>
                                        </svg>
                                    </button>
                                    <ul class="dropdown-menu border-0 shadow">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                                <!-- btn:: recent chat -->
                                <button class="btn d-none d-sm-inline-flex rounded-pill" data-bs-toggle="modal"
                                    data-bs-target="#recent_chat" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="currentColor"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z">
                                        </path>
                                        <path
                                            d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z">
                                        </path>
                                    </svg>
                                </button>
                                <!-- btn:: download -->
                                <button class="btn d-none d-sm-inline-flex bg-secondary rounded-pill" type="button">
                                    <span class="me-1 d-none d-lg-inline-block">Download</span>
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M7.64602 9.354C7.69247 9.40056 7.74764 9.43751 7.80839 9.46271C7.86913 9.48792 7.93425 9.50089 8.00002 9.50089C8.06579 9.50089 8.13091 9.48792 8.19165 9.46271C8.2524 9.43751 8.30758 9.40056 8.35402 9.354L10.354 7.354C10.4005 7.30751 10.4374 7.25232 10.4625 7.19158C10.4877 7.13084 10.5007 7.06574 10.5007 7C10.5007 6.93426 10.4877 6.86916 10.4625 6.80842C10.4374 6.74768 10.4005 6.69249 10.354 6.646C10.3075 6.59951 10.2523 6.56264 10.1916 6.53748C10.1309 6.51232 10.0658 6.49937 10 6.49937C9.93428 6.49937 9.86918 6.51232 9.80844 6.53748C9.7477 6.56264 9.69251 6.59951 9.64602 6.646L8.50002 7.793V4C8.50002 3.86739 8.44734 3.74021 8.35358 3.64645C8.25981 3.55268 8.13263 3.5 8.00002 3.5C7.86741 3.5 7.74024 3.55268 7.64647 3.64645C7.5527 3.74021 7.50002 3.86739 7.50002 4V7.793L6.35402 6.646C6.26013 6.55211 6.1328 6.49937 6.00002 6.49937C5.86725 6.49937 5.73991 6.55211 5.64602 6.646C5.55213 6.73989 5.49939 6.86722 5.49939 7C5.49939 7.13278 5.55213 7.26011 5.64602 7.354L7.64602 9.354Z"
                                            fill="white" />
                                        <path
                                            d="M4.406 1.842C5.40548 0.980135 6.68024 0.504139 8 0.5C10.69 0.5 12.923 2.5 13.166 5.079C14.758 5.304 16 6.637 16 8.273C16 10.069 14.502 11.5 12.687 11.5H3.781C1.708 11.5 0 9.866 0 7.818C0 6.055 1.266 4.595 2.942 4.225C3.085 3.362 3.64 2.502 4.406 1.842ZM5.059 2.599C4.302 3.252 3.906 4.039 3.906 4.655V5.103L3.461 5.152C2.064 5.305 1 6.452 1 7.818C1 9.285 2.23 10.5 3.781 10.5H12.687C13.98 10.5 15 9.488 15 8.273C15 7.057 13.98 6.045 12.687 6.045H12.187V5.545C12.188 3.325 10.328 1.5 8 1.5C6.91988 1.50431 5.87684 1.89443 5.059 2.6V2.599Z"
                                            fill="white" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Start:: main page body area -->
        <div class="page-body">
            <div class="container-fluid">
                <div class="row g-3">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <form class="input-group">
                                    <input type="text" class="form-control form-control-lg"
                                        placeholder="Search here...">
                                    <button class="btn btn-outline-secondary" type="button">Search</button>
                                </form>
                                <div class="form-text">About 6,000 results (0.60 seconds)</div>
                            </div>
                            <ul class="nav nav-tabs tab-card" role="tablist">
                                <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#Search-all"
                                        role="tab"><i class="fa fa-search me-2"></i>All</a></li>
                                <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#Search-image"
                                        role="tab"><i class="fa fa-image me-2"></i>Image</a></li>
                                <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#Search-video"
                                        role="tab"><i class="fa fa-youtube-square me-2"></i>Video</a></li>
                                <li class="nav-item dropdown morphing">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                                        aria-expanded="false">More</a>
                                    <ul class="dropdown-menu shadow border-0 p-2">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="Search-all" role="tabpanel">
                                        <div class="row g-3">
                                            <div class="col-xl-8 col-md-12">
                                                <p class="mb-0">https://alui.thememakker.com/index.html</p>
                                                <a class="h5 text-primary fw-light fw-light"
                                                    href="https://1.envato.market/5bYy9L">AVIO - Bootstrap 5 Responsive
                                                    Admin Dashboard Theme</a>
                                                <p class="mt-2 text-muted">Boost your project with powerful AVIO admin
                                                    dashboard template that is tailored to fit every company's needs.
                                                </p>
                                                <ul
                                                    class="list-unstyled d-flex flex-wrap flex-row text-muted border-bottom pb-3">
                                                    <li class="me-lg-4 me-2">
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i> 5 : stars
                                                    </li>
                                                    <li class="me-lg-4 me-2">25,292 votes</li>
                                                    <li class="me-lg-4 me-2">React/Vue/Angular</li>
                                                </ul>
                                            </div>
                                            <div class="col-xl-8 col-md-12">
                                                <p class="mb-0">https://avio-edu.info/</p>
                                                <a class="h5 text-primary fw-light"
                                                    href="https://themeforest.net/item/lucid-net-core-mvc-responsive-admin-template/33516188">Lucid
                                                    ASP .NET Core MVC - Responsive Admin Template</a>
                                                <p class="mt-2 text-muted">AVIO introduces a IELTS Coaching, TOEFL
                                                    Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.</p>
                                                <ul
                                                    class="list-unstyled d-flex flex-wrap flex-row text-muted border-bottom pb-3">
                                                    <li class="me-lg-4 me-2">
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i> 4.9 : stars
                                                    </li>
                                                    <li class="me-lg-4 me-2">25,292 votes</li>
                                                    <li class="me-lg-4 me-2">Free</li>
                                                    <li class="me-lg-4 me-2">Business/Productivity</li>
                                                </ul>
                                            </div>
                                            <div class="col-xl-8 col-md-12">
                                                <p class="mb-0">https://themeforest.net/user/wrraptheme/portfolio</p>
                                                <a class="h5 text-primary fw-light"
                                                    href="https://themeforest.net/item/lucid-angular-7-admin-template/23294743">Lucid
                                                    - Angular Admin Template</a>
                                                <p class="mt-2 text-muted">AVIO introduces a IELTS Coaching, TOEFL
                                                    Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.</p>
                                                <ul
                                                    class="list-unstyled d-flex flex-wrap flex-row text-muted border-bottom pb-3">
                                                    <li class="me-lg-4 me-2">
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i> 4.9 : stars
                                                    </li>
                                                    <li class="me-lg-4 me-2">25,292 votes</li>
                                                    <li class="me-lg-4 me-2">Free</li>
                                                    <li class="me-lg-4 me-2">Business/Productivity</li>
                                                </ul>
                                            </div>
                                            <div class="col-xl-8 col-md-12">
                                                <p class="mb-0">https://themeforest.net/user/wrraptheme/portfolio</p>
                                                <a class="h5 text-primary fw-light"
                                                    href="https://themeforest.net/item/lucid-hr-and-project-management-admin-template/22308861">Lucid
                                                    - HR and Project Management Admin Dashboard Template Bootstrap 5 &
                                                    4</a>
                                                <p class="mt-2 text-muted">AVIO introduces a IELTS Coaching, TOEFL
                                                    Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat.</p>
                                                <ul
                                                    class="list-unstyled d-flex flex-wrap flex-row text-muted border-bottom pb-3">
                                                    <li class="me-lg-4 me-2">
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i>
                                                        <i class="fa fa-star text-warning"></i> 4.9 : stars
                                                    </li>
                                                    <li class="me-lg-4 me-2">25,292 votes</li>
                                                    <li class="me-lg-4 me-2">Free</li>
                                                    <li class="me-lg-4 me-2">Business/Productivity</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="Search-image" role="tabpanel">
                                        <div
                                            class="row row-cols-xxl-4 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-1 g-3 row-deck">
                                            <div class="col">
                                                <div class="card">
                                                    <a class="fancybox" rel="ligthbox"
                                                        href="@/assets/img/gallery/1.jpg">
                                                        <img class="card-img-top" alt=""
                                                            src="@/assets/img/gallery/1.jpg" />
                                                    </a>
                                                    <div class="card-body p-3">
                                                        <h6 class="card-title">Images card title</h6>
                                                        <p class="small text-muted mb-0">Some quick example text to
                                                            build on the card title of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card">
                                                    <a class="fancybox" rel="ligthbox"
                                                        href="@/assets/img/gallery/2.jpg">
                                                        <img class="card-img-top" alt=""
                                                            src="@/assets/img/gallery/2.jpg" />
                                                    </a>
                                                    <div class="card-body p-3">
                                                        <h6 class="card-title">Images card title</h6>
                                                        <p class="small text-muted mb-0">Some quick example text to
                                                            build on the card title of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card">
                                                    <a class="fancybox" rel="ligthbox"
                                                        href="@/assets/img/gallery/3.jpg">
                                                        <img class="card-img-top" alt=""
                                                            src="@/assets/img/gallery/3.jpg" />
                                                    </a>
                                                    <div class="card-body p-3">
                                                        <h6 class="card-title">Images card title</h6>
                                                        <p class="small text-muted mb-0">Some quick example text to
                                                            build on the card title of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card">
                                                    <a class="fancybox" rel="ligthbox"
                                                        href="@/assets/img/gallery/4.jpg">
                                                        <img class="card-img-top" alt=""
                                                            src="@/assets/img/gallery/4.jpg" />
                                                    </a>
                                                    <div class="card-body p-3">
                                                        <h6 class="card-title">Images card title</h6>
                                                        <p class="small text-muted mb-0">Some quick example text to
                                                            build on the card title of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card">
                                                    <a class="fancybox" rel="ligthbox"
                                                        href="@/assets/img/gallery/5.jpg">
                                                        <img class="card-img-top" alt=""
                                                            src="@/assets/img/gallery/5.jpg" />
                                                    </a>
                                                    <div class="card-body p-3">
                                                        <h6 class="card-title">Images card title</h6>
                                                        <p class="small text-muted mb-0">Some quick example text to
                                                            build on the card title of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card">
                                                    <a class="fancybox" rel="ligthbox"
                                                        href="@/assets/img/gallery/6.jpg">
                                                        <img class="card-img-top" alt=""
                                                            src="@/assets/img/gallery/6.jpg" />
                                                    </a>
                                                    <div class="card-body p-3">
                                                        <h6 class="card-title">Images card title</h6>
                                                        <p class="small text-muted mb-0">Some quick example text to
                                                            build on the card title of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card">
                                                    <a class="fancybox" rel="ligthbox"
                                                        href="@/assets/img/gallery/7.jpg">
                                                        <img class="card-img-top" alt=""
                                                            src="@/assets/img/gallery/7.jpg" />
                                                    </a>
                                                    <div class="card-body p-3">
                                                        <h6 class="card-title">Images card title</h6>
                                                        <p class="small text-muted mb-0">Some quick example text to
                                                            build on the card title of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card">
                                                    <a class="fancybox" rel="ligthbox"
                                                        href="@/assets/img/gallery/8.jpg">
                                                        <img class="card-img-top" alt=""
                                                            src="@/assets/img/gallery/8.jpg" />
                                                    </a>
                                                    <div class="card-body p-3">
                                                        <h6 class="card-title">Images card title</h6>
                                                        <p class="small text-muted mb-0">Some quick example text to
                                                            build on the card title of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card">
                                                    <a class="fancybox" rel="ligthbox"
                                                        href="@/assets/img/gallery/9.jpg">
                                                        <img class="card-img-top" alt=""
                                                            src="@/assets/img/gallery/9.jpg" />
                                                    </a>
                                                    <div class="card-body p-3">
                                                        <h6 class="card-title">Images card title</h6>
                                                        <p class="small text-muted mb-0">Some quick example text to
                                                            build on the card title of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card">
                                                    <a class="fancybox" rel="ligthbox"
                                                        href="@/assets/img/gallery/10.jpg">
                                                        <img class="card-img-top" alt=""
                                                            src="@/assets/img/gallery/10.jpg" />
                                                    </a>
                                                    <div class="card-body p-3">
                                                        <h6 class="card-title">Images card title</h6>
                                                        <p class="small text-muted mb-0">Some quick example text to
                                                            build on the card title of the card's content.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="Search-video" role="tabpanel">
                                        <div class="row g-3">
                                            <div class="col-lg-4 col-md-6 col-sm-12">
                                                <div class="card overflow-hidden">
                                                    <div class="card-body position-relative hover-show p-0">
                                                        <a href="#"
                                                            class="hover-div position-absolute top-50 start-50 translate-middle"
                                                            data-bs-toggle="modal" data-bs-target="#video_preview">
                                                            <i class="fa fa-play-circle fa-3x"></i>
                                                        </a>
                                                        <img class="img-fluid" src="@/assets/img/gallery/5.jpg" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-12">
                                                <div class="card overflow-hidden">
                                                    <div class="card-body position-relative hover-show p-0">
                                                        <a href="#"
                                                            class="hover-div position-absolute top-50 start-50 translate-middle"
                                                            data-bs-toggle="modal" data-bs-target="#video_preview">
                                                            <i class="fa fa-play-circle fa-3x"></i>
                                                        </a>
                                                        <img class="img-fluid" src="@/assets/img/gallery/3.jpg" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-12">
                                                <div class="card overflow-hidden">
                                                    <div class="card-body position-relative hover-show p-0">
                                                        <a href="#"
                                                            class="hover-div position-absolute top-50 start-50 translate-middle"
                                                            data-bs-toggle="modal" data-bs-target="#video_preview">
                                                            <i class="fa fa-play-circle fa-3x"></i>
                                                        </a>
                                                        <img class="img-fluid" src="@/assets/img/gallery/1.jpg" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-6 col-sm-12">
                                                <div class="card overflow-hidden">
                                                    <div class="card-body position-relative hover-show p-0">
                                                        <a href="#"
                                                            class="hover-div position-absolute top-50 start-50 translate-middle"
                                                            data-bs-toggle="modal" data-bs-target="#video_preview">
                                                            <i class="fa fa-play-circle fa-3x"></i>
                                                        </a>
                                                        <img class="img-fluid" src="@/assets/img/gallery/13.jpg" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Modal: video preview -->
                                        <div class="modal fade" id="video_preview" tabindex="-1"
                                            aria-labelledby="video_preview" aria-hidden="true">
                                            <div class="modal-dialog modal-lg">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title">Video Preview</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <iframe class="rounded-4"
                                                            style="width: 100%; height: auto; min-height: 460px;"
                                                            src="https://www.youtube.com/embed/9_PV-f87xPw"
                                                            frameborder="0" allowfullscreen></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="Search-map" role="tabpanel">
                                        <div class="mb-0">Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book. It has survived not only five
                                            centuries, but also the leap into electronic typesetting, remaining
                                            essentially unchanged. It was popularised in the 1960s with the release of
                                            Letraset sheets containing Lorem Ipsum passages, and more recently</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul class="pagination mt-3">
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </div>
                </div> <!-- .row end -->
            </div>
        </div>
        <PageFooter />

        <div class="modal fade" id="create_project" tabindex="-1">
            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Setup new project</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body custom_scroll">
                        <ul class="nav nav-tabs tab-card px-0" role="tablist">
                            <li class="nav-item flex-fill text-center"><a class="nav-link active" href="#step1"
                                    data-bs-toggle="tab" data-bs-step="1">1. Project</a></li>
                            <li class="nav-item flex-fill text-center"><a class="nav-link" href="#step2"
                                    data-bs-toggle="tab" data-bs-step="2">2. Details</a></li>
                            <li class="nav-item flex-fill text-center"><a class="nav-link" href="#step3"
                                    data-bs-toggle="tab" data-bs-step="3">3. Team</a></li>
                            <li class="nav-item flex-fill text-center"><a class="nav-link" href="#step4"
                                    data-bs-toggle="tab" data-bs-step="4">4. File</a></li>
                            <li class="nav-item flex-fill text-center"><a class="nav-link" href="#step5"
                                    data-bs-toggle="tab" data-bs-step="5">5. Completed</a></li>
                        </ul>
                        <!-- start: project status progress bar -->
                        <div class="progress bg-transparent" style="height: 3px; margin-top: -2px;">
                            <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="1" aria-valuemin="1"
                                aria-valuemax="5" style="width: 20%;"></div>
                        </div>
                        <div class="tab-content mt-3">
                            <!-- start: project type -->
                            <div class="tab-pane fade show active" id="step1">
                                <div class="card bg-body mb-2">
                                    <div class="card-body">
                                        <h6 class="card-title mb-1">Project Type</h6>
                                        <p class="text-muted small">If you need more info, please check out <a
                                                href="#">FAQ Page</a></p>
                                        <!-- Custome redio input -->
                                        <div class="c_radio d-flex flex-md-wrap">
                                            <label class="m-1 w-100" for="Personal">
                                                <input type="radio" name="plan" id="Personal" checked />
                                                <span class="card">
                                                    <span class="card-body d-flex p-3">
                                                        <svg class="avatar" viewBox="0 0 16 16">
                                                            <path class="fill-muted"
                                                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                        </svg>
                                                        <span class="ms-3">
                                                            <span class="h6 d-flex mb-1">Personal Project</span>
                                                            <span class="text-muted">For smaller business, with simple
                                                                salaries and pay schedules.</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </label>
                                            <label class="m-1 w-100" for="Team">
                                                <input type="radio" name="plan" id="Team" />
                                                <span class="card">
                                                    <span class="card-body d-flex p-3">
                                                        <svg class="avatar" viewBox="0 0 16 16">
                                                            <path class="fill-muted"
                                                                d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                            <path class="fill-muted" fill-rule="evenodd"
                                                                d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                            <path class="fill-muted"
                                                                d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                                        </svg>
                                                        <span class="ms-3">
                                                            <span class="h6 d-flex mb-1">Team Project</span>
                                                            <span class="text-muted">For growing business who wants to
                                                                create a rewarding place to work.</span>
                                                        </span>
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button class="btn bg-secondary text-light next text-uppercase">Add project
                                        details</button>
                                </div>
                            </div>
                            <!-- start: project detail -->
                            <div class="tab-pane fade" id="step2">
                                <div class="card bg-body mb-2">
                                    <div class="card-body">
                                        <h6 class="card-title mb-1">Project Details</h6>
                                        <p class="text-muted small">It is a long established fact that a reader will be
                                            distracted by Luno.</p>
                                        <div class="form-floating mb-2">
                                            <select class="form-select">
                                                <option selected>Open this select menu</option>
                                                <option value="1">Lucid</option>
                                                <option value="2">AVIO</option>
                                                <option value="3">Luno</option>
                                            </select>
                                            <label>Choose a Customer *</label>
                                        </div>
                                        <div class="form-floating mb-2">
                                            <input type="text" class="form-control" placeholder="Project name">
                                            <label>Project name *</label>
                                        </div>
                                        <div class="form-floating mb-2">
                                            <textarea class="form-control" placeholder="Add project details"
                                                style="height: 100px"></textarea>
                                            <label>Add project details</label>
                                        </div>
                                        <div class="form-floating mb-4">
                                            <input type="date" class="form-control">
                                            <label>Enter release Date *</label>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <div class="text-muted">Allow Notifications *</div>
                                            <div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="allow_phone"
                                                        value="option1">
                                                    <label class="form-check-label" for="allow_phone">Phone</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" id="allow_email"
                                                        value="option2">
                                                    <label class="form-check-label" for="allow_email">Email</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button class="btn bg-secondary text-light next text-uppercase">Select project
                                        team</button>
                                </div>
                            </div>
                            <!-- start: select team -->
                            <div class="tab-pane fade" id="step3">
                                <div class="card bg-body mb-2">
                                    <div class="card-body">
                                        <h6 class="card-title mb-1">Build a Team</h6>
                                        <p class="text-muted small">If you need more info, please check out <a
                                                href="#">Project Guidelines</a></p>
                                        <div class="form-floating mb-4">
                                            <input type="text" class="form-control" placeholder="Invite Teammates">
                                            <label>Invite Teammates</label>
                                        </div>
                                        <h6 class="card-title mb-1">Team Members</h6>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="list-group6" checked="">
                                            <label class="form-check-label text-muted" for="list-group6">Adding Users by
                                                Team Members</label>
                                        </div>
                                        <ul class="list-group list-group-flush list-group-custom custom_scroll mb-0 mt-4"
                                            style="height: 300px;">
                                            <li class="list-group-item d-flex align-items-center">
                                                <img class="avatar rounded" src="@/assets/img/xs/avatar1.jpg" alt="">
                                                <div class="flex-fill ms-2">
                                                    <div class="h6 mb-0">Chris Fox</div>
                                                    <small class="text-muted">Angular Developer</small>
                                                </div>
                                                <select class="form-select  form-select-sm w120">
                                                    <option value="1">Owner</option>
                                                    <option value="2">Can Edit</option>
                                                    <option value="3">Guest</option>
                                                </select>
                                            </li>
                                            <li class="list-group-item d-flex align-items-center">
                                                <img class="avatar rounded" src="@/assets/img/xs/avatar2.jpg" alt="">
                                                <div class="flex-fill ms-2">
                                                    <div class="h6 mb-0">Joge Lucky</div>
                                                    <small class="text-muted">ReactJs Developer</small>
                                                </div>
                                                <select class="form-select  form-select-sm w120">
                                                    <option value="1">Owner</option>
                                                    <option value="2">Can Edit</option>
                                                    <option value="3">Guest</option>
                                                </select>
                                            </li>
                                            <li class="list-group-item d-flex align-items-center">
                                                <img class="avatar rounded" src="@/assets/img/xs/avatar3.jpg" alt="">
                                                <div class="flex-fill ms-2">
                                                    <div class="h6 mb-0">Chris Fox</div>
                                                    <small class="text-muted">NodeJs Developer</small>
                                                </div>
                                                <select class="form-select  form-select-sm w120">
                                                    <option value="1">Owner</option>
                                                    <option value="2">Can Edit</option>
                                                    <option value="3">Guest</option>
                                                </select>
                                            </li>
                                            <li class="list-group-item d-flex align-items-center">
                                                <img class="avatar rounded" src="@/assets/img/xs/avatar4.jpg" alt="">
                                                <div class="flex-fill ms-2">
                                                    <div class="h6 mb-0">Chris Fox</div>
                                                    <small class="text-muted">Sr. Designer</small>
                                                </div>
                                                <select class="form-select  form-select-sm w120">
                                                    <option value="1">Owner</option>
                                                    <option value="2">Can Edit</option>
                                                    <option value="3">Guest</option>
                                                </select>
                                            </li>
                                            <li class="list-group-item d-flex align-items-center">
                                                <img class="avatar rounded" src="@/assets/img/xs/avatar5.jpg" alt="">
                                                <div class="flex-fill ms-2">
                                                    <div class="h6 mb-0">Chris Fox</div>
                                                    <small class="text-muted">Designer</small>
                                                </div>
                                                <select class="form-select  form-select-sm w120">
                                                    <option value="1">Owner</option>
                                                    <option value="2">Can Edit</option>
                                                    <option value="3">Guest</option>
                                                </select>
                                            </li>
                                            <li class="list-group-item d-flex align-items-center">
                                                <img class="avatar rounded" src="@/assets/img/xs/avatar6.jpg" alt="">
                                                <div class="flex-fill ms-2">
                                                    <div class="h6 mb-0">Chris Fox</div>
                                                    <small class="text-muted">Front-End Developer</small>
                                                </div>
                                                <select class="form-select  form-select-sm w120">
                                                    <option value="1">Owner</option>
                                                    <option value="2">Can Edit</option>
                                                    <option value="3">Guest</option>
                                                </select>
                                            </li>
                                            <li class="list-group-item d-flex align-items-center">
                                                <img class="avatar rounded" src="@/assets/img/xs/avatar7.jpg" alt="">
                                                <div class="flex-fill ms-2">
                                                    <div class="h6 mb-0">Chris Fox</div>
                                                    <small class="text-muted">QA</small>
                                                </div>
                                                <select class="form-select  form-select-sm w120">
                                                    <option value="1">Owner</option>
                                                    <option value="2">Can Edit</option>
                                                    <option value="3">Guest</option>
                                                </select>
                                            </li>
                                            <li class="list-group-item d-flex align-items-center">
                                                <img class="avatar rounded" src="@/assets/img/xs/avatar8.jpg" alt="">
                                                <div class="flex-fill ms-2">
                                                    <div class="h6 mb-0">Chris Fox</div>
                                                    <small class="text-muted">Laravel Developer</small>
                                                </div>
                                                <select class="form-select  form-select-sm w120">
                                                    <option value="1">Owner</option>
                                                    <option value="2">Can Edit</option>
                                                    <option value="3">Guest</option>
                                                </select>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button class="btn bg-secondary text-light next text-uppercase">Upload
                                        Files</button>
                                </div>
                            </div>
                            <!-- start: Upload Files -->
                            <div class="tab-pane fade" id="step4">
                                <div class="card bg-body mb-2">
                                    <div class="card-body">
                                        <h6 class="card-title mb-1">Upload Files</h6>
                                        <div class="mb-4">
                                            <label class="form-label small">Upload up to 10 files</label>
                                            <input class="form-control" type="file" multiple>
                                        </div>
                                        <span>Already Uploaded File</span>
                                        <ul class="list-group list-group-flush list-group-custom custom_scroll mb-0 mt-4"
                                            style="height: 300px;">
                                            <li class="list-group-item py-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar rounded no-thumbnail"><i
                                                            class="fa fa-file-pdf-o text-danger"></i></div>
                                                    <div class="flex-fill ms-3 text-truncate">
                                                        <p class="mb-0 color-800">Annual Sales Report 2018-19</p>
                                                        <small class="text-muted">.pdf, 5.3 MB</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-group-item py-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar rounded no-thumbnail"><i
                                                            class="fa fa-file-excel-o text-success"></i></div>
                                                    <div class="flex-fill ms-3 text-truncate">
                                                        <p class="mb-0 color-800">Complete Product Sheet</p>
                                                        <small class="text-muted">.xls, 2.1 MB</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-group-item py-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar rounded no-thumbnail"><i
                                                            class="fa fa-file-word-o text-info"></i></div>
                                                    <div class="flex-fill ms-3 text-truncate">
                                                        <p class="mb-0 color-800">Marketing Guidelines</p>
                                                        <small class="text-muted">.doc, 2.3 MB</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-group-item py-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar rounded no-thumbnail"><i
                                                            class="fa fa-file-zip-o"></i></div>
                                                    <div class="flex-fill ms-3 text-truncate">
                                                        <p class="mb-0 color-800">Brand Photography</p>
                                                        <small class="text-muted">.zip, 30.5 MB</small>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="text-end">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button class="btn bg-secondary text-light next text-uppercase">Finish</button>
                                </div>
                            </div>
                            <!-- start: project setup done -->
                            <div class="tab-pane fade" id="step5">
                                <div class="card bg-body text-center">
                                    <div class="card-body">
                                        <h4 class="card-title mb-1">Project Created!</h4>
                                        <span class="text-muted">If you need more info, please check how to create
                                            project</span>
                                    </div>
                                    <div class="card-body">
                                        <button class="btn btn-lg btn-primary first text-uppercase">Cretae new
                                            project</button>
                                        <button class="btn btn-lg bg-secondary text-light text-uppercase">View
                                            project</button>
                                    </div>
                                    <div class="card-body">
                                        <img class="img-fluid" src="@/assets/img/project-team.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal: RecentChat -->
        <div class="modal fade" id="recent_chat" tabindex="-1">
            <div class="modal-dialog modal-dialog-vertical modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="d-flex align-items-start">
                        <div class="nav flex-column nav-pills p-3 h-100">
                            <a class="nav-link rounded-circle p-1 mb-2 active" href="javascript:void(0);"
                                data-bs-toggle="pill" data-bs-target="#c-user-1" title="">
                                <img class="avatar sm rounded-circle border" src="@/assets/img/xs/avatar1.jpg"
                                    alt="avatar">
                            </a>
                            <a class="nav-link rounded-circle p-1 mb-2" href="javascript:void(0);" data-bs-toggle="pill"
                                data-bs-target="#c-user-2" title="">
                                <img class="avatar sm rounded-circle border" src="@/assets/img/xs/avatar2.jpg"
                                    alt="avatar">
                            </a>
                            <a class="nav-link rounded-circle p-1 mb-2" href="javascript:void(0);" data-bs-toggle="pill"
                                data-bs-target="#c-user-3" title="">
                                <img class="avatar sm rounded-circle border" src="@/assets/img/xs/avatar3.jpg"
                                    alt="avatar">
                            </a>
                            <a class="nav-link rounded-circle p-1 mb-2" href="javascript:void(0);" data-bs-toggle="pill"
                                data-bs-target="#c-user-2" title="">
                                <img class="avatar sm rounded-circle border" src="@/assets/img/xs/avatar4.jpg"
                                    alt="avatar">
                            </a>
                            <a class="nav-link rounded-circle p-1 mb-2" href="javascript:void(0);" data-bs-toggle="pill"
                                data-bs-target="#c-user-5" title="">
                                <img class="avatar sm rounded-circle border" src="@/assets/img/xs/avatar5.jpg"
                                    alt="avatar">
                            </a>
                            <a class="nav-link rounded-circle p-1 mb-2" href="javascript:void(0);" data-bs-toggle="pill"
                                data-bs-target="#c-user-1" title="">
                                <img class="avatar sm rounded-circle border" src="@/assets/img/xs/avatar6.jpg"
                                    alt="avatar">
                            </a>
                            <a class="nav-link rounded-circle p-1 mb-2" href="javascript:void(0);" data-bs-toggle="pill"
                                data-bs-target="#c-user-7" title="">
                                <img class="avatar sm rounded-circle border" src="@/assets/img/xs/avatar7.jpg"
                                    alt="avatar">
                            </a>
                            <a class="nav-link rounded-circle p-1 mb-2" href="javascript:void(0);" data-bs-toggle="pill"
                                data-bs-target="#c-user-3" title="">
                                <img class="avatar sm rounded-circle border" src="@/assets/img/xs/avatar8.jpg"
                                    alt="avatar">
                            </a>
                            <a class="nav-link rounded-circle p-1 mb-2" href="javascript:void(0);" data-bs-toggle="pill"
                                data-bs-target="#c-user-3" title="">
                                <img class="avatar sm rounded-circle border" src="@/assets/img/xs/avatar9.jpg"
                                    alt="avatar">
                            </a>
                            <a class="nav-link rounded-circle p-1 mb-2" href="javascript:void(0);" data-bs-toggle="pill"
                                data-bs-target="#c-user-1" title="">
                                <img class="avatar sm rounded-circle border" src="@/assets/img/xs/avatar10.jpg"
                                    alt="avatar">
                            </a>
                            <a class="nav-link rounded-circle p-1 mb-2" href="javascript:void(0);" data-bs-toggle="pill"
                                data-bs-target="#c-user-1" title="">
                                <img class="avatar sm rounded-circle border" src="@/assets/img/xs/avatar5.jpg"
                                    alt="avatar">
                            </a>
                        </div>
                        <div class="tab-content shadow-sm">
                            <div class="tab-pane fade show active" id="c-user-1" role="tabpanel">
                                <div class="card">
                                    <!-- start: chat header -->
                                    <div class="card-header border-bottom py-3">
                                        <div class="d-flex">
                                            <a href="javascript:void(0);" title="">
                                                <img class="avatar rounded-circle" src="@/assets/img/xs/avatar1.jpg"
                                                    alt="avatar">
                                            </a>
                                            <div class="ms-3">
                                                <h6 class="mb-0">Orlando Lentz</h6>
                                                <small class="text-muted">Last seen: 2 hours ago</small>
                                            </div>
                                        </div>
                                        <div class="dropdown morphing scale-left">
                                            <a class="nav-link p-2 text-secondary d-none d-xl-inline-block"
                                                href="javascript:void(0);"><i class="fa fa-camera"></i></a>
                                            <a class="nav-link p-2 me-1 text-secondary d-none d-xl-inline-block"
                                                href="javascript:void(0);"><i class="fa fa-video-camera"></i></a>
                                            <a class="nav-link py-2 px-3 text-muted d-inline-block d-xl-none"
                                                data-bs-dismiss="modal" aria-label="Close" href="#"><i
                                                    class="fa fa-close"></i></a>
                                            <a href="#" class="more-icon dropdown-toggle" data-bs-toggle="dropdown"
                                                aria-expanded="false"><i class="fa fa-ellipsis-h"></i></a>
                                            <ul class="dropdown-menu shadow border-0 p-2">
                                                <li><a class="dropdown-item" href="#">File Info</a></li>
                                                <li><a class="dropdown-item" href="#">Copy to</a></li>
                                                <li><a class="dropdown-item" href="#">Move to</a></li>
                                                <li><a class="dropdown-item" href="#">Rename</a></li>
                                                <li><a class="dropdown-item" href="#">Block</a></li>
                                                <li><a class="dropdown-item" href="#">Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- start: chat body -->
                                    <div class="card-body custom_scroll" style="height: calc(100vh - 141px);">
                                        <ul class="list-unstyled chat-history flex-grow-1">
                                            <!-- Chat: left -->
                                            <li class="mb-3 d-flex flex-row align-items-end">
                                                <div class="max-width-70">
                                                    <div class="user-info mb-1">
                                                        <img class="avatar xs rounded-circle me-1"
                                                            src="@/assets/img/xs/avatar1.jpg" alt="avatar">
                                                        <span class="text-muted small">10:10 AM, Today</span>
                                                    </div>
                                                    <div class="card p-3">
                                                        <div class="message"> Hi Aiden, how are you?</div>
                                                    </div>
                                                </div>
                                                <!-- More option -->
                                                <div class="btn-group">
                                                    <a href="#" class="nav-link py-2 px-3 text-muted"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class="fa fa-ellipsis-v"></i></a>
                                                    <ul class="dropdown-menu rounded-4 border-0 shadow">
                                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                                        <li><a class="dropdown-item" href="#">Share</a></li>
                                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <!-- Chat: right -->
                                            <li class="mb-3 d-flex flex-row-reverse align-items-end">
                                                <div class="max-width-70 text-end">
                                                    <div class="user-info mb-1">
                                                        <span class="text-muted small">10:12 AM, Today</span>
                                                    </div>
                                                    <div class="card border-0 p-3 bg-primary text-light">
                                                        <div class="message">Are we meeting today?</div>
                                                    </div>
                                                </div>
                                                <!-- More option -->
                                                <div class="btn-group">
                                                    <a href="#" class="nav-link py-2 px-3 text-muted"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class="fa fa-ellipsis-v"></i></a>
                                                    <ul class="dropdown-menu rounded-4 border-0 shadow">
                                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                                        <li><a class="dropdown-item" href="#">Share</a></li>
                                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <!-- Chat: left -->
                                            <li class="mb-3 d-flex flex-row align-items-end">
                                                <div class="max-width-70">
                                                    <div class="user-info mb-1">
                                                        <img class="avatar xs rounded-circle me-1"
                                                            src="@/assets/img/xs/avatar1.jpg" alt="avatar">
                                                        <span class="text-muted small">10:10 AM, Today</span>
                                                    </div>
                                                    <div class="card p-3">
                                                        <div class="message"> It is a long established fact that a
                                                            reader will be distracted by the readable content of a page
                                                            when looking at its layout.</div>
                                                    </div>
                                                </div>
                                                <!-- More option -->
                                                <div class="btn-group">
                                                    <a href="#" class="nav-link py-2 px-3 text-muted"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class="fa fa-ellipsis-v"></i></a>
                                                    <ul class="dropdown-menu rounded-4 border-0 shadow">
                                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                                        <li><a class="dropdown-item" href="#">Share</a></li>
                                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <!-- Chat: left -->
                                            <li class="mb-3 d-flex flex-row align-items-end">
                                                <div class="max-width-70">
                                                    <div class="user-info mb-1">
                                                        <img class="avatar xs rounded-circle me-1"
                                                            src="@/assets/img/xs/avatar1.jpg" alt="avatar">
                                                        <span class="text-muted small">10:10 AM, Today</span>
                                                    </div>
                                                    <div class="card p-3">
                                                        <div class="message"> Contrary to popular belief, Lorem Ipsum is
                                                            not simply random text.</div>
                                                    </div>
                                                </div>
                                                <!-- More option -->
                                                <div class="btn-group">
                                                    <a href="#" class="nav-link py-2 px-3 text-muted"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class="fa fa-ellipsis-v"></i></a>
                                                    <ul class="dropdown-menu rounded-4 border-0 shadow">
                                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                                        <li><a class="dropdown-item" href="#">Share</a></li>
                                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <!-- Chat: right -->
                                            <li class="mb-3 d-flex flex-row-reverse align-items-end">
                                                <div class="max-width-70 text-end">
                                                    <div class="user-info mb-1">
                                                        <span class="text-muted small">10:12 AM, Today</span>
                                                    </div>
                                                    <div class="card border-0 p-3 bg-primary text-light">
                                                        <div class="message">Yes, Orlando Allredy done <br> There are
                                                            many variations of passages of Lorem Ipsum available</div>
                                                    </div>
                                                </div>
                                                <!-- More option -->
                                                <div class="btn-group">
                                                    <a href="#" class="nav-link py-2 px-3 text-muted"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class="fa fa-ellipsis-v"></i></a>
                                                    <ul class="dropdown-menu rounded-4 border-0 shadow">
                                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                                        <li><a class="dropdown-item" href="#">Share</a></li>
                                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <!-- Chat: left -->
                                            <li class="mb-3 d-flex flex-row align-items-end">
                                                <div class="max-width-70">
                                                    <div class="user-info mb-1">
                                                        <img class="avatar xs rounded-circle me-1"
                                                            src="@/assets/img/xs/avatar1.jpg" alt="avatar">
                                                        <span class="text-muted small">10:10 AM, Today</span>
                                                    </div>
                                                    <div class="card p-3">
                                                        <div class="message">
                                                            <p>Please find attached images</p>
                                                            <img class="w120 img-thumbnail"
                                                                src="@/assets/img/gallery/3.jpg" alt="">
                                                            <img class="w120 img-thumbnail"
                                                                src="@/assets/img/gallery/4.jpg" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- More option -->
                                                <div class="btn-group">
                                                    <a href="#" class="nav-link py-2 px-3 text-muted"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class="fa fa-ellipsis-v"></i></a>
                                                    <ul class="dropdown-menu rounded-4 border-0 shadow">
                                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                                        <li><a class="dropdown-item" href="#">Share</a></li>
                                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <!-- Chat: right -->
                                            <li class="mb-3 d-flex flex-row-reverse align-items-end">
                                                <div class="max-width-70 text-end">
                                                    <div class="user-info mb-1">
                                                        <span class="text-muted small">10:12 AM, Today</span>
                                                    </div>
                                                    <div class="card border-0 p-3 bg-primary text-light">
                                                        <div class="message">Okay, will check and let you know.</div>
                                                    </div>
                                                </div>
                                                <!-- More option -->
                                                <div class="btn-group">
                                                    <a href="#" class="nav-link py-2 px-3 text-muted"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class="fa fa-ellipsis-v"></i></a>
                                                    <ul class="dropdown-menu rounded-4 border-0 shadow">
                                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                                        <li><a class="dropdown-item" href="#">Share</a></li>
                                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- start: chat footer -->
                                    <div class="card-footer border-top bg-transparent py-3 px-4">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Enter text here...">
                                            <button class="btn btn-primary" type="button">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade show active" id="c-user-2" role="tabpanel">
                                <div class="card">
                                    <!-- start: chat header -->
                                    <div class="card-header border-bottom py-3">
                                        <div class="d-flex">
                                            <a href="javascript:void(0);" title="">
                                                <img class="avatar rounded-circle" src="@/assets/img/xs/avatar2.jpg"
                                                    alt="avatar">
                                            </a>
                                            <div class="ms-3">
                                                <h6 class="mb-0">Orlando Lentz</h6>
                                                <small class="text-muted">Last seen: 2 hours ago</small>
                                            </div>
                                        </div>
                                        <div class="dropdown morphing scale-left">
                                            <a class="nav-link p-2 text-secondary d-none d-xl-inline-block"
                                                href="javascript:void(0);"><i class="fa fa-camera"></i></a>
                                            <a class="nav-link p-2 me-1 text-secondary d-none d-xl-inline-block"
                                                href="javascript:void(0);"><i class="fa fa-video-camera"></i></a>
                                            <a class="nav-link py-2 px-3 text-muted d-inline-block d-xl-none"
                                                data-bs-dismiss="modal" aria-label="Close" href="#"><i
                                                    class="fa fa-close"></i></a>
                                            <a href="#" class="more-icon dropdown-toggle" data-bs-toggle="dropdown"
                                                aria-expanded="false"><i class="fa fa-ellipsis-h"></i></a>
                                            <ul class="dropdown-menu shadow border-0 p-2">
                                                <li><a class="dropdown-item" href="#">File Info</a></li>
                                                <li><a class="dropdown-item" href="#">Copy to</a></li>
                                                <li><a class="dropdown-item" href="#">Move to</a></li>
                                                <li><a class="dropdown-item" href="#">Rename</a></li>
                                                <li><a class="dropdown-item" href="#">Block</a></li>
                                                <li><a class="dropdown-item" href="#">Delete</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- start: chat body -->
                                    <div class="card-body custom_scroll" style="height: calc(100vh - 141px);">
                                        <ul class="list-unstyled chat-history flex-grow-1">
                                            <!-- Chat: right -->
                                            <li class="mb-3 d-flex flex-row-reverse align-items-end">
                                                <div class="max-width-70 text-end">
                                                    <div class="user-info mb-1">
                                                        <span class="text-muted small">10:12 AM, Today</span>
                                                    </div>
                                                    <div class="card border-0 p-3 bg-primary text-light">
                                                        <div class="message">Are we meeting today?</div>
                                                    </div>
                                                </div>
                                                <!-- More option -->
                                                <div class="btn-group">
                                                    <a href="#" class="nav-link py-2 px-3 text-muted"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class="fa fa-ellipsis-v"></i></a>
                                                    <ul class="dropdown-menu rounded-4 border-0 shadow">
                                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                                        <li><a class="dropdown-item" href="#">Share</a></li>
                                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <!-- Chat: left -->
                                            <li class="mb-3 d-flex flex-row align-items-end">
                                                <div class="max-width-70">
                                                    <div class="user-info mb-1">
                                                        <img class="avatar xs rounded-circle me-1"
                                                            src="@/assets/img/xs/avatar2.jpg" alt="avatar">
                                                        <span class="text-muted small">10:10 AM, Today</span>
                                                    </div>
                                                    <div class="card p-3">
                                                        <div class="message"> Hi Aiden, how are you?</div>
                                                    </div>
                                                </div>
                                                <!-- More option -->
                                                <div class="btn-group">
                                                    <a href="#" class="nav-link py-2 px-3 text-muted"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class="fa fa-ellipsis-v"></i></a>
                                                    <ul class="dropdown-menu rounded-4 border-0 shadow">
                                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                                        <li><a class="dropdown-item" href="#">Share</a></li>
                                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <!-- Chat: right -->
                                            <li class="mb-3 d-flex flex-row-reverse align-items-end">
                                                <div class="max-width-70 text-end">
                                                    <div class="user-info mb-1">
                                                        <span class="text-muted small">10:12 AM, Today</span>
                                                    </div>
                                                    <div class="card border-0 p-3 bg-primary text-light">
                                                        <div class="message">Yes, Orlando Allredy done <br> There are
                                                            many variations of passages of Lorem Ipsum available</div>
                                                    </div>
                                                </div>
                                                <!-- More option -->
                                                <div class="btn-group">
                                                    <a href="#" class="nav-link py-2 px-3 text-muted"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class="fa fa-ellipsis-v"></i></a>
                                                    <ul class="dropdown-menu rounded-4 border-0 shadow">
                                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                                        <li><a class="dropdown-item" href="#">Share</a></li>
                                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <!-- Chat: left -->
                                            <li class="mb-3 d-flex flex-row align-items-end">
                                                <div class="max-width-70">
                                                    <div class="user-info mb-1">
                                                        <img class="avatar xs rounded-circle me-1"
                                                            src="@/assets/img/xs/avatar2.jpg" alt="avatar">
                                                        <span class="text-muted small">10:10 AM, Today</span>
                                                    </div>
                                                    <div class="card p-3">
                                                        <div class="message">
                                                            <p>Please find attached images</p>
                                                            <img class="w120 img-thumbnail"
                                                                src="@/assets/img/gallery/1.jpg" alt="">
                                                            <img class="w120 img-thumbnail"
                                                                src="@/assets/img/gallery/2.jpg" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- More option -->
                                                <div class="btn-group">
                                                    <a href="#" class="nav-link py-2 px-3 text-muted"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class="fa fa-ellipsis-v"></i></a>
                                                    <ul class="dropdown-menu rounded-4 border-0 shadow">
                                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                                        <li><a class="dropdown-item" href="#">Share</a></li>
                                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <!-- Chat: right -->
                                            <li class="mb-3 d-flex flex-row-reverse align-items-end">
                                                <div class="max-width-70 text-end">
                                                    <div class="user-info mb-1">
                                                        <span class="text-muted small">10:12 AM, Today</span>
                                                    </div>
                                                    <div class="card border-0 p-3 bg-primary text-light">
                                                        <div class="message">Okay, will check and let you know.</div>
                                                    </div>
                                                </div>
                                                <!-- More option -->
                                                <div class="btn-group">
                                                    <a href="#" class="nav-link py-2 px-3 text-muted"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class="fa fa-ellipsis-v"></i></a>
                                                    <ul class="dropdown-menu rounded-4 border-0 shadow">
                                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                                        <li><a class="dropdown-item" href="#">Share</a></li>
                                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <!-- Chat: left -->
                                            <li class="mb-3 d-flex flex-row align-items-end">
                                                <div class="max-width-70">
                                                    <div class="user-info mb-1">
                                                        <img class="avatar xs rounded-circle me-1"
                                                            src="@/assets/img/xs/avatar2.jpg" alt="avatar">
                                                        <span class="text-muted small">10:10 AM, Today</span>
                                                    </div>
                                                    <div class="card p-3">
                                                        <div class="message"> It is a long established fact that a
                                                            reader will be distracted by the readable content of a page
                                                            when looking at its layout.</div>
                                                    </div>
                                                </div>
                                                <!-- More option -->
                                                <div class="btn-group">
                                                    <a href="#" class="nav-link py-2 px-3 text-muted"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class="fa fa-ellipsis-v"></i></a>
                                                    <ul class="dropdown-menu rounded-4 border-0 shadow">
                                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                                        <li><a class="dropdown-item" href="#">Share</a></li>
                                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <!-- Chat: left -->
                                            <li class="mb-3 d-flex flex-row align-items-end">
                                                <div class="max-width-70">
                                                    <div class="user-info mb-1">
                                                        <img class="avatar xs rounded-circle me-1"
                                                            src="@/assets/img/xs/avatar2.jpg" alt="avatar">
                                                        <span class="text-muted small">10:10 AM, Today</span>
                                                    </div>
                                                    <div class="card p-3">
                                                        <div class="message"> Contrary to popular belief, Lorem Ipsum is
                                                            not simply random text.</div>
                                                    </div>
                                                </div>
                                                <!-- More option -->
                                                <div class="btn-group">
                                                    <a href="#" class="nav-link py-2 px-3 text-muted"
                                                        data-bs-toggle="dropdown" aria-expanded="false"><i
                                                            class="fa fa-ellipsis-v"></i></a>
                                                    <ul class="dropdown-menu rounded-4 border-0 shadow">
                                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                                        <li><a class="dropdown-item" href="#">Share</a></li>
                                                        <li><a class="dropdown-item" href="#">Delete</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- start: chat footer -->
                                    <div class="card-footer border-top bg-transparent py-3 px-4">
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Enter text here...">
                                            <button class="btn btn-primary" type="button">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal: Setting -->
        <div class="modal fade" id="SettingsModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-vertical right-side modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="px-xl-4 modal-header">
                        <h5 class="modal-title">Theme Setting</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="px-xl-4 modal-body custom_scroll">
                        <!-- start: color setting -->
                        <div class="card fieldset border border-primary p-3 setting-theme mb-4">
                            <span class="fieldset-tile text-primary bg-card">Color Settings</span>
                            <ul class="list-unstyled d-flex choose-skin mb-0">
                                <li data-theme="black">
                                    <div class="black"></div>
                                </li>
                                <li data-theme="indigo">
                                    <div class="indigo"></div>
                                </li>
                                <li data-theme="blue">
                                    <div class="blue"></div>
                                </li>
                                <li data-theme="cyan">
                                    <div class="cyan"></div>
                                </li>
                                <li data-theme="green">
                                    <div class="green"></div>
                                </li>
                                <li data-theme="orange">
                                    <div class="orange"></div>
                                </li>
                                <li data-theme="blush">
                                    <div class="blush"></div>
                                </li>
                                <li data-theme="red">
                                    <div class="red"></div>
                                </li>
                                <li data-theme="dynamic">
                                    <div class="dynamic"><i class="fa fa-paint-brush"></i></div>
                                </li>
                            </ul>
                            <!-- Settings: Theme dynamics -->
                            <div class="card fieldset border border-primary p-3 dt-setting mt-4">
                                <span class="fieldset-tile text-primary bg-card">Dynamic Color Settings</span>
                                <div class="row g-3">
                                    <div class="col-7">
                                        <ul class="list-unstyled mb-0">
                                            <li>
                                                <button id="primaryColorPicker"
                                                    class="btn bg-primary avatar xs me-2"></button>
                                                <label>Primary Color</label>
                                            </li>
                                            <li>
                                                <button id="secondaryColorPicker"
                                                    class="btn bg-secondary avatar xs me-2"></button>
                                                <label>Secondary Color</label>
                                            </li>
                                            <li>
                                                <button id="BodyColorPicker"
                                                    class="btn btn-outline-secondary bg-body avatar xs me-2"></button>
                                                <label>Site Background</label>
                                            </li>
                                            <li>
                                                <button id="CardColorPicker"
                                                    class="btn btn-outline-secondary bg-card avatar xs me-2"></button>
                                                <label>Widget Background</label>
                                            </li>
                                            <li>
                                                <button id="BorderColorPicker"
                                                    class="btn btn-outline-secondary bg-card avatar xs me-2"></button>
                                                <label>Border Color</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-5">
                                        <ul class="list-unstyled mb-0">
                                            <li>
                                                <button id="chartColorPicker1"
                                                    class="btn chart-color1 avatar xs me-2"></button>
                                                <label>Chart Color 1</label>
                                            </li>
                                            <li>
                                                <button id="chartColorPicker2"
                                                    class="btn chart-color2 avatar xs me-2"></button>
                                                <label>Chart Color 2</label>
                                            </li>
                                            <li>
                                                <button id="chartColorPicker3"
                                                    class="btn chart-color3 avatar xs me-2"></button>
                                                <label>Chart Color 3</label>
                                            </li>
                                            <li>
                                                <button id="chartColorPicker4"
                                                    class="btn chart-color4 avatar xs me-2"></button>
                                                <label>Chart Color 4</label>
                                            </li>
                                            <li>
                                                <button id="chartColorPicker5"
                                                    class="btn chart-color5 avatar xs me-2"></button>
                                                <label>Chart Color 5</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- start: Light/dark -->
                        <div class="card fieldset border setting-mode mb-4">
                            <span class="fieldset-tile bg-card">Light/Dark & Contrast Layout</span>
                            <div class="c_radio d-flex text-center">
                                <label class="m-1 theme-switch" for="theme-switch">
                                    <input type="checkbox" id="theme-switch" />
                                    <span class="card p-2">
                                        <img class="img-fluid" src="@/assets/img/dark-version.svg" alt="Dark Mode" />
                                    </span>
                                </label>
                                <label class="m-1 theme-dark" for="theme-dark">
                                    <input type="checkbox" id="theme-dark" />
                                    <span class="card p-2">
                                        <img class="img-fluid" src="@/assets/img/dark-theme.svg"
                                            alt="Theme Dark Mode" />
                                    </span>
                                </label>
                                <label class="m-1 theme-high-contrast" for="theme-high-contrast">
                                    <input type="checkbox" id="theme-high-contrast" />
                                    <span class="card p-2">
                                        <img class="img-fluid" src="@/assets/img/high-version.svg"
                                            alt="High Contrast" />
                                    </span>
                                </label>
                                <label class="m-1 theme-rtl" for="theme-rtl">
                                    <input type="checkbox" id="theme-rtl" />
                                    <span class="card p-2">
                                        <img class="img-fluid" src="@/assets/img/rtl-version.svg" alt="RTL Mode!" />
                                    </span>
                                </label>
                            </div>
                        </div>
                        <!-- start: Font setting -->
                        <div class="card fieldset border setting-font mb-4">
                            <span class="fieldset-tile bg-card">Font Settings</span>
                            <div class="c_radio d-flex text-center font_setting">
                                <label class="m-1" for="font-opensans">
                                    <input type="radio" name="font" id="font-opensans" value="font-opensans"
                                        checked="" />
                                    <span class="card p-2 bg-body">
                                        <img class="img-fluid" src="@/assets/img/font-opensans.svg" alt="Dark Mode" />
                                    </span>
                                </label>
                                <label class="m-1" for="font-nunito">
                                    <input type="radio" name="font" id="font-nunito" value="font-nunito" />
                                    <span class="card p-2 bg-body">
                                        <img class="img-fluid" src="@/assets/img/font-nunito.svg" alt="Dark Mode" />
                                    </span>
                                </label>
                                <label class="m-1" for="font-raleway">
                                    <input type="radio" name="font" id="font-raleway" value="font-raleway" />
                                    <span class="card p-2 bg-body">
                                        <img class="img-fluid" src="@/assets/img/font-raleway.svg" alt="Dark Mode" />
                                    </span>
                                </label>
                            </div>
                            <!-- start: Dynamic Font Settings -->
                            <div class="m-1 p-3 bg-body rounded-4">
                                <p>Dynamic Font Settings</p>
                                <div class="mb-2">
                                    <label class="form-label small text-muted mb-0">Enter font URL</label>
                                    <input id="font_url" type="text" class="form-control"
                                        placeholder="http://fonts.cdnfonts.com/css/vonfont">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small text-muted mb-0">Enter font family name</label>
                                    <input id="font_family" type="text" class="form-control" placeholder="vonfont">
                                </div>
                                <button id="font_apply" type="submit" class="btn btn-primary">Save Changes</button>
                                <button id="font_cancel" type="submit" class="btn btn-secondary">Clear Changes</button>
                            </div>
                        </div>
                        <!-- start: Extra setting -->
                        <div class="setting-more mb-4">
                            <h6 class="card-title">More Setting</h6>
                            <ul class="list-group list-group-flush list-group-custom fs-6">
                                <!-- Settings: Border radius -->
                                <li class="list-group-item">
                                    <div class="form-check form-switch radius-switch mb-1">
                                        <input class="form-check-input" type="checkbox" id="BorderRadius">
                                        <label class="form-check-label" for="BorderRadius">Border Radius none</label>
                                    </div>
                                </li>
                                <!-- Settings: Container Fluid -->
                                <li class="list-group-item">
                                    <div class="form-check form-switch fluid-switch mb-1">
                                        <input class="form-check-input" type="checkbox" id="fluidLayout" checked="">
                                        <label class="form-check-label" for="fluidLayout">Container Fluid</label>
                                    </div>
                                </li>
                                <!-- Settings: Card box shadow  -->
                                <li class="list-group-item">
                                    <div class="form-check form-switch shadow-switch mb-1">
                                        <input class="form-check-input" type="checkbox" id="card_shadow">
                                        <label class="form-check-label" for="card_shadow">Card Box-Shadow</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- start: Extra link, please do not add in your project -->
                        <div class="mb-4">
                            <a class="btn lift mb-1 btn-outline-secondary" href="./marketing/index.html">Marketing
                                page</a>
                            <a class="btn lift mb-1 btn-outline-secondary" href="./onepgae-uikit/onepage.html">Landing
                                page</a>
                            <a class="btn lift mb-1 btn-outline-secondary" href="./onepgae-uikit/index.html">One page Ui
                                Kit Elements</a>
                        </div>
                    </div>
                    <div class="px-xl-4 modal-footer d-flex justify-content-start text-center">
                        <button type="button" class="btn flex-fill btn-primary lift">Save Changes</button>
                        <button type="button" class="btn flex-fill btn-white border lift"
                            data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
