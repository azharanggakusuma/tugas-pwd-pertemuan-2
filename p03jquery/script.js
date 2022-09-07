$(document).ready(() => {
    $("td").click(function (event) {
        alert("Anda mengklik kolom yang berisi kata " + $(this).html() + "!");
    });
    $("th").click(function (event) {
        alert("Anda mengklik kolom yang berisi kata  " + $(this).html() + "!");
    });
});
