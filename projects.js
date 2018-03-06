import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, Button, CardMenu, IconButton, CardText, CardActions } from 'react-mdl';

const CardCategory = () => (
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px', 
            background: 'url(http://rubiomarco.com/wp-content/uploads/2018/01/834e2830896e6b93c5eaf8c2610a4936.jpg)'}}>
            Projects
        </CardTitle>
        <CardText>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </p>
        </CardText>
        <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Github</Button>
            <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
);

class Projects extends Component {
    constructor(){
        super();
        this.state = {
            activeTab: 0,
        };
    }

    toggleCategory(){
        switch(this.state.activeTab){
            case 0:
                return <CardCategory />
            case 1:
                return <CardCategory />
            case 2:
                return <CardCategory />
        }
    }

    render() {
        return(
            <div className="category-tabs">
                
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                    <Tab>React</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>Angular</Tab>
                </Tabs>
                
                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategory()}
                        </div>
                    </Cell>
                </Grid>
                
            </div>
        );
    }
}

export default Projects;