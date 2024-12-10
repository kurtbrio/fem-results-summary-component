import React from "react";

const App = () => {
  const summaryData = [
    {
      title: "Reaction",
      score: 80,
      color: "red",
    },
    {
      title: "Memory",
      score: 92,
      color: "yellow",
    },
    {
      title: "Verbal",
      score: 61,
      color: "green",
    },
    {
      title: "Visual",
      score: 72,
      color: "blue",
    },
  ];

  return (
    <div className="flex justify-center md:items-center  font-primary text-lg text-blue-pale/65 min-w-screen max-h-screen w-full min-h-screen">
      <div className="grid w-full shadow-2xl md:my-10 md:grid-cols-2 bg-white md:rounded-3xl h-full md:max-w-2xl">
        <div className="bg-gradient-to-b from-blue-light_slate md:rounded-3xl to-blue-light_royal rounded-b-3xl pt-5 pb-8 md:py-10 px-10 text-center">
          <h1 className="font-bold text-2xl">Your Result</h1>
          <div className="my-8 inline-block w-52 h-52 rounded-full bg-gradient-to-b from-blue-violet to-blue-persian">
            <p className="h-full flex flex-col justify-center items-center">
              <span className="text-6xl text-white font-bold">76</span> of 100
            </p>
          </div>
          <h2 className="text-3xl text-white mb-2 font-medium">Great</h2>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="h-full p-6 md:py-10 text-blue-dark_gray">
          <h2 className="text-2xl font-bold">Summary</h2>
          <div className="flex flex-col my-5 gap-5 text-base">
            {summaryData.map((data) => (
              <>
                <div
                  className={`flex justify-between p-4 rounded-lg font-bold ${
                    data.color === "red"
                      ? "bg-red-light/5 text-red-light"
                      : data.color === "yellow"
                      ? "bg-orange-yellow/5 text-orange-yellow"
                      : data.color === "green"
                      ? "bg-green-teal/5 text-green-teal"
                      : data.color === "blue"
                      ? "bg-blue-cobalt/5 text-blue-cobalt"
                      : ""
                  }`}
                >
                  <h3 className={`icon-${data.title.toLowerCase()}`}>
                    {data.title}
                  </h3>
                  <p className="text-blue-dark_gray/50">
                    <span className="text-blue-dark_gray">{data.score}</span> /
                    100
                  </p>
                </div>
              </>
            ))}
          </div>
          <button className="bg-blue-dark_gray text-blue-pale py-3 w-full text-xl rounded-full mt-2 hover:bg-blue-light_royal transition-colors delay-75 ease-out">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
