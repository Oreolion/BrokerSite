const DashBoardData = () => {
  return (
    <>
      <main className="dashboard__data">
        <h1>Deposit History</h1>
        <div className="data__container">
          <div>
            <p>DEPOSIT PLAN</p>
            <p>AMOUNT</p>
            <p>STATUS </p>
            <p>CREATED </p>
          </div>
          <div>
            <p> {}</p>
            <p>{}</p>
            <p>{} </p>
            <p>{} </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashBoardData;
