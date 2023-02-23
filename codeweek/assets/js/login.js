import { GET, USER } from "./api.js";
import { qS, qSA, newCard, HG, SETCOOKIES } from "./utils.js";

const login = document.getElementById("login");
const myLoginRow = qS("#myLogin");

checkACookieExists();

function checkACookieExists() {
  let session = "";
    if (document.cookie.split(";").some((item) => item.trim().startsWith("request_token="))) {
        
      session = true;
      myLoginRow.innerHTML = `
        <div class="text-center">
            <h3>Sei già Loggato</h3>                
            <a id="logout" class="btn btn-primary">Logout</a>
        </div>
    `;
      const logout = qS("#logout");
      logout.addEventListener("click", (event) => { 
          
            var result = confirm("Sei sicuro di volerti Sloggare?");
          if (result == true) {
                document.cookie = `request_token=''; Max-Age=0`;
                window.location.reload();
                session = false;
            } else {
                session = true;
            }
            
      });
  } else {
    session = false;
  }
  console.log(session);
  return session;
}

login.addEventListener("submit", (event) => {
  event.preventDefault();

  Promise.all([USER("authentication", username.value, password.value)]).then(
    (data) => {
      data.map((request) => SETCOOKIES(request));
    }
  );
});
