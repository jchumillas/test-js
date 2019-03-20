export default class Event{
    constructor(element){
        this.type = element.type;
        this.second = element.second;
        this.message = element.message;
    }

    getSecond(){
        return this.second;
    }

    getMessage(){
        return this.message;
    }

    getEventInfo(){
        let self = Object.assign({}, this);
        delete self.second;
        return "At second "+ this.second +": "+JSON.stringify(self);
    }
};