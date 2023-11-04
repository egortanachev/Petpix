const textExpands = document.querySelectorAll('.text__more span');
const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
        const isTruncated = entry.target.scrollHeight > entry.contentRect.height;

        if (isTruncated && !entry.target.nextElementSibling) {
            const showExpand = document.createElement('span');
            showExpand.className = 'show__expand';
            showExpand.textContent = 'more';
            showExpand.onclick = function() {
                const textExpand = showExpand.previousElementSibling;
                textExpand.classList.remove('text__expand');

                showExpand.remove();
            };
            entry.target.parentNode.insertBefore(showExpand, entry.target.nextSibling);
        } else if (!isTruncated && entry.target.nextElementSibling && entry.target.nextElementSibling.classList.contains('show__expand')) {
            entry.target.nextElementSibling.remove();
        }
    }
});

textExpands.forEach(textExpand => {
    observer.observe(textExpand);
});