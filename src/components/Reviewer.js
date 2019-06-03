
import Brain from 'brain.js'


export const handleTransformDataSet = (dataset) =>  {
    let data = [];

    for (let i = 0; i < dataset.length; i++) {
        data.push({
            input: {
                acid:  parseFloat((parseFloat(dataset[i]["citric acid"])/10).toFixed(4)),
                acidity:  parseFloat((parseFloat(dataset[i]["fixed acidity"])/100).toFixed(4)),
                alcohol:  parseFloat((parseFloat(dataset[i]["alcohol"])/100).toFixed(4)),
                chlorides:  parseFloat((parseFloat(dataset[i]["chlorides"])/10).toFixed(4)),
                density:  parseFloat((parseFloat(dataset[i]["density"])/10).toFixed(4)),
                ph:  parseFloat((parseFloat(dataset[i]["pH"])/10).toFixed(4)),
                sugar:  parseFloat((parseFloat(dataset[i]["residual sugar"])/1000).toFixed(4)),
                sulfur_free:  parseFloat((parseFloat(dataset[i]["free sulfur dioxide"])/1000).toFixed(4)),
                sulfur_total:  parseFloat((parseFloat(dataset[i]["total sulfur dioxide"])/1000).toFixed(4)),
                sulphates: parseFloat((parseFloat(dataset[i]["sulphates"])/10).toFixed(4)),
                volatile: parseFloat((parseFloat(dataset[i]["volatile acidity"])/10).toFixed(4))
        },
            output: {
                quality: parseFloat(dataset[i].quality)/10
            }
        });
    }


    return data;

};

export const handleSetNeuralNetwork = (trainingData) => {

    const net = new Brain.NeuralNetwork({
        hiddenLayers: [12],
        iterations: 2000,
        learningRate: 0.5
    });
    const numTrainingData = 1000;


    const slicedData = trainingData.slice(0, numTrainingData);


    net.train(slicedData, {
        errorThresh: 0.005,
        iterations: 20000,
        log: true,
        logPeriod: 1000,
        learningRate: 0.01
    });

    console.log(net);
    
    return net;

};

 export const handleRunNetwork = (network, input, data) => {
     const numTrainingData = 1000;
     //network.train(data, numTrainingData);
     return network.run(input);
 };

 export const handleStatsForGeeks = (network, data, trainingProps) => {
     console.log(network);
     const numTrainingData = 100;
     let error = 0;
     for (let i = 0; i < 50; ++i) {
         const { quality } = network.run((data[numTrainingData + i].input));
         error += Math.abs(quality - data[numTrainingData + i].output.quality);
         //console.log(i, quality, data[numTrainingData + i].output.quality);
     }
     console.log('Average error', error / 50);
 };