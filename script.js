document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.video-card');
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            var url = card.getAttribute('data-url');
            if (url && url !== '#') {
                window.open(url, '_blank', 'noopener');
            }
        });
    });
});
