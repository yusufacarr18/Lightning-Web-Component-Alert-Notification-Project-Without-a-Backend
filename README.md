![Pop-up Gif](https://github.com/yusufacarr18/Lightning-Web-Component-Alert-Notification-Project-Without-a-Backend/blob/main/images/pop-up.gif)

# Lightning-Web-Component-Alert-Notification-Project-Without-a-Backend
 LWC notification alert project only fronted development


In Salesforce environment, we often need pop-up to inform or warn the user on the registration pages.
Previously, we could offer nice improvements to the interface with the combination of **Apex + Aura** or **Apex + LWC**.



Although these two combinations work for us, we can now complete all this work with only one of them.



Now only **LWC** is enough!



In this study, we will develop a pop-up display according to **EventStartTime__c** custom dateTime field on the current record page. We will manage all the work with **LWC** without any help from **Apex**.



If the **EventStartTime__c** value is equal to the current day and has not yet passed the hour, we display this notification on the screen.



As a first step, we create and deploy our folder that will consist of **javaScript, html and metadata** files. We don’t need **css** file for this project.



![Data Object Model](https://github.com/yusufacarr18/Lightning-Web-Component-Popup-Notification-Without-a-Backend/blob/main/images/dataObjectModel.png)
 Data Object Model



![Creating New LWC Folder](https://github.com/yusufacarr18/Lightning-Web-Component-Popup-Notification-Without-a-Backend/blob/main/images/creatingNewLwcFolder.png)
 Creating New LWC Folder



## 1-) HTML File



![HTML File](https://github.com/yusufacarr18/Lightning-Web-Component-Popup-Notification-Without-a-Backend/blob/main/images/htmlFile.png)



We do not need to make any additions to our html file for pop up development, we can leave it as it was created.



## 2-) JavaScript File



![JS File 1](https://github.com/yusufacarr18/Lightning-Web-Component-Popup-Notification-Without-a-Backend/blob/main/images/jsFile1.png)



![JS File 2](https://github.com/yusufacarr18/Lightning-Web-Component-Popup-Notification-Without-a-Backend/blob/main/images/jsFile2.png)



In the javascript file, we first import the necessary content.



•	**import { api, LightningElement, wire } :**
        module allows us to use the features belonging to lwc

•	**import { getRecord } :**
        this module is a structure that takes **‘recordId’** and **‘fields’** parameters and returns us information about this record


•	**import { ShowToastEvent } :**
        This module is used to display short-lived notifications to the user. Commonly known as **“toast”** messages in the Salesforce user interface, they are used to provide instant feedback about operations.



Secondly, we will define the variables.



•	**recordId:** Related record Id

•	**eventStartDate:** Showing event date time like “31/10/2025, 12:00”

•	**eventDate :** Showing event date part like “28/05/2027”

•	**eventTime:** Showing event time part like “12:00”

•	**currentDate:** Showing current date part like “31/10/2025”

•	**currentTime:** Showing current time part like “13:00”



Thirdly, we will define methods.



•	**eventMeetingRecord Method :**
        With this method, we access the information of the related record using the getRecord module and fill in the **eventStartDate**, **eventDate**, **eventTime** variables

•	**showToastEvent Method :**
        The showToastEvent method in your **Lightning Web Component (LWC)** code is responsible for displaying a toast notification based on the retrieved event data and current **date/time**. Here's a breakdown of its functionality:

•	**getFormattedDate Method :**
        This method is useful for displaying the current date and time in a user-friendly format and for easily accessing the date and time separately within the component.

•	**isEventTodayAndNotPassed Method :**
        This method checks if an event occurs today and has not yet passed. It compares the current date with the event date and time to determine if the event is scheduled for today and if it's in the future.

•	**parseDateTime Method :**
        The parseDateTime method takes a date and time string in the format **dd/mm/yyyy**, hh:mm and converts it into a **JavaScript Date** object.



## 3-) Metadata File



![Metadata File](https://github.com/yusufacarr18/Lightning-Web-Component-Popup-Notification-Without-a-Backend/blob/main/images/metadataFile.png)



In order to use the component in the record page, we update the target and isExposed parts.




## 4-) Adding the component on the Record Page




Our development is ready, there is one last step left for us to see the notification on the registration page and that is to add the development to the registration page.




![Edit Page](https://github.com/yusufacarr18/Lightning-Web-Component-Popup-Notification-Without-a-Backend/blob/main/images/editPage.gif)
Adding Component to Record Page





Go to the page of any record, open the edit page screen and type the name of the component in the search section on the left side. Drag the resulting component anywhere on the record page. Then make the component available by pressing the save button.





## Summary

> [!NOTE]
> In this article, we examined an LWC development that allows us to output a Alert notification on a record page. It was a development that allows us to work only on the frontend side without having a backend side.


Thank you for reading, please like or share to support. You can share your thoughts with me. I’m looking forward to your feedback! I would love to connect with you at [LinkedIn](https://www.linkedin.com/in/acaryusuf/) and 
[Medium](https://medium.com/@yusufacarr18)








