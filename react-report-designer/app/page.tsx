'use client';
import ReportDesigner, { RequestOptions  } from 'devexpress-reporting-react/dx-report-designer';

function App() {
  return (
    <ReportDesigner reportUrl="TestReport">
      <RequestOptions host="http://localhost:5000/" getDesignerModelAction="DXXRD/GetDesignerModel" />
    </ReportDesigner>       
  )
}

export default App