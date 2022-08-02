/* 
    Challenge
    
    Copy the JSON user from the API call
        Store it in the user.json file
        Replace the API call with a call to this new file
    
    Create a profile of your favorite fictional character
        Style it to fit the character or you own personality!
*/

async function getUser() {
    let response = await fetch("user.json")
    let user = await response.json()
    console.log(user)
    return user
}

function displayUser(user) {
    document.body.innerHTML = `<div class="user-profile">
        <div class="user-profile-header">
            <div class="profile-img"><img src="images/WORM.png"> ${user.name}</div>
            <div>@${user.username}</div>
        </div>
        
        <div class="user-profile-company">
            <div><img class="mini" src="images/building-solid.svg">Company: ${user.company.name}</div>
            <div>${user.company.catchPhrase}</div>
            <div>${user.company.bs}</div>
        </div>
            <div class="user-profile-contact">
                <div><img class="mini" src="images/envelope-solid.svg">${user.email}</div>
                <div><img class="mini" src="images/phone-solid.svg">${user.phone}</div>
                <div><img class="mini" src="images/globe-solid.svg">${user.website}</div>
            </div>
            
            <div class="user-profile-address">
                <div><img class="mini" src="images/house-chimney-solid.svg">${user.address.street}, ${user.address.suite}</div>
                <div>${user.address.city} ${user.address.zipcode}</div>
            </div>
    </div>`
}

getUser().then(displayUser)

