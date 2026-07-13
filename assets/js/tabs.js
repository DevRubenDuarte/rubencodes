(function () {
    var tabLinks = document.querySelectorAll('.tab-link');

    tabLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            var target = link.getAttribute('data-tab');

            document.querySelectorAll('.tab-link').forEach(function (l) {
                l.classList.remove('active');
                l.setAttribute('aria-selected', 'false');
            });

            document.querySelectorAll('.tab-panel').forEach(function (p) {
                p.classList.remove('active');
                p.setAttribute('hidden', '');
            });

            link.classList.add('active');
            link.setAttribute('aria-selected', 'true');

            var panel = document.getElementById(target);
            panel.classList.add('active');
            panel.removeAttribute('hidden');
        });
    });
})();
