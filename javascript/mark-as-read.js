let i = 0;

function readInbox(button)
{
    const inboxParent = document.getElementById('inbox');
    const cartTitle = button.parentElement.parentElement.parentElement.querySelector('.titl');
    const viewCount = button.parentElement.parentElement.parentElement.querySelector('.viw');
    i++;
    document.getElementById('inboxReadCounter').innerHTML = i;

    inboxParent.innerHTML += `<div class="flex items-center w-full bg-white rounded-md p-2 gap-1">
    <h1 class="mr-auto font-semibold">${cartTitle.innerHTML}</h1>
    <img src="images/icons/view.png" alt="">
    <p>${viewCount.innerHTML}</p>
    </div>`
}