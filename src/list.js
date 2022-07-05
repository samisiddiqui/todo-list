class list {
    constructor(key) {
        this.array = [];
        this.keyValue = JSON.parse(localStorage.getItem(key));
        for(let x = 0; x < this.keyValue.length; x++) {

        }
    }

    getList() {
        return this.keyValue;
    }

    sort() {
        
    }

    append(val) {
        this.array.push[val];
    }

}

export default list;