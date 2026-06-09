All edit instructions are in this file 

**Please hit the code button to read this file properly**

1. Event Schedule
2. Teams
3. History
4. Adding new Pages
----------------------------------------------------------------
**Event Schedule**

Step 1: Go to Pages -> Details.html
Step 2: Hit Edit (little crayon)
Step 3: Click into the file then hit crtl + f. Search for "event schedule"
Step 4: Identify text area. Ex: <p>Full schedule coming soon!</p>
Step 5: Write between the "<p></p>" tags, if you want to add another line hit enter, then write in between new p tags. 
  Ex:
  <p>Full event details coming soon</p>
  <p>We apologize for the delay. Chadd is needy and asked for every provincial flag individually</p>

---------------------------------------------------------------------

**Teams**

Step 1: Go to Pages -> Teams.html
Step 2: Hit Edit (little crayon)
Step 3: Click into the file then hit crtl + f. Search for "const TEAMS"
Step 4: Notice the tables, the first is for mens, the second for women. 
Step 5: Identify the first line that isn't populated if adding new, find the line you're looking for if you're editing.
Step 6: Here is the format:
  { name: "**Team Name**", province: "**Province**", country: "**Flag image name**", photo: **Path to team photo**,
  members: **{ skip: "Alec Symeonides", lead: "Jacob Pierunek", second: "Spencer Scriver", third: "Liam Rowe", fifth: null, coach: "Gary Rowe" }** },

  - Everything must be between quotes
  - Team name and province are display writing, whatever you write is how it will appear on the page
  - For country, look at the folder images -> flags, write only the name of the flag image you're looking for. This will be ABBREVIATION.png ex: ON.png for Ontario
  - For the photo, upload the new photo to the images folder. Populate the photo: field as follows "/images/imagename.filetype" ex: "/images/photo.png"
  - For the members, if you are filling in a new team, copy paste **{ skip: "Alec Symeonides", lead: "Jacob Pierunek", second: "Spencer Scriver", third: "Liam Rowe", fifth: null, coach: "Gary Rowe" }** into the members field and replace the names with the new team names. Do not paste the asterixes.
----------------------------------------------------------------------

**History**


