$(document).ready(function () {
    const endpoint = 'https://api.github.com/users/EduardoSouzaDEV'
    const repositories = $("#repositories")
    const followers = $("#followers")
    const following = $("#following")
    const avatar = $("#profile-avatar")
    const name = $("#name")
    const username = $("#username")
    const link = $("#profile-link")



    fetch(endpoint)
        .then(function (res) {
            return res.json()
        })
        .then(function (json) {
            repositories.text(json.public_repos)
            followers.text(json.followers)
            following.text(json.following)
            avatar.attr("src", json.avatar_url)
            name.text(json.name)
            username.text(json.email)
            link.attr("href", json.html_url)
        })
        .catch(function (erro) {
            console.error('Erro ao buscar os dados:', erro);
        })
})