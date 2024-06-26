<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/229729146/23.2.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T848271)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# Reporting for React - How to Integrate the Report Designer in React App

This example shows how to incorporate the Web Report Designer into a client-side app built with React. The example consists of two parts:

- A server (back-end) ASP.NET Core project that enables [cross-domain requests (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (Access-Control-Allow-Origin) and implements a custom web report storage.

- A React front-end client application.

Perform the following steps to run this example:

1. Open the back-end project solution (*ServerSideApp/ServerSideApp.sln*) in Visual Studio and run the project.
2. Navigate to the *react-report-designer* folder that is the client part's root folder.
3. Open the console and run the following command:

    ```npm install```

4. Run the command to compile and start the client part:

    ```npm start```

5. The client application opens the browser at http://localhost:3000/. It displays the **Report Designer** with the **TestReport** report.

> [!TIP]
> Make sure that the backend application runs on the port specified in the host setting of the Report Designer component. For more information, refer to the following help topic: [Determine the Host URL](https://docs.devexpress.com/XtraReports/400196/web-reporting/asp-net-core-reporting/server-side-configuration/report-designer-server-side-configuration-asp-net-core#step-3-determine-the-host-url).

![](Images/screenshot.png)

## Files to Review

- [App.js](react-report-designer/src/App.js)

## Documentation

- [Report Designer Integration in React](https://docs.devexpress.com/XtraReports/119339)

## More Examples

- [Reporting for Web (React) - Document Viewer](https://github.com/DevExpress-Examples/reporting-document-viewer-in-javascript-with-react).
<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=reporting-react-integrate-end-user-designer&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=reporting-react-integrate-end-user-designer&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
