// Instantiate Github class
const github = new Github;

// Instantiate UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Create Event Listener
searchUser.addEventListener('keyup', (e) =>{
  const userText = searchUser.value;
  
  if(userText !== '') {
    // Make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        // Show Alert
        ui.showAlert('User not found', 'alert alert-danger');
      }else{
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  }else{
    // Clear profile
    ui.clearProfile();
  }
});