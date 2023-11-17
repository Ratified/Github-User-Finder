const userInput = document.getElementById('usernameInput');
const submitBtn = document.getElementById('submitBtn');
const img = document.getElementById('img');
const profileUsername = document.getElementById('login');
const profileName = document.getElementById('name');
const dateJoined = document.getElementById('date_joined');
const profileBio = document.getElementById('bio');
const profileRepos = document.getElementById('public_repos');
const profileFollowers = document.getElementById('followers');
const profileFollowing = document.getElementById('following');
const profileLocation = document.getElementById('location');
const profileLink = document.getElementById('link');
const twitterProfile = document.getElementById('twitter_username');
const profileCompany = document.getElementById('company');

console.log(
  userInput,
  submitBtn,
  img,
  profileUsername,
  profileName,
  dateJoined,
  profileBio,
  profileRepos,
  profileFollowers,
  profileFollowing,
  profileLocation,
  profileLink,
  twitterProfile,
  profileCompany
);

submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // prevent form submission
    const userInputValue = userInput.value;
    if (userInputValue === '') {
        alert('Please enter a username');
    } else {
        fetch(`https://api.github.com/users/${userInputValue}`)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Check if data is being retrieved successfully
            img.src = data.avatar_url;
            profileUsername.innerHTML = data.login;
            profileName.innerHTML = data.name;
            dateJoined.innerHTML = new Date(data.created_at).toLocaleDateString();
            profileBio.innerHTML = data.bio;
            profileRepos.innerHTML = data.public_repos;
            profileFollowers.innerHTML = data.followers;
            profileFollowing.innerHTML = data.following;
            profileLocation.innerHTML = data.location;
            profileLink.innerHTML = `<a href="${data.html_url}" target="_blank">${data.html_url}</a>`;
            twitterProfile.innerHTML = data.twitter_username;
            profileCompany.innerHTML = data.company;
        })
        .catch(error => {
            alert('Please enter a valid username');
        });
    }

    userInput.value = ''; // Clear input field
});
