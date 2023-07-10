This is TechLabs team project summer 2023

## Figma Prototype Can Be Found Here
https://www.figma.com/proto/srzya7iFCFzXl3rj0no28N/Team-Project?page-id=0%3A1&type=design&node-id=2-37&viewport=475%2C246%2C0.35&t=rLy7luu59rESQmaL-1&scaling=scale-down&starting-point-node-id=2%3A37&mode=design

## Media Query Can Be Found Here
https://github.com/HeppyAndriawan/Media_Query/blob/main/media_query.css

## How to setup Database
1. Create MonggoDB Account here : https://www.mongodb.com/cloud/atlas/register
2. After Create Acount are finish the next you can find and click "Browse Collections" and please create your first database with "Collection name" === "User"
3. Next step, you can go back to the previouse page by click "Database" below the green title "DEPLOYMENT"
4. Next, please find and click "Connect" button, if you not setup the connection method yet you can choose "Drivers" like like the image bellow

* ![Screenshot](./public/ReedMeImg/Screenshot%202023-07-10%20at%2010.45.46.png)

5. If you already setup everything, then you can copy the "Connection String", the string begin with title "mongodb+srv". Please copy eveything.
6. Please make sure your VSCode is open with the project from your brunch, the find and open the file ".env" then paste the string you copied into ( DATABASE_URL = paste here ) 
7. After you paste the string then please go back to MonggoDB website, then again click "Browse Collections" then click the database name (not Collection Name) and copy it.
8. Again go back to your VSCode, and on the DATABASE_URL string you can paste the database name into very last part of the string after "mongodb.net/paste here"
9. Also dont forget to changes the <password> into your database user password without < or >.
10. So the string will looks like this:

* DATABASE_URL="mongodb+srv://USERNAME:PASSWORD@cluster0.ns1yp.mongodb.net/DATABASE-NAME?ssl=true&connectTimeoutMS=5000"


11. Now you can try by run this command in the terminal "npm run dev" and go to your browser and visit http://localhost:3000/signup to if the connection is working