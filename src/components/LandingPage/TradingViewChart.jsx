// TradingViewWidget.jsx

import  { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewChart() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_dd08c') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "NASDAQ:AAPL",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            enable_publishing: false,
            allow_symbol_change: true,
            details: true,
            container_id: "tradingview_dd08c"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container1' >
      <div id='tradingview_dd08c' style={{ height: "calc(100% - 32px)", width: "100%" }} />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow noreferrer" target="_blank"><span className="blue-text">Track all markets on FFB</span></a>
      </div>
    </div>
  );
}
