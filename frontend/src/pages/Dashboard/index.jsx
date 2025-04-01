import React from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import './styles.css'
import StackedAreaChart from '../../components/StackedAreaChart';
import PieChartComponent from '../../components/PieChartComponent';
import BarChartComponent from '../../components/BarChartComponent';

const Dashboard = () => {
    return (
        <div>
            <Header/>
            <div className="dashboard-content flex column">
                <div className="section-1 flex justify-between">

                    <div className="details-container flex column">
                        <Card width={'25vw'}>
                            <h2 className="title">
                                Steps
                            </h2>
                            <p>1400</p>
                        </Card>
                        <Card width={'25vw'}>
                            <h2 className="title">
                                Distance
                            </h2>
                            <p>3000</p>
                        </Card>
                        <Card width={'25vw'}>
                            <h2 className="title">
                                Steps
                            </h2>
                            <p>1400</p>
                        </Card>

                    </div>

                    <div className="graph">
                        <Card width={'65vw'} height={'78vh'}>
                            <StackedAreaChart/>
                        </Card>
                    </div>
                </div>

                <div className="section-2 flex justify-between">
                    <Card width={'60%'}>
                        <PieChartComponent/>
                    </Card>
                    <Card width={'37%'}>
                        <BarChartComponent/>
                    </Card>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;