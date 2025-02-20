function printName(name) {
    document.getElementById('Name').innerHTML = name;
}

function generateName(namelist) {
    const num = Math.floor(Math.random() * namelist.length);
    //alert(namelist[num])
    printName(namelist[num]);
}


const nameList = () => {
    return {
        names : ["Alice", "Andy", "Bob", "Charlie", "Diana", "David", "Evelyn", 
                "Frank", "Gina", "Hannah", "Ian", "Jasmine", "Jeff", "Josh"],
        getName() {
            generateName(this.names)
        }
    }
}