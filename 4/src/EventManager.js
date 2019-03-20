import Event from './Event';

export default class EventManager{
    constructor(events, types){
        this.eventsList = [];
        events.forEach(element => {
            if(types.indexOf(element.type) != -1){
                this.addEvent(new Event(element));
            }
        });
    }

    addEvent(event){
        this.eventsList.push(event);
    }

    throwEvents(){
        this.eventsList.forEach(element => {
            setTimeout(() => {
                console.log(element.getEventInfo());
            }, element.getSecond()*1000);
        });
    }

    run() {
        this.throwEvents();
    }
};