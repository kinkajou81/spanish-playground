document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("palabrita").style.display = "none";
    document.getElementById("palabrita_game").style.display = "none";
});

function palabrita() {
    document.getElementById("main_screen").style.display = "none";
    document.getElementById("palabrita").style.display = "block";
}

function back_palabrita() {
    document.getElementById("main_screen").style.display = "block";
    document.getElementById("palabrita").style.display = "none";
}

function palabrita_play() {
    document.getElementById("palabrita").style.display = "none";
    document.getElementById("palabrita_game").style.display = "block";
}

function back_palabrita_play() {
    document.getElementById("palabrita_game").style.display = "none";
    document.getElementById("palabrita").style.display = "block";
}

function palabrita_key() {
    return;
}