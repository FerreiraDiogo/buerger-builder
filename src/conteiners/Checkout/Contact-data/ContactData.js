import React, {Component} from 'react';
import styles from './contactData.module.css';
import Button from '../../../components/UI/Button/Button'
import axios from "../../../axios";
import Spinner from "../../../components/UI/Spinner/Spinner"

class ContactData extends Component {
    state={
        name:"",
        email:"",
        address:{
            street:"",
            postalCode:""
        },
        loading:false
    }

    orderHandler = (event) =>{
        event.preventDefault();
                //o firebase exige o .json no endpoint
        this.setState({loading:true});
        const order ={
            ingredients:this.props.ingredients,
            price:this.props.price,
            customer:{
                name:"Diogo Ferreira",
                adress:{
                    street:"Rua do Limoeiro",
                    zipCode:"12345-678",
                    country:"Brasil"
                },
                email:"diogo@reactlearn.com"
            },
            deliveryMethod:"fastest"
        }
        axios.post("/orders.json",order) //,postHeaders
                .then(res =>{this.setState({loading:false});this.props.history.push("/")})
                .catch(err =>{console.log(err);this.setState({loading:false})})
    }
    render(){

        let form =(
          
                    <form>
                        <input className={styles.Input}type="text" name="email" placeholder="Enter your email" />
                        <input className={styles.Input}type="text" name="name" placeholder="Enter your name" />
                        <input className={styles.Input}type="text" name="street" placeholder="Enter your street" />
                        <input className={styles.Input}type="text" name="postalcode" placeholder="Enter your postal code" />

                        <Button btnType="Success" clicked={this.orderHandler}> Order</Button>


                    </form>
        );
        if(this.props.loading){
            form =   <Spinner />
        }

        return(
            <div className = {styles.ContactData}>
                <h4>Enter your contact data</h4>
                 {form}
            </div>
            );
    }
}

export default ContactData