class todo {
    constructor(id, priority, title, description) {
        this.id = id;
        this.priority = priority;
        this.title = title;
        this.description = description;
    }

    getID() {
        return this.id;
    }
    setID(id) {
        this.id = id;
    }

    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }

    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }

    getPriority() {
        return this.Priority;
    }
    setPriority(priority) {
        this.priority = priority;
    }
}

export default todo;