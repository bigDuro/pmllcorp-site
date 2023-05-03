'use client';

import Script from 'next/script'
import { loanOfficerData } from '@/src/constants/loanOfficerData';


export default function Application() {
    const loanOfficer = loanOfficerData['keith-richburg'];
    const { workFlowId, lar, externalLoginWindow } = { ...loanOfficer };
    console.log('loanOfficer:: ', loanOfficer)

    return (   
        <main style={{ backgroundColor: '#f9fafa' }}>
            <Script src="https://widget.ellieservices.com/latest/launcher.js" />
            <div className="em-widget"
                data-width="100%"
                data-height="800px"
                data-min-height="800px"
                data-site-id="5243113918"
                data-config={`{"workFlowId":"${workFlowId}","lar":"${lar}","externalLoginWindow":"${externalLoginWindow}"}`}
                data-name="ecc-loan-app"
                data-aria-label="My Loan Application"
            > 
            </div>
        </main>
    )
}
