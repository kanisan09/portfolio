addEventListener('load', () =>{
    const img = document.querySelector('.image_box img');
    const slideImages = [...document.querySelectorAll('.thumbnail img')].map(e => e.src);

    document.querySelector('.thumbnail').addEventListener('click', e =>
        e.target.tagName === 'IMG' && (img.src = e.target.src));

    document.querySelector('.slide').addEventListener('click', e => {
        const d = {prev: -1, next: 1}[e.target.id];
        if(d === undefined) return;
        img.src = slideImages[(slideImages.length + slideImages.indexOf(img.src) + d) % slideImages.length];
        img.animate(
            {
                transform: [`translateX(${ -30 * d}px)`, 'translateX(0px)']
                ,opacity: [0.2, 1]
            }
            ,{
                duration: 500,
                iterations: 1
            }
        );
    });

    img.src = slideImages[0];
})