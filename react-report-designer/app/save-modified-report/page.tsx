'use client';
import dynamic from 'next/dynamic'
import React from 'react';
import { ShowMessage, NotifyType } from '@devexpress/analytics-core/core/utils/_infoMessageHelpers';
import { getLocalization } from '@devexpress/analytics-core/property-grid/localization/localization_utils';
import { NavigateTab } from 'devexpress-reporting/dx-reportdesigner'
import RequestOptions from 'devexpress-reporting-react/dx-report-designer/options/RequestOptions';
import  { DxReportDesignerRef } from 'devexpress-reporting-react/dx-report-designer';
const ReportDesigner = dynamic(() => import('devexpress-reporting-react/dx-report-designer'), {ssr: false})

function App() {
    const designerRef = React.useRef<DxReportDesignerRef>(null);

    // Saves a modified report in the active tab
    // and clears the modification flag.
    function saveCurrentReport() {
        if (designerRef.current?.instance().IsModified()) {
            designerRef.current?.instance().SaveNewReport("Rep1");
            designerRef.current?.instance().ResetIsModified();
        }
    };
    // Saves modified reports in all tabs,
    // clears modification flags,
    // and displays a message when the report is successfully saved.
    function saveAllReports() {
        var tabs = designerRef.current?.instance().GetTabs() as NavigateTab[];
        tabs?.forEach((tab => {
            if (tab.isModified()) {
                if (!tab.url()) tab.url('Report' + Date.now());
                designerRef.current?.instance().ReportStorageSetData(tab.context().report.serialize(), tab.url())
                    .done(function (result) {
                        tab.resetIsModified();
                        ShowMessage(getLocalization("The report has been successfully saved.",
                            "ASPxReportsStringId.ReportDesigner_SaveReport_Message_OK"), NotifyType.success);
                    });
            }
        }));
    };

    return (
        <>
            <button onClick={saveCurrentReport}>Save Current Report</button>
            <br />
            <button onClick={saveAllReports}>Save All Reports</button>
            <ReportDesigner ref={designerRef} reportUrl="TestReport">
                <RequestOptions host="http://localhost:5000/" getDesignerModelAction="DXXRD/GetDesignerModel" />
            </ReportDesigner>
        </>
    )

}

export default App