import React, {Component} from 'react';
import Loading from "./Loading";

class WaitLoader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            idTime: null,
        }
    }

    componentDidMount() {
        this.changeStateLoading();
    }

    changeStateLoading = () => {
        let idTime = setTimeout(() => {
            //console.log(idTime);
            this.props.statusLoading(false);
        }, 5000);
        this.setState({idTime});
    }

    componentWillUnmount(){
        clearTimeout(this.state.idTime);
    }

    render(){
        return (
            <div className='container bg-light'>
                <div className='row my-3'>
                    <div className='col-12 text-center'>
                        <h3>Loading...</h3>
                    </div>
                    <div className='col-12'>
                        <Loading />
                    </div>
                </div>
            </div>
        );
    }
}

export default WaitLoader;