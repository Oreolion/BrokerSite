import { useEffect, useRef } from "react";

const TradingViewWidget = () => {
  const myRef = useRef(null);
  useEffect(() => {
    // Insert the TradingView Widget script dynamically
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500",
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "US 100",
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR to USD",
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum",
        },
      ],
      showSymbolLogo: true,
      colorTheme: "light",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "en",
    });

    myRef.current.appendChild(script);

    return () => {
      // Cleanup: remove the script tag if the component unmounts
      if (myRef.current) {
        myRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="widgetbox" ref={myRef}>
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow noreferrer"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default TradingViewWidget;
