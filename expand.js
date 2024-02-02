function toggleExpanded(ev) {
    //ev.preventDefault();
    if (ev.currentTarget.classList.contains('feature-block')) {
        ev.currentTarget.classList.toggle('expanded');
        ev.stopPropagation();
    }
}

function display(ev, msg) {
    ev.preventDefault();
    ev.stopPropagation();
    alert(msg);
}

document.querySelectorAll('.feature-block').forEach(block => {
    block.addEventListener('click', toggleExpanded);
});

document.querySelectorAll('.genre a').forEach(link => {
    const msg = 'Dies würde die "Alle Projekte" Seite zeigen, mit dem jeweiligen Genre als Filter vorausgewählt.';
    link.addEventListener('click', (ev) => display(ev, msg));
});

document.querySelectorAll('.feature-title a').forEach(link => {
    const msg = 'Dies würde direkt die Detailseite des jeweiligen Projektes anzeigen.';
    link.addEventListener('click', (ev) => display(ev, msg));
});