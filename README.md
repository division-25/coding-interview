	1. Install Node.js (LTS)
	2. Clone project using Git: https://github.com/division-25/coding-interview.git: Or bootstrap manually
		a. Install and bootstrap a new Office Add-in project. Refer to this page for more info: https://learn.microsoft.com/en-us/office/dev/add-ins/quickstarts/excel-quickstart-jquery
			i. Select "Office Add-in Task Pane project"
			ii. Give the project a name of "Div25 Sample Add-in"
			iii. You can use Javascript or Typescript (preferred)
			iv. Use Excel as the client application
				1) After this step, if you encounter errors, point VSCode to the project folder "Open Folder", then npm I, then try debugging the application. If all works, then Excel should start and the taskpane will load.
		b. FluentUI: 
			1. Add bundle as script: https://learn.microsoft.com/en-us/fluent-ui/web-components/getting-started/quick-start
			2. Use the components in html: https://learn.microsoft.com/en-us/fluent-ui/web-components/components/overview
	3. Use these credentials with the login
		a. Username: ***************
		b. Password: ***************
	4. Complete implementation of refreshAuthToken function (admin.ts) (see API endpoint below)
	5. On failed login attempt, clear the password fields text
	6. Complete implementation of downloadFinalEstimate function (taskpane.ts): This function will put (in an Excel file) the names and sell prices of all alternates within the "Awarded" Final Estimate.
		A. Complete implementation of getProjectInfoFromBaseEstimate function (admin.ts) (see API endpoint below)
			1. Use the number input into the Project UUID field to call API (type 22121 into the field)
		B. Complete implementation of getListProjectFinalEstimates function (admin.ts) (see API endpoint below)
			1. Use the number input into the Project UUID field to call API
		C. Complete implementation of getFinalEstimate function (admin.ts) (see API endpoint below)
			1. Use the ID of the Final Estimate that has "isAwarded" === true (see previous step).
		D. Use results from previous steps to do the following:
			1. Place the name of the project (step 6A) in cell A1 of the Excel file. https://learn.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-core-concepts
			2. Place the index and name of each "alternate" (step 6C) in the Excel file,  starting a couple rows below the project name.
		E. Complete implementation of getProjectAlternateEstimate function (admin.ts) (see API endpoint below)
			1. Use the ID of each alternate (step 6C) to call the API
			2. Place the "sellPrice" of each alternate next to each name in the Excel file
	
	
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![image](https://github.com/user-attachments/assets/ea246a08-00fb-4a43-82fa-4b115f6092ba)

![image](https://github.com/user-attachments/assets/0e3a1be4-4a97-4a33-a98c-bb45e7945076)

![image](https://github.com/user-attachments/assets/9768a862-f4a3-4a6d-86fe-926028643e30)

![image](https://github.com/user-attachments/assets/c44baae5-12d1-467c-b0b5-b274f940c8e7)
![image](https://github.com/user-attachments/assets/f329580a-8182-42f9-970a-41f62348aea8)

![image](https://github.com/user-attachments/assets/30193a4b-f406-4831-b47c-a02744f7d30f)
