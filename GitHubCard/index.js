import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const myInfo = axios.get('https://api.github.com/users/patricelachelle')
.then(res =>{
  console.log(res);

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const user = res.data
document.querySelector('.cards').append(cardMaker(user));
console.log(res.data);
})
.catch(err =>{
console.log(err);
})
console.log(myInfo)

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'BrityHemming', 'KingAtoki', 'bigknell'];
followersArray.forEach( user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then((res) => {
    const users = res.data;
    document.querySelector('.cards').append(cardMaker(users));
  })
})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker({avatar_url, blog, bio, followers, following, html_url, location, login, name, repos_url}) {

  const divCard = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const h3 = document.createElement('h3');
  const usersName = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  // added a little more info(for practice)
  const userBio = document.createElement('p');
  const userBlog = document.createElement('p')
  const userRepos = document.createElement('p')


  // APPENDING
  divCard.append(userImg);
  divCard.append(cardInfo);
  cardInfo.append(h3);
  cardInfo.append(usersName);
  cardInfo.append(userLocation);
  cardInfo.append(profile);
  cardInfo.append(userFollowers);
  cardInfo.append(userFollowing);
  cardInfo.append(userBio);
  cardInfo.append(userBlog)
  cardInfo.append(userRepos)

  // ADDING CLASSES
  divCard.classList.add('card');
  cardInfo.classList.add('card-info');
  h3.classList.add('class-name');
  usersName.classList.add('username');

  // ADD CONTEXT
  userImg.src = `${avatar_url}`;
  h3.textContent = `${name}`;
  usersName.textContent = `${login}`;
  userLocation.textContent = `${location}`;
  profile.textContent = `Profile: ${html_url}`;
  userFollowers.textContent = `Followers: ${followers}`;
  userFollowing.textContent = `Following: ${following}`;
  userBio.textContent = `Bio: ${bio}`;
  userBlog.textContent = `Blog: ${blog}`
  userRepos.textContent = `Repos: ${repos_url}`

  return divCard;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
