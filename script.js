// palabrita
var pal_guesses = ["", "", "", "", "", ""];
var pal_current_guess = 0;
var pal_correct_letters = [];
var pal_relevant_letters = [];
var pal_incorrect_letters = [];

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

function pal_key(key) {
    if(key == "del") {
        if(pal_guesses[pal_current_guess].length > 0) {
            pal_guesses[pal_current_guess] = pal_guesses[pal_current_guess].substring(0, pal_guesses[pal_current_guess].length - 1);
        }
        return;
    } else if(key == "enter") {
        if(pal_guesses[pal_current_guess].length >= 5) {
            pal_current_guess += 1;
        }
        return;
    } else if(key.length == 1) {
        if(pal_guesses[pal_current_guess].length < 5) {
            pal_guesses[pal_current_guess] += key;
        }
        return;
    }
}