    const back = document.querySelector('#back');
    const next = document.querySelector('#next');

    const photos = ["https://images.unsplash.com/photo-1606757819934-d61a9f7279d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", "https://images.unsplash.com/photo-1610441009633-b6ca9c6d4be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", "https://images.unsplash.com/photo-1510629954389-c1e0da47d414?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"];

    let i = 0;

    next.addEventListener('click', ()=> {
        i++;
            if (i > photos.length -1){
            i=0;
        }
    document.querySelector('#pictures').src = photos[i];
    })

    back.addEventListener('click', () => {
        i--;
            if (i <0){
            i = photos.length - 1;
    }

    document.querySelector('#pictures').src = photos[i]

    })
