class Github {
  constructor(){
    this.client_id = 'a7b27f28753a13e568dd';
    this.client_secret = 'b1030b99b504315ace8c589b954db4aec18ae07a';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}$sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}