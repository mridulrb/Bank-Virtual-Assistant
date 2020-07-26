# COVID-19 Banking Based UAE Chatbot (Labeeba)

As we all know, COVID-19 has taken a toll over many enterprises and their customers as well. During this time many customers would want the help of customer support tools to navigate through their options and get the required help for their queries in Arabic and English. In order to address this, COVID-19 Banking Assistant can serve as an asset for banking customers, helping them with their bank related queries with COVID-19 information embedded in the chatbot as well. This can be leveraged as a one-stop-shop chatbot providing users with comprehensive information regarding the current COVID-19 pandemic as well as answering their questions revolving around the financial relief loans provided by banks. 


## Technologies Used

-   Watson Assistant - for leveraging the chatbot itself.
-   Watson Discovery - for connecting the chatbot to an external data source
-   IBM Cloud Functions - for connecting Watson Discovery to Watson Assistant

## Partner Banks

| Bank Names               | Assistant URL                               |
|--------------------------|---------------------------------------------|
| FAB                      | http://fab-covid-19-chatbot.mybluemix.net/  |
| ADCB                     | http://adcb-covid-19-chatbot.mybluemix.net/ |
| ADIB                     | http://adib-covid-19-chatbot.mybluemix.net/ |
| Emirates NBD             | http://enbd-covid-19-chatbot.mybluemix.net/ |
| Mashreq                  | http://mashreq-covid-19-chatbot.mybluemix.net/ |
| Commercial Bank of Dubai | http://cbd-covid-19-chatbot.mybluemix.net/  |
| Dubai Islamic Bank       | http://dib-covid-19-chatbot.mybluemix.net/  |
| Emirates Islamic         | http://eib-covid-19-chatbot.mybluemix.net/  |

## Architecture Diagram

![Architecture Diagram Banking UAE COVID-19 Chatbot](Pictures/mycatalog-architecture-diagram-template.png)

1- User can interact with the assistant through web or mobile application.
2- The application calls Watson Assistant that is hosted on IBM Cloud.
3- Watson Assistant makes calls to Cloud Functions to extract latest information about COVID-19 cases.
4- Cloud Functions makes calls to COVID-19 cases API from Johns Hopkins CSSE.
5- Watson Discovery is connected to Watson Assistant as a search skill. Watson Assistant can retrieve the information from Watson Discovery sends.

## Sample Inputs

- Number of Cases
- Open Shops 
- Testing/Screening Centers
- Self-screening
- Banking Services
  - Provides bank names and their services after choosing the bank

#### Bot Controls
- Traversing back
  - "Bank Menu" - after a banking service has been viewed 
  - "Main Menu" - to go back to the starting of the chatbot after using a particular service

# Working Example
![BIA](Pictures/Labeeba_Working.gif)

# Screenshots

## English Chatbot in Action

![BIA](Pictures/labeeba_eng.png)
![BIA](Pictures/eng1.png)
![BIA](Pictures/eng2.png)
![BIA](Pictures/eng3.png)
![BIA](Pictures/eng4.png)
![BIA](Pictures/eng5.png)

## Arabic Chatbot in Action
![BIA](Pictures/labeeba_ar.png)
![BIA](Pictures/ar1.png)
![BIA](Pictures/ar2.png)
![BIA](Pictures/ar3.png)
