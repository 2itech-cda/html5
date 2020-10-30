(function() {

    // DRAG N DROP !!!

    document.addEventListener('DOMContentLoaded', () => {
        const cases = document.querySelectorAll('.case');
        const bases = document.querySelectorAll('.base');

        function dragStart() {
            this.classList.add('dragging');
        }

        function dragEnd() {
            this.classList.remove('dragging');
        }

        function dragOver(e) {
            e.preventDefault();
        }

        function dragEnter() {
            this.classList.add('hovered');
        }

        function dragLeave() {
            this.classList.remove('hovered');
        }

        function drop(e) {
            e.preventDefault();

            if (!this.hasChildNodes()) {
                this.className = 'case';
                const dragging = document.querySelector('.dragging');
                this.appendChild(dragging);
            }
        }

        for (let b of bases) {
            b.addEventListener('dragstart', dragStart, false);
            b.addEventListener('dragend', dragEnd, false);
        }
        
        for (let c of cases) {
            c.addEventListener('dragover', dragOver, false);
            c.addEventListener('dragenter', dragEnter, false);
            c.addEventListener('dragleave', dragLeave, false);
            c.addEventListener('drop', drop, false);
        }

    });

})();