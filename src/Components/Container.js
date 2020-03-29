import React from 'react';
import {CartesianGrid, Legend, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis} from "recharts";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
var _ = require('lodash');

let styles = {
    container: {
        width: '900px',
        height: '400px',
        marginTop: "200px",
        border: "1px solid grey",
        marginLeft: '51px',
    },
    insideContainer: {
        width: '800px',
        height: '400px',
        position: 'relative',
        marginTop: '50px',
    },
    sliderContainer: {
        width: '600px',
        marginLeft: '51px',
        marginTop: '40px',
    },

};

const pointsColors = {
    0: "#d81c0a",
    1: "#8884d8",
    2: "#82ca9d",
    3: "#ff8734"
};

const distances = {
    immediate: 50,
    near: 100,
    far: 200
};

const pointsYDistance= {
    1: 100,
    2: 200,
    3: 300
};

const originCoord = {
    left: 400,
    top: 200
};

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.marks = this.getMarks();
        let currentTS = _.toArray(this.marks)[0];
        this.state = {
            currentTimestamp: data[currentTS]
        }
    }

    onChange = (value) => {
        console.log("Slider ", value);
        this.setState({
            currentTimestamp: data[value]
        });
    }

    getMarks= () => {
        let timestamps = {};
        _.forEach(data, (value, key) => {
            timestamps[key] = key;
        });
        return timestamps
    };

    render () {
        const {currentTimestamp} = this.state;
        let distance1, distance2, distance3;
        _.forEach(currentTimestamp, (item)=>{
            if ( item.id === 1 ) {
                distance1 = distances[item.distance];
            } else if ( item.id === 2 ) {
                distance2 = distances[item.distance];
            } else if ( item.id === 3) {
                distance3 = distances[item.distance];
            }
        });
        debugger;
        let tel1Position = (distance1)? originCoord.left - distance1 : 0;
        let tel2Position = (distance2)? originCoord.top - distance2 : 0;
        let tel3Position = (distance3)? originCoord.left + distance3 : 0;
        // styles.tel1.left = originCoord.left - distance1 + "px";
        return (
            <div style={styles.container}>
                <div style={styles.insideContainer}>
                    {distance1? (
                        <div>
                        <div className="line1" style={{width: distance1, left: tel1Position}}/>
                        <div className="tel1" style={{left: tel1Position}}/>
                        </div>
                    ): null}
                    {distance2? (
                        <div>
                            <div className="line2" style={{height: distance2, top: tel2Position}}/>
                            <div className="tel2" style={{top: tel2Position}}/>


                        </div>
                    ): null}

                    {distance3? (
                    <div>
                        <div className="line3" style={{width: distance3}}/>
                        <div className="tel3" style={{left: tel3Position}}/>
                    </div>
                ): null}

                    <div className="origin"/>



                </div>

                <div style={styles.sliderContainer}>
                    <Slider onChange={this.onChange} marks={this.marks} step={null}/>
                </div>
            </div>
        );
    }
}


const data =
    {
        "10":[
            {
                "id": 1,
                "distance": "immediate", // una tra 'i', 'n' e 'f', stanno per immediate, near e far
            },
            {
                "id": 2,
                "distance": "near", // una tra 'i', 'n' e 'f', stanno per immediate, near e far
            },
            {
                "id": 3,
                "distance": "near", // una tra 'i', 'n' e 'f', stanno per immediate, near e far
            },
        ],
        "20":[
            {
                "id": 1,
                "distance": "near", // una tra 'i', 'n' e 'f', stanno per immediate, near e far
            },
            {
                "id": 2,
                "distance": "far", // una tra 'i', 'n' e 'f', stanno per immediate, near e far
            },
        ],
        "30":[
            {
                "id": 1,
                "distance": "near", // una tra 'i', 'n' e 'f', stanno per immediate, near e far
            },
            {
                "id": 2,
                "distance": "far", // una tra 'i', 'n' e 'f', stanno per immediate, near e far
            },
            {
                "id": 3,
                "distance": "immediate", // una tra 'i', 'n' e 'f', stanno per immediate, near e far
            },
        ],
        "40":[
            {
                "id": 1,
                "distance": "near", // una tra 'i', 'n' e 'f', stanno per immediate, near e far
            },
            {
                "id": 2,
                "distance": "far", // una tra 'i', 'n' e 'f', stanno per immediate, near e far
            },
        ],
        "50":[
            {
                "id": 1,
                "distance": "immediate", // una tra 'i', 'n' e 'f', stanno per immediate, near e far
            },
            {
                "id": 2,
                "distance": "far", // una tra 'i', 'n' e 'f', stanno per immediate, near e far
            },
        ],
        "60":[
            {
                "id": 1,
                "distance": "near", // una tra 'i', 'n' e 'f', stanno per immediate, near e far
            },
            {
                "id": 2,
                "distance": "far", // una tra 'i', 'n' e 'f', stanno per immediate, near e far
            },
            {
                "id": 3,
                "distance": "near", // una tra 'i', 'n' e 'f', stanno per immediate, near e far
            }
        ]
    }
;


export default Container;
