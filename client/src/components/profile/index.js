import React from 'react';
import {Grid, Cell, TableHeader, DataTable, FABButton, Icon} from 'react-mdl';
// import image from './image/avatar';


const Profile = () => {
    return (
        <div style={{width: '100%', margin: 'auto', top:'40px'}}>
            <div className="profile-welcome">
                {/* <img 
                    src={image}
                    alt="avatar"
                    className="avatar-img"
                /> */}
                <h1> Welcome Back to Wellness Pal User (will display user name)</h1>
            </div>

            <Grid className="Portfile-content">
                <Cell col={4}>
                    <section className="BMI-section">
                        <h2>BMI Calculatar</h2>
                  <Link className=" BMI" to="./compnents/BMI">BMI Calculator</Link>
                    </section>
                    <section className="BMR-section">
                    <h2>BMR Calculatar</h2>
                    </section>
                </Cell>
                <Cell col={4}>
                    <section className="progress-section">
                        <h3> Progress</h3>
                        <p>Your Goals</p>
                        <DataTable 
                            shadow={0}
                            rows={[        
                            {material: 'Acrylic (Transparent)', quantity: 25, price: 2.90},
                            {material: 'Plywood (Birch)', quantity: 50, price: 1.25},
                            {material: 'Laminate (Gold on Blue)', quantity: 10, price: 2.35}
                            ]}      
                                >
                            <TableHeader name="material" tooltip="The amazing material name">Material</TableHeader>
                            <TableHeader numeric name="quantity" tooltip="Number of materials">Quantity</TableHeader>
                            <TableHeader numeric name="price" tooltip="Price pet unit">Price</TableHeader>
                        </DataTable>
                    </section>
                </Cell>
                <Cell col={4}>
                    <section className="calorie-section">
                        <h3> Calorie Tracker</h3>
                        <p>Keep Track of Your Meals</p>
                        <DataTable className="calories-table"
                            selectable
                             shadow={0}
                            rowKeyColumn="id"
                            rows={[
                            {id: 1001, Food: 'Apple', Quantity: 1 + "cup", Calories: 57},
                            {id: 1002, Food: 'Chicken', Quantity: 1 + "cup", Calories: 335},
                            {id: 1003, Food: 'Egg', Quantity: 1 + "cup", Calories: 211}
                            ]}
                                >
                            <TableHeader name="Food" tooltip="Milk">Food</TableHeader>
                            <TableHeader numeric name="Calories" tooltip="Number of Calories">Calories</TableHeader>
                            <TableHeader numeric name="Quantity" tooltip="In Cups">Quantity</TableHeader>
                            <FABButton className='btn' colored ripple>
                                <Icon name="add" />
                            </FABButton>
                        </DataTable>
                    </section>
                </Cell>
            </Grid>
        </div>
    );
};

export default Profile;