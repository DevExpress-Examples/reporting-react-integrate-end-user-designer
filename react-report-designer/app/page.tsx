'use client';
import ReportDesigner, { RequestOptions  } from 'devexpress-reporting-react/dx-report-designer';
import 'devextreme/dist/css/dx.light.css';
import '@devexpress/analytics-core/dist/css/dx-analytics.common.css';
import '@devexpress/analytics-core/dist/css/dx-analytics.light.css';
import 'devexpress-reporting/dist/css/dx-webdocumentviewer.css';
import 'ace-builds/css/ace.css';  
import 'ace-builds/css/theme/dreamweaver.css';  
import 'ace-builds/css/theme/ambiance.css';  
import '@devexpress/analytics-core/dist/css/dx-querybuilder.css';
import 'devexpress-reporting/dist/css/dx-reportdesigner.css';

function App() {
  return (
    <ReportDesigner reportUrl="TestReport">
      <RequestOptions host="http://localhost:5000/" getDesignerModelAction="DXXRD/GetDesignerModel" />
    </ReportDesigner>       
  )
}

export default App