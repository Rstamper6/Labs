let clearBut = document.getElementById('clearBut')
clearBut.addEventListener('click', e=>{
    window.location.reload();
})

let searchButton = document.getElementById('switchSub');
document.addEventListener('submit', e=>{
    e.preventDefault()
    // window.location.reload();
    let searchInput = document.getElementById('subSearch')
    fetch(`https://www.reddit.com/r/${searchInput.value}/.json`).then(response => response.json()).then(redditData=>{    
        console.log(redditData);
        for(let i = 0; i < redditData.data.children.length; i++){
            const post = redditData.data.children[i].data;
            let postDiv = document.createElement('div')
            postDiv.classList.add('postDiv')
            document.body.appendChild(postDiv)    
                
            const title = document.createElement('h1');
            title.innerText = post.title
            title.classList.add('title')
            postDiv.appendChild(title)
    
    
            const img = document.createElement('img');
            img.src = post.thumbnail;
            img.classList.add('postImg')
            postDiv.appendChild(img)
    
    
            const postUrl = document.createElement('a');
            postUrl.innerText = 'Link to post';
            let link = `https://www.reddit.com${post.permalink}`
            postUrl.href = link;
            postUrl.classList.add('postLink')
            title.appendChild(postUrl)
    
            if(post.all_awardings.length > 0){
                // console.log(post.all_awardings);
                let postAward = document.createElement('p')
                postAward.innerText = 'Post Awards:'
                postDiv.appendChild(postAward)
                for(let a = 0; a < post.all_awardings.length; a++){
                    let icon = post.all_awardings[a].icon_url;
                    // console.log(icon);
                    const awardIcon = document.createElement('img');
                    awardIcon.classList.add('awardImage')
                    awardIcon.src = icon
                    awardIcon.title = post.all_awardings[a].description
                    postAward.appendChild(awardIcon)
                }
            }
            else{
                let postAward = document.createElement('p')
                postAward.innerText = 'This post has no awards:('
                postDiv.appendChild(postAward)
            }
        }
    })
})
