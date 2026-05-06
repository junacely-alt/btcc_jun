function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // Hide all contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Remove active class from buttons
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show selected tab
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
