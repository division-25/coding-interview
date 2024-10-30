	1. Install Node.js (LTS)
	2. Install and bootstrap a new Office Add-in project. Refer to this page for more info: https://learn.microsoft.com/en-us/office/dev/add-ins/quickstarts/excel-quickstart-jquery
		a. Select "Office Add-in Task Pane project"
		b. Give the project a name of "Div25 Sample Add-in"
		c. You can use Javascript or Typescript (preferred)
		d. Use Excel as the client application
			i. After this step, if you encounter errors, point VSCode to the project folder "Open Folder", then npm I, then try debugging the application. If all works, then Excel should start and the taskpane will load.
	3. FluentUI: 
		a. Add bundle as script: https://learn.microsoft.com/en-us/fluent-ui/web-components/getting-started/quick-start
		b. Use the components in html: https://learn.microsoft.com/en-us/fluent-ui/web-components/components/overview
	4. Username: augiel+interview@div25.com
	5. Password: !123Div25
	6. Complete implementation of refreshAuthToken function (admin.ts) (see API endpoint below)
	7. On failed login attempt, clear the password fields text
	8. Complete implementation of downloadFinalEstimate function (taskpane.ts): This function will put (in an Excel file) the names and sell prices of all alternates within the "Awarded" Final Estimate.
		A. Complete implementation of getProjectInfoFromBaseEstimate function (admin.ts) (see API endpoint below)
			1. Use the number input into the Project UUID field to call API
		B. Complete implementation of downloadFinalEstimates function (admin.ts) (see API endpoint below)
			1. Use the number input into the Project UUID field to call API
		C. Complete implementation of getFinalEstimate function (admin.ts) (see API endpoint below)
			1. Use the ID of the Final Estimate that has "isAwarded" === true (see previous step).
		D. Use results from previous steps to do the following:
			1. Place the name of the project (step 8A) in cell A1 of the Excel file. https://learn.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-core-concepts
			2. Place the index and name of each "alternate" (step 8C) in the Excel file,  starting a couple rows below the project name.
		E. Complete implementation of getProjectAlternateEstimate function (admin.ts) (see API endpoint below)
			1. Use the ID of each alternate (step 8C) to call the API
			2. Place the "sellPrice" of each alternate next to each name in the Excel file
	
	
		
	

	
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------














![image](https://github.com/user-attachments/assets/2b128dc4-190b-4825-b013-7396b907330f)
