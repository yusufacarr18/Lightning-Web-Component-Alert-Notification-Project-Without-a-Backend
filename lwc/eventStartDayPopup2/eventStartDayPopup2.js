/**
 * Created by Acar on 25/05/2024.
 */

import { api, LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from "lightning/platformShowToastEvent";

const FIELDS = ["Event__c.Id", "Event__c.Name", "Event__c.EventStartTime__c", "Event__c.EventEndTime__c", "Event__c.EventType__c"];
export default class EventStartDayPopup2 extends LightningElement {
    @api recordId;
    eventStartDateTime; // Showing event date time like "31/10/2025, 12:00"

    eventDate; // Showing event date part like "28/05/2027"
    eventTime; // Showing event time part like "12:00"

    currentDate; // Showing current date part like "31/10/2025"
    currentTime; // Showing current time part like "13:00"

    @wire(getRecord, { recordId: "$recordId", fields: FIELDS })
    eventMeetingRecord({ error, data }) {
        if (data) {
            console.log('Event Data:', data);
            this.eventStartDateTime = data.fields.EventStartTime__c.displayValue; // Getting start date like "31/10/2025, 12:00"
            this.eventDate = this.eventStartDateTime.split(',')[0] ; // Getting time part like "28/05/2027"
            this.eventTime = this.eventStartDateTime.split(',')[1] ; // Getting time part like "12:00"
            this.showToastEvent(data)
        } else if (error) {
            console.error('Error:', error);
        }
    }

   showToastEvent(data){
       const currentDate = this.getFormattedDate(); // get format like that "01/06/2024, 16:26"
       const isEventTodayAndNotPassed  = this.isEventTodayAndNotPassed(currentDate, this.eventStartDateTime); // return boolean value true or false
       console.log('current time '+this.currentTime)
       console.log('event time '+this.eventTime)
       console.log('isEventTodayAndNotPassed  '+isEventTodayAndNotPassed)

       if(isEventTodayAndNotPassed){
         const toastEvent = new ShowToastEvent({
             title: 'Event time is today.',
             message: 'The event starts today at '+this.eventTime,
             variant: 'warning'
         });
         this.dispatchEvent(toastEvent);
     }

   }

    getFormattedDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months start from 0, so we add 1
        const year = today.getFullYear();
        const hours = String(today.getHours()).padStart(2, '0');
        const minutes = String(today.getMinutes()).padStart(2, '0');
        const formattedDate = `${day}/${month}/${year}, ${hours}:${minutes}`
        this.currentDate = formattedDate.split(',')[0];
        this.currentTime = formattedDate.split(',')[1];
        return formattedDate;
    }
    isEventTodayAndNotPassed(currentDate, eventDate) {
        const currentDateTime = this.parseDateTime(currentDate);
        const eventDateTime = this.parseDateTime(eventDate);

        console.log('this.currentDate : '+this.currentDate)
        console.log('this.eventDate : '+this.eventDate)
        console.log('currentDateTime : '+currentDateTime)
        console.log('eventDateTime : '+eventDateTime)
        console.log('this.currentDate is equal to this.eventDate : '+(this.currentDate === this.eventDate))
        console.log('(currentDateTime < eventDateTime) : '+(currentDateTime < eventDateTime))
        return (this.currentDate === this.eventDate) && (currentDateTime < eventDateTime)
    }

     parseDateTime(dateTimeStr) {
        const [datePart, timePart] = dateTimeStr.split(', ');
        const [day, month, year] = datePart.split('/').map(Number);
        const [hours, minutes] = timePart.split(':').map(Number);
        return new Date(year, month - 1, day, hours, minutes);
    }
}