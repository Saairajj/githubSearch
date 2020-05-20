class UI {
  constructor(){
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class = "card card-body mb-3">
        <div class = "row">
          <div class = "col-md-3">
            <img class = "img-fluid mb-2"  src = "${user.avatar_url}">
            <a href = "${user.html_url}" class = "btn btn-primary btn-block mb-4" target = "_blank"> View Profile </a> 
          </div>
          <div class = "col-md-9">
            <span class = "badge badge-primary"> Primary Repos: ${user.public_repos}</span>
            <span class = "badge badge-secondary"> Primary Gists: ${user.public_gists}</span>
            <span class = "badge badge-success"> Followers: ${user.followers}</span>
            <span class = "badge badge-info"> Following: ${user.following}</span>
            <br><br>
            <ul class = "list-group">
              <li class = "list-group-item">Company :${user.company}</li>
              <li class = "list-group-item"> Website/Blog :${user.blog}</li>
              <li class = "list-group-item"> Location :${user.location}</li>
              <li class = "list-group-item">Member Since :${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class = "page-heading mb-3"> Latest Repos </h3>
      <div id = "repos"></div>
    `;
  }

  // Show repos
  showRepos(repos){
    let output = '';

    repos.forEach(function(repo){
      output += `
        <div class = "card card-body mb-3">
          <div class = "row">
            <div class = "col-md-6">
              <a href = "${repo.html_url}" target = "_blank">${repo.name}</a>
            </div>
            <div class = "col-md-6">
              <span class = "badge badge-primary"> Stars: ${repo.stargazers_count}</span>
              <span class = "badge badge-secondary"> Watchers: ${repo.watchers_count}</span>
              <span class = "badge badge-success"> Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output Repos
    document.getElementById('repos').innerHTML = output;
  }



  // SHow Alert
  showAlert(message, className){
    // Clear alert if any
    this.clearAlert();

    // Create Div
    const div = document.createElement('div');

    // Add Classes
    div.className = className;

    // Add text
    div.appendChild(document.createTextNode(message));

    // Get parent
    const container = document.querySelector('.searchContainer');

    // Get search box
    const search = document.querySelector('.search');

    // Insert the div
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    },3000);
  }

  // Clear Alert
  clearAlert(){
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }

  // Clear Profile
  clearProfile(){
    this.profile.innerHTML = '';
  }
}