 let imgs = document.querySelectorAll('.imgBox img')
        let imgBox = document.querySelector('.imgBox');
        let prev = document.querySelector('.prev')
        let next = document.querySelector('.Next')
        let i = 0;
        imgBox.style.transition = 'transform 0.5s ease-in-out';
        prev.addEventListener('click',() =>{
            if(i <= 0) return;
            i--;
            imgBox.style.transition = 'transform 0.5s ease-in-out';
            imgBox.style.transform = `translateX(${-i * 400}px)`
        })
        next.addEventListener('click',() =>{
            if(i >= imgs.length - 1) return;
            i++;
             imgBox.style.transition = 'transform 0.5s ease-in-out';
            imgBox.style.transform = `translateX(${-i * 400}px)`
        })

        imgBox.addEventListener('transitionend',() =>{
           if(imgs[i].id === 'last_clone'){
            imgBox.style.transition = 'none';
            i = imgs.length - 2;
            imgBox.style.transform = `translateX(${-i * 400}px)`;
           }
           if(imgs[i].id === 'first_clone'){
            imgBox.style.transition = 'none';
            i = 1;
            imgBox.style.transform = `translateX(${-i * 400}px)`;
           }
        })