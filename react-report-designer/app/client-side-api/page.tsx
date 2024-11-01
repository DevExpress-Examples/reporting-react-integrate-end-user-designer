'use client';
import dynamic from 'next/dynamic'
import Callbacks from 'devexpress-reporting-react/dx-report-designer/options/Callbacks'
import RequestOptions from 'devexpress-reporting-react/dx-report-designer/options/RequestOptions';
import {ActionId } from 'devexpress-reporting/viewer/constants';
const ReportDesigner = dynamic(() => import('devexpress-reporting-react/dx-report-designer'), {ssr: false})


function App() {
  const onTabChanged = ({ args }: { args: any }): void => {
    alert("The tab was changed to " + args.Tab.displayName());
  };
  const onReportOpened = ({ args }: { args: any }): void => {
    args.Report.measureUnit("TenthsOfAMillimeter");
  };
  const onPreviewCustomizeMenuActions = ({ args }: { args: any }): void => {
    var actions = args.Actions;
    // Get the "Print Page" action and hide it. 
    var printPageAction = args.GetById(ActionId.PrintPage);
    if (printPageAction)
      printPageAction.visible = false;
    // Add a new action. 
    actions.push({
      text: "Custom Command",
      imageClassName: "customButton",
      imageTemplateName: "dxrd-svg-wizard-warning",
      hasSeparator: false,
      disabled: false,
      visible: true,
      hotKey: { ctrlKey: true, keyCode: "Z".charCodeAt(0) },
      clickAction: function () {
          alert('Clicked.');
      }
    })  
  };  
  return (
    <ReportDesigner reportUrl="TestReport">
        <RequestOptions host="http://localhost:5000/" getDesignerModelAction="DXXRD/GetDesignerModel" />\
        <Callbacks TabChanged={onTabChanged} 
                   ReportOpened={onReportOpened}
                   PreviewCustomizeMenuActions={onPreviewCustomizeMenuActions}/>
    </ReportDesigner>       
  )
}

export default App;