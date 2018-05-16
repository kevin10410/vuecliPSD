<template>
    <div class="navbarContainer">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler toggleButton" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ABOUT</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        FEATURES
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">FEATURE1</a>
                        <a class="dropdown-item" href="#">FEATURE2</a>
                        <a class="dropdown-item" href="#">FEATURE3</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        FORTFOLIO
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">FORTFOLIO1</a>
                        <a class="dropdown-item" href="#">FORTFOLIO2</a>
                        <a class="dropdown-item" href="#">FORTFOLIO3</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        BLOGS
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">BLOG1</a>
                        <a class="dropdown-item" href="#">BLOG2</a>
                        <a class="dropdown-item" href="#">BLOG3</a>
                        </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>
<style lang="sass" scoped>
.navbarContainer
    width: 100%
    margin-top: 80px

    .bg-light
        background-color:#ffffff!important

    .collapse
        ul
            li
                border-right: 1px solid #ccc
                a
                    font-weight: bold
                    color: #000
                a:hover
                    background: #80b600
                    color: #fff
</style>
