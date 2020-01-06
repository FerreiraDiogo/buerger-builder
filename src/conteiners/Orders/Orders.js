import React, {Component} from 'react';
import styles from './orders.module.css';
import Order from "../../components/Order/Order"
import axios from "../../axios"
import WithErrorsHandler from "../../hocs/errorHandler/ErrorHandler"
class Orders extends Component {

    state = {
        orders:[],
        loading:true
    }

    componentDidMount(){
        axios.get("/orders.json")
              .then((res)=>{
                  const fetchedOrders = []
                  for(let key in res.data){
                      fetchedOrders.push({
                          ...res.data[key],
                          id:key
                        })

                  }
                  this.setState({loading:false, orders:fetchedOrders})
                  console.log(fetchedOrders)
              })
                  
                  .catch((err) => {
                      console.log(err);
                      this.setState({loading:false}) 
                    });
    }

    render(){
        return(
                <div>
                    {this.state.orders.map((ord) =>{
                        return (
                            <Order key={ord.id} ingredients={ord.ingredients} price={ord.price}/>
                        )
                    })}
                </div>
            );
    }
}

export default WithErrorsHandler(Orders, axios);