const checkbox = document.getElementById('checkbox');
        const bars = document.querySelectorAll('.bar');
        const bar1 = document.getElementById('bar1');
        const bar2 = document.getElementById('bar2');
        const bar3 = document.getElementById('bar3');

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                bars.forEach(bar => bar.classList.add('ml-3.5'));
                bar1.classList.add('hidden');
                bar1.style.transformOrigin = 'left center';
                bar2.classList.add('befor:transform', 'before:rotate-[135deg]',);
                bar2.classList.remove('ml-3.5');
                bar2.style.transformOrigin = 'center';
                bar3.classList.add('hidden');
                bar3.style.transformOrigin = 'left center';
            } else {
                bars.forEach(bar => bar.classList.remove('ml-3.5'));
                bar1.classList.remove('hidden');
                bar2.classList.remove('transform', 'rotate-[135deg]');
                bar3.classList.remove('hidden' );
            }
        });