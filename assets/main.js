'use strict';

// the reason we must use one of the frontend framework such as svelte, react, vue or angular
// recommendation: https://svelte.dev/
//
(() => {
    // All projects
    const projs = document.getElementsByClassName('proj');
    // modal elems
    const modal = document.getElementsByClassName('modal')[0];
    const modalCloseBtn = modal.getElementsByClassName('close-btn')[0];
    const modalImg = modal.getElementsByClassName('modal-image')[0];

    for (const proj of projs) {
        const projImgAttr = proj.getElementsByClassName('img')[0];

        proj.addEventListener('click', () => {
            modalImg.src = projImgAttr.style.backgroundImage
                .replace(/^url\((\'|\")/i, '')
                .replace(/(\'|\")\)/i, '');
            modalImg.width = '300';
            modal.classList.add('show');
        });
    }
    modalCloseBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    })
})();
