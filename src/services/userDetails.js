let userName = "";

// @ts-ignore
export function setName(name){
    localStorage.setItem(userName, name);
}

export function getName() {
    return localStorage.getItem(userName);
  }