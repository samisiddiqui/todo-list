class dataHandler {
  constructor() {
    if (dataHandler._instance) {
      return dataHandler._instance;
    }
    dataHandler._instance = this;
  }

  getList(list) {
    return JSON.parse(localStorage.getItem(list));
  }

  appendItem(list, value) {
    const listObjs = this.getList(list);
    const listObjsArray = [];
    if (listObjs !== null) {
      for (let obj = 0; obj < Object.keys(listObjs).length; obj += 1) {
        const currentObj = listObjs[obj];
        listObjsArray.push(currentObj);
      }
    }
    listObjsArray.push(value);
    localStorage.setItem(list, JSON.stringify(listObjsArray));
  }
}

export default dataHandler;
