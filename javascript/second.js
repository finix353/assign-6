const loadUpdate = async() =>{
    const res =await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data =await res.json();
    // console.log(data);
    displayLatest(data);
}

const displayLatest = data =>{
    // console.log(data);

    const latestNewsContainer = document.getElementById('latest-news-container')

    for(const datas of data){
        const latestNewsCard = document.createElement('div');
        latestNewsCard.classList = `flex flex-col bg-slate-200 rounded-[20px] gap-5 p-5`
        latestNewsCard.innerHTML=`
        <img src="${datas.cover_image}" class="rounded-md">
        <div class="flex gap-2">
          <img src="images/icons/calendar.png" >
          <p>${(datas.author.posted_date)?datas.author.posted_date:"No Publish Date"}</p>
        </div>
        <p class="font-bold">${datas.title}</p>
        <p class="min-h-20">${datas.description}</p>
        <div class="flex items-center gap-4">
            <img src="${datas.profile_image}" class="size-11 rounded-full ">
          <div class="flex flex-col">
            <p class="font-semibold">${datas.author.name}</p>
            <p>${(datas.author.designation)?datas.author.designation:'Unknown'}</p>
          </div>
        </div>
        `;
        latestNewsContainer.appendChild(latestNewsCard)
    }
}

loadUpdate();