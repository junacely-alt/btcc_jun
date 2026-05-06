function openTab(evt, tabName) {
    // Hide all tab content
    const tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }

    // Deactivate all tab buttons
    const tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Show current tab and add active class to button
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
