import Script from 'next/script'

export default function Application() {
    return (
      <main style={{backgroundColor: '#f9fafa'}}>
        <Script src="https://widget.ellieservices.com/latest/launcher.js" />
        <div className="em-widget"
          data-width="100%"
          data-height="800px"
          data-min-height="800px"
          data-site-id="5243113918" 
          data-config='{"workFlowId":"138568"}'
          data-name="ecc-loan-app">
        </div>
      </main>
    )
  }
  