
import React from 'react';

class TypeWriter extends React.Component{
    constructor(props){
        super(props);
        this.state = {title: "", subtitle: ""};
        this.target = props.target;
        this.updated = 0;
        this.up = true;
        this.newword = false;
        this.running = false;
    }

    render(){
        
        if(this.updated === 1){
            this.newword = true;
            if(!this.running){
                this.running = true;
                this.interval = setTimeout(this.updateTitles, 20);
                //console.log(this);
            }
        }
        this.updated+=1;
        return (
            <div id="typeWriter">
                <center>
                <h3>{this.state.title}</h3>
                <p>{this.state.subtitle}</p>
                </center>
            </div>
        )
    }

    updateTitles = () => {
        var newTitle = this.state.title;
        var newSubtitle = this.state.subtitle;
        var keepRunning = true;
        //did the title prop change?
        if(this.newword){
            //console.log('new word');
            this.target = this.props.target;
            this.up = false;
            this.newword = false;
        }
        //type the new title
        if(this.up){
            this.up = false;
            if(this.state.title !== this.target.title){
                newTitle = this.target.title.substring(0,this.state.title.length+1);
                this.up=true;
            }
            if(this.state.subtitle !== this.target.subtitle){
                newSubtitle = this.target.subtitle.substring(0,this.state.subtitle.length+1);
                this.up = true;
            }
            if(!this.up){ 
                keepRunning = false; //console.log("here");
            }
        }
        //delete old title
        else{
            this.up = true;
            if(this.state.title !== ""){
                newTitle = this.state.title.substring(0,this.state.title.length-1);
                this.up = false;
            }
            if(this.state.subtitle !== ""){
                newSubtitle = this.state.subtitle.substring(0,this.state.subtitle.length-1);
                this.up = false;
            }  
        }
        //update title
        this.updated = 0;
        this.setState({ title: newTitle, subtitle: newSubtitle});
        this.updated = 0;
        if(keepRunning){
            this.running = true;
            this.interval = setTimeout(this.updateTitles, 20);
        }else{
            this.running = false;
        }
    }

    componentWillUnmount() {
        clearTimeout(this.interval);
    }
}

export default TypeWriter
