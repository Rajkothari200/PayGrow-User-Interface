function signIn() {
  let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"

  let form = document.createElement('form')
  form.setAttribute('method', 'GET')
  form.setAttribute('action', oauth2Endpoint)

  let params = {
    "client_id":"516418943357-9l0i482vf503udn9980gbk0khd058uq8.apps.googleusercontent.com",
    "redirect_uri":"http://127.0.0.1:5500/HOME_PAGE.html",
    "response_type":"token",
    "scope":"https://www.googleapis.com/auth/userinfo.profile",
    "include_granted_scopes":'true',
    'state':'pass-through-value'
  }

  for(var p in params){
    let input = document.createElement('input')
    input.setAttribute('type','hidden')
    input.setAttribute('name',p)
    input.setAttribute('value',params[p])
    form.appendChild(input)
  }

  document.body.appendChild(form)
  form.submit()
}

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

