async function jsonData(file) {
    let response = await fetch("/Projectcage/api/"+file, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    if(!response.ok) {
        return null;
    }
    let json = await response.json();
    
    let objs = [];
    
    for (let obj of json) {
        objs.push(generateObject(obj));
    }
    
    return objs;
}

async function jsonDataById(file, id) {
    let response = await fetch("/Projectcage/api/"+file+"?id="+id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    if(!response.ok) {
        return null;
    }
    let json = await response.json();
    
    let objs = [];
    
 /*   for (let obj of json) {
        objs.push(generateObject(JSON.stringify(obj)));
    }
    
    return objs;*/
    return json;
}

async function ProjectJson(callback) {
    let objs = await jsonData("projects");
    callback(objs);
}

async function ProjectJsonById(id, callback) {
   let objs = await jsonDataById("projects", id);
   callback(generateObject(objs));
}

async function UserJsonById(id, callback) {
   let objs = await jsonDataById("user", id);
   callback(generateObject(objs));
}

async function CommentJsonById(id, callback) {
   let objs = await jsonDataById("comments", id);
   callback(generateObject(objs));
}

async function UserJson() {
   let objs = await jsonData("user");
   return objs;
}

async function ProjectsJson() {
   let objs = await jsonData("projects");
   return objs;
}

async function CommentsJson() {
   let objs = await jsonData("comments");
   return objs;
}

async function fetchData(store_call) {
    
    if(!emptyStorage()) {
        console.log("Storage not empty");
        return;
    }
    
    
    console.log("Fetch data");
    let objects = [];
    
    let user = await UserJson();
    let projects = await ProjectsJson();
    let comments = await CommentsJson();

    let objs = [...user, ...projects, ...comments];
    store_call(objs);
}