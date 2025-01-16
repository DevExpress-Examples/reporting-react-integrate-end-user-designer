import ReportViewer, { RequestOptions } from 'devexpress-reporting-react/dx-report-viewer';
import 'devextreme/dist/css/dx.light.css';
import '@devexpress/analytics-core/dist/css/dx-analytics.common.css';
import '@devexpress/analytics-core/dist/css/dx-analytics.light.css';
import 'devexpress-reporting/dist/css/dx-webdocumentviewer.css';

function App() {

  return (
    <ReportViewer reportUrl="TestReport">
      <RequestOptions host="https://localhost:5001/" invokeAction="DXXRDV" />
    </ReportViewer>        
  )
}

export default App