
import Brain from 'brain.js'


export const handleTransformDataSet = (dataset) =>  {
    let data = [];

    for (let i = 0; i < dataset.length; i++) {
        data.push({
            input: {
                acidity: parseFloat(dataset[i]["fixed acidity"])/100,
                volatile: parseFloat(dataset[i]["volatile acidity"])/10,
                acid: parseFloat(dataset[i]["citric acid"])/10,
                sugar: parseFloat(dataset[i]["residual sugar"])/1000,
                chlorides: parseFloat(dataset[i]["chlorides"])/10,
                sulfur_free: parseFloat(dataset[i]["free sulfur dioxide"])/1000,
                sulfur_total: parseFloat(dataset[i]["total sulfur dioxide"])/1000,
                density: parseFloat(dataset[i]["density"])/10,
                ph: parseFloat(dataset[i]["pH"])/10,
                sulphates: parseFloat(dataset[i]["sulphates"])/10,
                alcohol: parseFloat(dataset[i]["alcohol"])/100
        },
            output: {
                quality: parseFloat(dataset[i].quality)/10
            }
        });
    }


    return data;

};

export const handleSetNeuralNetwork = (trainingData, input) => {

    const net = new Brain.NeuralNetwork();
    const numTrainingData = 1000;

    const slicedData = trainingData.slice(0, numTrainingData);

    net.train(slicedData);
    console.log(slicedData);
    console.log(net.run({acid: 0.013000000000000001,
        acidity: 0.083,
        alcohol: 0.091,
        chlorides: 0.009600000000000001,
        density: 0.09984,
        ph: 0.317,
        sugar: 0.0029,
        sulfur_free: 0.014,
        sulfur_total: 0.063,
        sulphates: 0.062,
        volatile: 0.057999999999999996
    }));
    return net;

};

 export const handleRunNetwork = (network, input) => {
     console.log(network.run({acid: 0.016,
         acidity: 0.08,
         alcohol: 0.105,
         chlorides: 0.006500000000000001,
         density: 0.09962,
         ph: 0.34199999999999997,
         sugar: 0.0018,
         sulfur_free: 0.003,
         sulfur_total: 0.016,
         sulphates: 0.092,
         volatile: 0.059,
     }));
 };
//
// acidity: undefined,
//     volatile: undefined,
//     acid: undefined,
//     sugar: undefined,
//     chlorides: undefined,
//     sulfur_free: undefined,
//     sulfur_total: undefined,
//     density: undefined,
//     ph: undefined,
//     sulphates: undefined,
//     alcohol: undefined