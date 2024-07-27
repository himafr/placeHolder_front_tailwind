document.getElementById("icon").style.display="none";
const links=[];
function addOne(id){
    document.getElementById("people").classList.toggle("hidden");
    document.getElementById("art").classList.toggle("hidden");
    document.getElementById("icon").style.display="inline-block";
    userPosts(id)
  }
  function back(){
    document.getElementById("people").classList.toggle("hidden");
    document.getElementById("art").classList.toggle("hidden");
    document.getElementById("icon").style.display="none";
    document.getElementById("posts").innerHTML = "";
}

const getPerson = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const json = await res.json();
  
      json.forEach(async (el,index) => {
        try {
          const data = await fetch("https://dog.ceo/api/breeds/image/random");
          if (!data.ok) {
            throw new Error(`HTTP error! status: ${data.status}`);
          }
          const al = await data.json();
         links.push(al.message)
          document.getElementById("people").innerHTML += `
            <div class="bg-white h-person py-3 px-2 rounded-lg mb-2 person cursor-pointer" onclick="addOne(${index+1})">
              <div class="flex text-nowrap gap-x-2">
                <img src=" ${al.message}" class="rounded-full w-img h-img" alt="d">
                <div class="my-auto">
                  <div><b>${el.name}</b></div>
                  <div class="text-slate-400">${el.email}</div>
                </div>
              </div>
            </div>
          `;
        } catch (error) {
          console.error("Error fetching dog image:", error);
        }
      });
  
      const person = document.querySelectorAll(".person");
      person.forEach((element, index) => {
        element.addEventListener("click", () => {
          userPosts(index + 1);
        });
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  
  // Get posts of a specific user
  const userPosts = async (id) => {
    try {
      document.getElementById("posts").innerHTML = "";
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const json = await res.json();
  
      json.forEach((element) => {
        document.getElementById("posts").innerHTML += `<div class="post px-5 pt-4 cursor-default">
        <div class="flex text-nowrap gap-x-2  "> <img src="${links[id-1]}" class="rounded-full w-img h-img" alt="d">
            <div class="my-auto">
                <span >Title :</span>
                <div >${element.title}</div></div>
            </div>
             <span>${element.body}</span>
           </div>
           <hr class="my-2">
        `;
      });
    } catch (error) {
      console.error("Error fetching user posts:", error);
    }
  };
  getPerson()


  function toggle(){
    document.getElementById("people").classList.toggle("hidden");
    document.getElementById("posts").classList.toggle("hidden");
  }