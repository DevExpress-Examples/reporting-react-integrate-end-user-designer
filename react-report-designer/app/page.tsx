'use client';
import dynamic from 'next/dynamic'
import RequestOptions from 'devexpress-reporting-react/dx-report-designer/options/RequestOptions';
const ReportDesigner = dynamic(() => import('devexpress-reporting-react/dx-report-designer'), {ssr: false})

function App() {
  return (
    <ReportDesigner reportUrl="TestReport">
      <RequestOptions host="http://localhost:5000/" getDesignerModelAction="DXXRD/GetDesignerModel" />
    </ReportDesigner>       
  )
}

export default App